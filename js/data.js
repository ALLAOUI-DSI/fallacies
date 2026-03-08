// Logical Fallacies Dataset
// Progressive learning: Level 1 (Beginner) → Level 4 (Expert)

window.LEVEL_INFO = {
  1: { name: "Beginner", description: "Common fallacies you encounter every day. Easy to spot once you know them.", icon: "🌱", color: "#22c55e" },
  2: { name: "Intermediate", description: "More subtle fallacies that require careful thinking to identify.", icon: "🌿", color: "#f59e0b" },
  3: { name: "Advanced", description: "Complex fallacies often used in professional and academic debates.", icon: "🌳", color: "#ef4444" },
  4: { name: "Expert", description: "Sophisticated rhetorical techniques that are very difficult to detect.", icon: "🏆", color: "#a855f7" }
};

window.CATEGORIES = ["Relevance", "Presumption", "Ambiguity", "Causal", "Formal", "Emotional Appeal"];

window.FALLACIES_DATA = [
  // ============ LEVEL 1 — BEGINNER ============
  {
    id: "ad-hominem",
    name: "Ad Hominem",
    category: "Relevance",
    level: 1,
    definition: "Attacking the person making the argument rather than the argument itself.",
    description: "Instead of addressing someone's point, you attack their character, background, or personal traits.\n\nThis is fallacious because the truth of a claim doesn't depend on who says it. Even a flawed person can make a valid argument.",
    examples: [
      { text: "You can't trust John's opinion on climate change — he didn't even finish college.", explanation: "John's education level doesn't determine whether his specific argument about climate change is true or false." },
      { text: "Why should we listen to her dietary advice? She's overweight herself!", explanation: "A person's own health doesn't invalidate nutritional facts they might present." },
      { text: "Of course he supports tax cuts — he's a millionaire. His argument is worthless.", explanation: "Someone's wealth doesn't automatically make their economic reasoning incorrect." },
      { text: "She's too young to have a valid opinion on politics.", explanation: "Age alone doesn't determine the quality of a political argument." }
    ],
    quizScenarios: [
      { text: "\"Dr. Smith's research on vaccines is unreliable because she was once fined for a parking violation.\"\n\n\"If she breaks one law, we should ignore everything she publishes.\"", explanation: "This attacks Dr. Smith's character (a minor legal issue) instead of addressing her actual research findings." },
      { text: "\"You think we should protect the environment? That's rich coming from someone who drives an SUV.\"", explanation: "The speaker's personal choices don't invalidate the environmental argument being made." },
      { text: "\"My opponent says we need better schools, but he was a C student himself. How can we take him seriously?\"", explanation: "Past academic performance doesn't make an argument about education policy wrong." }
    ]
  },
  {
    id: "straw-man",
    name: "Straw Man",
    category: "Relevance",
    level: 1,
    definition: "Misrepresenting someone's argument to make it easier to attack.",
    description: "You distort, exaggerate, or oversimplify someone's position, then argue against that distorted version. It's called a 'straw man' because you're fighting a fake, weaker version of the real argument — like a scarecrow instead of a real person.",
    examples: [
      { text: "Person A: 'We should have stricter gun regulations.' Person B: 'Why do you want to ban all guns and leave people defenseless?'", explanation: "Person A said 'stricter regulations,' not 'ban all guns.' Person B distorted the argument." },
      { text: "Person A: 'I think kids should spend less time on social media.' Person B: 'So you want to cut kids off from all technology and go back to the Stone Age?'", explanation: "Reducing social media time is very different from eliminating all technology." },
      { text: "Person A: 'We should consider a vegetarian option in the cafeteria.' Person B: 'Why are you trying to force everyone to stop eating meat?'", explanation: "Offering an option is not the same as forcing a dietary change on everyone." }
    ],
    quizScenarios: [
      { text: "\"Senator Jones says we should invest more in diplomacy. Clearly, she wants to gut our military and leave the country undefended.\"", explanation: "Investing in diplomacy doesn't mean eliminating the military. The argument is distorted into an extreme position." },
      { text: "\"My professor suggested we read more diverse authors. So basically he thinks all classic literature is worthless garbage.\"", explanation: "Suggesting more diversity doesn't mean rejecting classics. This exaggerates the original suggestion." },
      { text: "\"You want to raise the minimum wage? So you want to destroy small businesses and crash the economy!\"", explanation: "Supporting a minimum wage increase is twisted into wanting economic destruction." }
    ]
  },
  {
    id: "appeal-to-authority",
    name: "Appeal to Authority",
    category: "Relevance",
    level: 1,
    definition: "Claiming something is true because an authority figure said it, especially when they're not an expert in that field.",
    description: "While expert opinions matter, this fallacy occurs when someone cites an authority who isn't qualified in the relevant area, or treats an authority's word as absolute proof. A celebrity endorsing a medical treatment isn't the same as a medical study proving it works.",
    examples: [
      { text: "This diet pill must work — a famous actor endorses it!", explanation: "Being a famous actor doesn't make someone a nutrition or medical expert." },
      { text: "A Nobel Prize-winning physicist says this economic policy is best, so it must be true.", explanation: "Expertise in physics doesn't transfer to expertise in economics." },
      { text: "My doctor says we should invest in real estate, so it must be a good financial decision.", explanation: "Medical expertise doesn't qualify someone as a financial advisor." }
    ],
    quizScenarios: [
      { text: "\"This cryptocurrency is a great investment — Elon Musk tweeted about it!\"", explanation: "A tech CEO's tweet doesn't constitute reliable financial analysis, regardless of their business success." },
      { text: "\"Professor Williams, who teaches English literature, says that nuclear power is completely safe. So we shouldn't worry about it at all.\"", explanation: "An English professor's opinion on nuclear safety carries no more weight than any non-expert's view." },
      { text: "\"My dentist says this political candidate is the best choice. I trust my dentist, so I'll vote for them.\"", explanation: "Dental expertise doesn't translate to political expertise." }
    ]
  },
  {
    id: "false-dilemma",
    name: "False Dilemma",
    category: "Presumption",
    level: 1,
    definition: "Presenting only two options when more alternatives actually exist.",
    description: "Also called a 'false dichotomy' or 'either/or fallacy.' It forces a choice between two extremes, ignoring the middle ground or other possibilities. Real life rarely offers only two choices — most issues have a spectrum of possible solutions.",
    examples: [
      { text: "You're either with us or against us.", explanation: "There are many positions between full support and opposition — neutrality, partial agreement, etc." },
      { text: "Either we ban all social media or we accept that kids will be cyberbullied. There's no other option.", explanation: "Many solutions exist between a total ban and no action: education, moderation tools, age restrictions, etc." },
      { text: "You either support unlimited free speech or you're in favor of censorship.", explanation: "There are nuanced positions, like supporting free speech with reasonable limits." }
    ],
    quizScenarios: [
      { text: "\"We either cut all funding for the arts or we go bankrupt as a city. Those are our only two choices.\"", explanation: "There are many budget options between eliminating arts funding entirely and going bankrupt." },
      { text: "\"You can either work 80 hours a week or be a failure. There's no in-between.\"", explanation: "Success is not binary, and there are many work-life balance configurations that lead to fulfillment." },
      { text: "\"Either you believe everything the government says, or you're a conspiracy theorist.\"", explanation: "There's a wide range between blind trust and conspiracy theories — healthy skepticism exists." }
    ]
  },
  {
    id: "slippery-slope",
    name: "Slippery Slope",
    category: "Causal",
    level: 1,
    definition: "Claiming that one event will inevitably lead to a chain of increasingly extreme consequences without justification.",
    description: "This fallacy assumes that taking one step will unavoidably lead to a series of negative events, like falling down a slippery hill. While chain reactions can happen, the fallacy occurs when the links between events aren't supported by evidence. Each step in the chain needs its own justification.",
    examples: [
      { text: "If we allow students to redo one test, soon they'll want to redo every assignment, and eventually nobody will study at all.", explanation: "One accommodation doesn't automatically lead to the collapse of all academic standards." },
      { text: "If we legalize marijuana, next people will want to legalize all drugs, and society will collapse.", explanation: "Each policy change is an independent decision — legalizing one substance doesn't require legalizing all." },
      { text: "If you skip one day of exercise, you'll lose your motivation, stop working out entirely, and become unhealthy.", explanation: "Missing one workout doesn't inevitably lead to abandoning fitness altogether." }
    ],
    quizScenarios: [
      { text: "\"If we let employees work from home on Fridays, soon they'll want every day remote, then they'll stop showing up to meetings, and eventually the company will fall apart.\"", explanation: "Each step in this chain is assumed without evidence. Friday remote work doesn't inevitably lead to company collapse." },
      { text: "\"If we allow phones in classrooms for educational purposes, students will start gaming, then they'll stop paying attention entirely, and test scores will plummet to zero.\"", explanation: "Allowing limited phone use doesn't automatically trigger an unstoppable chain of negative academic outcomes." }
    ]
  },
  {
    id: "red-herring",
    name: "Red Herring",
    category: "Relevance",
    level: 1,
    definition: "Introducing an irrelevant topic to divert attention from the original issue.",
    description: "Named after the practice of dragging a smoked fish across a trail to throw hunting dogs off the scent. In arguments, a red herring changes the subject to something that seems related but actually avoids the real issue. It's a distraction tactic.",
    examples: [
      { text: "Why worry about pollution from our factory? Look at all the jobs we've created!", explanation: "Job creation, while important, doesn't address the pollution concern." },
      { text: "You say I was speeding, but what about all the other drivers who speed? Why single me out?", explanation: "Others' speeding doesn't change whether you were speeding." },
      { text: "We shouldn't discuss the CEO's salary increase when there are children starving in the world.", explanation: "World hunger, while serious, is unrelated to the discussion about CEO compensation." }
    ],
    quizScenarios: [
      { text: "\"You're asking about our data privacy practices? Let me tell you about our amazing new product features and how they help customers!\"", explanation: "Product features are irrelevant to data privacy concerns. The topic is deliberately changed." },
      { text: "\"Critics say our education budget is too low. But let's talk about how our sports teams are performing better than ever!\"", explanation: "Sports performance doesn't address the adequacy of education funding." },
      { text: "\"You want to discuss my missed deadlines? Well, I think we should focus on how Lisa is always late to meetings.\"", explanation: "Lisa's punctuality is irrelevant to the discussion about your missed deadlines." }
    ]
  },
  {
    id: "bandwagon",
    name: "Bandwagon (Ad Populum)",
    category: "Relevance",
    level: 1,
    definition: "Arguing that something is true or good because many people believe it or do it.",
    description: "Just because something is popular doesn't make it correct or wise. Throughout history, the majority has been wrong about many things. The number of believers doesn't determine truth — evidence and reasoning do.",
    examples: [
      { text: "Everyone is buying cryptocurrency, so it must be a great investment.", explanation: "Popularity doesn't determine investment quality. Many popular investments have failed." },
      { text: "Millions of people believe in astrology, so there must be something to it.", explanation: "The number of believers doesn't provide scientific evidence for astrology." },
      { text: "This restaurant always has a long line, so the food must be amazing.", explanation: "Popularity can be due to marketing, location, or trends — not necessarily food quality." }
    ],
    quizScenarios: [
      { text: "\"Nine out of ten of my friends think this movie is the best ever made. You should watch it — it's clearly a masterpiece.\"", explanation: "Your friends' opinions, even if numerous, don't objectively determine a film's quality." },
      { text: "\"Over 50 million people have downloaded this app. It must be safe and trustworthy!\"", explanation: "Download numbers don't guarantee an app's security or trustworthiness." },
      { text: "\"Most people in our office skip the safety protocols, so they're probably unnecessary.\"", explanation: "Widespread non-compliance doesn't mean safety protocols are unneeded." }
    ]
  },
  {
    id: "appeal-to-emotion",
    name: "Appeal to Emotion",
    category: "Emotional Appeal",
    level: 1,
    definition: "Using emotional manipulation instead of logical reasoning to win an argument.",
    description: "This fallacy replaces evidence and logic with emotional triggers like fear, pity, anger, or flattery. While emotions are a natural part of decision-making, they shouldn't be the sole basis for concluding something is true or making important decisions.",
    examples: [
      { text: "Think of the children! We can't allow this policy to pass!", explanation: "Invoking concern for children without explaining how the policy actually harms them is emotional manipulation." },
      { text: "If you don't donate, this puppy will suffer. Don't you care about animals?", explanation: "Using guilt and emotional imagery doesn't address whether the charity is effective or legitimate." },
      { text: "How can you support immigration reform when families are being separated? Have you no heart?", explanation: "The emotional appeal doesn't engage with the specifics of the reform being proposed." }
    ],
    quizScenarios: [
      { text: "\"Vote for this bill or you clearly don't care about our brave veterans who sacrificed everything for our freedom.\"", explanation: "Using respect for veterans as emotional leverage doesn't address whether the specific bill is well-designed." },
      { text: "\"You would understand my business proposal if you could see my children's faces when I told them Daddy's company might fail.\"", explanation: "The emotional story about children doesn't make the business proposal sound or viable." }
    ]
  },
  {
    id: "appeal-to-fear",
    name: "Appeal to Fear",
    category: "Emotional Appeal",
    level: 1,
    definition: "Using fear or threats to persuade rather than evidence and logic.",
    description: "Also called 'argumentum ad metum,' this fallacy tries to scare people into accepting a conclusion. Instead of presenting evidence, it creates anxiety about the consequences of disagreeing. Fear can cloud judgment and make irrational choices seem reasonable.",
    examples: [
      { text: "If you don't buy this security system, your family could be in danger tonight!", explanation: "Using fear of home invasion to pressure a purchase isn't a logical argument for the product's value." },
      { text: "If you don't support this law, terrorists will attack us!", explanation: "Fear of terrorism doesn't demonstrate that this specific law is effective or necessary." },
      { text: "If you question the company's direction, you might find yourself out of a job.", explanation: "This is a veiled threat, not a logical response to constructive criticism." }
    ],
    quizScenarios: [
      { text: "\"If we don't pass this surveillance bill immediately, we are guaranteed to suffer a catastrophic attack within the year.\"", explanation: "This uses fear of an attack to rush a decision without presenting evidence that the bill would prevent such an event." },
      { text: "\"Buy our insurance plan now, or you could lose everything you own in a disaster tomorrow!\"", explanation: "While insurance is important, using scare tactics about imminent disaster replaces rational evaluation of the policy." }
    ]
  },

  // ============ LEVEL 2 — INTERMEDIATE ============
  {
    id: "circular-reasoning",
    name: "Circular Reasoning",
    category: "Presumption",
    level: 2,
    definition: "Using the conclusion as a premise — the argument goes in a circle.",
    description: "Also called 'begging the question.' The conclusion is assumed in one of the premises. It's like saying 'this is true because it's true.' The argument feels logical but never actually proves anything because it relies on itself for support.",
    examples: [
      { text: "The Bible is true because it's the word of God, and we know it's the word of God because the Bible says so.", explanation: "The Bible's truth is used to prove it's God's word, and God's word is used to prove it's true — a perfect circle." },
      { text: "She's a good leader because she has great leadership qualities.", explanation: "This just restates the claim in different words without providing evidence." },
      { text: "Organic food is healthier because it's better for you.", explanation: "'Healthier' and 'better for you' mean the same thing — no actual evidence is given." },
      { text: "He's clearly the most qualified candidate because no one is more qualified than he is.", explanation: "This restates 'most qualified' in different words without giving independent evidence." }
    ],
    quizScenarios: [
      { text: "\"Freedom of speech is important because people should be able to say what they want.\"", explanation: "'People should be able to say what they want' is just a restatement of 'freedom of speech is important' — no independent reason is given." },
      { text: "\"This company is successful because it does things that make it successful.\"", explanation: "The conclusion (company is successful) is restated as the premise, providing no real explanation." },
      { text: "\"We know the witness is trustworthy because he gave a credible testimony, and we know the testimony is credible because the witness is trustworthy.\"", explanation: "Trustworthiness is used to prove credibility and credibility to prove trustworthiness — circular logic." }
    ]
  },
  {
    id: "hasty-generalization",
    name: "Hasty Generalization",
    category: "Presumption",
    level: 2,
    definition: "Drawing a broad conclusion from a small or unrepresentative sample.",
    description: "Making sweeping claims based on limited evidence. If you meet one rude person from a city and conclude everyone there is rude, that's a hasty generalization. Good conclusions require adequate and representative evidence.",
    examples: [
      { text: "I met two rude people from New York, so all New Yorkers must be rude.", explanation: "Two people out of millions isn't enough to generalize about an entire city's population." },
      { text: "My last two iPhones had problems, so Apple makes terrible products.", explanation: "Two devices don't represent the quality of all Apple products across millions of units." },
      { text: "I tried sushi once and didn't like it, so all Japanese food is bad.", explanation: "One dish doesn't represent an entire cuisine with thousands of different dishes." }
    ],
    quizScenarios: [
      { text: "\"I asked three coworkers and they all prefer working from home. Clearly, every employee in the company wants to go fully remote.\"", explanation: "Three coworkers out of an entire company is far too small a sample to draw a company-wide conclusion." },
      { text: "\"Both times I visited Paris, it rained. Paris must have terrible weather all the time.\"", explanation: "Two visits don't represent the full range of Paris's weather patterns across all seasons." },
      { text: "\"My neighbor's electric car broke down, so electric vehicles are unreliable.\"", explanation: "One car's experience doesn't represent the reliability of all electric vehicles." }
    ]
  },
  {
    id: "tu-quoque",
    name: "Tu Quoque (You Too)",
    category: "Relevance",
    level: 2,
    definition: "Dismissing someone's argument by pointing out that they don't practice what they preach.",
    description: "Latin for 'you too' or 'you also.' Instead of addressing the argument, you point out that the person making it is guilty of the same thing. But someone's hypocrisy doesn't make their argument wrong — a doctor who smokes can still be right that smoking is unhealthy.",
    examples: [
      { text: "You say I should eat healthier, but I've seen you eating fast food!", explanation: "The other person's eating habits don't change whether the health advice is valid." },
      { text: "Don't lecture me about being late — you were late just last week!", explanation: "Someone else's tardiness doesn't make your own lateness acceptable." },
      { text: "The government says we should reduce carbon emissions, but government buildings waste energy all the time.", explanation: "Government hypocrisy doesn't invalidate the science behind reducing emissions." }
    ],
    quizScenarios: [
      { text: "\"My parent told me I should read more books. But they watch TV every evening! Why should I listen?\"", explanation: "Your parent's TV habits don't change whether reading more would benefit you. The advice stands on its own merits." },
      { text: "\"The company CEO says employees should be more environmentally conscious, but she flies in a private jet. Her point is clearly invalid.\"", explanation: "The CEO's personal carbon footprint doesn't determine whether environmental consciousness is important." }
    ]
  },
  {
    id: "appeal-to-ignorance",
    name: "Appeal to Ignorance",
    category: "Presumption",
    level: 2,
    definition: "Claiming something is true because it hasn't been proven false, or false because it hasn't been proven true.",
    description: "Absence of evidence is not evidence of absence (or presence). Just because we can't prove aliens don't exist doesn't mean they do. And just because we haven't proven they exist doesn't mean they don't. The burden of proof lies with the person making the claim.",
    examples: [
      { text: "Nobody has proven that ghosts don't exist, so they must be real.", explanation: "The lack of disproof doesn't serve as proof of existence." },
      { text: "There's no evidence this food additive is harmful, so it must be perfectly safe.", explanation: "Lack of evidence of harm isn't the same as evidence of safety — it might just be understudied." },
      { text: "No one has proven that this ancient remedy doesn't work, so it must be effective.", explanation: "The absence of disproving studies doesn't prove a remedy works." }
    ],
    quizScenarios: [
      { text: "\"Scientists haven't proven that this chemical causes cancer, so it's completely safe to use in our products.\"", explanation: "Not yet having evidence of harm is different from having evidence of safety. The chemical may simply be understudied." },
      { text: "\"You can't prove that my business plan won't succeed, so it's definitely going to work!\"", explanation: "The inability to disprove future success doesn't constitute evidence that the plan is viable." }
    ]
  },
  {
    id: "post-hoc",
    name: "False Cause (Post Hoc)",
    category: "Causal",
    level: 2,
    definition: "Assuming that because one event followed another, the first event caused the second.",
    description: "Latin: 'post hoc, ergo propter hoc' (after this, therefore because of this). Just because B happened after A doesn't mean A caused B. Correlation doesn't equal causation. A rooster crowing before sunrise doesn't cause the sun to rise.",
    examples: [
      { text: "I wore my lucky socks and we won the game, so my socks caused the win.", explanation: "The timing is coincidental — socks have no causal power over athletic performance." },
      { text: "Crime rates dropped after we installed new street lights. The lights must have reduced crime.", explanation: "Many other factors could explain the drop — seasonal changes, increased policing, economic improvements, etc." },
      { text: "I started taking vitamin C and my cold went away in a week. Vitamin C cured my cold!", explanation: "Colds typically last about a week regardless — the timing of recovery doesn't prove the vitamin was the cause." }
    ],
    quizScenarios: [
      { text: "\"Since we changed our company logo last quarter, our sales have increased 20%. The new logo is clearly driving more sales.\"", explanation: "Sales increase could be due to many factors: seasonal trends, marketing campaigns, economic conditions. The logo change simply preceded it." },
      { text: "\"Every time I wash my car, it rains the next day. Washing my car must cause rain.\"", explanation: "Car washing and weather are unrelated events. The temporal sequence is coincidental, not causal." },
      { text: "\"I got a promotion right after I started meditating. Meditation must be the key to career success.\"", explanation: "The promotion may have been due to work performance, timing, or other factors unrelated to meditation." }
    ]
  },
  {
    id: "loaded-question",
    name: "Loaded Question",
    category: "Presumption",
    level: 2,
    definition: "Asking a question that contains an unproven assumption built into it.",
    description: "A loaded question presupposes something that hasn't been established. The classic example is 'Have you stopped beating your wife?' — answering either yes or no admits to having beaten your wife. The question is rigged so any direct answer supports the hidden assumption.",
    examples: [
      { text: "Why do you hate freedom?", explanation: "This presumes the person hates freedom, which hasn't been established." },
      { text: "When did you stop cheating on your taxes?", explanation: "This assumes the person was cheating on taxes. Both 'I stopped last year' and 'I haven't stopped' confirm cheating." },
      { text: "Why is your company's product so inferior to ours?", explanation: "This assumes inferiority as a fact rather than arguing for it." }
    ],
    quizScenarios: [
      { text: "\"Why does your party want to destroy the economy?\"", explanation: "This question assumes the party wants to destroy the economy — a claim that hasn't been established. Any direct answer accepts the false premise." },
      { text: "\"Don't you think it's time you admitted your plan is a failure?\"", explanation: "This assumes the plan has failed, forcing the respondent to argue against the embedded assumption instead of the actual question." }
    ]
  },
  {
    id: "no-true-scotsman",
    name: "No True Scotsman",
    category: "Presumption",
    level: 2,
    definition: "Redefining criteria to exclude counterexamples and protect a generalization.",
    description: "When faced with a counterexample to a universal claim, instead of accepting it, you change the definition to exclude it. 'No Scotsman puts sugar on his porridge.' 'But Angus does.' 'Well, no TRUE Scotsman puts sugar on his porridge.' The goalposts keep moving.",
    examples: [
      { text: "No real programmer uses that language. — But Tim uses it and he's a programmer. — Well, no REAL programmer would use it.", explanation: "The definition of 'real programmer' is being changed to exclude the counterexample." },
      { text: "True artists don't care about money. — But Picasso was very business-savvy. — Well, he wasn't a true artist then.", explanation: "Picasso is a widely recognized artist; redefining 'true artist' to exclude him is arbitrary." },
      { text: "No good parent would let their child eat candy. — My parents did, and they're great parents. — Then they weren't truly good parents.", explanation: "The definition of 'good parent' is shifted to maintain the original claim." }
    ],
    quizScenarios: [
      { text: "\"Real entrepreneurs never fail.\" \"But Steve Jobs was fired from Apple.\" \"Well, at that point he wasn't acting as a real entrepreneur.\"", explanation: "The definition of 'real entrepreneur' is modified to exclude a clear counterexample, protecting the original claim from being disproven." },
      { text: "\"No dedicated employee would ever take a mental health day.\" \"Sarah is very dedicated and she took one last month.\" \"Then she's not truly dedicated.\"", explanation: "The criteria for 'dedicated employee' are changed ad hoc to exclude the counterexample." }
    ]
  },
  {
    id: "equivocation",
    name: "Equivocation",
    category: "Ambiguity",
    level: 2,
    definition: "Using a word with multiple meanings in different parts of the argument as if it means the same thing throughout.",
    description: "A word shifts meaning during the argument, making the conclusion misleading. For example, 'right' can mean 'correct' or 'a moral entitlement.' Using both meanings interchangeably creates a flawed argument that only seems logical.",
    examples: [
      { text: "A feather is light. What is light cannot be dark. Therefore, a feather cannot be dark.", explanation: "'Light' shifts from meaning 'not heavy' to meaning 'not dark' — two completely different meanings." },
      { text: "The sign said 'fine for parking here,' so I parked. It must be fine!", explanation: "'Fine' as a penalty vs. 'fine' as acceptable — two different meanings." },
      { text: "Evolution is just a theory, so it's basically a guess.", explanation: "In science, 'theory' means a well-tested explanation. In everyday language, it means a guess. These are very different." },
      { text: "Nothing is better than eternal happiness. A ham sandwich is better than nothing. Therefore, a ham sandwich is better than eternal happiness.", explanation: "'Nothing' shifts from meaning 'no thing' to 'the absence of anything,' creating a nonsensical logical chain." }
    ],
    quizScenarios: [
      { text: "\"The law says you have the right to bear arms. Bears have arms. Therefore, you have the right to bear bears.\"", explanation: "This plays on 'arms' meaning weapons vs. body parts and 'bear' as carry vs. the animal." },
      { text: "\"All banks are beside rivers. I have money in a bank. Therefore, my money is beside a river.\"", explanation: "'Bank' shifts from a riverbank to a financial institution, making the argument nonsensical." }
    ]
  },

  // ============ LEVEL 3 — ADVANCED ============
  {
    id: "composition-division",
    name: "Composition / Division",
    category: "Formal",
    level: 3,
    definition: "Assuming what's true of the parts must be true of the whole (composition), or vice versa (division).",
    description: "Composition fallacy: because each part has a property, the whole must have it too (every player is great, so the team must be great). Division fallacy: because the whole has a property, each part must have it too (the team is great, so every player must be great). Groups and their parts can have very different properties.",
    examples: [
      { text: "Every player on this team is a star, so this must be the best team in the league.", explanation: "Individual talent doesn't guarantee team chemistry, strategy, or overall performance." },
      { text: "Atoms are invisible. Humans are made of atoms. Therefore, humans are invisible.", explanation: "Properties of atoms don't necessarily transfer to the larger structures they compose." },
      { text: "This university is prestigious, so every course it offers must be excellent.", explanation: "Overall institutional reputation doesn't guarantee the quality of each individual course." },
      { text: "Hydrogen is not wet. Oxygen is not wet. Therefore, water (H2O) is not wet.", explanation: "Properties of individual elements don't necessarily carry over to the compounds they form." }
    ],
    quizScenarios: [
      { text: "\"Each ingredient in this recipe is delicious on its own, so the dish must taste amazing.\"", explanation: "Individual ingredient quality doesn't guarantee they'll combine well together. This is the composition fallacy." },
      { text: "\"The United States is a wealthy country, so every American must be wealthy.\"", explanation: "National wealth doesn't mean each individual citizen is wealthy. This is the division fallacy." }
    ]
  },
  {
    id: "appeal-to-nature",
    name: "Appeal to Nature",
    category: "Presumption",
    level: 3,
    definition: "Arguing that something is good because it's natural, or bad because it's unnatural.",
    description: "Assuming that 'natural' equals good and 'unnatural' equals bad. Many natural things are harmful (arsenic, poison ivy) and many unnatural things are beneficial (medicine, eyeglasses). The natural/unnatural distinction doesn't determine moral or practical value.",
    examples: [
      { text: "Herbal remedies are better than medicine because they're all natural.", explanation: "Many effective medicines are synthetic, and many natural substances are toxic. 'Natural' doesn't mean 'better.'" },
      { text: "Homosexuality is unnatural, so it's wrong.", explanation: "Same-sex behavior is observed across many species in nature. But regardless, naturalness doesn't determine morality." },
      { text: "We shouldn't use artificial sweeteners because they're not natural.", explanation: "Being artificial doesn't automatically make something harmful, and being natural doesn't guarantee safety." }
    ],
    quizScenarios: [
      { text: "\"I only use natural cleaning products because chemicals are bad for you. If it's from nature, it's safe.\"", explanation: "Many natural substances are toxic (e.g., ricin, cyanide in apple seeds), and 'chemical' simply describes any substance. Natural doesn't equal safe." },
      { text: "\"Our ancestors didn't use computers, so screen time must be inherently bad for us.\"", explanation: "What our ancestors did or didn't do doesn't determine what's good or bad for modern humans." }
    ]
  },
  {
    id: "genetic-fallacy",
    name: "Genetic Fallacy",
    category: "Relevance",
    level: 3,
    definition: "Judging something as good or bad based on where it comes from rather than its current merit.",
    description: "The origin of an idea, argument, or thing is used to accept or reject it, regardless of its actual qualities. An idea isn't wrong just because it came from a bad source, and it isn't right just because it came from a good one. Judge ideas on their own merits.",
    examples: [
      { text: "That idea came from a controversial politician, so it must be bad.", explanation: "The origin of an idea doesn't determine its quality. Even controversial figures can have good ideas." },
      { text: "This tradition has been around for centuries, so it must be valuable.", explanation: "Age of a practice doesn't prove its value — many old traditions have been harmful." },
      { text: "She grew up in a rough neighborhood, so her opinions on economics can't be sophisticated.", explanation: "Someone's background doesn't determine the quality of their reasoning." }
    ],
    quizScenarios: [
      { text: "\"That management technique was developed in Japan, so it won't work in American companies.\"", explanation: "The country of origin doesn't determine whether a management technique is effective. It should be evaluated on its merits." },
      { text: "\"This scientific paper was funded by a pharmaceutical company, so all its conclusions are automatically wrong.\"", explanation: "While funding sources warrant scrutiny, they don't automatically invalidate research findings." }
    ]
  },
  {
    id: "middle-ground",
    name: "Middle Ground (Golden Mean)",
    category: "Presumption",
    level: 3,
    definition: "Assuming the truth must be a compromise between two opposing positions.",
    description: "While compromise is often good in negotiations, it's a fallacy to assume the truth always lies in the middle. If one person says 2+2=4 and another says 2+2=6, the answer isn't 5. Sometimes one side is simply right and the other is wrong.",
    examples: [
      { text: "Some scientists say the Earth is 4.5 billion years old and others say 6,000 years. The truth is probably somewhere in between.", explanation: "The scientific evidence overwhelmingly supports 4.5 billion years — the middle isn't automatically correct." },
      { text: "She says the project will take 2 weeks, he says 2 years. Let's compromise and say 6 months.", explanation: "The correct timeline should be based on analysis, not splitting the difference between estimates." },
      { text: "One side says vaccines are safe, the other says they're dangerous. The truth must be in the middle.", explanation: "Overwhelming evidence supports vaccine safety. Splitting the difference doesn't represent the scientific consensus." }
    ],
    quizScenarios: [
      { text: "\"The prosecution says the defendant committed 10 crimes, and the defense says zero. The truth is probably around 5 crimes.\"", explanation: "Legal truth isn't found by averaging claims. Evidence must determine guilt for each charge independently." },
      { text: "\"Half of experts say this bridge is structurally sound, and half say it will collapse. Let's compromise and allow only light traffic.\"", explanation: "Bridge safety isn't a matter of compromise. Engineering analysis should determine whether it's safe or not." }
    ]
  },
  {
    id: "texas-sharpshooter",
    name: "Texas Sharpshooter",
    category: "Causal",
    level: 3,
    definition: "Cherry-picking data clusters to suit an argument, or finding a pattern after the fact and claiming it was predicted.",
    description: "Named after a joke about a Texan who shoots at a barn wall and then paints a bullseye around the closest cluster of bullet holes. It's about finding patterns in random data and treating them as meaningful, or selecting only the data that supports your conclusion while ignoring the rest.",
    examples: [
      { text: "A psychic predicted 'something bad will happen in a major city' and then points to any negative event as proof.", explanation: "The prediction was so vague that almost any event could confirm it — the target was drawn after the shot." },
      { text: "This neighborhood has a cancer cluster, so the local power plant must be causing it.", explanation: "Random variation can produce clusters. Without controlled study, you can't assume the power plant is the cause." },
      { text: "Our product launched on a Tuesday and succeeded. Tuesday launches must be the key to success!", explanation: "Picking one successful data point and attributing it to the day of the week ignores all other factors." }
    ],
    quizScenarios: [
      { text: "\"I looked at the last 100 years of stock market data and found a pattern: stocks always rise in months with the letter 'R.' This is my foolproof trading strategy.\"", explanation: "The pattern was found by searching data after the fact. Random data will always have some apparent patterns that don't predict future results." },
      { text: "\"Three of our top salespeople all drink green tea. Green tea must be the secret to sales success!\"", explanation: "This cherry-picks a coincidental trait shared by a few people while ignoring what the other top performers do." }
    ]
  },
  {
    id: "burden-of-proof",
    name: "Burden of Proof",
    category: "Presumption",
    level: 3,
    definition: "Shifting the burden of proof to the person who denies or questions a claim, rather than the person making it.",
    description: "The person making a claim is responsible for providing evidence. You can't say 'invisible unicorns exist, and they do until you prove they don't.' Extraordinary claims require extraordinary evidence, and it's not others' job to disprove your unsupported assertions.",
    examples: [
      { text: "I believe aliens built the pyramids. Can you prove they didn't?", explanation: "The person claiming alien construction has the burden of providing evidence for their extraordinary claim." },
      { text: "This supplement cures all diseases until someone proves it doesn't.", explanation: "Medical claims require evidence from the claimant, not disproof from skeptics." },
      { text: "My conspiracy theory is true unless you can debunk every single detail.", explanation: "The conspiracy theorist needs to prove their theory, not demand others disprove it point by point." }
    ],
    quizScenarios: [
      { text: "\"My new energy drink improves IQ by 30 points. Show me a study that says it doesn't!\"", explanation: "The maker of this claim must provide evidence that the drink improves IQ, not demand that others disprove it." },
      { text: "\"I sense a ghost in this room. Unless you can prove there's no ghost here, my feeling is valid evidence.\"", explanation: "The person claiming a ghost exists needs to provide evidence, not shift the burden to skeptics." }
    ]
  },
  {
    id: "anecdotal",
    name: "Anecdotal Evidence",
    category: "Presumption",
    level: 3,
    definition: "Using personal experience or an isolated example instead of systematic evidence or a compelling argument.",
    description: "Personal stories are powerful and memorable, but they don't represent the bigger picture. 'My grandfather smoked and lived to 95' doesn't disprove that smoking causes cancer. Anecdotes can illustrate a point but shouldn't replace statistical evidence.",
    examples: [
      { text: "My grandfather smoked his whole life and lived to 95, so smoking can't be that bad.", explanation: "One person's experience doesn't change the statistical reality that smoking significantly increases health risks." },
      { text: "I never wear a seatbelt and I've never been hurt, so seatbelts are unnecessary.", explanation: "Personal luck doesn't negate decades of data showing seatbelts save lives." },
      { text: "My friend dropped out of college and became a millionaire, so college is a waste of time.", explanation: "One success story doesn't invalidate the statistical advantages of higher education." }
    ],
    quizScenarios: [
      { text: "\"I know someone who ate fast food every day and was perfectly healthy. So all these studies about unhealthy diets must be wrong.\"", explanation: "One person's experience doesn't invalidate large-scale nutritional research based on thousands of subjects." },
      { text: "\"My neighbor didn't vaccinate her kids and they're fine. Vaccines must be unnecessary.\"", explanation: "One family's experience doesn't override population-level data on vaccine effectiveness and disease prevention." }
    ]
  },
  {
    id: "cherry-picking",
    name: "Cherry Picking",
    category: "Presumption",
    level: 3,
    definition: "Selecting only the data that supports your position while ignoring contradicting evidence.",
    description: "Instead of looking at all available evidence, you pick only the facts that support your conclusion and hide or ignore the rest. This can make a weak position look strong by presenting a distorted picture of reality.",
    examples: [
      { text: "Our company is doing great — look at our sales in December! (Ignores declining sales for the other 11 months)", explanation: "Highlighting one good month while ignoring an overall downward trend is cherry picking." },
      { text: "This city is very safe — here are five neighborhoods with low crime rates. (Ignores high-crime areas)", explanation: "Selecting only safe neighborhoods gives a misleading picture of overall city safety." },
      { text: "Studies show chocolate is healthy! (Cites one small study while ignoring larger studies showing mixed results)", explanation: "Selecting one favorable study while ignoring the broader body of research is cherry picking." }
    ],
    quizScenarios: [
      { text: "\"Climate change isn't real — look, it snowed in April this year!\"", explanation: "One weather event is cherry-picked to argue against a global, long-term climate trend supported by decades of data." },
      { text: "\"Our school's education program is excellent. Look at our top 10 students' test scores!\"", explanation: "Showing only the best performers hides how the average or below-average students are doing." }
    ]
  },

  // ============ LEVEL 4 — EXPERT ============
  {
    id: "motte-and-bailey",
    name: "Motte and Bailey",
    category: "Ambiguity",
    level: 4,
    definition: "Switching between a controversial claim (bailey) and a more defensible one (motte) when challenged.",
    description: "Named after a medieval castle design: the bailey is the desirable but hard-to-defend area; the motte is the easily defended tower. Someone makes a bold, controversial claim (bailey), but when challenged, retreats to a much weaker, more reasonable claim (motte). Once the challenge passes, they go back to the bold claim.",
    examples: [
      { text: "Claim: 'All modern art is meaningless garbage.' When challenged: 'I just mean some modern art is hard to understand.' Later returns to: 'Modern art is garbage.'", explanation: "The speaker retreats to a reasonable position when pressed, then returns to the extreme one." },
      { text: "Claim: 'Science can explain everything.' When challenged: 'I just mean science is a useful tool.' Then back to: 'Science explains everything.'", explanation: "The bold claim is swapped for a modest one under scrutiny, then quietly reasserted." },
      { text: "Claim: 'All processed food is poison.' When challenged: 'I just mean we should eat more whole foods.' Later: 'Processed food is poison.'", explanation: "The defensible position (eat more whole foods) protects the indefensible one (processed food is poison)." }
    ],
    quizScenarios: [
      { text: "\"Social media is destroying society!\" When asked for evidence: \"I just think people should be more mindful of screen time.\" Next day: \"Social media is destroying society!\"", explanation: "The bold claim (destroying society) retreats to a mild one (be more mindful) when challenged, then quietly returns." },
      { text: "\"Capitalism is evil and must be abolished!\" When debated: \"I'm just saying we need better regulations.\" Next week: \"We must abolish capitalism!\"", explanation: "The speaker oscillates between an extreme position and a moderate one, using the moderate position as a shield." }
    ]
  },
  {
    id: "kafkatrap",
    name: "Kafkatrap",
    category: "Presumption",
    level: 4,
    definition: "A situation where denying an accusation is used as evidence that the accusation is true.",
    description: "Named after Franz Kafka's novel 'The Trial,' where the protagonist is accused of a crime but never told what it is. In a Kafkatrap, if you deny being guilty, your denial is taken as proof of guilt. If you get angry about a false accusation, your anger 'proves' you're guilty. There's no way to defend yourself.",
    examples: [
      { text: "If you deny being a bigot, that's exactly what a bigot would say.", explanation: "The accusation is unfalsifiable — denial is treated as confirmation." },
      { text: "The fact that you're getting defensive proves you're guilty.", explanation: "A natural emotional response to a false accusation is used as evidence against you." },
      { text: "If you say you don't see color, that proves you're racist. If you acknowledge color, that also proves you're racist.", explanation: "Any response is interpreted as confirmation of the accusation — there's no winning." }
    ],
    quizScenarios: [
      { text: "\"If you disagree that our company has a toxic culture, that's proof that you're part of the problem. Only someone contributing to toxicity would deny it.\"", explanation: "Disagreement is treated as evidence for the original claim, creating a trap where no defense is possible." },
      { text: "\"The more you insist you're not lying, the more it proves you're a liar. An honest person wouldn't need to defend themselves so much.\"", explanation: "Self-defense against the accusation is used as further evidence of guilt, making the claim unfalsifiable." }
    ]
  },
  {
    id: "sealioning",
    name: "Sealioning",
    category: "Relevance",
    level: 4,
    definition: "Persistently and disingenuously requesting evidence or explanations while appearing polite and reasonable.",
    description: "A form of harassment disguised as genuine intellectual curiosity. The 'sealioner' keeps asking for evidence, explanations, and justifications — not to learn, but to exhaust and frustrate the other person. They maintain a facade of politeness while putting unreasonable demands on others.",
    examples: [
      { text: "\"I'm just asking questions! Can you provide a source? And for that source, can you provide a source? And explain that source?\"", explanation: "The endless requests aren't in good faith — they're designed to exhaust and frustrate." },
      { text: "\"I respectfully disagree. Could you explain exactly what you mean? And elaborate on that? And define each term? And provide three examples?\"", explanation: "The questions keep escalating, not because of genuine curiosity, but to wear down the other person." },
      { text: "\"I'm being perfectly civil. I just want you to justify every single claim you've made in this entire conversation.\"", explanation: "Polite tone masks unreasonable demands designed to make productive conversation impossible." }
    ],
    quizScenarios: [
      { text: "\"I notice you said climate change is real. Could you define 'real'? And what do you mean by 'climate'? Could you provide 50 peer-reviewed sources? And explain the methodology of each one? I'm just trying to learn!\"", explanation: "The cascade of ever-expanding requests, despite the polite tone, is designed to exhaust rather than genuinely engage with the topic." },
      { text: "\"You mentioned systemic issues. Can you define 'systemic'? Now can you prove systems exist? What is your definition of 'exist'? I'm just asking reasonable questions!\"", explanation: "These aren't genuine questions but a strategy to make discussion impossible by demanding justification of every basic concept." }
    ]
  },
  {
    id: "gish-gallop",
    name: "Gish Gallop",
    category: "Relevance",
    level: 4,
    definition: "Overwhelming an opponent with a flood of arguments, regardless of their accuracy, to make a coherent response impossible.",
    description: "Named after creationist Duane Gish, who used this technique in debates. The strategy involves making so many arguments (often weak or misleading) that the opponent can't possibly address them all in the available time. If even one goes unrefuted, the galloper claims victory.",
    examples: [
      { text: "In a debate: 'What about inflation? And immigration? And the deficit? And jobs? And healthcare? And education? And taxes? And crime? And infrastructure?' (all in 30 seconds)", explanation: "Rapid-fire topics prevent any single issue from being properly discussed or rebutted." },
      { text: "An email listing 20 different complaints about a project, each requiring a detailed response, sent right before a deadline.", explanation: "The volume makes it impossible to address everything thoroughly, making the recipient look unprepared." },
      { text: "A social media post listing 15 'problems' with a scientific study, each requiring expert-level knowledge to properly address.", explanation: "The sheer number of objections makes a complete response impractical, giving the false impression the study is fatally flawed." }
    ],
    quizScenarios: [
      { text: "\"In the last quarter alone: revenue is down 2%, the website had 3 bugs, two employees left, the coffee machine broke, we ran out of paper once, and the parking lot needs repaving. This company is clearly failing!\"", explanation: "A flood of mostly trivial issues is presented together to create an overwhelming impression of failure that's hard to address point by point." },
      { text: "\"Here are my 25 reasons why your scientific paper is wrong: [lists a mix of valid concerns, misunderstandings, and irrelevant points]. You can't address all of them, can you?\"", explanation: "The sheer volume is the weapon — it's designed to make a complete response impossible, not to genuinely engage with the research." }
    ]
  },
  {
    id: "nirvana-fallacy",
    name: "Nirvana Fallacy (Perfect Solution)",
    category: "Presumption",
    level: 4,
    definition: "Rejecting a solution because it's not perfect, even though it's better than no solution.",
    description: "Comparing a realistic option to an idealized, perfect alternative that doesn't exist. 'Why bother recycling when it won't completely solve climate change?' The fact that a solution isn't perfect doesn't make it worthless. Don't let the perfect be the enemy of the good.",
    examples: [
      { text: "Why bother with seatbelt laws? People still die in car accidents even while wearing them.", explanation: "Seatbelts significantly reduce fatalities even though they don't prevent every death." },
      { text: "There's no point in learning Spanish because I'll never speak it as well as a native.", explanation: "Imperfect fluency is still useful — communicating is better than not communicating at all." },
      { text: "Why vote? The election system isn't perfect, so my vote probably doesn't matter anyway.", explanation: "An imperfect system is still better than not participating at all." }
    ],
    quizScenarios: [
      { text: "\"Why should we implement this cybersecurity measure? It won't stop 100% of attacks, so it's pointless.\"", explanation: "No security measure is perfect, but reducing risk is still valuable. Demanding perfection means accepting zero protection." },
      { text: "\"This education reform won't help every single student, so we shouldn't bother implementing it.\"", explanation: "Helping many students is better than helping none. Rejecting improvement because it isn't universal is the nirvana fallacy." }
    ]
  },
  {
    id: "reification",
    name: "Reification (Concretism)",
    category: "Ambiguity",
    level: 4,
    definition: "Treating an abstract concept as if it were a concrete, physical thing.",
    description: "When we treat ideas, averages, or theoretical concepts as if they're real, tangible entities that can act on their own. 'The market wants lower taxes' treats 'the market' as a being with desires. 'Nature abhors a vacuum' gives nature human-like intentions. Abstractions are useful tools, but they're not real actors.",
    examples: [
      { text: "The free market will decide what's best for society.", explanation: "'The free market' isn't a sentient entity that makes decisions — it's an abstraction describing many individual transactions." },
      { text: "Science says we should do X.", explanation: "'Science' doesn't say anything — scientists publish findings based on evidence. Treating 'science' as a unified authority reifies an abstract concept." },
      { text: "History teaches us that empires always fall.", explanation: "History is a record of events, not a teacher with lessons. Humans interpret historical patterns." }
    ],
    quizScenarios: [
      { text: "\"Nature intended for humans to eat meat, which is why we have canine teeth.\"", explanation: "Nature doesn't have intentions or plans. Evolution isn't a designer — it's a process. Attributing intent to nature reifies an abstract concept." },
      { text: "\"The economy needs us to spend more money right now. We must obey what the economy demands.\"", explanation: "The economy isn't an entity with needs or demands. It's an abstract model describing patterns of production and consumption." }
    ]
  },
  {
    id: "moving-goalposts",
    name: "Moving the Goalposts",
    category: "Presumption",
    level: 4,
    definition: "Changing the criteria for proof or success after they have been met.",
    description: "When someone meets the standard of evidence you asked for, you simply raise the bar or change what you asked for. 'Show me one study' becomes 'show me ten studies,' then 'show me a meta-analysis,' then 'show me a consensus.' No amount of evidence is ever enough because the criteria keep shifting.",
    examples: [
      { text: "You wanted a 10% sales increase? Well, now I need to see 20% before I'm convinced.", explanation: "The original target was met, but the criteria were changed to avoid accepting the result." },
      { text: "You proved X works in the lab? Well, show me it works in the real world. It works in the real world? Show me it works for 10 years.", explanation: "Each time evidence is provided, new requirements appear." },
      { text: "You got straight A's? Well, that was an easy semester. Get straight A's in harder classes.", explanation: "The achievement is dismissed and new, harder criteria are substituted." },
      { text: "First they wanted me to get a degree, so I did. Then they wanted experience, so I got it. Now they say I need a certification too. The requirements keep growing.", explanation: "Each time a criterion is met, a new one appears, suggesting the original criteria were never the real standard." }
    ],
    quizScenarios: [
      { text: "\"You wanted three references for this candidate? Here they are.\" \"Actually, I need five references.\" \"Here are five.\" \"Well, now I need references from CEOs specifically.\"", explanation: "The requirements keep changing after being met, revealing that no amount of evidence would be accepted." },
      { text: "\"Prove this diet works with a study.\" \"Here's a study.\" \"That's just one study, show me five.\" \"Here are five.\" \"Those aren't recent enough.\"", explanation: "Each time evidence is provided, the standard shifts to require more, preventing any conclusion from being reached." }
    ]
  },
  {
    id: "false-equivalence",
    name: "False Equivalence",
    category: "Relevance",
    level: 3,
    definition: "Treating two things as comparable when they're significantly different in important ways.",
    description: "Presenting two sides of an issue as equally valid when the evidence strongly supports one over the other. This creates a misleading impression of balance. Not all viewpoints deserve equal weight — a flat earther and a geographer don't have equally credible perspectives on Earth's shape.",
    examples: [
      { text: "Teaching both evolution and creationism in science class is fair and balanced.", explanation: "Evolution is supported by overwhelming scientific evidence; creationism is a religious belief. They aren't equivalent in a science context." },
      { text: "Both parties are equally corrupt, so it doesn't matter who you vote for.", explanation: "Even if both have issues, the degree and nature of problems likely differ significantly." },
      { text: "You complain about a few data breaches, but our competitor once had a server go down. We're basically the same.", explanation: "Data breaches and server downtime are very different in severity and implications." }
    ],
    quizScenarios: [
      { text: "\"Sure, one candidate has been convicted of fraud, but the other candidate got a parking ticket once. Both have had legal troubles, so they're equally untrustworthy.\"", explanation: "Fraud and a parking ticket are vastly different in severity. Equating them creates a false impression of equivalence." },
      { text: "\"Some people believe the Earth is flat and some believe it's round. Both sides deserve equal time in our documentary.\"", explanation: "The overwhelming scientific evidence supports a round Earth. Giving equal time implies equal credibility where none exists." }
    ]
  },
  {
    id: "appeal-to-tradition",
    name: "Appeal to Tradition",
    category: "Presumption",
    level: 3,
    definition: "Arguing something is right or better because it's always been done that way.",
    description: "Using the age or tradition of a practice as evidence of its value. 'We've always done it this way' isn't a logical reason to continue. Many traditions were based on limited knowledge or outdated values. Change isn't inherently bad, and tradition isn't inherently good.",
    examples: [
      { text: "We've always used this filing system, so there's no reason to switch to a digital one.", explanation: "The age of a system doesn't mean it's still the best option." },
      { text: "Marriage has always been defined this way, so it should stay the same.", explanation: "Historical precedent doesn't constitute a logical argument against change." },
      { text: "Our family has always disciplined children this way, so it must be effective.", explanation: "Generational tradition doesn't prove a disciplinary method is effective or appropriate." },
      { text: "Handwritten letters are more meaningful than emails because that's how people have always communicated important messages.", explanation: "Historical communication methods don't determine the meaningfulness of a message's content." }
    ],
    quizScenarios: [
      { text: "\"Our company has used this software for 20 years. It's worked fine all along, so there's no need to upgrade to something modern.\"", explanation: "The fact that something has been used for a long time doesn't mean it's still the best option. Technology and needs evolve." },
      { text: "\"People have been using this folk remedy for centuries, so it must be effective medicine.\"", explanation: "Centuries of use don't constitute clinical evidence. Many traditional remedies have been shown to be ineffective or harmful." }
    ]
  },
  {
    id: "whataboutism",
    name: "Whataboutism",
    category: "Relevance",
    level: 2,
    definition: "Responding to a criticism by pointing to a different issue instead of addressing the original concern.",
    description: "A form of deflection where instead of answering a criticism, you bring up an unrelated wrongdoing by someone else. 'What about them?' doesn't address the original accusation. It's a red herring that shifts focus from one issue to another without resolving either.",
    examples: [
      { text: "You criticize our pollution? What about China's pollution?", explanation: "China's pollution doesn't excuse or address your own." },
      { text: "Why are you concerned about domestic issues when there are wars happening overseas?", explanation: "The existence of other problems doesn't invalidate the concern being raised." },
      { text: "You say our product has bugs? Well, our competitor's product crashes completely!", explanation: "Competitor problems don't fix your bugs." }
    ],
    quizScenarios: [
      { text: "\"You say our company should pay fair wages? Well, what about the tech giants who avoid taxes? Why aren't you going after them?\"", explanation: "Other companies' tax practices don't address the wage fairness concern being raised." },
      { text: "\"You're criticizing my driving? What about that time YOU forgot to signal a turn?\"", explanation: "Someone else's past mistake doesn't address the current criticism of your driving." }
    ]
  },
  {
    id: "personal-incredulity",
    name: "Personal Incredulity",
    category: "Presumption",
    level: 3,
    definition: "Claiming something isn't true because you personally can't understand or imagine it.",
    description: "Just because something is difficult to understand doesn't make it false. Quantum physics is incredibly counterintuitive, but that doesn't make it wrong. Our personal ability to comprehend something has no bearing on whether it's true.",
    examples: [
      { text: "I can't understand how evolution could produce something as complex as the human eye, so it must not be true.", explanation: "Personal inability to understand a process doesn't invalidate the scientific evidence supporting it." },
      { text: "The universe can't possibly be expanding — I can't even imagine what it would expand into.", explanation: "Our inability to visualize cosmological concepts doesn't determine their truth." },
      { text: "I don't see how a tiny vaccine can prevent a serious disease, so I don't trust them.", explanation: "Personal incomprehension of immunology doesn't override the extensive evidence for vaccine effectiveness." }
    ],
    quizScenarios: [
      { text: "\"There's no way that a computer can beat a human at chess. Computers don't think. I just can't imagine it.\"", explanation: "Personal inability to imagine something doesn't make it impossible — computers have been beating top chess players since 1997." },
      { text: "\"I can't wrap my head around how cryptocurrency works, so it must be a scam.\"", explanation: "Not understanding the technology doesn't determine whether it's legitimate. Complexity doesn't equal fraud." }
    ]
  }
];

