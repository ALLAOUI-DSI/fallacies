#!/usr/bin/env python3
"""
Break down monolithic JS data files into smaller JSON chunks for easier LLM translation.

Usage:
    python scripts/chunk_data.py

This script reads the JS data files (data.js, data-fr.js, data-ar.js) using Node.js,
then splits them into smaller JSON files organized by data type and level:

    data/
      en/
        meta.json                    # LEVEL_INFO + CATEGORIES
        fallacies-level-1.json       # Fallacies for level 1
        fallacies-level-2.json       # Fallacies for level 2
        fallacies-level-3.json       # Fallacies for level 3
        fallacies-level-4.json       # Fallacies for level 4
        extractor-passages.json      # All extractor passages
        versus-scenarios.json        # All versus scenarios
        ace-breaker-scenarios.json   # All ace breaker scenarios
      fr/
        fallacies-level-1.json       # French translations for level 1 fallacies
        fallacies-level-2.json       # French translations for level 2 fallacies
        fallacies-level-3.json       # French translations for level 3 fallacies
        fallacies-level-4.json       # French translations for level 4 fallacies
        extractor-passages.json      # French extractor passage translations
        versus-scenarios.json        # French versus scenario translations
      ar/
        (same structure as fr/)

Each chunk is small enough for an LLM to process in a single prompt for translation.
"""

import json
import os
import subprocess
import sys
import tempfile


def get_project_root():
    """Get the project root directory (parent of scripts/)."""
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def parse_js_data(project_root):
    """Use Node.js to parse the JS data files and return the data as Python dicts."""
    node_script = """
    const fs = require('fs');
    const path = require('path');

    // Mock browser globals
    global.window = {};

    const root = process.argv[2];

    // Load the main data file
    const dataJs = fs.readFileSync(path.join(root, 'js/data.js'), 'utf8');
    eval(dataJs);

    // Load French translation
    const frJs = fs.readFileSync(path.join(root, 'js/data-fr.js'), 'utf8');
    eval(frJs);

    // Load Arabic translation
    const arJs = fs.readFileSync(path.join(root, 'js/data-ar.js'), 'utf8');
    eval(arJs);

    // Output everything as JSON
    const output = {
        levelInfo: window.LEVEL_INFO,
        categories: window.CATEGORIES,
        fallacies: window.FALLACIES_DATA,
        extractorPassages: window.EXTRACTOR_PASSAGES,
        versusScenarios: window.VERSUS_SCENARIOS,
        aceBreakerScenarios: window.ACE_BREAKER_SCENARIOS,
        dataFr: window.DATA_FR,
        dataAr: window.DATA_AR
    };

    console.log(JSON.stringify(output));
    """

    with tempfile.NamedTemporaryFile(mode='w', suffix='.js', delete=False) as f:
        f.write(node_script)
        temp_path = f.name

    try:
        result = subprocess.run(
            ['node', temp_path, project_root],
            capture_output=True, text=True, check=True
        )
        return json.loads(result.stdout)
    finally:
        os.unlink(temp_path)


def write_json(filepath, data):
    """Write data as formatted JSON to a file."""
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    size_kb = os.path.getsize(filepath) / 1024
    print(f"  {os.path.relpath(filepath)}: {size_kb:.1f} KB")


def chunk_english_data(data, data_dir):
    """Break English data into chunks by type and level."""
    print("\nChunking English data:")

    # Meta: LEVEL_INFO + CATEGORIES
    write_json(os.path.join(data_dir, 'en', 'meta.json'), {
        'levelInfo': data['levelInfo'],
        'categories': data['categories']
    })

    # Fallacies by level
    fallacies_by_level = {}
    for fallacy in data['fallacies']:
        level = fallacy['level']
        if level not in fallacies_by_level:
            fallacies_by_level[level] = []
        fallacies_by_level[level].append(fallacy)

    for level, fallacies in sorted(fallacies_by_level.items()):
        write_json(
            os.path.join(data_dir, 'en', f'fallacies-level-{level}.json'),
            fallacies
        )

    # Extractor passages
    write_json(
        os.path.join(data_dir, 'en', 'extractor-passages.json'),
        data['extractorPassages']
    )

    # Versus scenarios
    write_json(
        os.path.join(data_dir, 'en', 'versus-scenarios.json'),
        data['versusScenarios']
    )

    # Ace breaker scenarios
    write_json(
        os.path.join(data_dir, 'en', 'ace-breaker-scenarios.json'),
        data['aceBreakerScenarios']
    )


def get_fallacy_level_map(fallacies):
    """Create a mapping of fallacy ID to level from the English data."""
    return {f['id']: f['level'] for f in fallacies}


def chunk_translation_data(lang_data, lang_code, fallacy_level_map, data_dir):
    """Break translation data into chunks matching the English structure."""
    if not lang_data:
        print(f"\nNo {lang_code} data found, skipping.")
        return

    print(f"\nChunking {lang_code} data:")

    # Fallacy translations by level
    if 'fallacies' in lang_data:
        fallacies_by_level = {}
        for fallacy_id, translation in lang_data['fallacies'].items():
            level = fallacy_level_map.get(fallacy_id, 1)
            if level not in fallacies_by_level:
                fallacies_by_level[level] = {}
            fallacies_by_level[level][fallacy_id] = translation

        for level, translations in sorted(fallacies_by_level.items()):
            write_json(
                os.path.join(data_dir, lang_code, f'fallacies-level-{level}.json'),
                translations
            )

    # Extractor passage translations
    if 'extractorPassages' in lang_data:
        write_json(
            os.path.join(data_dir, lang_code, 'extractor-passages.json'),
            lang_data['extractorPassages']
        )

    # Versus scenario translations
    if 'versusScenarios' in lang_data:
        write_json(
            os.path.join(data_dir, lang_code, 'versus-scenarios.json'),
            lang_data['versusScenarios']
        )


def main():
    project_root = get_project_root()
    data_dir = os.path.join(project_root, 'data')

    print("Parsing JS data files with Node.js...")
    data = parse_js_data(project_root)

    print(f"Found {len(data['fallacies'])} fallacies, "
          f"{len(data['extractorPassages'])} extractor passages, "
          f"{len(data['versusScenarios'])} versus scenarios, "
          f"{len(data['aceBreakerScenarios'])} ace breaker scenarios")

    # Build fallacy level map for splitting translations
    fallacy_level_map = get_fallacy_level_map(data['fallacies'])

    # Chunk English data
    chunk_english_data(data, data_dir)

    # Chunk translation data
    chunk_translation_data(data['dataFr'], 'fr', fallacy_level_map, data_dir)
    chunk_translation_data(data['dataAr'], 'ar', fallacy_level_map, data_dir)

    print("\nDone! JSON chunks written to data/ directory.")
    print("\nChunk summary:")
    for root, dirs, files in sorted(os.walk(data_dir)):
        for f in sorted(files):
            filepath = os.path.join(root, f)
            size_kb = os.path.getsize(filepath) / 1024
            relpath = os.path.relpath(filepath, project_root)
            print(f"  {relpath}: {size_kb:.1f} KB")


if __name__ == '__main__':
    main()
