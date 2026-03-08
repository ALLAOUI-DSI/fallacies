# 🧠 Fallacy Fighter — Master Logical Fallacies

An interactive, mobile-first web app to learn and master logical fallacies. Progress from beginner to expert with a comprehensive wiki and challenging quizzes.

## Features

- **📖 Wiki** — Browse 36 logical fallacies with definitions, detailed explanations, and real-world examples
- **🎯 Quiz** — Test your skills by identifying fallacies in realistic scenarios
- **📊 Dashboard** — Track your learning progress across all levels
- **Progressive Learning** — Four difficulty levels: 🌱 Beginner → 🌿 Intermediate → 🌳 Advanced → 🏆 Expert
- **Mobile-First Design** — Clean, modern UI that works great on phones, tablets, and desktops
- **No Backend** — 100% static, runs entirely in the browser with localStorage for progress

## Getting Started

Simply open `index.html` in a browser — no build step, no server required.

To serve locally:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000).

## Deploying

This is a static web app ready to deploy on any static hosting:

- **GitHub Pages** — Push to a `gh-pages` branch or enable Pages from the `main` branch
- **Netlify / Vercel** — Connect the repo and deploy (no build command needed)
- **Any web server** — Just serve the files as-is

## Project Structure

```
├── index.html          # Single-page app entry point
├── css/
│   └── style.css       # Mobile-first responsive styles
├── js/
│   ├── data.js         # Comprehensive fallacy dataset (36 fallacies)
│   └── app.js          # Application logic (navigation, wiki, quiz, progress)
└── README.md
```

## Fallacy Coverage

| Level | Count | Examples |
|-------|-------|---------|
| 🌱 Beginner | 9 | Ad Hominem, Straw Man, False Dilemma, Slippery Slope... |
| 🌿 Intermediate | 9 | Circular Reasoning, Hasty Generalization, Tu Quoque... |
| 🌳 Advanced | 11 | Appeal to Nature, Texas Sharpshooter, Cherry Picking... |
| 🏆 Expert | 7 | Motte and Bailey, Kafkatrap, Gish Gallop, Sealioning... |

Each fallacy includes a definition, description, 3+ examples, and 2+ quiz scenarios.