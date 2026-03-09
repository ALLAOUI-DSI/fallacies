// Data Loader — Fetches JSON chunks and assembles window globals
// Replaces the monolithic data.js, data-fr.js, data-ar.js script files

(function () {
  "use strict";

  var LANG_KEY = "fallacy-fighter-lang";
  var LEVELS = [1, 2, 3, 4];
  var SUPPORTED_LANGS = ["fr", "ar"];

  function fetchJSON(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error("Failed to load " + url + ": " + res.status);
      return res.json();
    });
  }

  function loadEnglishData() {
    var basePath = "data/en/";
    var promises = [];

    // Meta (LEVEL_INFO + CATEGORIES)
    promises.push(fetchJSON(basePath + "meta.json"));

    // Fallacies by level
    LEVELS.forEach(function (level) {
      promises.push(fetchJSON(basePath + "fallacies-level-" + level + ".json"));
    });

    // Extractor passages
    promises.push(fetchJSON(basePath + "extractor-passages.json"));

    // Versus scenarios
    promises.push(fetchJSON(basePath + "versus-scenarios.json"));

    // Ace breaker scenarios
    promises.push(fetchJSON(basePath + "ace-breaker-scenarios.json"));

    return Promise.all(promises).then(function (results) {
      var idx = 0;

      // Meta
      var meta = results[idx++];
      window.LEVEL_INFO = meta.levelInfo;
      window.CATEGORIES = meta.categories;

      // Fallacies — concatenate all levels into a single array
      window.FALLACIES_DATA = [];
      LEVELS.forEach(function () {
        window.FALLACIES_DATA = window.FALLACIES_DATA.concat(results[idx++]);
      });

      // Other datasets
      window.EXTRACTOR_PASSAGES = results[idx++];
      window.VERSUS_SCENARIOS = results[idx++];
      window.ACE_BREAKER_SCENARIOS = results[idx++];
    });
  }

  function loadTranslationData(lang) {
    var basePath = "data/" + lang + "/";
    var promises = [];

    // Fallacy translations by level
    LEVELS.forEach(function (level) {
      promises.push(
        fetchJSON(basePath + "fallacies-level-" + level + ".json").catch(function () { return {}; })
      );
    });

    // Extractor passages
    promises.push(
      fetchJSON(basePath + "extractor-passages.json").catch(function () { return {}; })
    );

    // Versus scenarios
    promises.push(
      fetchJSON(basePath + "versus-scenarios.json").catch(function () { return {}; })
    );

    return Promise.all(promises).then(function (results) {
      var idx = 0;

      // Merge fallacy translations from all levels
      var fallacies = {};
      LEVELS.forEach(function () {
        var chunk = results[idx++];
        Object.keys(chunk).forEach(function (key) {
          fallacies[key] = chunk[key];
        });
      });

      var langData = {
        fallacies: fallacies,
        extractorPassages: results[idx++],
        versusScenarios: results[idx++]
      };

      // Set the global for this language
      if (lang === "fr") window.DATA_FR = langData;
      if (lang === "ar") window.DATA_AR = langData;
    });
  }

  function loadAll() {
    // Determine current language
    var lang = "en";
    try {
      lang = localStorage.getItem(LANG_KEY) || "en";
    } catch (e) {
      // localStorage may not be available
    }

    // Always load English data
    var loadPromise = loadEnglishData();

    // Load all translation data (they're small and may be needed on lang switch)
    SUPPORTED_LANGS.forEach(function (supportedLang) {
      loadPromise = loadPromise.then(function () {
        return loadTranslationData(supportedLang);
      });
    });

    return loadPromise;
  }

  window.DataLoader = {
    loadAll: loadAll
  };
})();
