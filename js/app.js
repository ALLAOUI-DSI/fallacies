// Fallacy Fighter — Main Application Logic
// Vanilla JS, no dependencies, no backend

(function () {
  "use strict";

  // ---- i18n helpers ----
  var t = window.I18N.t;
  var getLevelInfo = window.I18N.getLevelInfo;
  var getCategories = window.I18N.getCategories;
  var translateCategory = window.I18N.translateCategory;
  var getFallacyName = window.I18N.getFallacyName;
  var getFallacyDefinition = window.I18N.getFallacyDefinition;
  var getFallacyDescription = window.I18N.getFallacyDescription;
  var getFallacyExamples = window.I18N.getFallacyExamples;
  var getFallacyQuizScenarios = window.I18N.getFallacyQuizScenarios;
  var getExtractorPassageTranslation = window.I18N.getExtractorPassageTranslation;
  var getVersusScenarioTranslation = window.I18N.getVersusScenarioTranslation;

  // ---- State ----
  const STORAGE_KEY = "fallacy-fighter-progress";
  let state = loadState();

  function defaultState() {
    return {
      readFallacies: [],       // array of fallacy ids that have been read
      quizScores: {},          // { level: { best, attempts } }
      totalQuizCorrect: 0,
      totalQuizAnswered: 0,
      theme: "dark"
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return Object.assign(defaultState(), parsed);
      }
    } catch (e) {
      // ignore
    }
    return defaultState();
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }

  function applyTheme(theme) {
    var nextTheme = theme === "light" ? "light" : "dark";
    state.theme = nextTheme;
    document.body.classList.toggle("theme-light", nextTheme === "light");
    updateThemeToggleLabel();
  }

  function updateThemeToggleLabel() {
    var toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;
    toggleBtn.textContent = state.theme === "light" ? t("dashboard.theme.dark.off") : t("dashboard.theme.dark.on");
  }

  applyTheme(state.theme);

  // ---- Navigation ----
  const views = {
    dashboard: document.getElementById("view-dashboard"),
    wiki: document.getElementById("view-wiki"),
    quiz: document.getElementById("view-quiz")
  };
  const navLinks = document.querySelectorAll(".nav-link");
  const sharedFallacyModal = document.getElementById("fallacy-modal");
  if (sharedFallacyModal && sharedFallacyModal.parentElement !== document.body) {
    document.body.appendChild(sharedFallacyModal);
  }

  function switchView(name) {
    Object.values(views).forEach(function (v) { v.classList.remove("active"); });
    navLinks.forEach(function (l) { l.classList.remove("active"); });

    if (views[name]) views[name].classList.add("active");
    var activeLink = document.querySelector('[data-view="' + name + '"]');
    if (activeLink) activeLink.classList.add("active");

    window.scrollTo(0, 0);

    if (name === "dashboard") renderDashboard();
    if (name === "wiki") renderWiki();
    if (name === "quiz") renderQuizSetup();
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      switchView(link.dataset.view);
    });
  });

  document.getElementById("nav-home").addEventListener("click", function () {
    switchView("dashboard");
  });
  document.getElementById("action-wiki").addEventListener("click", function () {
    switchView("wiki");
  });
  document.getElementById("action-quiz").addEventListener("click", function () {
    switchView("quiz");
  });

  document.getElementById("theme-toggle").addEventListener("click", function () {
    applyTheme(state.theme === "light" ? "dark" : "light");
    saveState();
  });

  document.getElementById("reset-score").addEventListener("click", function () {
    state.quizScores = {};
    state.totalQuizCorrect = 0;
    state.totalQuizAnswered = 0;
    saveState();
    renderDashboard();
    if (views.quiz.classList.contains("active")) renderQuizSetup();
  });

  // ---- Dashboard ----
  function renderDashboard() {
    updateThemeToggleLabel();
    var data = window.FALLACIES_DATA;
    var totalFallacies = data.length;
    var readCount = state.readFallacies.length;
    var percent = totalFallacies > 0 ? Math.round((readCount / totalFallacies) * 100) : 0;

    document.getElementById("overall-progress-fill").style.width = percent + "%";
    document.getElementById("overall-progress-text").textContent = percent + t("dashboard.complete");

    // Stats
    var statsGrid = document.getElementById("stats-grid");
    statsGrid.innerHTML = [
      statCardHTML(totalFallacies, t("dashboard.stat.total")),
      statCardHTML(readCount, t("dashboard.stat.studied")),
      statCardHTML(state.totalQuizCorrect, t("dashboard.stat.quizCorrect")),
      statCardHTML(state.totalQuizAnswered, t("dashboard.stat.quizAnswered"))
    ].join("");

    // Levels
    var levelsGrid = document.getElementById("levels-grid");
    var levelHTML = "";
    for (var lvl = 1; lvl <= 4; lvl++) {
      var info = getLevelInfo(lvl);
      var fallaciesAtLevel = data.filter(function (f) { return f.level === lvl; });
      var readAtLevel = fallaciesAtLevel.filter(function (f) {
        return state.readFallacies.indexOf(f.id) !== -1;
      });
      var lvlPercent = fallaciesAtLevel.length > 0
        ? Math.round((readAtLevel.length / fallaciesAtLevel.length) * 100)
        : 0;

      levelHTML += '<div class="level-card" data-level="' + lvl + '">'
        + '<div class="level-icon">' + info.icon + '</div>'
        + '<div class="level-info">'
        + '<div class="level-name" style="color:' + info.color + '">' + info.name + '</div>'
        + '<div class="level-desc">' + info.description + '</div>'
        + '<div class="level-progress">'
        + '<div class="level-progress-bar"><div class="level-progress-fill" style="width:' + lvlPercent + '%;background:' + info.color + '"></div></div>'
        + '<span class="level-progress-text">' + lvlPercent + '%</span>'
        + '</div>'
        + '</div>'
        + '<span class="level-count">' + fallaciesAtLevel.length + ' ' + t("dashboard.levels.fallacies") + '</span>'
        + '</div>';
    }
    levelsGrid.innerHTML = levelHTML;

    // Level card clicks → go to wiki filtered
    levelsGrid.querySelectorAll(".level-card").forEach(function (card) {
      card.addEventListener("click", function () {
        switchView("wiki");
        setTimeout(function () {
          setLevelFilter(parseInt(card.dataset.level, 10));
        }, 50);
      });
    });
  }

  function statCardHTML(number, label) {
    return '<div class="stat-card"><div class="stat-number">' + number + '</div><div class="stat-label">' + label + '</div></div>';
  }

  // ---- Wiki ----
  var currentLevelFilter = "all";
  var currentCategoryFilter = "all";
  var currentSearch = "";

  function renderWiki() {
    renderWikiFilters();
    renderFallacyList();
  }

  function renderWikiFilters() {
    // Level chips
    var levelContainer = document.getElementById("level-filter");
    var levelHTML = '<button class="chip ' + (currentLevelFilter === "all" ? "active" : "") + '" data-level="all">' + t("wiki.filter.all") + '</button>';
    for (var lvl = 1; lvl <= 4; lvl++) {
      var info = getLevelInfo(lvl);
      levelHTML += '<button class="chip ' + (currentLevelFilter === lvl ? "active" : "") + '" data-level="' + lvl + '">'
        + info.icon + ' ' + info.name + '</button>';
    }
    levelContainer.innerHTML = levelHTML;

    levelContainer.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var val = chip.dataset.level;
        currentLevelFilter = val === "all" ? "all" : parseInt(val, 10);
        renderWiki();
      });
    });

    // Category chips
    var catContainer = document.getElementById("category-filter");
    var catHTML = '<button class="chip ' + (currentCategoryFilter === "all" ? "active" : "") + '" data-category="all">' + t("wiki.filter.all") + '</button>';
    window.CATEGORIES.forEach(function (cat) {
      catHTML += '<button class="chip ' + (currentCategoryFilter === cat ? "active" : "") + '" data-category="' + cat + '">' + translateCategory(cat) + '</button>';
    });
    catContainer.innerHTML = catHTML;

    catContainer.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        currentCategoryFilter = chip.dataset.category === "all" ? "all" : chip.dataset.category;
        renderWiki();
      });
    });

    // Search
    var searchInput = document.getElementById("wiki-search");
    searchInput.value = currentSearch;
    searchInput.placeholder = t("wiki.search.placeholder");
    searchInput.oninput = function () {
      currentSearch = searchInput.value;
      renderFallacyList();
    };
  }

  function setLevelFilter(lvl) {
    currentLevelFilter = lvl;
    currentCategoryFilter = "all";
    currentSearch = "";
    renderWiki();
  }

  function renderFallacyList() {
    var data = window.FALLACIES_DATA;
    var query = currentSearch.toLowerCase().trim();

    var filtered = data.filter(function (f) {
      if (currentLevelFilter !== "all" && f.level !== currentLevelFilter) return false;
      if (currentCategoryFilter !== "all" && f.category !== currentCategoryFilter) return false;
      if (query) {
        var searchable = (getFallacyName(f) + " " + f.name + " " + getFallacyDefinition(f) + " " + f.definition + " " + translateCategory(f.category) + " " + f.category).toLowerCase();
        if (searchable.indexOf(query) === -1) return false;
      }
      return true;
    });

    var listEl = document.getElementById("fallacy-list");

    if (filtered.length === 0) {
      listEl.innerHTML = '<div class="no-results"><div class="no-results-icon">🔍</div><p>' + t("wiki.noResults") + '</p></div>';
      return;
    }

    listEl.innerHTML = filtered.map(function (f) {
      var info = getLevelInfo(f.level);
      var isRead = state.readFallacies.indexOf(f.id) !== -1;
      return '<div class="fallacy-card" data-id="' + f.id + '">'
        + '<div class="fallacy-level-badge">' + info.icon + '</div>'
        + '<div class="fallacy-card-body">'
        + '<div class="fallacy-card-header">'
        + '<span class="fallacy-card-name">' + escapeHTML(getFallacyName(f)) + '</span>'
        + '<span class="fallacy-card-category">' + escapeHTML(translateCategory(f.category)) + '</span>'
        + '</div>'
        + '<div class="fallacy-card-def">' + escapeHTML(getFallacyDefinition(f)) + '</div>'
        + '</div>'
        + '<div class="fallacy-read-marker ' + (isRead ? "read" : "") + '" title="' + (isRead ? t("wiki.modal.studied.title") : t("wiki.modal.notStudied.title")) + '"></div>'
        + '</div>';
    }).join("");

    listEl.querySelectorAll(".fallacy-card").forEach(function (card) {
      card.addEventListener("click", function () {
        openFallacyModal(card.dataset.id);
      });
    });
  }

  function openFallacyModal(id) {
    var f = window.FALLACIES_DATA.find(function (x) { return x.id === id; });
    if (!f) return;

    var info = getLevelInfo(f.level);
    var isRead = state.readFallacies.indexOf(f.id) !== -1;

    var html = '<div class="modal-level-badge" style="background:' + info.color + '22;color:' + info.color + '">'
      + info.icon + ' ' + info.name
      + '</div>'
      + '<h2 class="modal-title">' + escapeHTML(getFallacyName(f)) + '</h2>'
      + '<p class="modal-category">' + t("wiki.modal.category") + ' ' + escapeHTML(translateCategory(f.category)) + '</p>'
      + '<p class="modal-definition">' + escapeHTML(getFallacyDefinition(f)) + '</p>'
      + '<div class="modal-description">' + renderParagraphsHTML(getFallacyDescription(f), "modal-description-paragraph") + '</div>';

    if (f.responseStrategy) {
      html += '<div class="modal-response-strategy">'
        + '<h3 class="modal-section-title">🛡️ Response Strategy</h3>'
        + '<div class="response-strategy-card">'
        + '<p>' + escapeHTML(f.responseStrategy) + '</p>'
        + '</div>'
        + '</div>';
    }

    html += '<h3 class="modal-section-title">' + t("wiki.modal.examples") + '</h3>';

    getFallacyExamples(f).forEach(function (ex) {
      html += '<div class="example-card">'
        + '<div class="example-text">"' + escapeHTML(ex.text) + '"</div>'
        + '<div class="example-explanation">→ ' + escapeHTML(ex.explanation) + '</div>'
        + '</div>';
    });

    html += '<h3 class="modal-section-title">' + t("wiki.modal.quizScenarios") + '</h3>';
    getFallacyQuizScenarios(f).forEach(function (scenario) {
      html += '<div class="example-card">'
        + '<div class="example-text">"' + escapeHTML(scenario.text) + '"</div>'
        + '<div class="example-explanation">→ ' + escapeHTML(scenario.explanation) + '</div>'
        + '</div>';
    });

    html += '<button class="btn ' + (isRead ? "btn-outline" : "btn-primary") + ' modal-mark-read" id="mark-read-btn">'
      + (isRead ? t("wiki.modal.studied") : t("wiki.modal.markStudied"))
      + '</button>';

    document.getElementById("modal-content").innerHTML = html;

    document.getElementById("mark-read-btn").addEventListener("click", function () {
      if (state.readFallacies.indexOf(id) === -1) {
        state.readFallacies.push(id);
      } else {
        state.readFallacies = state.readFallacies.filter(function (x) { return x !== id; });
      }
      saveState();
      openFallacyModal(id); // re-render modal
      renderFallacyList();  // update list markers
    });

    document.getElementById("fallacy-modal").classList.add("active");
  }

  document.getElementById("modal-close").addEventListener("click", closeFallacyModal);
  document.getElementById("fallacy-modal").addEventListener("click", function (e) {
    if (e.target === this) closeFallacyModal();
  });

  function closeFallacyModal() {
    document.getElementById("fallacy-modal").classList.remove("active");
  }

  function openFallacyPicker() {
    var listEl = document.getElementById("fallacy-picker-list");
    var sorted = window.FALLACIES_DATA.slice().sort(function (a, b) {
      if (a.level !== b.level) return a.level - b.level;
      return getFallacyName(a).localeCompare(getFallacyName(b));
    });
    listEl.innerHTML = sorted.map(function (f) {
      var info = getLevelInfo(f.level);
      return '<button class="fallacy-picker-item" data-id="' + f.id + '">'
        + info.icon + ' L' + f.level + " • " + escapeHTML(getFallacyName(f))
        + '</button>';
    }).join("");

    listEl.querySelectorAll(".fallacy-picker-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeFallacyPicker();
        openFallacyModal(btn.dataset.id);
      });
    });

    document.getElementById("fallacy-picker-modal").classList.add("active");
  }

  function closeFallacyPicker() {
    document.getElementById("fallacy-picker-modal").classList.remove("active");
  }

  document.getElementById("quiz-fallacy-picker-btn").addEventListener("click", openFallacyPicker);
  document.getElementById("fallacy-picker-close").addEventListener("click", closeFallacyPicker);
  document.getElementById("fallacy-picker-modal").addEventListener("click", function (e) {
    if (e.target === this) closeFallacyPicker();
  });

  // ---- Quiz ----
  var quiz = {
    level: null,      // null = mixed
    questions: [],
    current: 0,
    score: 0,
    answers: []       // { scenario, correctId, chosenId, correct }
  };

  var quizMode = "classic"; // "classic" or "extractor"

  // Mode tabs
  document.getElementById("tab-classic").addEventListener("click", function () {
    quizMode = "classic";
    document.getElementById("tab-classic").classList.add("active");
    document.getElementById("tab-extractor").classList.remove("active");
    document.getElementById("tab-versus").classList.remove("active");
    document.getElementById("classic-setup").classList.remove("hidden");
    document.getElementById("extractor-setup").classList.add("hidden");
    document.getElementById("versus-setup").classList.add("hidden");
  });
  document.getElementById("tab-extractor").addEventListener("click", function () {
    quizMode = "extractor";
    document.getElementById("tab-extractor").classList.add("active");
    document.getElementById("tab-classic").classList.remove("active");
    document.getElementById("tab-versus").classList.remove("active");
    document.getElementById("extractor-setup").classList.remove("hidden");
    document.getElementById("classic-setup").classList.add("hidden");
    document.getElementById("versus-setup").classList.add("hidden");
  });
  document.getElementById("tab-versus").addEventListener("click", function () {
    quizMode = "versus";
    document.getElementById("tab-versus").classList.add("active");
    document.getElementById("tab-classic").classList.remove("active");
    document.getElementById("tab-extractor").classList.remove("active");
    document.getElementById("versus-setup").classList.remove("hidden");
    document.getElementById("classic-setup").classList.add("hidden");
    document.getElementById("extractor-setup").classList.add("hidden");
  });

  function renderQuizSetup() {
    document.getElementById("quiz-setup").classList.remove("hidden");
    document.getElementById("quiz-active").classList.add("hidden");
    document.getElementById("quiz-results").classList.add("hidden");
    document.getElementById("extractor-active").classList.add("hidden");
    document.getElementById("extractor-results").classList.add("hidden");
    document.getElementById("versus-active").classList.add("hidden");
    document.getElementById("versus-results").classList.add("hidden");

    // Classic setup
    var container = document.getElementById("quiz-levels");
    var html = "";
    for (var lvl = 1; lvl <= 4; lvl++) {
      var info = getLevelInfo(lvl);
      var best = state.quizScores[lvl] ? state.quizScores[lvl].best : null;
      html += '<div class="quiz-level-card" data-level="' + lvl + '">'
        + '<div class="quiz-level-icon">' + info.icon + '</div>'
        + '<div class="quiz-level-info">'
        + '<h3 style="color:' + info.color + '">' + t("quiz.level") + ' ' + lvl + ': ' + info.name + '</h3>'
        + '<p>' + info.description + '</p>'
        + '</div>'
        + '<div class="quiz-level-best">'
        + (best !== null ? '<strong>' + best + '%</strong>' + t("quiz.best") : '<span style="color:var(--text-dim)">' + t("quiz.notTried") + '</span>')
        + '</div>'
        + '</div>';
    }
    container.innerHTML = html;

    container.querySelectorAll(".quiz-level-card").forEach(function (card) {
      card.addEventListener("click", function () {
        startQuiz(parseInt(card.dataset.level, 10));
      });
    });

    // Extractor setup
    renderExtractorSetup();

    // Versus setup
    renderVersusSetup();
  }

  document.getElementById("quiz-mixed").addEventListener("click", function () {
    startQuiz(null);
  });

  function startQuiz(level) {
    quiz.level = level;
    quiz.current = 0;
    quiz.score = 0;
    quiz.answers = [];
    quiz.questions = generateQuestions(level, 10);

    if (quiz.questions.length === 0) {
      return;
    }

    document.getElementById("quiz-setup").classList.add("hidden");
    document.getElementById("quiz-results").classList.add("hidden");
    document.getElementById("quiz-active").classList.remove("hidden");

    document.getElementById("quiz-total").textContent = quiz.questions.length;
    renderQuizQuestion();
  }

  function generateQuestions(level, count) {
    var pool = window.FALLACIES_DATA;
    if (level !== null) {
      pool = pool.filter(function (f) { return f.level === level; });
    }

    // Gather all quiz scenarios with their fallacy info
    var scenarios = [];
    pool.forEach(function (f) {
      f.quizScenarios.forEach(function (s) {
        scenarios.push({
          text: s.text,
          explanation: s.explanation,
          fallacyId: f.id,
          fallacyName: getFallacyName(f),
          level: f.level,
          levelName: getLevelInfo(f.level).name,
          levelIcon: getLevelInfo(f.level).icon
        });
      });
    });

    // Shuffle
    shuffleArray(scenarios);

    // Pick unique fallacies as much as possible
    var selected = [];
    var usedFallacies = {};
    // First pass: pick one per fallacy
    scenarios.forEach(function (s) {
      if (selected.length >= count) return;
      if (!usedFallacies[s.fallacyId]) {
        selected.push(s);
        usedFallacies[s.fallacyId] = true;
      }
    });
    // Second pass: fill remaining
    scenarios.forEach(function (s) {
      if (selected.length >= count) return;
      if (selected.indexOf(s) === -1) {
        selected.push(s);
      }
    });

    shuffleArray(selected);

    // Generate options for each question
    return selected.map(function (q) {
      // Get 3 wrong answers from pool
      var wrongs = pool.filter(function (f) { return f.id !== q.fallacyId; });
      shuffleArray(wrongs);
      var options = wrongs.slice(0, 3).map(function (f) {
        return { id: f.id, name: getFallacyName(f) };
      });
      // Add correct answer
      options.push({ id: q.fallacyId, name: q.fallacyName });
      shuffleArray(options);

      return {
        text: q.text,
        explanation: q.explanation,
        correctId: q.fallacyId,
        correctName: q.fallacyName,
        level: q.level,
        levelName: q.levelName,
        levelIcon: q.levelIcon,
        options: options
      };
    });
  }

  function renderQuizQuestion() {
    var q = quiz.questions[quiz.current];
    document.getElementById("quiz-question-num").textContent = quiz.current + 1;
    document.getElementById("quiz-score").textContent = quiz.score;
    document.getElementById("quiz-progress-fill").style.width =
      ((quiz.current / quiz.questions.length) * 100) + "%";

    document.getElementById("quiz-scenario").innerHTML = renderParagraphsHTML(q.text, "scenario-paragraph");

    var optionsEl = document.getElementById("quiz-options");
    optionsEl.innerHTML = q.options.map(function (opt) {
      return '<button class="quiz-option" data-id="' + opt.id + '">' + escapeHTML(opt.name) + '</button>';
    }).join("");

    optionsEl.querySelectorAll(".quiz-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        handleQuizAnswer(btn.dataset.id);
      });
    });

    document.getElementById("quiz-feedback").classList.add("hidden");
    document.getElementById("quiz-feedback").classList.remove("correct", "wrong");
    document.getElementById("quiz-next").classList.add("hidden");
  }

  function handleQuizAnswer(chosenId) {
    var q = quiz.questions[quiz.current];
    var isCorrect = chosenId === q.correctId;
    var chosenOption = q.options.find(function (o) { return o.id === chosenId; });
    if (!chosenOption) {
      console.warn("Unexpected quiz answer option id:", chosenId);
    }

    if (isCorrect) quiz.score++;

    quiz.answers.push({
      text: q.text,
      correctId: q.correctId,
      correctName: q.correctName,
      chosenId: chosenId,
      chosenName: chosenOption ? chosenOption.name : "Unknown",
      explanation: q.explanation,
      level: q.level,
      levelName: q.levelName,
      levelIcon: q.levelIcon,
      correct: isCorrect
    });

    // Highlight options
    var optionsEl = document.getElementById("quiz-options");
    optionsEl.querySelectorAll(".quiz-option").forEach(function (btn) {
      btn.classList.add("disabled");
      if (btn.dataset.id === q.correctId) btn.classList.add("correct");
      if (btn.dataset.id === chosenId && !isCorrect) btn.classList.add("wrong");
    });

    // Show feedback
    var feedbackEl = document.getElementById("quiz-feedback");
    feedbackEl.classList.remove("hidden", "correct", "wrong");
    feedbackEl.classList.add(isCorrect ? "correct" : "wrong");
    feedbackEl.innerHTML = '<div class="quiz-feedback-title">'
      + (isCorrect ? t("quiz.results.correct") : t("quiz.results.incorrect") + " " + escapeHTML(q.correctName))
      + '</div>'
      + '<div>' + escapeHTML(q.explanation) + '</div>'
      + '<div class="quiz-feedback-meta"><strong>' + t("feedback.level") + '</strong> '
      + escapeHTML(q.levelIcon) + ' '
      + escapeHTML(q.levelName) + " (L" + q.level + ")"
      + "</div>";

    document.getElementById("quiz-next").classList.remove("hidden");
  }

  document.getElementById("quiz-next").addEventListener("click", function () {
    quiz.current++;
    if (quiz.current >= quiz.questions.length) {
      showQuizResults();
    } else {
      renderQuizQuestion();
    }
  });

  document.getElementById("quiz-quit").addEventListener("click", function () {
    renderQuizSetup();
  });

  function showQuizResults() {
    document.getElementById("quiz-active").classList.add("hidden");
    document.getElementById("quiz-results").classList.remove("hidden");

    var total = quiz.questions.length;
    var score = quiz.score;
    var pct = Math.round((score / total) * 100);

    // Update global stats
    state.totalQuizCorrect += score;
    state.totalQuizAnswered += total;

    // Update level best
    var lvlKey = quiz.level || "mixed";
    if (!state.quizScores[lvlKey] || pct > state.quizScores[lvlKey].best) {
      state.quizScores[lvlKey] = { best: pct, attempts: (state.quizScores[lvlKey] ? state.quizScores[lvlKey].attempts : 0) + 1 };
    } else {
      state.quizScores[lvlKey].attempts++;
    }
    saveState();

    document.getElementById("results-score-num").textContent = score;
    document.getElementById("results-total-num").textContent = total;

    var fill = document.getElementById("results-bar-fill");
    fill.style.width = "0%";
    setTimeout(function () {
      fill.style.width = pct + "%";
      fill.style.background = pct >= 80 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--danger)";
    }, 100);

    var emoji, title, msg;
    if (pct === 100) {
      emoji = "🏆"; title = t("results.perfect.title"); msg = t("results.perfect.msg");
    } else if (pct >= 80) {
      emoji = "🎉"; title = t("results.excellent.title"); msg = t("results.excellent.msg");
    } else if (pct >= 60) {
      emoji = "👍"; title = t("results.good.title"); msg = t("results.good.msg");
    } else if (pct >= 40) {
      emoji = "📚"; title = t("results.keep.title"); msg = t("results.keep.msg");
    } else {
      emoji = "💪"; title = t("results.dontGiveUp.title"); msg = t("results.dontGiveUp.msg");
    }

    document.getElementById("results-emoji").textContent = emoji;
    document.getElementById("results-title").textContent = title;
    document.getElementById("results-message").textContent = msg;

    // Review
    var reviewEl = document.getElementById("results-review");
    if (quiz.answers.length > 0) {
      var reviewHTML = "<h3>" + t("quiz.results.review") + "</h3>";
      quiz.answers.forEach(function (a, i) {
        reviewHTML += '<div class="review-item">'
          + '<div class="review-item-header">'
          + '<span class="review-icon">' + (a.correct ? "✅" : "❌") + '</span>'
          + '<span class="review-answer">Q' + (i + 1) + ': ' + t("quiz.results.youAnswered") + ' ' + escapeHTML(a.chosenName) + '</span>'
          + '</div>';
        if (!a.correct) {
          reviewHTML += '<div class="review-correct-answer">' + t("quiz.results.correctAnswer") + ' ' + escapeHTML(a.correctName) + '</div>';
        }
        reviewHTML += '<div class="review-correct-answer">' + t("feedback.level") + ' '
          + escapeHTML(a.levelIcon) + " "
          + escapeHTML(a.levelName) + " (L" + a.level + ")</div>";
        reviewHTML += '<div class="review-explanation">' + escapeHTML(a.explanation) + '</div>'
          + '</div>';
      });
      reviewEl.innerHTML = reviewHTML;
    }
  }

  document.getElementById("results-retry").addEventListener("click", function () {
    startQuiz(quiz.level);
  });
  document.getElementById("results-home").addEventListener("click", function () {
    renderQuizSetup();
  });

  // ---- Extractor Quiz ----
  var EXTRACTOR_QUIZ_LENGTH = 5;

  var extractor = {
    level: null,
    passages: [],
    current: 0,
    score: 0,
    answers: []
  };

  function getExtractorScoreKey(level) {
    return level ? "ext-" + level : "ext-mixed";
  }

  function renderExtractorSetup() {
    var container = document.getElementById("extractor-levels");
    var html = "";
    for (var lvl = 1; lvl <= 4; lvl++) {
      var info = getLevelInfo(lvl);
      var scoreKey = getExtractorScoreKey(lvl);
      var best = state.quizScores[scoreKey] ? state.quizScores[scoreKey].best : null;
      var passageCount = window.EXTRACTOR_PASSAGES.filter(function (p) { return p.level === lvl; }).length;
      html += '<div class="quiz-level-card" data-level="' + lvl + '">'
        + '<div class="quiz-level-icon">' + info.icon + '</div>'
        + '<div class="quiz-level-info">'
        + '<h3 style="color:' + info.color + '">' + t("quiz.level") + ' ' + lvl + ': ' + info.name + '</h3>'
        + '<p>' + passageCount + ' ' + t("quiz.passages") + '</p>'
        + '</div>'
        + '<div class="quiz-level-best">'
        + (best !== null ? '<strong>' + best + '%</strong>' + t("quiz.best") : '<span style="color:var(--text-dim)">' + t("quiz.notTried") + '</span>')
        + '</div>'
        + '</div>';
    }
    container.innerHTML = html;

    container.querySelectorAll(".quiz-level-card").forEach(function (card) {
      card.addEventListener("click", function () {
        startExtractor(parseInt(card.dataset.level, 10));
      });
    });
  }

  document.getElementById("extractor-mixed").addEventListener("click", function () {
    startExtractor(null);
  });

  function startExtractor(level) {
    extractor.level = level;
    extractor.current = 0;
    extractor.score = 0;
    extractor.answers = [];

    var pool = window.EXTRACTOR_PASSAGES;
    if (level !== null) {
      pool = pool.filter(function (p) { return p.level === level; });
    }
    extractor.passages = shuffleArray(pool.slice()).slice(0, EXTRACTOR_QUIZ_LENGTH);

    if (extractor.passages.length === 0) {
      alert(t("extractor.noPassages"));
      return;
    }

    document.getElementById("quiz-setup").classList.add("hidden");
    document.getElementById("extractor-results").classList.add("hidden");
    document.getElementById("extractor-active").classList.remove("hidden");

    document.getElementById("extractor-total").textContent = extractor.passages.length;
    renderExtractorQuestion();
  }

  function renderExtractorQuestion() {
    var p = extractor.passages[extractor.current];
    document.getElementById("extractor-question-num").textContent = extractor.current + 1;
    document.getElementById("extractor-score").textContent = extractor.score;
    document.getElementById("extractor-progress-fill").style.width =
      ((extractor.current / extractor.passages.length) * 100) + "%";

    document.getElementById("extractor-passage").innerHTML = renderParagraphsHTML(p.text, "scenario-paragraph");

    document.getElementById("extractor-select-btn").classList.remove("hidden");
    document.getElementById("extractor-select-btn").textContent = t("extractor.selectBtn");
    document.getElementById("extractor-feedback").classList.add("hidden");
    document.getElementById("extractor-feedback").classList.remove("correct", "wrong");
    document.getElementById("extractor-next").classList.add("hidden");
  }

  document.getElementById("extractor-select-btn").addEventListener("click", function () {
    openExtractorPicker();
  });

  function openExtractorPicker() {
    var listEl = document.getElementById("extractor-picker-list");
    var sorted = window.FALLACIES_DATA.slice().sort(function (a, b) {
      if (a.level !== b.level) return a.level - b.level;
      return getFallacyName(a).localeCompare(getFallacyName(b));
    });
    listEl.innerHTML = sorted.map(function (f) {
      var info = getLevelInfo(f.level);
      return '<button class="fallacy-picker-item" data-id="' + f.id + '">'
        + info.icon + ' L' + f.level + " • " + escapeHTML(getFallacyName(f))
        + '</button>';
    }).join("");

    listEl.querySelectorAll(".fallacy-picker-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeExtractorPicker();
        handleExtractorAnswer(btn.dataset.id);
      });
    });

    document.getElementById("extractor-picker-modal").classList.add("active");
  }

  function closeExtractorPicker() {
    document.getElementById("extractor-picker-modal").classList.remove("active");
  }

  document.getElementById("extractor-picker-close").addEventListener("click", closeExtractorPicker);
  document.getElementById("extractor-picker-modal").addEventListener("click", function (e) {
    if (e.target === this) closeExtractorPicker();
  });

  function handleExtractorAnswer(chosenId) {
    var p = extractor.passages[extractor.current];
    var isCorrect = chosenId === p.fallacyId;
    var chosenFallacy = window.FALLACIES_DATA.find(function (f) { return f.id === chosenId; });
    var correctFallacy = window.FALLACIES_DATA.find(function (f) { return f.id === p.fallacyId; });

    if (isCorrect) extractor.score++;

    extractor.answers.push({
      text: p.text,
      correctId: p.fallacyId,
      correctName: correctFallacy ? getFallacyName(correctFallacy) : p.fallacyId,
      chosenId: chosenId,
      chosenName: chosenFallacy ? getFallacyName(chosenFallacy) : chosenId,
      explanation: p.explanation,
      highlight: p.highlight,
      level: p.level,
      correct: isCorrect
    });

    // Hide select button
    document.getElementById("extractor-select-btn").classList.add("hidden");

    // Show feedback
    var feedbackEl = document.getElementById("extractor-feedback");
    feedbackEl.classList.remove("hidden", "correct", "wrong");
    feedbackEl.classList.add(isCorrect ? "correct" : "wrong");

    var feedbackHTML = '<div class="extractor-feedback-title">';
    if (isCorrect) {
      feedbackHTML += t("extractor.feedback.correct") + ' ' + escapeHTML(correctFallacy ? getFallacyName(correctFallacy) : p.fallacyId);
    } else {
      feedbackHTML += t("extractor.feedback.incorrect") + ' ' + escapeHTML(chosenFallacy ? getFallacyName(chosenFallacy) : chosenId);
      feedbackHTML += '<br>' + t("extractor.feedback.correctIs") + ' <strong>' + escapeHTML(correctFallacy ? getFallacyName(correctFallacy) : p.fallacyId) + '</strong>';
    }
    feedbackHTML += '</div>';

    if (p.highlight) {
      feedbackHTML += '<div class="extractor-feedback-highlight">"' + escapeHTML(p.highlight) + '"</div>';
    }

    feedbackHTML += '<div class="extractor-feedback-explanation">' + escapeHTML(p.explanation) + '</div>';

    var levelInfo = getLevelInfo(p.level);
    feedbackHTML += '<div class="extractor-feedback-meta">' + t("feedback.level") + ' '
      + escapeHTML(levelInfo.icon) + ' ' + escapeHTML(levelInfo.name)
      + ' (L' + p.level + ')</div>';

    feedbackEl.innerHTML = feedbackHTML;

    document.getElementById("extractor-next").classList.remove("hidden");
  }

  document.getElementById("extractor-next").addEventListener("click", function () {
    extractor.current++;
    if (extractor.current >= extractor.passages.length) {
      showExtractorResults();
    } else {
      renderExtractorQuestion();
    }
  });

  document.getElementById("extractor-quit").addEventListener("click", function () {
    renderQuizSetup();
  });

  function showExtractorResults() {
    document.getElementById("extractor-active").classList.add("hidden");
    document.getElementById("extractor-results").classList.remove("hidden");

    var total = extractor.passages.length;
    var score = extractor.score;
    var pct = Math.round((score / total) * 100);

    // Update global stats
    state.totalQuizCorrect += score;
    state.totalQuizAnswered += total;

    // Update level best
    var lvlKey = getExtractorScoreKey(extractor.level);
    if (!state.quizScores[lvlKey] || pct > state.quizScores[lvlKey].best) {
      state.quizScores[lvlKey] = { best: pct, attempts: (state.quizScores[lvlKey] ? state.quizScores[lvlKey].attempts : 0) + 1 };
    } else {
      state.quizScores[lvlKey].attempts++;
    }
    saveState();

    document.getElementById("extractor-results-score-num").textContent = score;
    document.getElementById("extractor-results-total-num").textContent = total;

    var fill = document.getElementById("extractor-results-bar-fill");
    fill.style.width = "0%";
    setTimeout(function () {
      fill.style.width = pct + "%";
      fill.style.background = pct >= 80 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--danger)";
    }, 100);

    var emoji, title, msg;
    if (pct === 100) {
      emoji = "🏆"; title = t("extractor.results.perfect.title"); msg = t("extractor.results.perfect.msg");
    } else if (pct >= 80) {
      emoji = "🎉"; title = t("results.excellent.title"); msg = t("extractor.results.excellent.msg");
    } else if (pct >= 60) {
      emoji = "👍"; title = t("results.good.title"); msg = t("extractor.results.good.msg");
    } else if (pct >= 40) {
      emoji = "📚"; title = t("results.keep.title"); msg = t("extractor.results.keep.msg");
    } else {
      emoji = "💪"; title = t("results.dontGiveUp.title"); msg = t("extractor.results.dontGiveUp.msg");
    }

    document.getElementById("extractor-results-emoji").textContent = emoji;
    document.getElementById("extractor-results-title").textContent = title;
    document.getElementById("extractor-results-message").textContent = msg;

    // Review
    var reviewEl = document.getElementById("extractor-results-review");
    if (extractor.answers.length > 0) {
      var reviewHTML = "<h3>" + t("quiz.results.review") + "</h3>";
      extractor.answers.forEach(function (a, i) {
        reviewHTML += '<div class="review-item">'
          + '<div class="review-item-header">'
          + '<span class="review-icon">' + (a.correct ? "✅" : "❌") + '</span>'
          + '<span class="review-answer">Q' + (i + 1) + ': ' + t("extractor.results.youChose") + ' ' + escapeHTML(a.chosenName) + '</span>'
          + '</div>';
        if (!a.correct) {
          reviewHTML += '<div class="review-correct-answer">' + t("quiz.results.correctAnswer") + ' ' + escapeHTML(a.correctName) + '</div>';
        }
        if (a.highlight) {
          reviewHTML += '<div class="review-explanation" style="font-style:italic;margin-bottom:4px">"' + escapeHTML(a.highlight) + '"</div>';
        }
        reviewHTML += '<div class="review-explanation">' + escapeHTML(a.explanation) + '</div>'
          + '</div>';
      });
      reviewEl.innerHTML = reviewHTML;
    }
  }

  document.getElementById("extractor-results-retry").addEventListener("click", function () {
    startExtractor(extractor.level);
  });
  document.getElementById("extractor-results-home").addEventListener("click", function () {
    renderQuizSetup();
  });

  // ---- Versus Quiz ----
  var VERSUS_QUIZ_LENGTH = 10;

  var versus = {
    level: null,
    questions: [],
    current: 0,
    score: 0,
    answers: []
  };

  function getVersusScoreKey(level) {
    return level ? "vs-" + level : "vs-mixed";
  }

  function renderVersusSetup() {
    var container = document.getElementById("versus-levels");
    var html = "";
    for (var lvl = 1; lvl <= 4; lvl++) {
      var info = getLevelInfo(lvl);
      var scoreKey = getVersusScoreKey(lvl);
      var best = state.quizScores[scoreKey] ? state.quizScores[scoreKey].best : null;
      var scenarioCount = window.VERSUS_SCENARIOS.filter(function (s) { return s.level === lvl; }).length;
      html += '<div class="quiz-level-card" data-level="' + lvl + '">'
        + '<div class="quiz-level-icon">' + info.icon + '</div>'
        + '<div class="quiz-level-info">'
        + '<h3 style="color:' + info.color + '">' + t("quiz.level") + ' ' + lvl + ': ' + info.name + '</h3>'
        + '<p>' + scenarioCount + ' ' + t("quiz.versusScenarios") + '</p>'
        + '</div>'
        + '<div class="quiz-level-best">'
        + (best !== null ? '<strong>' + best + '%</strong>' + t("quiz.best") : '<span style="color:var(--text-dim)">' + t("quiz.notTried") + '</span>')
        + '</div>'
        + '</div>';
    }
    container.innerHTML = html;

    container.querySelectorAll(".quiz-level-card").forEach(function (card) {
      card.addEventListener("click", function () {
        startVersus(parseInt(card.dataset.level, 10));
      });
    });
  }

  document.getElementById("versus-mixed").addEventListener("click", function () {
    startVersus(null);
  });

  function startVersus(level) {
    versus.level = level;
    versus.current = 0;
    versus.score = 0;
    versus.answers = [];

    var pool = window.VERSUS_SCENARIOS;
    if (level !== null) {
      pool = pool.filter(function (s) { return s.level === level; });
    }
    versus.questions = shuffleArray(pool.slice()).slice(0, VERSUS_QUIZ_LENGTH);

    if (versus.questions.length === 0) {
      alert(t("versus.noScenarios"));
      return;
    }

    document.getElementById("quiz-setup").classList.add("hidden");
    document.getElementById("versus-results").classList.add("hidden");
    document.getElementById("versus-active").classList.remove("hidden");

    document.getElementById("versus-total").textContent = versus.questions.length;
    renderVersusQuestion();
  }

  function renderVersusQuestion() {
    var q = versus.questions[versus.current];
    document.getElementById("versus-question-num").textContent = versus.current + 1;
    document.getElementById("versus-score").textContent = versus.score;
    document.getElementById("versus-progress-fill").style.width =
      ((versus.current / versus.questions.length) * 100) + "%";

    document.getElementById("versus-scenario").innerHTML = renderParagraphsHTML(q.text, "scenario-paragraph");

    // Show the distinction hint
    document.getElementById("versus-distinction").innerHTML =
      '<div class="versus-distinction-text">💡 <strong>' + t("versus.keyDifference") + '</strong> ' + escapeHTML(q.distinction) + '</div>';

    // Show two options (correct and wrong, shuffled)
    var correctFallacy = window.FALLACIES_DATA.find(function (f) { return f.id === q.correctId; });
    var wrongFallacy = window.FALLACIES_DATA.find(function (f) { return f.id === q.wrongId; });

    var options = [
      { id: q.correctId, name: correctFallacy ? getFallacyName(correctFallacy) : q.correctId, definition: correctFallacy ? getFallacyDefinition(correctFallacy) : "" },
      { id: q.wrongId, name: wrongFallacy ? getFallacyName(wrongFallacy) : q.wrongId, definition: wrongFallacy ? getFallacyDefinition(wrongFallacy) : "" }
    ];
    shuffleArray(options);

    var optionsEl = document.getElementById("versus-options");
    optionsEl.innerHTML = options.map(function (opt) {
      return '<button class="versus-option-btn" data-id="' + opt.id + '">'
        + '<span class="versus-option-name">' + escapeHTML(opt.name) + '</span>'
        + '<span class="versus-option-def">' + escapeHTML(opt.definition) + '</span>'
        + '</button>';
    }).join("");

    optionsEl.querySelectorAll(".versus-option-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        handleVersusAnswer(btn.dataset.id);
      });
    });

    document.getElementById("versus-feedback").classList.add("hidden");
    document.getElementById("versus-feedback").classList.remove("correct", "wrong");
    document.getElementById("versus-next").classList.add("hidden");
  }

  function handleVersusAnswer(chosenId) {
    var q = versus.questions[versus.current];
    var isCorrect = chosenId === q.correctId;
    var chosenFallacy = window.FALLACIES_DATA.find(function (f) { return f.id === chosenId; });
    var correctFallacy = window.FALLACIES_DATA.find(function (f) { return f.id === q.correctId; });

    if (isCorrect) versus.score++;

    versus.answers.push({
      text: q.text,
      correctId: q.correctId,
      correctName: correctFallacy ? getFallacyName(correctFallacy) : q.correctId,
      chosenId: chosenId,
      chosenName: chosenFallacy ? getFallacyName(chosenFallacy) : chosenId,
      explanation: q.explanation,
      distinction: q.distinction,
      level: q.level,
      correct: isCorrect
    });

    // Highlight options
    var optionsEl = document.getElementById("versus-options");
    optionsEl.querySelectorAll(".versus-option-btn").forEach(function (btn) {
      btn.classList.add("disabled");
      if (btn.dataset.id === q.correctId) btn.classList.add("correct");
      if (btn.dataset.id === chosenId && !isCorrect) btn.classList.add("wrong");
    });

    // Show feedback
    var feedbackEl = document.getElementById("versus-feedback");
    feedbackEl.classList.remove("hidden", "correct", "wrong");
    feedbackEl.classList.add(isCorrect ? "correct" : "wrong");
    feedbackEl.innerHTML = '<div class="quiz-feedback-title">'
      + (isCorrect ? t("quiz.results.correct") : t("quiz.results.incorrect") + " " + escapeHTML(correctFallacy ? getFallacyName(correctFallacy) : q.correctId))
      + '</div>'
      + '<div>' + escapeHTML(q.explanation) + '</div>'
      + '<div class="quiz-feedback-meta"><strong>' + t("feedback.level") + '</strong> '
      + escapeHTML(getLevelInfo(q.level).icon) + ' '
      + escapeHTML(getLevelInfo(q.level).name) + " (L" + q.level + ")"
      + "</div>";

    document.getElementById("versus-next").classList.remove("hidden");
  }

  document.getElementById("versus-next").addEventListener("click", function () {
    versus.current++;
    if (versus.current >= versus.questions.length) {
      showVersusResults();
    } else {
      renderVersusQuestion();
    }
  });

  document.getElementById("versus-quit").addEventListener("click", function () {
    renderQuizSetup();
  });

  function showVersusResults() {
    document.getElementById("versus-active").classList.add("hidden");
    document.getElementById("versus-results").classList.remove("hidden");

    var total = versus.questions.length;
    var score = versus.score;
    var pct = Math.round((score / total) * 100);

    // Update global stats
    state.totalQuizCorrect += score;
    state.totalQuizAnswered += total;

    // Update level best
    var lvlKey = getVersusScoreKey(versus.level);
    if (!state.quizScores[lvlKey] || pct > state.quizScores[lvlKey].best) {
      state.quizScores[lvlKey] = { best: pct, attempts: (state.quizScores[lvlKey] ? state.quizScores[lvlKey].attempts : 0) + 1 };
    } else {
      state.quizScores[lvlKey].attempts++;
    }
    saveState();

    document.getElementById("versus-results-score-num").textContent = score;
    document.getElementById("versus-results-total-num").textContent = total;

    var fill = document.getElementById("versus-results-bar-fill");
    fill.style.width = "0%";
    setTimeout(function () {
      fill.style.width = pct + "%";
      fill.style.background = pct >= 80 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--danger)";
    }, 100);

    var emoji, title, msg;
    if (pct === 100) {
      emoji = "🏆"; title = t("versus.results.perfect.title"); msg = t("versus.results.perfect.msg");
    } else if (pct >= 80) {
      emoji = "🎉"; title = t("results.excellent.title"); msg = t("versus.results.excellent.msg");
    } else if (pct >= 60) {
      emoji = "👍"; title = t("results.good.title"); msg = t("versus.results.good.msg");
    } else if (pct >= 40) {
      emoji = "📚"; title = t("results.keep.title"); msg = t("versus.results.keep.msg");
    } else {
      emoji = "💪"; title = t("results.dontGiveUp.title"); msg = t("versus.results.dontGiveUp.msg");
    }

    document.getElementById("versus-results-emoji").textContent = emoji;
    document.getElementById("versus-results-title").textContent = title;
    document.getElementById("versus-results-message").textContent = msg;

    // Review
    var reviewEl = document.getElementById("versus-results-review");
    if (versus.answers.length > 0) {
      var reviewHTML = "<h3>" + t("quiz.results.review") + "</h3>";
      versus.answers.forEach(function (a, i) {
        reviewHTML += '<div class="review-item">'
          + '<div class="review-item-header">'
          + '<span class="review-icon">' + (a.correct ? "✅" : "❌") + '</span>'
          + '<span class="review-answer">Q' + (i + 1) + ': ' + t("extractor.results.youChose") + ' ' + escapeHTML(a.chosenName) + '</span>'
          + '</div>';
        if (!a.correct) {
          reviewHTML += '<div class="review-correct-answer">' + t("quiz.results.correctAnswer") + ' ' + escapeHTML(a.correctName) + '</div>';
        }
        reviewHTML += '<div class="review-explanation">' + escapeHTML(a.explanation) + '</div>'
          + '</div>';
      });
      reviewEl.innerHTML = reviewHTML;
    }
  }

  document.getElementById("versus-results-retry").addEventListener("click", function () {
    startVersus(versus.level);
  });
  document.getElementById("versus-results-home").addEventListener("click", function () {
    renderQuizSetup();
  });

  // ---- Utilities ----
  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function renderParagraphsHTML(text, className) {
    var safeClassName = /^[a-zA-Z_][a-zA-Z0-9\-_]*$/.test(String(className || ""))
      ? String(className)
      : "";
    return String(text || "")
      .split(/\n+/)
      .filter(function (part) { return part.trim(); })
      .map(function (part) {
        return '<p class="' + safeClassName + '">' + escapeHTML(part.trim()) + "</p>";
      }).join("");
  }

  function escapeHTML(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(String(str)));
    return div.innerHTML;
  }

  // ---- Keyboard ----
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeFallacyModal();
      closeFallacyPicker();
      closeExtractorPicker();
    }
  });

  // ---- Language Switcher ----
  window.I18N.initLang();
  window.I18N.translateStaticElements();

  // Set active lang button on load
  var currentLangOnLoad = window.I18N.getLang();
  document.querySelectorAll("#lang-switcher .lang-btn").forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.lang === currentLangOnLoad);
    btn.addEventListener("click", function () {
      var lang = btn.dataset.lang;
      window.I18N.setLang(lang);
      // Update i18n helper references
      t = window.I18N.t;
      getLevelInfo = window.I18N.getLevelInfo;
      getCategories = window.I18N.getCategories;
      translateCategory = window.I18N.translateCategory;
      getFallacyName = window.I18N.getFallacyName;
      getFallacyDefinition = window.I18N.getFallacyDefinition;

      // Update lang button active states
      document.querySelectorAll("#lang-switcher .lang-btn").forEach(function (b) {
        b.classList.toggle("active", b.dataset.lang === lang);
      });

      // Re-translate static HTML
      window.I18N.translateStaticElements();

      // Re-render current view
      renderDashboard();
      renderWiki();
      renderQuizSetup();
    });
  });

  // ---- Init ----
  renderDashboard();
})();