// Extractor Quiz Passages — multi-paragraph scenarios for fallacy identification
// Organized by level for progressive difficulty
window.EXTRACTOR_PASSAGES = [
  // ===== LEVEL 1 — BEGINNER =====
  {
    level: 1,
    text: "At a town hall meeting, a citizen stood up and said: \"Mayor Thompson wants us to invest in public transportation. But let me remind you, Mayor Thompson was caught jaywalking last year and he didn't even apologize.\n\nAre we really going to take transit advice from someone who can't even follow basic pedestrian laws? I think his entire proposal should be thrown out based on his character alone.\"",
    fallacyId: "ad-hominem",
    highlight: "Are we really going to take transit advice from someone who can't even follow basic pedestrian laws?",
    explanation: "This passage contains an Ad Hominem fallacy. Instead of evaluating the merits of the public transportation proposal, the speaker attacks Mayor Thompson's character by bringing up an irrelevant jaywalking incident. The mayor's personal behavior as a pedestrian has no logical bearing on whether the transit investment is a good policy. The argument should be assessed on its own merits — cost, feasibility, and community benefit — not on the character of the person proposing it."
  },
  {
    level: 1,
    text: "During a school board debate about extending library hours, one parent argued: \"Ms. Garcia suggested we keep the library open until 8 PM on weekdays. But what she's really saying is that parents can't be trusted to educate their own children at home.\n\nShe basically wants the government to replace family time with institutional time. Next she'll want kids to sleep at school too!\"",
    fallacyId: "straw-man",
    highlight: "But what she's really saying is that parents can't be trusted to educate their own children at home.",
    explanation: "This is a Straw Man fallacy. Ms. Garcia proposed extending library hours — a specific, practical suggestion. The opponent distorts this into a claim that parents can't be trusted and that the government wants to replace family time. This exaggerated, distorted version of the argument is much easier to attack than the actual proposal. The original suggestion said nothing about parental competence or replacing family time."
  },
  {
    level: 1,
    text: "A health blogger wrote: \"Dr. James Wilson, a Nobel Prize-winning physicist, recently said on a podcast that intermittent fasting is the single best thing you can do for longevity.\n\nIf a Nobel laureate says fasting works, who are we to question it? This man is clearly one of the smartest people alive, so his dietary advice should carry more weight than any nutritionist's opinion.\"",
    fallacyId: "appeal-to-authority",
    highlight: "If a Nobel laureate says fasting works, who are we to question it?",
    explanation: "This is an Appeal to Authority fallacy. Dr. Wilson's Nobel Prize is in physics, not nutrition or medicine. Being brilliant in one field doesn't make someone an authority in a completely different field. A physicist's opinions on diet carry no more scientific weight than any other non-expert. Dietary claims should be evaluated based on nutritional research, not the prestige of an unrelated credential."
  },
  {
    level: 1,
    text: "A company CEO addressed employees: \"We're at a crossroads. Either we accept this merger with GlobalTech and secure our future, or we reject it and watch the company go bankrupt within two years.\n\nThere is no middle path here. It's partnership or extinction. I need everyone on board because the alternative is unemployment for all of us.\"",
    fallacyId: "false-dilemma",
    highlight: "Either we accept this merger with GlobalTech and secure our future, or we reject it and watch the company go bankrupt within two years.",
    explanation: "This is a False Dilemma fallacy. The CEO presents only two options — merger or bankruptcy — when many other possibilities exist. The company could seek different partners, restructure internally, find new markets, reduce costs, attract new investors, or pursue incremental growth strategies. By framing the decision as binary, the CEO eliminates consideration of alternative paths and pressures employees into supporting the merger."
  },
  {
    level: 1,
    text: "A parent argued at a PTA meeting: \"If we allow students to use calculators in math class, they'll stop learning mental arithmetic. Then they won't be able to do basic math without a device.\n\nBefore you know it, they'll need a computer to figure out how to tip at a restaurant, then they'll become completely dependent on AI for all thinking, and eventually human intelligence will just wither away entirely.\"",
    fallacyId: "slippery-slope",
    highlight: "Before you know it, they'll need a computer to figure out how to tip at a restaurant, then they'll become completely dependent on AI for all thinking, and eventually human intelligence will just wither away entirely.",
    explanation: "This is a Slippery Slope fallacy. The argument chains a series of increasingly extreme consequences from the initial, reasonable premise of using calculators. Allowing calculators → losing mental math → needing computers for tips → total AI dependence → human intelligence withering. Each step in this chain is unsupported and exaggerated. Many students use calculators and still maintain strong mathematical thinking skills."
  },
  {
    level: 1,
    text: "During a budget review meeting, when questioned about overspending in the marketing department, the marketing director responded: \"I understand your concerns about our budget, but have you seen how well our employee wellness program is doing? We've had record participation in yoga classes and our cafeteria just added a new smoothie bar.\n\nI think what's really important here is the morale of our team, which has never been higher thanks to these wonderful initiatives.\"",
    fallacyId: "red-herring",
    highlight: "but have you seen how well our employee wellness program is doing?",
    explanation: "This is a Red Herring fallacy. The question was about overspending in the marketing budget, but the director redirects attention to the employee wellness program, yoga classes, and a smoothie bar — none of which address the original concern about marketing expenditures. These may be positive developments, but they are completely irrelevant to the budget oversight question being asked."
  },
  {
    level: 1,
    text: "A teenager tried to convince her parents: \"Mom, Dad, literally everyone at school has the new iPhone. I'm the only one without it, and people are starting to notice.\n\nAll my friends have upgraded, and even the teachers use iPhones now. When everyone is choosing the same phone, there's obviously a reason — it's clearly the best choice. I'd be crazy not to get one too.\"",
    fallacyId: "bandwagon",
    highlight: "When everyone is choosing the same phone, there's obviously a reason — it's clearly the best choice.",
    explanation: "This is a Bandwagon (Ad Populum) fallacy. The argument relies on the popularity of the iPhone among peers as evidence of its quality and as justification for the purchase. The number of people who own a product doesn't determine whether it's the best choice for this individual's needs and budget. Popularity can be driven by marketing, social pressure, and trends rather than objective superiority."
  },
  {
    level: 1,
    text: "A charity fundraiser delivered this speech: \"Imagine little Timmy, sitting alone in a cold room with no food, no parents, and no hope. His tiny hands are shaking. He hasn't smiled in weeks.\n\nIf you don't open your wallets tonight, children like Timmy will continue to suffer. You have the power to make a difference — but only if you act now. Can you really live with yourself knowing you could have helped?\"",
    fallacyId: "appeal-to-emotion",
    highlight: "If you don't open your wallets tonight, children like Timmy will continue to suffer.",
    explanation: "This is an Appeal to Emotion fallacy. The speech uses vivid, emotional imagery of a suffering child to manipulate the audience into donating. While the cause may be worthy, the argument provides no information about the charity's effectiveness, how funds are used, or whether this is the best way to help. The emotional manipulation replaces rational evaluation of the charity's merits and impact."
  },
  {
    level: 1,
    text: "A home security salesman told a homeowner: \"Just last week, three houses on this very street were broken into. The criminals are getting bolder and more violent every day.\n\nWithout our premium security system, your family is essentially sleeping with the doors wide open. A break-in isn't a matter of if — it's a matter of when. And when it happens, and you haven't protected your family, you'll wish you had listened to me today.\"",
    fallacyId: "appeal-to-fear",
    highlight: "Without our premium security system, your family is essentially sleeping with the doors wide open. A break-in isn't a matter of if — it's a matter of when.",
    explanation: "This is an Appeal to Fear fallacy. The salesman uses exaggerated fear of imminent crime to pressure a purchase. Rather than presenting evidence about the product's effectiveness, coverage, or value compared to alternatives, he relies on scare tactics — painting a picture of inevitable victimhood to override rational decision-making about home security options."
  },

  // ===== LEVEL 2 — INTERMEDIATE =====
  {
    level: 2,
    text: "A philosophy student wrote in her essay: \"Freedom of the press is essential because people need access to information. And people need access to information because a free press is essential to a functioning democracy.\n\nTherefore, we can clearly see that freedom of the press is important because it is an essential right, and it is an essential right because it is important.\"",
    fallacyId: "circular-reasoning",
    highlight: "Freedom of the press is essential because people need access to information. And people need access to information because a free press is essential.",
    explanation: "This is Circular Reasoning (begging the question). The argument goes in a circle: the press is essential because information access is needed, and information access is needed because the press is essential. The conclusion is assumed as its own premise. A proper argument would provide independent reasons why press freedom matters — accountability, informed voting, exposing corruption, etc."
  },
  {
    level: 2,
    text: "After visiting a new city, a traveler posted online: \"I spent one weekend in Portland and encountered three rude baristas and one unfriendly hotel clerk. Based on my experience, I can confidently say that Portland has the rudest people in America.\n\nI wouldn't recommend visiting this city to anyone. The people there clearly have no concept of hospitality or basic courtesy.\"",
    fallacyId: "hasty-generalization",
    highlight: "Based on my experience, I can confidently say that Portland has the rudest people in America.",
    explanation: "This is a Hasty Generalization. The traveler met four people during a single weekend and generalized their behavior to an entire city of over 650,000 people. Four interactions out of hundreds of thousands of residents is an absurdly small sample size. The conclusion about Portland's entire population is wildly disproportionate to the evidence."
  },
  {
    level: 2,
    text: "During a family discussion about healthy eating, a teenager said: \"Dad, you keep telling me I should eat more vegetables and cut down on junk food. But I've seen you eat pizza three times this week and you had ice cream yesterday!\n\nYou don't follow your own advice, so why should I listen to anything you say about nutrition? Your whole argument about healthy eating falls apart because you don't practice it yourself.\"",
    fallacyId: "tu-quoque",
    highlight: "You don't follow your own advice, so why should I listen to anything you say about nutrition?",
    explanation: "This is a Tu Quoque (You Too) fallacy. The teenager dismisses valid nutritional advice by pointing out the father's own unhealthy eating habits. However, the father's hypocrisy doesn't change whether the advice itself is medically sound. A doctor who smokes can still give correct medical advice about the dangers of smoking. The argument should be evaluated on its own merits, not the behavior of the person making it."
  },
  {
    level: 2,
    text: "A supplement company advertised: \"Our new brain-boosting supplement, NeuroMax, has no studies showing it causes harm. In fact, no one has been able to prove that it doesn't work.\n\nSince there's no evidence against NeuroMax, it must be safe and effective. Until someone definitively proves our supplement doesn't enhance cognition, our claims stand as valid.\"",
    fallacyId: "appeal-to-ignorance",
    highlight: "Since there's no evidence against NeuroMax, it must be safe and effective.",
    explanation: "This is an Appeal to Ignorance. The supplement company shifts the burden by arguing that because no evidence exists against their product, it must work. The absence of negative evidence is not positive evidence. The company should provide studies proving their supplement works, not rely on the fact that nobody has disproven their claims. Many untested substances lack negative studies simply because they haven't been studied at all."
  },
  {
    level: 2,
    text: "A startup founder told investors: \"Right after we redesigned our website last month, our user signups increased by 40%. Clearly, the new design is what caused this dramatic growth.\n\nWe should invest even more in design because it's obviously the key driver of our business growth. The data speaks for itself — new design, more signups. Cause and effect.\"",
    fallacyId: "post-hoc",
    highlight: "Right after we redesigned our website last month, our user signups increased by 40%. Clearly, the new design is what caused this dramatic growth.",
    explanation: "This is a False Cause (Post Hoc) fallacy. The founder assumes that because the signup increase happened after the redesign, the redesign caused it. But correlation doesn't equal causation. The increase could be due to seasonal trends, a viral social media post, a competitor shutting down, a marketing campaign, or many other factors. Proper analysis would require controlled testing (A/B tests) to isolate the design's impact."
  },
  {
    level: 2,
    text: "During a political debate, the moderator asked the candidate: \"When did you realize that your economic policies were hurting middle-class families?\"\n\nThe candidate struggled to respond because simply saying \"I didn't\" seemed defensive, and any other answer would acknowledge that her policies were harmful — even though no evidence had been presented to that effect.",
    fallacyId: "loaded-question",
    highlight: "When did you realize that your economic policies were hurting middle-class families?",
    explanation: "This is a Loaded Question. The question presupposes two things: (1) that the candidate's policies hurt middle-class families, and (2) that the candidate has realized this. Neither claim has been established. Any direct answer — whether \"last year\" or \"recently\" — accepts the harmful premise. The question is designed to trap the respondent into implicitly confirming the embedded, unproven assumption."
  },
  {
    level: 2,
    text: "In an online debate about music, someone wrote: \"True music lovers would never listen to pop music. It's manufactured garbage.\" Another person replied: \"But my uncle is a music professor who has studied music theory for 30 years, and he enjoys pop music.\"\n\n\"Well, then he's not a TRUE music lover. A real music lover with genuine appreciation would never enjoy such simplistic compositions.\"",
    fallacyId: "no-true-scotsman",
    highlight: "Well, then he's not a TRUE music lover. A real music lover with genuine appreciation would never enjoy such simplistic compositions.",
    explanation: "This is a No True Scotsman fallacy. When presented with a clear counterexample (a music professor who enjoys pop), the person redefines 'true music lover' to exclude anyone who likes pop music. The criteria shift to protect the original claim from being disproven. A 30-year music professor who enjoys pop is a perfectly valid counterexample that should challenge the original generalization."
  },
  {
    level: 2,
    text: "A politician deflected criticism at a press conference: \"You're asking me about our country's healthcare issues? What about the healthcare crisis in neighboring countries? They're spending even more and getting worse results.\n\nBefore we point fingers at our own system, maybe we should look at the mess other nations have created. Why aren't you asking them these tough questions instead?\"",
    fallacyId: "whataboutism",
    highlight: "What about the healthcare crisis in neighboring countries? They're spending even more and getting worse results.",
    explanation: "This is Whataboutism. Instead of addressing the healthcare concerns in their own country, the politician deflects by pointing to problems in other nations. Other countries' healthcare issues don't resolve or address the domestic concerns being raised. This is a diversionary tactic that avoids accountability by redirecting attention elsewhere."
  },

  // ===== LEVEL 3 — ADVANCED =====
  {
    level: 3,
    text: "A food blogger argued: \"I only cook with organic, all-natural ingredients. Chemical-free food is the only way to be truly healthy. Our ancestors thrived for thousands of years without pesticides and preservatives.\n\nIf something doesn't come from nature, it shouldn't go into your body. Mother Nature knows best — she's been perfecting food for millions of years. Anything artificial is inherently suspicious.\"",
    fallacyId: "appeal-to-nature",
    highlight: "If something doesn't come from nature, it shouldn't go into your body. Mother Nature knows best.",
    explanation: "This is an Appeal to Nature fallacy. The blogger assumes that natural automatically equals healthy and artificial automatically equals harmful. In reality, many natural substances are toxic (arsenic, hemlock, certain mushrooms), and many artificial substances are beneficial (modern medicine, water purification). The natural/artificial distinction doesn't reliably predict safety or health value. Also, all food contains chemicals — water is a chemical."
  },
  {
    level: 3,
    text: "During a discussion about a new educational app developed by a tech startup from a developing country, a venture capitalist said: \"Look, I'm sure the developers are talented, but this app was built in a country without a strong tech ecosystem.\n\nInnovation in education technology really comes from Silicon Valley or maybe Tel Aviv. I'd need to see the same product from a more established tech hub before I'd consider investing. The origin matters.\"",
    fallacyId: "genetic-fallacy",
    highlight: "Innovation in education technology really comes from Silicon Valley or maybe Tel Aviv. I'd need to see the same product from a more established tech hub before I'd consider investing.",
    explanation: "This is a Genetic Fallacy. The investor judges the educational app based on its country of origin rather than evaluating the product's actual features, user engagement, or market potential. An app's quality is determined by its design, functionality, and impact — not by where it was built. Great innovations have emerged from unexpected places throughout history."
  },
  {
    level: 3,
    text: "In a policy debate, a panelist argued: \"Climate scientists say we need to reduce emissions by 80% to prevent catastrophe. Industry leaders say no reductions are needed and the economy will suffer. The sensible position is clearly somewhere in the middle.\n\nLet's compromise and aim for a 40% reduction. That way, both sides get something they want, and we avoid the extremes. The truth usually lies in the middle.\"",
    fallacyId: "middle-ground",
    highlight: "The sensible position is clearly somewhere in the middle. Let's compromise and aim for a 40% reduction.",
    explanation: "This is a Middle Ground (Golden Mean) fallacy. The argument assumes that splitting the difference between two positions automatically produces the correct answer. But if the scientific evidence supports an 80% reduction to prevent catastrophe, a 40% reduction isn't a reasonable compromise — it could still lead to catastrophe. The truth should be determined by evidence, not by averaging competing claims. Sometimes one side is simply more correct than the other."
  },
  {
    level: 3,
    text: "A marketing consultant presented findings to a client: \"I analyzed all 200 employees at your company and discovered something fascinating. The top 5 salespeople all happen to drink coffee before client calls, while 3 of your lowest performers prefer tea.\n\nThis clearly shows a pattern: coffee drinkers are better salespeople. I recommend providing free premium coffee to your entire sales team as a performance improvement strategy.\"",
    fallacyId: "texas-sharpshooter",
    highlight: "The top 5 salespeople all happen to drink coffee before client calls, while 3 of your lowest performers prefer tea. This clearly shows a pattern.",
    explanation: "This is a Texas Sharpshooter fallacy. The consultant searched through data about 200 employees and found a coincidental pattern between beverage choice and sales performance. This is like painting a bullseye around a random cluster of bullet holes. With 200 people and countless variables, random correlations are inevitable. The \"pattern\" was discovered after the fact and doesn't demonstrate any causal relationship between coffee consumption and sales ability."
  },
  {
    level: 3,
    text: "In a community meeting about building a new playground, a resident objected: \"You say this playground equipment is safe, but I want you to prove it. Show me evidence! I shouldn't have to prove it's dangerous — it's your job to convince me it won't harm our children.\n\nUntil you can guarantee with 100% certainty that no child will ever be injured, I say we shouldn't build it. The people proposing this should bear the responsibility of proving absolute safety.\"",
    fallacyId: "burden-of-proof",
    highlight: "I shouldn't have to prove it's dangerous — it's your job to convince me it won't harm our children.",
    explanation: "This is a Burden of Proof fallacy. While the proposers should demonstrate reasonable safety standards (which is standard for playground equipment), the objector is demanding impossible proof — that no child will EVER be injured. The objector shifts the burden unreasonably by demanding absolute certainty, which is an impossible standard for any physical activity. Safety is about managing risk to acceptable levels, not eliminating it entirely."
  },
  {
    level: 3,
    text: "A vaccine skeptic argued at a public forum: \"My neighbor's daughter got vaccinated and then developed allergies a month later. My cousin's child was perfectly healthy until his vaccinations. And I personally know someone whose child was fine until they got the flu shot.\n\nForget what the big studies say — I've seen the effects with my own eyes. When you have this many personal stories, you can't just dismiss them. Real experiences trump statistics.\"",
    fallacyId: "anecdotal",
    highlight: "Forget what the big studies say — I've seen the effects with my own eyes. When you have this many personal stories, you can't just dismiss them.",
    explanation: "This is an Anecdotal Evidence fallacy. The speaker relies on a handful of personal stories to draw conclusions about vaccine safety, dismissing large-scale scientific studies in favor of individual experiences. Three personal anecdotes, even if genuinely observed, cannot account for coincidence, confirmation bias, or the millions of children who are vaccinated without issues. Systematic evidence from controlled studies is far more reliable than a few personal observations."
  },
  {
    level: 3,
    text: "A CEO defended the company's legacy software: \"We've been using this inventory management system for 25 years. My predecessor installed it, and her predecessor before her approved it.\n\nThis software has been the backbone of our operations through three economic recessions and two mergers. If it has worked for a quarter century, there's clearly no reason to change it now. Why fix what isn't broken? Our traditions have served us well.\"",
    fallacyId: "appeal-to-tradition",
    highlight: "If it has worked for a quarter century, there's clearly no reason to change it now. Why fix what isn't broken?",
    explanation: "This is an Appeal to Tradition fallacy. The CEO uses the software's 25-year history as the primary argument against upgrading, rather than evaluating current needs, modern capabilities, security requirements, or competitive advantages of newer systems. The fact that something has been used for a long time doesn't mean it's still the best option. Technology evolves, business needs change, and what worked decades ago may now be a liability."
  },
  {
    level: 3,
    text: "A pundit compared two political controversies on a talk show: \"Candidate A was caught embezzling $2 million from a charity, while Candidate B accidentally used the wrong email address for one work message.\n\nBoth candidates have shown poor judgment with important matters. Neither one can be trusted. They're both equally problematic, so it really doesn't matter which one you vote for. Corruption is corruption, big or small.\"",
    fallacyId: "false-equivalence",
    highlight: "Both candidates have shown poor judgment with important matters. Neither one can be trusted. They're both equally problematic.",
    explanation: "This is a False Equivalence fallacy. The pundit treats embezzling $2 million from a charity — a serious criminal offense — as comparable to accidentally using the wrong email address — a trivial mistake. These are vastly different in severity, intent, and consequence. Equating them creates a misleading impression that both candidates are equally flawed, when the evidence clearly shows a massive difference in the seriousness of their actions."
  },

  // ===== LEVEL 4 — EXPERT =====
  {
    level: 4,
    text: "On social media, a commentator wrote: \"Modern education is completely destroying children's natural creativity and turning them into mindless robots!\" When challenged to provide evidence, they responded: \"I'm just saying that children need more creative outlets in schools.\"\n\nThe next day, the same person posted: \"The education system is a factory for conformity. It crushes every spark of originality in our children!\"",
    fallacyId: "motte-and-bailey",
    highlight: "When challenged to provide evidence, they responded: \"I'm just saying that children need more creative outlets in schools.\"",
    explanation: "This is a Motte and Bailey fallacy. The commentator makes a bold, controversial claim (the \"bailey\"): that education is \"completely destroying creativity\" and creating \"mindless robots.\" When challenged, they retreat to a much more modest, defensible position (the \"motte\"): that children need more creative outlets. But the next day, they return to the extreme claim. The reasonable position serves as a shield for the unreasonable one."
  },
  {
    level: 4,
    text: "In a workplace training session about diversity, the facilitator said: \"If you feel uncomfortable with this training, that discomfort proves you have biases you need to work on. And if you claim you're already inclusive and don't need this training, that defensiveness is itself a sign that you need it most.\n\nThe very act of questioning the value of this program demonstrates exactly why it's necessary. There's no response you can give that would show you don't need it.\"",
    fallacyId: "kafkatrap",
    highlight: "If you feel uncomfortable with this training, that discomfort proves you have biases you need to work on. And if you claim you're already inclusive and don't need this training, that defensiveness is itself a sign that you need it most.",
    explanation: "This is a Kafkatrap. The facilitator creates a no-win situation: feeling uncomfortable proves bias, claiming to be inclusive proves defensiveness, and questioning the program proves its necessity. Every possible response — agreement, disagreement, discomfort, or confidence — is interpreted as evidence supporting the same conclusion. This makes the claim unfalsifiable, as there's literally no way to demonstrate that the conclusion is wrong."
  },
  {
    level: 4,
    text: "In an online discussion about urban planning, one participant wrote a detailed post about why bike lanes improve city traffic flow. Another user replied:\n\n\"Interesting. Could you define what you mean by 'improve'? And by 'traffic flow,' are you referring to vehicles per minute, average speed, or congestion indices? Can you share the methodology of each study you're referencing? Also, what do you mean by 'city' — are we talking about any city or specific ones? Could you clarify your definition of 'bike lane' since there are different types? I'm just asking reasonable questions to understand your position better.\"",
    fallacyId: "sealioning",
    highlight: "Could you define what you mean by 'improve'? And by 'traffic flow,' are you referring to vehicles per minute, average speed, or congestion indices? Can you share the methodology of each study you're referencing?",
    explanation: "This is Sealioning. The responder poses an exhausting cascade of pedantic questions — demanding definitions of common words, precise methodologies, and increasingly granular clarifications — all under the guise of \"reasonable questions.\" These aren't genuine inquiries seeking to learn; they're designed to make productive conversation impossible by demanding an unreasonable level of justification for every basic concept. The polite tone masks the obstructive intent."
  },
  {
    level: 4,
    text: "During a city council meeting about a proposed park renovation, one council member rapidly rattled off objections: \"The cost is too high, the design doesn't match neighborhood aesthetics, the trees chosen aren't native species, the benches are the wrong material, the walking path is 0.3 miles too short, the water fountain placement violates feng shui principles, the playground doesn't face east, the parking lot adds exactly 3 too many spaces, the grass seed brand has mixed reviews on Amazon, and the proposed opening date conflicts with National Pickle Day.\"\n\nThe proposing council member was left overwhelmed, unable to address all ten points in her allotted three minutes.",
    fallacyId: "gish-gallop",
    highlight: "The cost is too high, the design doesn't match neighborhood aesthetics, the trees chosen aren't native species, the benches are the wrong material, the walking path is 0.3 miles too short",
    explanation: "This is a Gish Gallop. The council member fires off a rapid succession of objections — mixing potentially valid concerns (cost, native species) with trivial or absurd ones (feng shui, National Pickle Day, Amazon grass seed reviews). The sheer volume makes it impossible to respond to everything in the limited time available. This creates the illusion that the proposal has overwhelming problems, when many of the objections are frivolous."
  },
  {
    level: 4,
    text: "When a city proposed adding bike lanes to reduce traffic congestion by an estimated 15%, a critic responded: \"Fifteen percent? So traffic will still be terrible 85% of the time. What's even the point?\n\nUnless you can completely eliminate traffic congestion, these bike lanes are just an expensive band-aid. We shouldn't waste taxpayer money on a solution that doesn't fully solve the problem. Come back when you have a plan that actually works — meaning zero congestion.\"",
    fallacyId: "nirvana-fallacy",
    highlight: "Unless you can completely eliminate traffic congestion, these bike lanes are just an expensive band-aid.",
    explanation: "This is a Nirvana Fallacy (Perfect Solution fallacy). The critic rejects a solution that would reduce congestion by 15% because it doesn't eliminate congestion entirely. By demanding an impossible standard — zero congestion — they dismiss a meaningful improvement. A 15% reduction in traffic congestion would significantly improve commute times and quality of life. Rejecting good solutions because they aren't perfect means accepting no solution at all."
  },
  {
    level: 4,
    text: "A guest on a talk show argued: \"The economy is telling us we need to spend more. It's hungry for stimulus and it's punishing us for our austerity. We have to listen to what the market wants, because the market has a wisdom of its own.\n\nWhen the economy is angry, bad things happen to everyone. We need to feed it what it demands, or it will turn against us. The invisible hand guides us, and right now it's pointing toward more spending.\"",
    fallacyId: "reification",
    highlight: "The economy is telling us we need to spend more. It's hungry for stimulus and it's punishing us for our austerity.",
    explanation: "This is a Reification fallacy. The speaker treats abstract concepts — the economy, the market, the invisible hand — as if they are sentient beings with desires, wisdom, hunger, and anger. The economy doesn't \"tell\" us anything, get \"hungry,\" or \"punish\" us. These are metaphors being treated as literal descriptions. Economic trends result from millions of individual decisions, not from a conscious entity with intentions."
  },
  {
    level: 4,
    text: "A job candidate went through an extensive hiring process: \"They asked me to pass a coding test — I scored 95%. Then they wanted a portfolio review — they said it was 'impressive.' Then they required three references — all excellent. Then a cultural fit interview — 'great match.'\n\nBut after all that, they said they also need me to complete a paid trial week, attend a team dinner, pass a personality assessment, and provide five more references from previous managers specifically. Every time I meet their requirements, they add new ones.\"",
    fallacyId: "moving-goalposts",
    highlight: "Every time I meet their requirements, they add new ones.",
    explanation: "This is a Moving the Goalposts fallacy. The hiring process keeps adding new requirements after each previous requirement is met. The candidate successfully passes each test — coding, portfolio, references, cultural fit — but the criteria keep shifting. This makes it impossible to ever fully qualify, because the definition of success keeps changing. The original standards were either insufficient (poor planning) or the goalposts are being moved to avoid making a decision."
  }
];
