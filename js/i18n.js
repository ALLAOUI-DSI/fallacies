// Internationalization (i18n) Module
// Supports: English (en), Arabic (ar), French (fr)

(function () {
  "use strict";

  var LANG_KEY = "fallacy-fighter-lang";

  // ---- UI Translations ----
  var UI = {
    en: {
      // Navigation
      "nav.title": "Fallacy Fighter",
      "nav.dashboard": "Dashboard",
      "nav.wiki": "Wiki",
      "nav.quiz": "Quiz",

      // Dashboard
      "dashboard.hero.title": "Master Logical Fallacies",
      "dashboard.hero.sub": "Learn to spot flawed reasoning and think more clearly. Progress from beginner to expert with our interactive lessons and quizzes.",
      "dashboard.progress.title": "Your Progress",
      "dashboard.theme.dark.on": "🌙 Dark mode: On",
      "dashboard.theme.dark.off": "🌙 Dark mode: Off",
      "dashboard.resetScore": "Reset Quiz Score",
      "dashboard.complete": "% Complete",
      "dashboard.stat.total": "Total Fallacies",
      "dashboard.stat.studied": "Studied",
      "dashboard.stat.quizCorrect": "Quiz Correct",
      "dashboard.stat.quizAnswered": "Quiz Answered",
      "dashboard.levels.title": "Learning Path",
      "dashboard.levels.fallacies": "fallacies",
      "dashboard.action.study.title": "Study Fallacies",
      "dashboard.action.study.desc": "Browse the wiki to learn definitions, examples, and tips for spotting each fallacy.",
      "dashboard.action.study.btn": "Open Wiki",
      "dashboard.action.quiz.title": "Take a Quiz",
      "dashboard.action.quiz.desc": "Test your skills by identifying fallacies in real-world scenarios.",
      "dashboard.action.quiz.btn": "Start Quiz",

      // Wiki
      "wiki.title": "📖 Fallacy Wiki",
      "wiki.subtitle": "Browse, learn, and master logical fallacies at your own pace.",
      "wiki.filter.level": "Level",
      "wiki.filter.category": "Category",
      "wiki.filter.search": "Search",
      "wiki.filter.all": "All",
      "wiki.search.placeholder": "Search fallacies...",
      "wiki.noResults": "No fallacies match your filters.",
      "wiki.modal.category": "Category:",
      "wiki.modal.examples": "Examples",
      "wiki.modal.quizScenarios": "Quiz Scenarios",
      "wiki.modal.markStudied": "Mark as Studied",
      "wiki.modal.studied": "✅ Studied",
      "wiki.modal.studied.title": "Studied",
      "wiki.modal.notStudied.title": "Not yet studied",
      "wiki.picker.title": "All fallacies",
      "wiki.picker.desc": "Select one to quickly review its definition, examples, and level before answering.",

      // Quiz
      "quiz.title": "🎯 Fallacy Quiz",
      "quiz.subtitle": "Identify the logical fallacy in each scenario. Choose your difficulty level to begin.",
      "quiz.tab.classic": "🎯 Classic Quiz",
      "quiz.tab.extractor": "🔍 Extractor Mode",
      "quiz.tab.versus": "⚔️ Versus Mode",
      "quiz.mixed": "🎲 Mixed Mode — All Levels",
      "quiz.score": "Score:",
      "quiz.quit": "Quit",
      "quiz.prompt": "Which fallacy is this?",
      "quiz.browseAll": "Browse all fallacies",
      "quiz.next": "Next Question →",
      "quiz.notTried": "Not tried",
      "quiz.best": "Best",
      "quiz.level": "Level",
      "quiz.passages": "passages",
      "quiz.versusScenarios": "versus scenarios",

      // Classic results
      "quiz.results.title": "Quiz Complete!",
      "quiz.results.youScored": "You scored",
      "quiz.results.outOf": "out of",
      "quiz.results.retry": "Try Again",
      "quiz.results.home": "Back to Setup",
      "quiz.results.review": "Review Your Answers",
      "quiz.results.youAnswered": "You answered:",
      "quiz.results.correctAnswer": "Correct answer:",
      "quiz.results.correct": "✅ Correct!",
      "quiz.results.incorrect": "❌ Incorrect — The answer is:",

      // Results messages
      "results.perfect.title": "Perfect Score!",
      "results.perfect.msg": "You're a fallacy-fighting master!",
      "results.excellent.title": "Excellent!",
      "results.excellent.msg": "You have a strong grasp of logical fallacies.",
      "results.good.title": "Good Job!",
      "results.good.msg": "You're making great progress. Keep studying!",
      "results.keep.title": "Keep Learning!",
      "results.keep.msg": "Review the wiki and try again to improve your score.",
      "results.dontGiveUp.title": "Don't Give Up!",
      "results.dontGiveUp.msg": "Study the fallacies in the wiki and come back stronger.",

      // Extractor
      "extractor.intro.title": "Fallacy Extractor",
      "extractor.intro.desc": "Read multi-paragraph passages and identify the hidden logical fallacy. Select your answer from the full list of fallacies — no multiple choice hints!",
      "extractor.label": "🔍 Read the passage and identify the fallacy",
      "extractor.selectBtn": "Select a Fallacy…",
      "extractor.pickerTitle": "🔍 Select the Fallacy",
      "extractor.pickerDesc": "Choose the fallacy you think is present in the passage.",
      "extractor.next": "Next Passage →",
      "extractor.results.title": "Extractor Complete!",
      "extractor.results.perfect.title": "Perfect Extraction!",
      "extractor.results.perfect.msg": "You identified every fallacy flawlessly!",
      "extractor.results.excellent.msg": "You have a sharp eye for hidden fallacies.",
      "extractor.results.good.msg": "You're getting better at spotting fallacies in context.",
      "extractor.results.keep.msg": "Review the wiki to improve your fallacy detection skills.",
      "extractor.results.dontGiveUp.msg": "Study the fallacies in the wiki and try the extractor again.",
      "extractor.noPassages": "No passages available for this level. Please try another level or Mixed Mode.",
      "extractor.feedback.correct": "✅ Correct! This is",
      "extractor.feedback.incorrect": "❌ Incorrect — You chose:",
      "extractor.feedback.correctIs": "The correct answer is:",
      "extractor.results.youChose": "You chose:",

      // Versus
      "versus.intro.title": "Fallacy Versus",
      "versus.intro.desc": "Two similar fallacies face off! Read the scenario and pick the correct one. Sharpen your ability to distinguish fallacies that are easy to confuse.",
      "versus.label": "⚔️ Which fallacy is this?",
      "versus.next": "Next Question →",
      "versus.keyDifference": "Key difference:",
      "versus.results.title": "Versus Complete!",
      "versus.results.perfect.title": "Perfect Distinction!",
      "versus.results.perfect.msg": "You can tell apart even the trickiest fallacy pairs!",
      "versus.results.excellent.msg": "You have a sharp eye for subtle differences between fallacies.",
      "versus.results.good.msg": "You're getting better at distinguishing similar fallacies.",
      "versus.results.keep.msg": "Review the wiki to learn the key differences between similar fallacies.",
      "versus.results.dontGiveUp.msg": "Study the distinctions between similar fallacies and try again.",
      "versus.noScenarios": "No versus scenarios available for this level. Please try another level or Mixed Mode.",

      // General
      "feedback.level": "Level:"
    },

    ar: {
      // Navigation
      "nav.title": "محارب المغالطات",
      "nav.dashboard": "لوحة التحكم",
      "nav.wiki": "الموسوعة",
      "nav.quiz": "اختبار",

      // Dashboard
      "dashboard.hero.title": "أتقن المغالطات المنطقية",
      "dashboard.hero.sub": "تعلم كيف تكتشف التفكير الخاطئ وفكّر بوضوح أكبر. تقدّم من مبتدئ إلى خبير مع دروسنا واختباراتنا التفاعلية.",
      "dashboard.progress.title": "تقدمك",
      "dashboard.theme.dark.on": "🌙 الوضع الداكن: مفعّل",
      "dashboard.theme.dark.off": "🌙 الوضع الداكن: معطّل",
      "dashboard.resetScore": "إعادة تعيين النتيجة",
      "dashboard.complete": "% مكتمل",
      "dashboard.stat.total": "إجمالي المغالطات",
      "dashboard.stat.studied": "تمت دراستها",
      "dashboard.stat.quizCorrect": "إجابات صحيحة",
      "dashboard.stat.quizAnswered": "أسئلة مُجاب عنها",
      "dashboard.levels.title": "مسار التعلم",
      "dashboard.levels.fallacies": "مغالطات",
      "dashboard.action.study.title": "ادرس المغالطات",
      "dashboard.action.study.desc": "تصفح الموسوعة لتعلم التعريفات والأمثلة ونصائح اكتشاف كل مغالطة.",
      "dashboard.action.study.btn": "افتح الموسوعة",
      "dashboard.action.quiz.title": "ابدأ اختبارًا",
      "dashboard.action.quiz.desc": "اختبر مهاراتك في تحديد المغالطات في سيناريوهات واقعية.",
      "dashboard.action.quiz.btn": "ابدأ الاختبار",

      // Wiki
      "wiki.title": "📖 موسوعة المغالطات",
      "wiki.subtitle": "تصفح وتعلم وأتقن المغالطات المنطقية بالسرعة التي تناسبك.",
      "wiki.filter.level": "المستوى",
      "wiki.filter.category": "التصنيف",
      "wiki.filter.search": "بحث",
      "wiki.filter.all": "الكل",
      "wiki.search.placeholder": "ابحث عن المغالطات...",
      "wiki.noResults": "لا توجد مغالطات تطابق معايير البحث.",
      "wiki.modal.category": "التصنيف:",
      "wiki.modal.examples": "أمثلة",
      "wiki.modal.quizScenarios": "سيناريوهات الاختبار",
      "wiki.modal.markStudied": "وضع علامة كمدروسة",
      "wiki.modal.studied": "✅ تمت الدراسة",
      "wiki.modal.studied.title": "تمت الدراسة",
      "wiki.modal.notStudied.title": "لم تتم دراستها بعد",
      "wiki.picker.title": "جميع المغالطات",
      "wiki.picker.desc": "اختر واحدة لمراجعة تعريفها وأمثلتها ومستواها بسرعة قبل الإجابة.",

      // Quiz
      "quiz.title": "🎯 اختبار المغالطات",
      "quiz.subtitle": "حدد المغالطة المنطقية في كل سيناريو. اختر مستوى الصعوبة للبدء.",
      "quiz.tab.classic": "🎯 اختبار كلاسيكي",
      "quiz.tab.extractor": "🔍 وضع الاستخراج",
      "quiz.tab.versus": "⚔️ وضع المواجهة",
      "quiz.mixed": "🎲 الوضع المختلط — جميع المستويات",
      "quiz.score": "النتيجة:",
      "quiz.quit": "خروج",
      "quiz.prompt": "ما هي هذه المغالطة؟",
      "quiz.browseAll": "تصفح جميع المغالطات",
      "quiz.next": "السؤال التالي ←",
      "quiz.notTried": "لم يُجرَّب",
      "quiz.best": "الأفضل",
      "quiz.level": "المستوى",
      "quiz.passages": "نصوص",
      "quiz.versusScenarios": "سيناريوهات مواجهة",

      // Classic results
      "quiz.results.title": "اكتمل الاختبار!",
      "quiz.results.youScored": "حصلت على",
      "quiz.results.outOf": "من",
      "quiz.results.retry": "حاول مرة أخرى",
      "quiz.results.home": "العودة للإعداد",
      "quiz.results.review": "مراجعة إجاباتك",
      "quiz.results.youAnswered": "أجبت:",
      "quiz.results.correctAnswer": "الإجابة الصحيحة:",
      "quiz.results.correct": "✅ صحيح!",
      "quiz.results.incorrect": "❌ خطأ — الإجابة هي:",

      // Results messages
      "results.perfect.title": "نتيجة مثالية!",
      "results.perfect.msg": "أنت محارب مغالطات حقيقي!",
      "results.excellent.title": "ممتاز!",
      "results.excellent.msg": "لديك فهم قوي للمغالطات المنطقية.",
      "results.good.title": "عمل جيد!",
      "results.good.msg": "أنت تحرز تقدمًا رائعًا. واصل الدراسة!",
      "results.keep.title": "واصل التعلم!",
      "results.keep.msg": "راجع الموسوعة وحاول مرة أخرى لتحسين نتيجتك.",
      "results.dontGiveUp.title": "لا تستسلم!",
      "results.dontGiveUp.msg": "ادرس المغالطات في الموسوعة وعد أقوى.",

      // Extractor
      "extractor.intro.title": "مستخرج المغالطات",
      "extractor.intro.desc": "اقرأ نصوصًا متعددة الفقرات وحدد المغالطة المنطقية المخفية. اختر إجابتك من القائمة الكاملة — بدون اختيار متعدد!",
      "extractor.label": "🔍 اقرأ النص وحدد المغالطة",
      "extractor.selectBtn": "اختر مغالطة…",
      "extractor.pickerTitle": "🔍 اختر المغالطة",
      "extractor.pickerDesc": "اختر المغالطة التي تعتقد أنها موجودة في النص.",
      "extractor.next": "النص التالي ←",
      "extractor.results.title": "اكتمل الاستخراج!",
      "extractor.results.perfect.title": "استخراج مثالي!",
      "extractor.results.perfect.msg": "حددت كل مغالطة بشكل لا تشوبه شائبة!",
      "extractor.results.excellent.msg": "لديك عين حادة للمغالطات المخفية.",
      "extractor.results.good.msg": "أنت تتحسن في اكتشاف المغالطات في السياق.",
      "extractor.results.keep.msg": "راجع الموسوعة لتحسين مهاراتك في اكتشاف المغالطات.",
      "extractor.results.dontGiveUp.msg": "ادرس المغالطات في الموسوعة وجرب الاستخراج مرة أخرى.",
      "extractor.noPassages": "لا توجد نصوص متاحة لهذا المستوى. يرجى تجربة مستوى آخر أو الوضع المختلط.",
      "extractor.feedback.correct": "✅ صحيح! هذه هي",
      "extractor.feedback.incorrect": "❌ خطأ — اخترت:",
      "extractor.feedback.correctIs": "الإجابة الصحيحة هي:",
      "extractor.results.youChose": "اخترت:",

      // Versus
      "versus.intro.title": "مواجهة المغالطات",
      "versus.intro.desc": "مغالطتان متشابهتان تتواجهان! اقرأ السيناريو واختر الصحيحة. حسّن قدرتك على التمييز بين المغالطات التي يسهل الخلط بينها.",
      "versus.label": "⚔️ ما هي هذه المغالطة؟",
      "versus.next": "السؤال التالي ←",
      "versus.keyDifference": "الفرق الرئيسي:",
      "versus.results.title": "اكتملت المواجهة!",
      "versus.results.perfect.title": "تمييز مثالي!",
      "versus.results.perfect.msg": "يمكنك التمييز حتى بين أصعب أزواج المغالطات!",
      "versus.results.excellent.msg": "لديك عين حادة للفروق الدقيقة بين المغالطات.",
      "versus.results.good.msg": "أنت تتحسن في التمييز بين المغالطات المتشابهة.",
      "versus.results.keep.msg": "راجع الموسوعة لتعلم الفروق الرئيسية بين المغالطات المتشابهة.",
      "versus.results.dontGiveUp.msg": "ادرس الفروق بين المغالطات المتشابهة وحاول مرة أخرى.",
      "versus.noScenarios": "لا توجد سيناريوهات مواجهة متاحة لهذا المستوى. يرجى تجربة مستوى آخر أو الوضع المختلط.",

      // General
      "feedback.level": "المستوى:"
    },

    fr: {
      // Navigation
      "nav.title": "Chasseur de Sophismes",
      "nav.dashboard": "Tableau de bord",
      "nav.wiki": "Wiki",
      "nav.quiz": "Quiz",

      // Dashboard
      "dashboard.hero.title": "Maîtrisez les Sophismes Logiques",
      "dashboard.hero.sub": "Apprenez à repérer les raisonnements fallacieux et à penser plus clairement. Progressez de débutant à expert avec nos leçons interactives et nos quiz.",
      "dashboard.progress.title": "Votre Progression",
      "dashboard.theme.dark.on": "🌙 Mode sombre : Activé",
      "dashboard.theme.dark.off": "🌙 Mode sombre : Désactivé",
      "dashboard.resetScore": "Réinitialiser le score",
      "dashboard.complete": "% Terminé",
      "dashboard.stat.total": "Total des Sophismes",
      "dashboard.stat.studied": "Étudiés",
      "dashboard.stat.quizCorrect": "Réponses Correctes",
      "dashboard.stat.quizAnswered": "Questions Répondues",
      "dashboard.levels.title": "Parcours d'Apprentissage",
      "dashboard.levels.fallacies": "sophismes",
      "dashboard.action.study.title": "Étudier les Sophismes",
      "dashboard.action.study.desc": "Parcourez le wiki pour apprendre les définitions, exemples et conseils pour repérer chaque sophisme.",
      "dashboard.action.study.btn": "Ouvrir le Wiki",
      "dashboard.action.quiz.title": "Passer un Quiz",
      "dashboard.action.quiz.desc": "Testez vos compétences en identifiant les sophismes dans des scénarios réels.",
      "dashboard.action.quiz.btn": "Commencer le Quiz",

      // Wiki
      "wiki.title": "📖 Wiki des Sophismes",
      "wiki.subtitle": "Parcourez, apprenez et maîtrisez les sophismes logiques à votre rythme.",
      "wiki.filter.level": "Niveau",
      "wiki.filter.category": "Catégorie",
      "wiki.filter.search": "Recherche",
      "wiki.filter.all": "Tous",
      "wiki.search.placeholder": "Rechercher des sophismes...",
      "wiki.noResults": "Aucun sophisme ne correspond à vos filtres.",
      "wiki.modal.category": "Catégorie :",
      "wiki.modal.examples": "Exemples",
      "wiki.modal.quizScenarios": "Scénarios de Quiz",
      "wiki.modal.markStudied": "Marquer comme étudié",
      "wiki.modal.studied": "✅ Étudié",
      "wiki.modal.studied.title": "Étudié",
      "wiki.modal.notStudied.title": "Pas encore étudié",
      "wiki.picker.title": "Tous les sophismes",
      "wiki.picker.desc": "Sélectionnez-en un pour revoir rapidement sa définition, ses exemples et son niveau avant de répondre.",

      // Quiz
      "quiz.title": "🎯 Quiz des Sophismes",
      "quiz.subtitle": "Identifiez le sophisme logique dans chaque scénario. Choisissez votre niveau de difficulté pour commencer.",
      "quiz.tab.classic": "🎯 Quiz Classique",
      "quiz.tab.extractor": "🔍 Mode Extraction",
      "quiz.tab.versus": "⚔️ Mode Versus",
      "quiz.mixed": "🎲 Mode Mixte — Tous les Niveaux",
      "quiz.score": "Score :",
      "quiz.quit": "Quitter",
      "quiz.prompt": "Quel est ce sophisme ?",
      "quiz.browseAll": "Parcourir tous les sophismes",
      "quiz.next": "Question Suivante →",
      "quiz.notTried": "Non essayé",
      "quiz.best": "Meilleur",
      "quiz.level": "Niveau",
      "quiz.passages": "passages",
      "quiz.versusScenarios": "scénarios versus",

      // Classic results
      "quiz.results.title": "Quiz Terminé !",
      "quiz.results.youScored": "Vous avez obtenu",
      "quiz.results.outOf": "sur",
      "quiz.results.retry": "Réessayer",
      "quiz.results.home": "Retour à la Configuration",
      "quiz.results.review": "Revoir vos Réponses",
      "quiz.results.youAnswered": "Vous avez répondu :",
      "quiz.results.correctAnswer": "Réponse correcte :",
      "quiz.results.correct": "✅ Correct !",
      "quiz.results.incorrect": "❌ Incorrect — La réponse est :",

      // Results messages
      "results.perfect.title": "Score Parfait !",
      "results.perfect.msg": "Vous êtes un maître chasseur de sophismes !",
      "results.excellent.title": "Excellent !",
      "results.excellent.msg": "Vous maîtrisez bien les sophismes logiques.",
      "results.good.title": "Bon Travail !",
      "results.good.msg": "Vous faites de bons progrès. Continuez à étudier !",
      "results.keep.title": "Continuez à Apprendre !",
      "results.keep.msg": "Consultez le wiki et réessayez pour améliorer votre score.",
      "results.dontGiveUp.title": "N'abandonnez pas !",
      "results.dontGiveUp.msg": "Étudiez les sophismes dans le wiki et revenez plus fort.",

      // Extractor
      "extractor.intro.title": "Extracteur de Sophismes",
      "extractor.intro.desc": "Lisez des passages à plusieurs paragraphes et identifiez le sophisme logique caché. Sélectionnez votre réponse dans la liste complète — pas de choix multiples !",
      "extractor.label": "🔍 Lisez le passage et identifiez le sophisme",
      "extractor.selectBtn": "Sélectionner un Sophisme…",
      "extractor.pickerTitle": "🔍 Sélectionner le Sophisme",
      "extractor.pickerDesc": "Choisissez le sophisme que vous pensez être présent dans le passage.",
      "extractor.next": "Passage Suivant →",
      "extractor.results.title": "Extraction Terminée !",
      "extractor.results.perfect.title": "Extraction Parfaite !",
      "extractor.results.perfect.msg": "Vous avez identifié chaque sophisme parfaitement !",
      "extractor.results.excellent.msg": "Vous avez l'œil pour les sophismes cachés.",
      "extractor.results.good.msg": "Vous vous améliorez dans la détection des sophismes en contexte.",
      "extractor.results.keep.msg": "Consultez le wiki pour améliorer vos compétences de détection des sophismes.",
      "extractor.results.dontGiveUp.msg": "Étudiez les sophismes dans le wiki et réessayez l'extracteur.",
      "extractor.noPassages": "Aucun passage disponible pour ce niveau. Veuillez essayer un autre niveau ou le Mode Mixte.",
      "extractor.feedback.correct": "✅ Correct ! C'est",
      "extractor.feedback.incorrect": "❌ Incorrect — Vous avez choisi :",
      "extractor.feedback.correctIs": "La bonne réponse est :",
      "extractor.results.youChose": "Vous avez choisi :",

      // Versus
      "versus.intro.title": "Sophismes en Duel",
      "versus.intro.desc": "Deux sophismes similaires s'affrontent ! Lisez le scénario et choisissez le bon. Aiguisez votre capacité à distinguer les sophismes faciles à confondre.",
      "versus.label": "⚔️ Quel est ce sophisme ?",
      "versus.next": "Question Suivante →",
      "versus.keyDifference": "Différence clé :",
      "versus.results.title": "Duel Terminé !",
      "versus.results.perfect.title": "Distinction Parfaite !",
      "versus.results.perfect.msg": "Vous distinguez même les paires de sophismes les plus délicates !",
      "versus.results.excellent.msg": "Vous avez l'œil pour les différences subtiles entre les sophismes.",
      "versus.results.good.msg": "Vous vous améliorez dans la distinction des sophismes similaires.",
      "versus.results.keep.msg": "Consultez le wiki pour apprendre les différences clés entre les sophismes similaires.",
      "versus.results.dontGiveUp.msg": "Étudiez les distinctions entre les sophismes similaires et réessayez.",
      "versus.noScenarios": "Aucun scénario versus disponible pour ce niveau. Veuillez essayer un autre niveau ou le Mode Mixte.",

      // General
      "feedback.level": "Niveau :"
    }
  };

  // ---- Translated Level Info ----
  var LEVEL_INFO_I18N = {
    en: {
      1: { name: "Beginner", description: "Common fallacies you encounter every day. Easy to spot once you know them." },
      2: { name: "Intermediate", description: "More subtle fallacies that require careful thinking to identify." },
      3: { name: "Advanced", description: "Complex fallacies often used in professional and academic debates." },
      4: { name: "Expert", description: "Sophisticated rhetorical techniques that are very difficult to detect." }
    },
    ar: {
      1: { name: "مبتدئ", description: "مغالطات شائعة تصادفها كل يوم. سهلة الاكتشاف بمجرد معرفتها." },
      2: { name: "متوسط", description: "مغالطات أكثر دقة تتطلب تفكيرًا حذرًا لتحديدها." },
      3: { name: "متقدم", description: "مغالطات معقدة تُستخدم غالبًا في النقاشات المهنية والأكاديمية." },
      4: { name: "خبير", description: "تقنيات بلاغية متطورة يصعب جدًا اكتشافها." }
    },
    fr: {
      1: { name: "Débutant", description: "Des sophismes courants que vous rencontrez tous les jours. Faciles à repérer une fois que vous les connaissez." },
      2: { name: "Intermédiaire", description: "Des sophismes plus subtils qui nécessitent une réflexion attentive pour les identifier." },
      3: { name: "Avancé", description: "Des sophismes complexes souvent utilisés dans les débats professionnels et académiques." },
      4: { name: "Expert", description: "Des techniques rhétoriques sophistiquées très difficiles à détecter." }
    }
  };

  // ---- Translated Categories ----
  var CATEGORIES_I18N = {
    en: ["Relevance", "Presumption", "Ambiguity", "Causal", "Formal", "Emotional Appeal"],
    ar: ["الصلة", "الافتراض", "الغموض", "السببية", "الشكلية", "الاستئناف العاطفي"],
    fr: ["Pertinence", "Présomption", "Ambiguïté", "Causal", "Formel", "Appel Émotionnel"]
  };

  // ---- Category translation map (English key → localized value) ----
  var CATEGORY_MAP = {};
  function buildCategoryMap() {
    CATEGORY_MAP = {};
    var enCats = CATEGORIES_I18N.en;
    var localCats = CATEGORIES_I18N[currentLang] || enCats;
    for (var i = 0; i < enCats.length; i++) {
      CATEGORY_MAP[enCats[i]] = localCats[i] || enCats[i];
    }
  }

  // ---- Translated Fallacy Names ----
  var FALLACY_NAMES_I18N = {
    ar: {
      "ad-hominem": "مغالطة الشخصنة",
      "straw-man": "رجل القش",
      "appeal-to-authority": "الاحتكام إلى السلطة",
      "false-dilemma": "المعضلة الزائفة",
      "slippery-slope": "المنحدر الزلق",
      "red-herring": "الرنجة الحمراء",
      "circular-reasoning": "التفكير الدائري",
      "bandwagon": "مغالطة القطيع",
      "hasty-generalization": "التعميم المتسرع",
      "appeal-to-emotion": "الاستئناف إلى العاطفة",
      "tu-quoque": "أنت أيضًا",
      "burden-of-proof": "عبء الإثبات",
      "appeal-to-nature": "الاحتكام إلى الطبيعة",
      "genetic-fallacy": "المغالطة الجينية",
      "false-cause": "السبب الزائف",
      "appeal-to-tradition": "الاحتكام إلى التقليد",
      "appeal-to-ignorance": "الاحتكام إلى الجهل",
      "no-true-scotsman": "لا اسكتلندي حقيقي",
      "equivocation": "المغالطة اللفظية",
      "loaded-question": "السؤال الملغوم",
      "false-equivalence": "التكافؤ الزائف",
      "cherry-picking": "انتقاء الكرز",
      "anecdotal": "المغالطة القصصية",
      "composition-division": "التركيب والتقسيم",
      "middle-ground": "الحل الوسط",
      "texas-sharpshooter": "رامي تكساس الماهر",
      "sunk-cost": "التكلفة الغارقة",
      "appeal-to-pity": "الاستئناف إلى الشفقة",
      "black-or-white": "أسود أو أبيض",
      "begging-the-question": "المصادرة على المطلوب",
      "appeal-to-fear": "الاستئناف إلى الخوف",
      "post-hoc": "بعده إذن بسببه",
      "gamblers-fallacy": "مغالطة المقامر",
      "moving-goalposts": "تحريك المرمى",
      "personal-incredulity": "عدم التصديق الشخصي",
      "ambiguity": "الغموض",
      "affirming-consequent": "تأكيد التالي",
      "denying-antecedent": "إنكار المقدم",
      "appeal-to-consequences": "الاحتكام إلى العواقب",
      "spotlight": "مغالطة الأضواء",
      "moral-equivalence": "التكافؤ الأخلاقي",
      "just-world": "عالم عادل",
      "nirvana-fallacy": "مغالطة المدينة الفاضلة",
      "etymological-fallacy": "المغالطة الاشتقاقية",
      "reification": "التشييء",
      "kafka-trap": "فخ كافكا",
      "motte-and-bailey": "الحصن والفناء",
      "gish-gallop": "إغراق غيش",
      "kettle-logic": "منطق الغلاية",
      "not-invented-here": "لم يُخترع هنا",
      "thought-terminating-cliche": "العبارة المنهية للتفكير",
      "continuum-fallacy": "مغالطة الطيف المتصل",
      "historian-fallacy": "مغالطة المؤرخ",
      "mcnamara-fallacy": "مغالطة ماكنمارا",
      "survivorship-bias": "انحياز الناجين",
      "apex-fallacy": "مغالطة القمة",
      "kafka-trap-extended": "فخ كافكا الممتد",
      "bulverism": "البلفرة",
      "courtiers-reply": "رد رجل البلاط",
      "proving-too-much": "إثبات أكثر مما ينبغي",
      "loki-wager": "رهان لوكي",
      "motte-bailey-steelman": "الحصن والفناء المعزز",
      "supervenience-error": "خطأ الإشراف",
      "willed-ignorance": "الجهل المتعمد",
      "principle-of-explosion": "مبدأ الانفجار",
      "is-ought": "الانتقال من الواقع إلى الواجب"
    },
    fr: {
      "ad-hominem": "Ad Hominem",
      "straw-man": "Homme de Paille",
      "appeal-to-authority": "Appel à l'Autorité",
      "false-dilemma": "Faux Dilemme",
      "slippery-slope": "Pente Glissante",
      "red-herring": "Hareng Rouge",
      "circular-reasoning": "Raisonnement Circulaire",
      "bandwagon": "Effet de Mode",
      "hasty-generalization": "Généralisation Hâtive",
      "appeal-to-emotion": "Appel à l'Émotion",
      "tu-quoque": "Tu Quoque",
      "burden-of-proof": "Charge de la Preuve",
      "appeal-to-nature": "Appel à la Nature",
      "genetic-fallacy": "Sophisme Génétique",
      "false-cause": "Fausse Cause",
      "appeal-to-tradition": "Appel à la Tradition",
      "appeal-to-ignorance": "Appel à l'Ignorance",
      "no-true-scotsman": "Aucun Vrai Écossais",
      "equivocation": "Équivoque",
      "loaded-question": "Question Piège",
      "false-equivalence": "Fausse Équivalence",
      "cherry-picking": "Cueillette de Cerises",
      "anecdotal": "Sophisme Anecdotique",
      "composition-division": "Composition et Division",
      "middle-ground": "Juste Milieu",
      "texas-sharpshooter": "Tireur d'Élite du Texas",
      "sunk-cost": "Coût Irrécupérable",
      "appeal-to-pity": "Appel à la Pitié",
      "black-or-white": "Noir ou Blanc",
      "begging-the-question": "Pétition de Principe",
      "appeal-to-fear": "Appel à la Peur",
      "post-hoc": "Post Hoc",
      "gamblers-fallacy": "Sophisme du Joueur",
      "moving-goalposts": "Déplacement des Poteaux",
      "personal-incredulity": "Incrédulité Personnelle",
      "ambiguity": "Ambiguïté",
      "affirming-consequent": "Affirmation du Conséquent",
      "denying-antecedent": "Négation de l'Antécédent",
      "appeal-to-consequences": "Appel aux Conséquences",
      "spotlight": "Effet Projecteur",
      "moral-equivalence": "Équivalence Morale",
      "just-world": "Monde Juste",
      "nirvana-fallacy": "Sophisme du Nirvana",
      "etymological-fallacy": "Sophisme Étymologique",
      "reification": "Réification",
      "kafka-trap": "Piège de Kafka",
      "motte-and-bailey": "Motte et Basse-cour",
      "gish-gallop": "Galop de Gish",
      "kettle-logic": "Logique de la Bouilloire",
      "not-invented-here": "Pas Inventé Ici",
      "thought-terminating-cliche": "Cliché Qui Tue la Pensée",
      "continuum-fallacy": "Sophisme du Continuum",
      "historian-fallacy": "Sophisme de l'Historien",
      "mcnamara-fallacy": "Sophisme de McNamara",
      "survivorship-bias": "Biais du Survivant",
      "apex-fallacy": "Sophisme du Sommet",
      "kafka-trap-extended": "Piège de Kafka Étendu",
      "bulverism": "Bulvérisme",
      "courtiers-reply": "Réplique du Courtisan",
      "proving-too-much": "Prouver Trop",
      "loki-wager": "Pari de Loki",
      "motte-bailey-steelman": "Motte et Basse-cour Renforcé",
      "supervenience-error": "Erreur de Survenance",
      "willed-ignorance": "Ignorance Volontaire",
      "principle-of-explosion": "Principe d'Explosion",
      "is-ought": "Guillotine de Hume"
    }
  };

  // ---- Translated Fallacy Definitions ----
  var FALLACY_DEFS_I18N = {
    ar: {
      "ad-hominem": "مهاجمة الشخص الذي يطرح الحجة بدلاً من الحجة نفسها.",
      "straw-man": "تشويه حجة شخص ما لتسهيل مهاجمتها.",
      "appeal-to-authority": "الادعاء بأن شيئًا ما صحيح لأن شخصية ذات سلطة قالته، خاصة عندما لا تكون خبيرة في ذلك المجال.",
      "false-dilemma": "تقديم خيارين فقط بينما توجد بدائل أخرى.",
      "slippery-slope": "الادعاء بأن حدثًا واحدًا سيؤدي حتمًا إلى سلسلة من العواقب المتطرفة دون مبرر.",
      "red-herring": "تقديم موضوع غير ذي صلة لتحويل الانتباه عن القضية الأصلية.",
      "circular-reasoning": "استخدام الاستنتاج كمقدمة لنفس الحجة.",
      "bandwagon": "الادعاء بأن شيئًا ما صحيح أو جيد لأن كثيرًا من الناس يعتقدون ذلك أو يفعلونه.",
      "hasty-generalization": "استخلاص استنتاج واسع من عينة صغيرة أو غير ممثلة.",
      "appeal-to-emotion": "استخدام العواطف بدلاً من المنطق لإقناع شخص ما.",
      "tu-quoque": "الرد على الانتقاد بالإشارة إلى نفاق المنتقد بدلاً من معالجة الحجة.",
      "burden-of-proof": "نقل عبء الإثبات إلى الطرف الآخر بدلاً من إثبات ادعائك الخاص.",
      "appeal-to-nature": "الادعاء بأن شيئًا ما جيد لأنه طبيعي أو سيئ لأنه غير طبيعي.",
      "genetic-fallacy": "الحكم على شيء بناءً على أصله بدلاً من قيمته الحالية.",
      "false-cause": "افتراض أن العلاقة بين شيئين تعني أن أحدهما يسبب الآخر.",
      "appeal-to-tradition": "الادعاء بأن شيئًا ما صحيح أو أفضل لأنه تقليدي أو لأنه كان يُفعل دائمًا بهذه الطريقة.",
      "appeal-to-ignorance": "الادعاء بأن شيئًا ما صحيح لأنه لم يُثبت خطأه، أو العكس.",
      "no-true-scotsman": "تغيير تعريف مجموعة لاستبعاد الأمثلة المعارضة.",
      "equivocation": "استخدام كلمة بمعنيين مختلفين في نفس الحجة.",
      "loaded-question": "طرح سؤال يفترض مسبقًا شيئًا لم يُثبت بعد.",
      "false-equivalence": "معاملة شيئين مختلفين بشكل جوهري على أنهما متماثلان.",
      "cherry-picking": "اختيار البيانات أو الأمثلة التي تدعم حجتك مع تجاهل ما يعارضها.",
      "anecdotal": "استخدام تجربة شخصية أو مثال معزول كدليل لاستنتاج عام.",
      "composition-division": "افتراض أن ما ينطبق على الجزء ينطبق على الكل، أو العكس.",
      "middle-ground": "افتراض أن الحل الوسط بين موقفين متطرفين هو الأصح.",
      "texas-sharpshooter": "اختيار نمط من البيانات بعد وقوعها ثم الادعاء بأنه ذو دلالة.",
      "sunk-cost": "الاستمرار في فعل شيء بسبب الاستثمار السابق بدلاً من تقييم الفوائد المستقبلية.",
      "appeal-to-pity": "استخدام الشفقة أو التعاطف لكسب القبول بدلاً من تقديم حجة منطقية.",
      "black-or-white": "تقديم خيارين متطرفين فقط مع تجاهل الحلول الوسطى.",
      "begging-the-question": "تضمين الاستنتاج في المقدمة بدلاً من إثباته.",
      "appeal-to-fear": "استخدام الخوف أو التهديد لإقناع شخص بقبول حجة ما.",
      "post-hoc": "افتراض أن شيئًا ما سبب شيئًا آخر لمجرد أنه حدث قبله.",
      "gamblers-fallacy": "الاعتقاد بأن الأحداث العشوائية الماضية تؤثر على الاحتمالات المستقبلية.",
      "moving-goalposts": "تغيير معايير الإثبات باستمرار عند تلبية المعايير الأصلية.",
      "personal-incredulity": "رفض شيء لمجرد أنك لا تستطيع فهمه أو تخيله.",
      "ambiguity": "استخدام لغة غامضة أو مزدوجة المعنى لتضليل المحاور.",
      "affirming-consequent": "افتراض أنه إذا كان 'أ يؤدي إلى ب' وحدث 'ب'، فإن 'أ' قد حدث بالضرورة.",
      "denying-antecedent": "افتراض أنه إذا كان 'أ يؤدي إلى ب' ولم يحدث 'أ'، فإن 'ب' لم يحدث.",
      "appeal-to-consequences": "الادعاء بأن شيئًا ما صحيح أو خاطئ بناءً على عواقبه.",
      "spotlight": "افتراض أن الحالات التي تحظى باهتمام إعلامي تمثل الصورة الكاملة.",
      "moral-equivalence": "معاملة أفعال مختلفة أخلاقيًا على أنها متساوية.",
      "just-world": "الاعتقاد بأن الناس يستحقون ما يحصلون عليه دائمًا.",
      "nirvana-fallacy": "رفض حل عملي لأنه ليس مثاليًا.",
      "etymological-fallacy": "افتراض أن المعنى الحقيقي لكلمة ما هو أصلها الاشتقاقي.",
      "reification": "معاملة مفهوم مجرد كما لو كان شيئًا ملموسًا.",
      "kafka-trap": "الادعاء بأن إنكار الاتهام يثبت صحته.",
      "motte-and-bailey": "التراجع من موقف جريء إلى موقف أكثر أمانًا عند التحدي ثم العودة.",
      "gish-gallop": "إغراق الخصم بعدد كبير من الحجج بغض النظر عن دقتها.",
      "kettle-logic": "استخدام عدة حجج متناقضة للدفاع عن نفس النقطة.",
      "not-invented-here": "رفض فكرة أو منتج لمجرد أنه جاء من مصدر خارجي.",
      "thought-terminating-cliche": "استخدام عبارة مبتذلة لإنهاء النقاش دون معالجة الحجة.",
      "continuum-fallacy": "رفض التمييز لأن الحدود بين الفئات غير واضحة.",
      "historian-fallacy": "الحكم على قرارات الماضي باستخدام معلومات لم تكن متاحة وقتها.",
      "mcnamara-fallacy": "الاعتماد فقط على ما يمكن قياسه وتجاهل ما لا يمكن قياسه.",
      "survivorship-bias": "التركيز على الناجحين وتجاهل الفاشلين عند استخلاص النتائج.",
      "apex-fallacy": "الحكم على مجموعة بأكملها بناءً على أعضائها الأكثر نجاحًا.",
      "kafka-trap-extended": "بنية جدلية حيث أي استجابة تُعتبر تأكيدًا للاتهام الأصلي.",
      "bulverism": "افتراض أن شخصًا ما مخطئ ثم شرح لماذا يعتقد ذلك بدلاً من إثبات خطأه.",
      "courtiers-reply": "رفض النقد بادعاء أن الناقد يفتقر إلى المعرفة الكافية.",
      "proving-too-much": "حجة تثبت أكثر مما كان مقصودًا مما يؤدي إلى استنتاجات سخيفة.",
      "loki-wager": "رفض النقاش لأن المصطلح لا يمكن تعريفه بشكل مثالي.",
      "motte-bailey-steelman": "التبديل بين نسخة قوية وضعيفة من الحجة بشكل استراتيجي.",
      "supervenience-error": "الخلط بين مستويات مختلفة من التفسير أو الوصف.",
      "willed-ignorance": "رفض النظر في الأدلة أو الحجج التي قد تتعارض مع معتقداتك.",
      "principle-of-explosion": "استنتاج أي شيء من مقدمات متناقضة.",
      "is-ought": "استنتاج ما يجب أن يكون مما هو كائن فعلاً."
    },
    fr: {
      "ad-hominem": "Attaquer la personne qui avance l'argument plutôt que l'argument lui-même.",
      "straw-man": "Déformer l'argument de quelqu'un pour le rendre plus facile à attaquer.",
      "appeal-to-authority": "Affirmer que quelque chose est vrai parce qu'une figure d'autorité l'a dit, surtout quand elle n'est pas experte dans ce domaine.",
      "false-dilemma": "Présenter seulement deux options alors que d'autres alternatives existent.",
      "slippery-slope": "Affirmer qu'un événement mènera inévitablement à une chaîne de conséquences extrêmes sans justification.",
      "red-herring": "Introduire un sujet sans rapport pour détourner l'attention du problème original.",
      "circular-reasoning": "Utiliser la conclusion comme prémisse du même argument.",
      "bandwagon": "Affirmer que quelque chose est vrai ou bon parce que beaucoup de gens le croient ou le font.",
      "hasty-generalization": "Tirer une conclusion large à partir d'un échantillon petit ou non représentatif.",
      "appeal-to-emotion": "Utiliser les émotions au lieu de la logique pour convaincre quelqu'un.",
      "tu-quoque": "Répondre à une critique en soulignant l'hypocrisie du critique au lieu de traiter l'argument.",
      "burden-of-proof": "Transférer la charge de la preuve à l'autre partie au lieu de prouver sa propre affirmation.",
      "appeal-to-nature": "Affirmer que quelque chose est bon parce que c'est naturel, ou mauvais parce que c'est artificiel.",
      "genetic-fallacy": "Juger quelque chose en fonction de son origine plutôt que de sa valeur actuelle.",
      "false-cause": "Supposer que la corrélation entre deux choses signifie que l'une cause l'autre.",
      "appeal-to-tradition": "Affirmer que quelque chose est vrai ou meilleur parce que c'est traditionnel ou que ça a toujours été fait ainsi.",
      "appeal-to-ignorance": "Affirmer que quelque chose est vrai parce qu'il n'a pas été prouvé faux, ou vice versa.",
      "no-true-scotsman": "Modifier la définition d'un groupe pour exclure les contre-exemples.",
      "equivocation": "Utiliser un mot avec deux sens différents dans le même argument.",
      "loaded-question": "Poser une question qui présuppose quelque chose qui n'a pas encore été prouvé.",
      "false-equivalence": "Traiter deux choses fondamentalement différentes comme si elles étaient identiques.",
      "cherry-picking": "Sélectionner les données ou exemples qui soutiennent votre argument tout en ignorant ceux qui le contredisent.",
      "anecdotal": "Utiliser une expérience personnelle ou un exemple isolé comme preuve d'une conclusion générale.",
      "composition-division": "Supposer que ce qui est vrai pour la partie est vrai pour le tout, ou inversement.",
      "middle-ground": "Supposer que le compromis entre deux positions extrêmes est le plus correct.",
      "texas-sharpshooter": "Sélectionner un modèle dans les données après coup puis prétendre qu'il est significatif.",
      "sunk-cost": "Continuer quelque chose en raison de l'investissement passé au lieu d'évaluer les avantages futurs.",
      "appeal-to-pity": "Utiliser la pitié ou la sympathie pour obtenir l'acceptation au lieu de présenter un argument logique.",
      "black-or-white": "Présenter seulement deux options extrêmes tout en ignorant les solutions intermédiaires.",
      "begging-the-question": "Inclure la conclusion dans la prémisse au lieu de la prouver.",
      "appeal-to-fear": "Utiliser la peur ou les menaces pour convaincre quelqu'un d'accepter un argument.",
      "post-hoc": "Supposer que quelque chose a causé autre chose simplement parce qu'il s'est produit avant.",
      "gamblers-fallacy": "Croire que les événements aléatoires passés affectent les probabilités futures.",
      "moving-goalposts": "Changer continuellement les critères de preuve lorsque les critères originaux sont satisfaits.",
      "personal-incredulity": "Rejeter quelque chose simplement parce que vous ne pouvez pas le comprendre ou l'imaginer.",
      "ambiguity": "Utiliser un langage vague ou ambigu pour induire en erreur.",
      "affirming-consequent": "Supposer que si 'A implique B' et que 'B' se produit, alors 'A' s'est nécessairement produit.",
      "denying-antecedent": "Supposer que si 'A implique B' et que 'A' ne se produit pas, alors 'B' ne se produit pas.",
      "appeal-to-consequences": "Affirmer que quelque chose est vrai ou faux en fonction de ses conséquences.",
      "spotlight": "Supposer que les cas qui reçoivent l'attention médiatique représentent le tableau complet.",
      "moral-equivalence": "Traiter des actions moralement différentes comme si elles étaient égales.",
      "just-world": "Croire que les gens méritent toujours ce qui leur arrive.",
      "nirvana-fallacy": "Rejeter une solution pratique parce qu'elle n'est pas parfaite.",
      "etymological-fallacy": "Supposer que le vrai sens d'un mot est son origine étymologique.",
      "reification": "Traiter un concept abstrait comme s'il était quelque chose de concret.",
      "kafka-trap": "Affirmer que nier une accusation prouve sa véracité.",
      "motte-and-bailey": "Se replier d'une position audacieuse vers une position plus sûre lorsqu'on est contesté, puis revenir.",
      "gish-gallop": "Submerger l'adversaire d'un grand nombre d'arguments quelle que soit leur exactitude.",
      "kettle-logic": "Utiliser plusieurs arguments contradictoires pour défendre le même point.",
      "not-invented-here": "Rejeter une idée ou un produit simplement parce qu'il provient d'une source externe.",
      "thought-terminating-cliche": "Utiliser un cliché pour mettre fin au débat sans traiter l'argument.",
      "continuum-fallacy": "Rejeter une distinction parce que les frontières entre les catégories ne sont pas nettes.",
      "historian-fallacy": "Juger les décisions passées en utilisant des informations qui n'étaient pas disponibles à l'époque.",
      "mcnamara-fallacy": "Se fier uniquement à ce qui peut être mesuré et ignorer ce qui ne peut pas l'être.",
      "survivorship-bias": "Se concentrer sur les succès et ignorer les échecs lors de l'analyse des résultats.",
      "apex-fallacy": "Juger un groupe entier en se basant sur ses membres les plus performants.",
      "kafka-trap-extended": "Une structure argumentative où toute réponse est considérée comme une confirmation de l'accusation originale.",
      "bulverism": "Supposer que quelqu'un a tort puis expliquer pourquoi il le croit au lieu de prouver qu'il a tort.",
      "courtiers-reply": "Rejeter une critique en affirmant que le critique manque de connaissances suffisantes.",
      "proving-too-much": "Un argument qui prouve plus que ce qui était prévu, menant à des conclusions absurdes.",
      "loki-wager": "Refuser de débattre parce que le terme ne peut pas être parfaitement défini.",
      "motte-bailey-steelman": "Alterner stratégiquement entre une version forte et faible d'un argument.",
      "supervenience-error": "Confondre différents niveaux d'explication ou de description.",
      "willed-ignorance": "Refuser de considérer les preuves ou arguments qui pourraient contredire vos croyances.",
      "principle-of-explosion": "Déduire n'importe quoi à partir de prémisses contradictoires.",
      "is-ought": "Déduire ce qui devrait être de ce qui est."
    }
  };

  // ---- Current Language ----
  var currentLang = "en";

  function initLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved && UI[saved]) {
        currentLang = saved;
      }
    } catch (e) {
      // ignore
    }
    applyLangDirection();
  }

  function getLang() {
    return currentLang;
  }

  function setLang(lang) {
    if (!UI[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      // ignore
    }
    applyLangDirection();
  }

  function applyLangDirection() {
    var html = document.documentElement;
    if (currentLang === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else if (currentLang === "fr") {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "fr");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "en");
    }
    buildCategoryMap();
  }

  // ---- Translation Function ----
  function t(key) {
    var dict = UI[currentLang] || UI.en;
    return dict[key] !== undefined ? dict[key] : (UI.en[key] !== undefined ? UI.en[key] : key);
  }

  // ---- Get Translated Level Info ----
  function getLevelInfo(level) {
    var base = window.LEVEL_INFO[level];
    if (!base) return base;
    var i18nData = LEVEL_INFO_I18N[currentLang];
    if (i18nData && i18nData[level]) {
      return {
        name: i18nData[level].name,
        description: i18nData[level].description,
        icon: base.icon,
        color: base.color
      };
    }
    return base;
  }

  // ---- Get Translated Categories ----
  function getCategories() {
    return CATEGORIES_I18N[currentLang] || CATEGORIES_I18N.en;
  }

  // ---- Translate Category (from English key) ----
  function translateCategory(enCategory) {
    return CATEGORY_MAP[enCategory] || enCategory;
  }

  // ---- Get Translated Fallacy Name ----
  function getFallacyName(fallacy) {
    if (currentLang === "en") return fallacy.name;
    var names = FALLACY_NAMES_I18N[currentLang];
    return (names && names[fallacy.id]) || fallacy.name;
  }

  // ---- Get Translated Fallacy Definition ----
  function getFallacyDefinition(fallacy) {
    if (currentLang === "en") return fallacy.definition;
    var defs = FALLACY_DEFS_I18N[currentLang];
    return (defs && defs[fallacy.id]) || fallacy.definition;
  }

  // ---- Translate static HTML elements ----
  function translateStaticElements() {
    var elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var translated = t(key);
      if (el.tagName === "INPUT") {
        el.placeholder = translated;
      } else {
        el.textContent = translated;
      }
    });
  }

  // ---- Export to window ----
  buildCategoryMap();

  window.I18N = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    initLang: initLang,
    getLevelInfo: getLevelInfo,
    getCategories: getCategories,
    translateCategory: translateCategory,
    getFallacyName: getFallacyName,
    getFallacyDefinition: getFallacyDefinition,
    translateStaticElements: translateStaticElements
  };
})();
