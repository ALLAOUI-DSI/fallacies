// French Translation Data
// Auto-generated translation file

window.DATA_FR = {
  fallacies: {
    "ad-hominem": {
      description: "Au lieu de répondre à l'argument de quelqu'un, vous attaquez son caractère, son parcours ou ses traits personnels.\n\nC'est fallacieux car la vérité d'une affirmation ne dépend pas de qui la formule. Même une personne imparfaite peut avancer un argument valide.",
      responseStrategy: "Redirigez la conversation vers l\'argument lui-même. Demandez : « Pouvons-nous nous concentrer sur le point réel plutôt que sur les attaques personnelles ? »",
      examples: [
        { text: "You can't trust John's opinion on climate change — he didn't even finish college.", explanation: "John's education level doesn't determine whether his specific argument about climate change is true or false." },
        { text: "Why should we listen to her dietary advice? She's overweight herself!", explanation: "A person's own health doesn't invalidate nutritional facts they might present." },
        { text: "Of course he supports tax cuts — he's a millionaire. His argument is worthless.", explanation: "Someone's wealth doesn't automatically make their economic reasoning incorrect." },
        { text: "She's too young to have a valid opinion on politics.", explanation: "Age alone doesn't determine the quality of a political argument." },
        { text: "His research on poverty can't be taken seriously — he grew up wealthy and never struggled a day in his life.", explanation: "The researcher's background doesn't determine whether his findings about poverty are accurate or not." }
      ],
      quizScenarios: [
        { text: "\"Dr. Smith's research on vaccines is unreliable because she was once fined for a parking violation.\"\n\n\"If she breaks one law, we should ignore everything she publishes.\"", explanation: "This attacks Dr. Smith's character (a minor legal issue) instead of addressing her actual research findings." },
        { text: "\"You think we should protect the environment? That's rich coming from someone who drives an SUV.\"", explanation: "The speaker's personal choices don't invalidate the environmental argument being made." },
        { text: "\"My opponent says we need better schools, but he was a C student himself. How can we take him seriously?\"", explanation: "Past academic performance doesn't make an argument about education policy wrong." },
        { text: "\"Don't listen to her argument about education reform. She sends her kids to private school, so what does she know about public education?\"", explanation: "Where her children attend school doesn't invalidate her argument about education reform policy." }
      ]
    },
    "straw-man": {
      description: "Vous déformez, exagérez ou simplifiez la position de quelqu'un, puis vous argumentez contre cette version déformée. On l'appelle « homme de paille » car vous combattez une version fausse et plus faible du vrai argument.",
      responseStrategy: "Reformulez clairement votre position initiale et dites : « Ce n\'est pas ce que j\'ai dit. Mon argument réel est... » puis répétez votre vrai point.",
      examples: [
        { text: "Person A: 'We should have stricter gun regulations.' Person B: 'Why do you want to ban all guns and leave people defenseless?'", explanation: "Person A said 'stricter regulations,' not 'ban all guns.' Person B distorted the argument." },
        { text: "Person A: 'I think kids should spend less time on social media.' Person B: 'So you want to cut kids off from all technology and go back to the Stone Age?'", explanation: "Reducing social media time is very different from eliminating all technology." },
        { text: "Person A: 'We should consider a vegetarian option in the cafeteria.' Person B: 'Why are you trying to force everyone to stop eating meat?'", explanation: "Offering an option is not the same as forcing a dietary change on everyone." },
        { text: "Person A: 'We should teach financial literacy in high school.' Person B: 'So you want to turn schools into Wall Street training grounds and forget about real education?'", explanation: "Teaching basic financial literacy is far from turning schools into 'Wall Street training grounds.' The argument is distorted." }
      ],
      quizScenarios: [
        { text: "\"Senator Jones says we should invest more in diplomacy. Clearly, she wants to gut our military and leave the country undefended.\"", explanation: "Investing in diplomacy doesn't mean eliminating the military. The argument is distorted into an extreme position." },
        { text: "\"My professor suggested we read more diverse authors. So basically he thinks all classic literature is worthless garbage.\"", explanation: "Suggesting more diversity doesn't mean rejecting classics. This exaggerates the original suggestion." },
        { text: "\"You want to raise the minimum wage? So you want to destroy small businesses and crash the economy!\"", explanation: "Supporting a minimum wage increase is twisted into wanting economic destruction." },
        { text: "\"The mayor wants to add a few speed bumps to residential streets. Apparently she won't rest until driving is completely impossible in this city!\"", explanation: "Adding speed bumps to residential streets is exaggerated into making driving impossible citywide." }
      ]
    },
    "appeal-to-authority": {
      description: "Bien que les opinions d'experts comptent, ce sophisme survient quand on cite une autorité non qualifiée dans le domaine concerné, ou quand on traite la parole d'une autorité comme preuve absolue. L'endorsement d'un traitement médical par une célébrité n'est pas la même chose qu'une étude médicale prouvant son efficacité.",
      responseStrategy: "Demandez si l\'autorité citée est réellement experte dans le domaine concerné, et si d\'autres experts qualifiés sont d\'accord. Exigez les preuves derrière l\'affirmation de l\'autorité, pas seulement son nom.",
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
    "false-dilemma": {
      description: "Présenter seulement deux options alors que d'autres alternatives existent. Cela simplifie faussement la situation et force un choix binaire artificiel.",
      responseStrategy: "Soulignez les options manquantes : « Ce ne sont pas les deux seuls choix. Qu\'en est-il de... » et proposez au moins une alternative qui a été omise.",
      examples: [
        { text: "You're either with us or against us.", explanation: "There are many positions between full support and opposition — neutrality, partial agreement, etc." },
        { text: "Either we ban all social media or we accept that kids will be cyberbullied. There's no other option.", explanation: "Many solutions exist between a total ban and no action: education, moderation tools, age restrictions, etc." },
        { text: "You either support unlimited free speech or you're in favor of censorship.", explanation: "There are nuanced positions, like supporting free speech with reasonable limits." },
        { text: "In this election, you can either vote for our candidate or you're voting for the country's destruction. There is no middle ground.", explanation: "Voters have many candidates and positions to consider — framing it as one candidate vs. national destruction ignores all other options." }
      ],
      quizScenarios: [
        { text: "\"We either cut all funding for the arts or we go bankrupt as a city. Those are our only two choices.\"", explanation: "There are many budget options between eliminating arts funding entirely and going bankrupt." },
        { text: "\"You can either work 80 hours a week or be a failure. There's no in-between.\"", explanation: "Success is not binary, and there are many work-life balance configurations that lead to fulfillment." },
        { text: "\"Either you believe everything the government says, or you're a conspiracy theorist.\"", explanation: "There's a wide range between blind trust and conspiracy theories — healthy skepticism exists." },
        { text: "\"We can either keep the current tax system exactly as it is, or we can adopt a completely flat tax rate. Those are our only options.\"", explanation: "There are many possible tax reform options beyond keeping the status quo or implementing a flat tax." }
      ]
    },
    "slippery-slope": {
      description: "Affirmer qu'un événement mènera inévitablement à des conséquences de plus en plus extrêmes, sans preuve que cette chaîne d'événements se produira réellement.",
      responseStrategy: "Demandez des preuves reliant chaque étape de la chaîne. Dites : « Quelle preuve y a-t-il que A mènera réellement à B, puis B à C ? »",
      examples: [
        { text: "If we allow students to redo one test, soon they'll want to redo every assignment, and eventually nobody will study at all.", explanation: "One accommodation doesn't automatically lead to the collapse of all academic standards." },
        { text: "If we legalize marijuana, next people will want to legalize all drugs, and society will collapse.", explanation: "Each policy change is an independent decision — legalizing one substance doesn't require legalizing all." },
        { text: "If you skip one day of exercise, you'll lose your motivation, stop working out entirely, and become unhealthy.", explanation: "Missing one workout doesn't inevitably lead to abandoning fitness altogether." },
        { text: "If we let students use calculators on tests, they'll never learn basic arithmetic, then they won't understand algebra, and eventually our entire workforce will be mathematically illiterate.", explanation: "Each step in this chain of consequences is presented as inevitable, but none actually follows necessarily from the previous one." }
      ],
      quizScenarios: [
        { text: "\"If we let employees work from home on Fridays, soon they'll want every day remote, then they'll stop showing up to meetings, and eventually the company will fall apart.\"", explanation: "Each step in this chain is assumed without evidence. Friday remote work doesn't inevitably lead to company collapse." },
        { text: "\"If we allow phones in classrooms for educational purposes, students will start gaming, then they'll stop paying attention entirely, and test scores will plummet to zero.\"", explanation: "Allowing limited phone use doesn't automatically trigger an unstoppable chain of negative academic outcomes." },
        { text: "\"If we start offering free lunch to all students, next they'll want free books, then free uniforms, then free transportation, and before you know it, taxpayers will be paying for students' college tuition and housing.\"", explanation: "Each step is presented as an inevitable consequence of the previous one, but none of these extensions actually follow necessarily." }
      ]
    },
    "red-herring": {
      description: "Introduire un sujet sans rapport pour détourner l'attention du problème original. L'orateur change de sujet au lieu de traiter l'argument en question.",
      responseStrategy: "Nommez la diversion et recentrez : « C\'est un sujet distinct. Restons sur le sujet — nous discutions de... » et reformulez le point initial.",
      examples: [
        { text: "Why worry about pollution from our factory? Look at all the jobs we've created!", explanation: "Job creation, while important, doesn't address the pollution concern." },
        { text: "You say I was speeding, but what about all the other drivers who speed? Why single me out?", explanation: "Others' speeding doesn't change whether you were speeding." },
        { text: "We shouldn't discuss the CEO's salary increase when there are children starving in the world.", explanation: "World hunger, while serious, is unrelated to the discussion about CEO compensation." },
        { text: "When asked about missing project deadlines, he responded: 'But look at how great our customer satisfaction scores have been this quarter!'", explanation: "Customer satisfaction scores are irrelevant to the question about why project deadlines were missed." }
      ],
      quizScenarios: [
        { text: "\"You're asking about our data privacy practices? Let me tell you about our amazing new product features and how they help customers!\"", explanation: "Product features are irrelevant to data privacy concerns. The topic is deliberately changed." },
        { text: "\"Critics say our education budget is too low. But let's talk about how our sports teams are performing better than ever!\"", explanation: "Sports performance doesn't address the adequacy of education funding." },
        { text: "\"You want to discuss my missed deadlines? Well, I think we should focus on how Lisa is always late to meetings.\"", explanation: "Lisa's punctuality is irrelevant to the discussion about your missed deadlines." },
        { text: "\"Why haven't you submitted your report yet?\" \"Well, did you know that our team actually won the innovation award last month? We should really be celebrating that.\"", explanation: "Bringing up an innovation award is a diversion from the question about the late report." }
      ]
    },
    "bandwagon": {
      description: "Affirmer que quelque chose est vrai ou bon simplement parce que beaucoup de gens le croient ou le font. La popularité ne détermine pas la vérité ou la qualité.",
      responseStrategy: "Soulignez que la popularité n\'est pas synonyme de vérité. Demandez : « Pouvez-vous me donner une raison au-delà du fait que beaucoup de gens y croient ? »",
      examples: [
        { text: "Everyone is buying cryptocurrency, so it must be a great investment.", explanation: "Popularity doesn't determine investment quality. Many popular investments have failed." },
        { text: "Millions of people believe in astrology, so there must be something to it.", explanation: "The number of believers doesn't provide scientific evidence for astrology." },
        { text: "This restaurant always has a long line, so the food must be amazing.", explanation: "Popularity can be due to marketing, location, or trends — not necessarily food quality." },
        { text: "Everyone in the office is switching to standing desks. You should too — it's obviously the healthier choice.", explanation: "The popularity of standing desks among coworkers doesn't establish that they're healthier for everyone." }
      ],
      quizScenarios: [
        { text: "\"Nine out of ten of my friends think this movie is the best ever made. You should watch it — it's clearly a masterpiece.\"", explanation: "Your friends' opinions, even if numerous, don't objectively determine a film's quality." },
        { text: "\"Over 50 million people have downloaded this app. It must be safe and trustworthy!\"", explanation: "Download numbers don't guarantee an app's security or trustworthiness." },
        { text: "\"Most people in our office skip the safety protocols, so they're probably unnecessary.\"", explanation: "Widespread non-compliance doesn't mean safety protocols are unneeded." },
        { text: "\"Most restaurants in the city have started using compostable packaging. Any restaurant that doesn't switch is clearly not serious about quality.\"", explanation: "A trend in packaging choices among restaurants doesn't determine whether a specific restaurant provides quality service." }
      ]
    },
    "appeal-to-emotion": {
      description: "Utiliser la manipulation émotionnelle au lieu du raisonnement logique pour convaincre. Susciter la pitié, la culpabilité ou l'enthousiasme ne rend pas un argument valide.",
      responseStrategy: "Reconnaissez l\'émotion, puis recentrez : « Je comprends que cela semble important, mais que montrent réellement les preuves ? » Séparez les sentiments des faits.",
      examples: [
        { text: "Think of the children! We can't allow this policy to pass!", explanation: "Invoking concern for children without explaining how the policy actually harms them is emotional manipulation." },
        { text: "If you don't donate, this puppy will suffer. Don't you care about animals?", explanation: "Using guilt and emotional imagery doesn't address whether the charity is effective or legitimate." },
        { text: "How can you support immigration reform when families are being separated? Have you no heart?", explanation: "The emotional appeal doesn't engage with the specifics of the reform being proposed." },
        { text: "We need to pass this trade agreement. Think about the children of factory workers — their innocent faces, wondering if Mommy or Daddy will have a job tomorrow.", explanation: "Emotional imagery of children's worry doesn't address the actual merits or drawbacks of the trade agreement." }
      ],
      quizScenarios: [
        { text: "\"Vote for this bill or you clearly don't care about our brave veterans who sacrificed everything for our freedom.\"", explanation: "Using respect for veterans as emotional leverage doesn't address whether the specific bill is well-designed." },
        { text: "\"You would understand my business proposal if you could see my children's faces when I told them Daddy's company might fail.\"", explanation: "The emotional story about children doesn't make the business proposal sound or viable." },
        { text: "\"How can you support building a parking garage here? Imagine the beautiful old oak tree that stands there, the one where generations of couples have carved their initials. You'd destroy all those memories for concrete.\"", explanation: "Nostalgic attachment to the oak tree, while understandable, doesn't address whether the parking garage serves the community's needs." }
      ]
    },
    "appeal-to-fear": {
      description: "Utiliser la peur ou les menaces pour persuader plutôt que des preuves. Effrayer les gens pour qu'ils soient d'accord n'est pas un argument logique.",
      responseStrategy: "Reconnaissez la préoccupation calmement, puis demandez : « Quelle est la probabilité réelle que cela se produise ? Pouvons-nous examiner les données plutôt que les scénarios catastrophes ? »",
      examples: [
        { text: "If you don't buy this security system, your family could be in danger tonight!", explanation: "Using fear of home invasion to pressure a purchase isn't a logical argument for the product's value." },
        { text: "If you don't support this law, terrorists will attack us!", explanation: "Fear of terrorism doesn't demonstrate that this specific law is effective or necessary." },
        { text: "If you question the company's direction, you might find yourself out of a job.", explanation: "This is a veiled threat, not a logical response to constructive criticism." },
        { text: "If we don't increase military spending immediately, our enemies will see us as weak and launch an attack within the year.", explanation: "Using fear of an imminent foreign attack to pressure a budget decision rather than presenting strategic analysis." }
      ],
      quizScenarios: [
        { text: "\"If we don't pass this surveillance bill immediately, we are guaranteed to suffer a catastrophic attack within the year.\"", explanation: "This uses fear of an attack to rush a decision without presenting evidence that the bill would prevent such an event." },
        { text: "\"Buy our insurance plan now, or you could lose everything you own in a disaster tomorrow!\"", explanation: "While insurance is important, using scare tactics about imminent disaster replaces rational evaluation of the policy." },
        { text: "\"If we allow any form of gene editing research, we'll end up creating designer babies and eventually a class of genetically engineered super-soldiers. Is that the future you want for humanity?\"", explanation: "The argument uses a frightening sci-fi scenario rather than addressing the actual scope and regulations of the proposed research." }
      ]
    },
    "circular-reasoning": {
      description: "Utiliser la conclusion comme prémisse — l'argument tourne en rond. Vous présupposez ce que vous essayez de prouver.",
      responseStrategy: "Identifiez la boucle : « Vous utilisez votre conclusion comme point de départ. Pouvez-vous me donner des preuves indépendantes qui ne présupposent pas ce que vous essayez de démontrer ? »",
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
    "hasty-generalization": {
      description: "Tirer une conclusion générale à partir d'un échantillon petit ou non représentatif. Une seule observation ou quelques cas ne suffisent pas pour soutenir une affirmation large.",
      responseStrategy: "Interrogez sur la taille et la représentativité de l\'échantillon : « Sur combien de cas cela repose-t-il ? Est-ce suffisant pour tirer une conclusion aussi large ? »",
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
    "tu-quoque": {
      description: "Rejeter l'argument de quelqu'un en soulignant qu'il ne pratique pas ce qu'il prêche. Même si la personne est hypocrite, cela n'invalide pas son argument.",
      responseStrategy: "Reconnaissez l\'incohérence si elle est valide, mais recentrez : « Que je sois cohérent ou non ne change pas la validité de l\'argument. Discutons du point lui-même. »",
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
    "appeal-to-ignorance": {
      description: "Affirmer que quelque chose est vrai parce qu'il n'a pas été prouvé faux, ou faux parce qu'il n'a pas été prouvé vrai. L'absence de preuve n'est pas la preuve de l'absence.",
      responseStrategy: "Clarifiez la charge de la preuve : « Ne pas pouvoir réfuter quelque chose ne le rend pas vrai. Quelles preuves positives soutiennent cette affirmation ? »",
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
    "post-hoc": {
      description: "Supposer que B s'est produit à cause de A simplement parce que A a précédé B. La corrélation temporelle ne signifie pas la causalité.",
      responseStrategy: "Demandez un mécanisme causal : « Ce n\'est pas parce qu\'une chose a suivi une autre qu\'elle en est la cause. Y a-t-il une raison prouvée pour laquelle ces éléments sont liés ? »",
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
    "loaded-question": {
      description: "Poser une question contenant une hypothèse non prouvée intégrée. La question est conçue de sorte que toute réponse accepte l'hypothèse.",
      responseStrategy: "Rejetez la prémisse avant de répondre : « Je n\'accepte pas le présupposé intégré dans cette question. Permettez-moi de la reformuler... » puis posez une version équitable.",
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
    "no-true-scotsman": {
      description: "Redéfinir les critères pour exclure les contre-exemples. Quand un contre-exemple est présenté, la définition est modifiée pour l'exclure.",
      responseStrategy: "Fixez la définition : « Avant de continuer, mettons-nous d\'accord sur une définition claire. Vous ne pouvez pas la modifier à chaque fois qu\'un contre-exemple apparaît. »",
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
    "equivocation": {
      description: "Utiliser un mot ayant plusieurs sens comme s'il signifiait la même chose dans tous les usages. Changer le sens en cours d'argument le rend trompeur.",
      responseStrategy: "Signalez le glissement de sens : « Vous utilisez ce mot dans deux sens différents. Soyons précis — quel sens voulez-vous lui donner ? »",
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
    "composition-division": {
      description: "Supposer que ce qui est vrai des parties est vrai du tout (composition), ou que ce qui est vrai du tout est vrai de chaque partie (division).",
      responseStrategy: "Distinguez les parties du tout : « Ce qui est vrai des parties individuelles n\'est pas nécessairement vrai du groupe, et vice versa. Pouvez-vous montrer que cela s\'applique aux deux niveaux ? »",
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
    "appeal-to-nature": {
      description: "Affirmer que quelque chose est bon parce que naturel ou mauvais parce qu'artificiel. Le fait qu'une chose soit naturelle ne la rend pas automatiquement bonne ou sûre.",
      responseStrategy: "Donnez des contre-exemples : « Beaucoup de choses naturelles sont nocives et beaucoup de choses artificielles sont bénéfiques. Pouvez-vous expliquer pourquoi être naturel rend cela spécifiquement meilleur ? »",
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
    "genetic-fallacy": {
      description: "Juger quelque chose comme bon ou mauvais en se basant sur son origine, plutôt que d'évaluer sa valeur actuelle.",
      responseStrategy: "Séparez l\'origine du mérite : « D\'où vient une idée ne détermine pas si elle est correcte. Évaluons l\'argument sur la base de ses propres preuves. »",
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
    "middle-ground": {
      description: "Supposer que la vérité doit être un compromis entre deux positions opposées. Parfois, un côté a entièrement raison.",
      responseStrategy: "Soulignez que la vérité n\'est pas toujours au milieu : « Le compromis est excellent pour les négociations, mais les faits ne se décident pas en coupant la poire en deux. Que soutiennent les preuves ? »",
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
    "texas-sharpshooter": {
      description: "Sélectionner les données qui correspondent à un argument tout en ignorant celles qui ne correspondent pas. Comme dessiner la cible autour de l'endroit où les balles ont frappé.",
      responseStrategy: "Demandez si le modèle a été prédit avant la collecte des données, ou trouvé après coup. Dites : « Sélectionnez-vous uniquement les données qui correspondent à votre conclusion ? »",
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
    "burden-of-proof": {
      description: "Transférer la charge de la preuve à la mauvaise partie. C'est à celui qui fait l'affirmation de fournir la preuve.",
      responseStrategy: "Rappelez-leur qui porte la charge de la preuve : « C\'est vous qui avez fait l\'affirmation, c\'est donc à vous de fournir des preuves. Je n\'ai pas besoin de réfuter quelque chose qui n\'a pas été prouvé. »",
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
    "anecdotal": {
      description: "Utiliser l'expérience personnelle au lieu de preuves systématiques. Une seule histoire ne prouve pas un modèle général.",
      responseStrategy: "Reconnaissez l\'histoire, puis élargissez la perspective : « C\'est un cas intéressant, mais que disent les données globales ? Un seul exemple ne représente pas l\'ensemble du tableau. »",
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
    "cherry-picking": {
      description: "Sélectionner uniquement les données qui soutiennent votre position et ignorer celles qui la contredisent. Présenter une image incomplète pour soutenir une conclusion prédéterminée.",
      responseStrategy: "Demandez une vue d\'ensemble : « Y a-t-il des études ou des données que vous omettez ? J\'aimerais voir toutes les preuves, pas seulement celles qui soutiennent votre position. »",
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
    "motte-and-bailey": {
      description: "Alterner entre une affirmation controversée (la basse-cour) et une affirmation facilement défendable (le donjon) lorsqu'on est contesté.",
      responseStrategy: "Épinglez-les à leur affirmation initiale : « Votre argument initial était bien plus fort que ce que vous défendez maintenant. Maintenez-vous votre affirmation originale, ou changez-vous de position ? »",
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
    "kafkatrap": {
      description: "Utiliser le déni d'une accusation comme preuve que l'accusation est vraie. Toute tentative de se défendre est utilisée contre vous.",
      responseStrategy: "Nommez le piège explicitement : « Vous avez conçu cela de sorte que toute réponse que je donne est traitée comme une preuve de culpabilité. Ce n\'est pas un cadre équitable pour une discussion. »",
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
    "sealioning": {
      description: "Demander constamment des preuves tout en paraissant poli et raisonnable. Le but n'est pas d'apprendre mais d'épuiser l'adversaire.",
      responseStrategy: "Fixez des limites claires : « J\'ai fourni mon raisonnement. Si vous êtes sincèrement intéressé, voici quelques ressources. Je ne suis pas obligé de réexpliquer ma position indéfiniment. »",
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
    "gish-gallop": {
      description: "Submerger l'adversaire d'un flot d'arguments pour rendre la réponse impossible. La quantité est utilisée à la place de la qualité.",
      responseStrategy: "Ne poursuivez pas chaque point. Dites : « Vous avez soulevé de nombreuses affirmations en même temps. Ralentissons et abordons-les une par une, en commençant par la plus solide. »",
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
    "nirvana-fallacy": {
      description: "Rejeter une bonne solution parce qu'elle n'est pas parfaite. Comparer à un standard impossible au lieu d'évaluer l'amélioration réelle.",
      responseStrategy: "Recadrez la comparaison : « La question n\'est pas de savoir si cette solution est parfaite, mais si elle est meilleure que l\'alternative. Ne laissez pas le mieux être l\'ennemi du bien. »",
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
    "reification": {
      description: "Traiter un concept abstrait comme s'il était concret ou physique. Attribuer des qualités physiques à des idées abstraites.",
      responseStrategy: "Clarifiez l\'abstraction : « C\'est un concept utile, mais ce n\'est pas une entité réelle dotée d\'intentions. Parlons des personnes ou des mécanismes spécifiques réellement impliqués. »",
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
    "moving-goalposts": {
      description: "Changer les critères de preuve ou de succès après qu'ils ont été remplis. Peu importe les preuves présentées, la barre est constamment relevée.",
      responseStrategy: "Signalez le déplacement : « J\'ai rempli vos critères initiaux. Vous demandez maintenant quelque chose de différent. Pouvons-nous convenir d\'un standard fixe avant de continuer ? »",
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
    "false-equivalence": {
      description: "Traiter des choses significativement différentes comme également comparables. Ignorer les différences substantielles pour créer une fausse équivalence.",
      responseStrategy: "Soulignez le déséquilibre : « Ces deux choses ne sont pas également étayées. L\'une dispose de preuves nettement plus solides que l\'autre. Évaluons-les proportionnellement. »",
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
    "appeal-to-tradition": {
      description: "Affirmer que quelque chose est juste ou meilleur parce que cela a toujours été fait ainsi. L'ancienneté ne rend pas une pratique correcte.",
      responseStrategy: "Demandez pourquoi la tradition compte ici : « Depuis combien de temps nous faisons quelque chose ne nous dit pas si c\'est la meilleure approche. Quelles preuves montrent que c\'est encore la bonne voie ? »",
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
    "whataboutism": {
      description: "Répondre à une critique en pointant un problème différent au lieu de traiter la critique originale. Détourner l'attention au lieu de répondre.",
      responseStrategy: "Redirigez vers le sujet initial : « C\'est une question distincte que nous pourrons aborder plus tard. Pour l\'instant, traitons le point qui a été réellement soulevé. »",
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
    "personal-incredulity": {
      description: "Affirmer que quelque chose est faux parce que vous ne pouvez pas le comprendre ou l'imaginer. Votre incompréhension personnelle ne détermine pas la réalité.",
      responseStrategy: "Séparez la compréhension de la vérité : « Le fait que quelque chose soit difficile à comprendre ne le rend pas faux. Regardons ce que disent les preuves et les experts, pas seulement nos intuitions. »",
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
  },
  extractorPassages: {
    "ad-hominem": {
      text: "At a town hall meeting, a citizen stood up and said: \"Mayor Thompson wants us to invest in public transportation. But let me remind you, Mayor Thompson was caught jaywalking last year and he didn't even apologize.\n\nAre we really going to take transit advice from someone who can't even follow basic pedestrian laws? I think his entire proposal should be thrown out based on his character alone.\"",
      highlight: "Are we really going to take transit advice from someone who can't even follow basic pedestrian laws?",
      explanation: "This passage contains an Ad Hominem fallacy. Instead of evaluating the merits of the public transportation proposal, the speaker attacks Mayor Thompson's character by bringing up an irrelevant jaywalking incident. The mayor's personal behavior as a pedestrian has no logical bearing on whether the transit investment is a good policy. The argument should be assessed on its own merits — cost, feasibility, and community benefit — not on the character of the person proposing it."
    },
    "straw-man": {
      text: "During a school board debate about extending library hours, one parent argued: \"Ms. Garcia suggested we keep the library open until 8 PM on weekdays. But what she's really saying is that parents can't be trusted to educate their own children at home.\n\nShe basically wants the government to replace family time with institutional time. Next she'll want kids to sleep at school too!\"",
      highlight: "But what she's really saying is that parents can't be trusted to educate their own children at home.",
      explanation: "This is a Straw Man fallacy. Ms. Garcia proposed extending library hours — a specific, practical suggestion. The opponent distorts this into a claim that parents can't be trusted and that the government wants to replace family time. This exaggerated, distorted version of the argument is much easier to attack than the actual proposal. The original suggestion said nothing about parental competence or replacing family time."
    },
    "appeal-to-authority": {
      text: "A health blogger wrote: \"Dr. James Wilson, a Nobel Prize-winning physicist, recently said on a podcast that intermittent fasting is the single best thing you can do for longevity.\n\nIf a Nobel laureate says fasting works, who are we to question it? This man is clearly one of the smartest people alive, so his dietary advice should carry more weight than any nutritionist's opinion.\"",
      highlight: "If a Nobel laureate says fasting works, who are we to question it?",
      explanation: "This is an Appeal to Authority fallacy. Dr. Wilson's Nobel Prize is in physics, not nutrition or medicine. Being brilliant in one field doesn't make someone an authority in a completely different field. A physicist's opinions on diet carry no more scientific weight than any other non-expert. Dietary claims should be evaluated based on nutritional research, not the prestige of an unrelated credential."
    },
    "false-dilemma": {
      text: "A company CEO addressed employees: \"We're at a crossroads. Either we accept this merger with GlobalTech and secure our future, or we reject it and watch the company go bankrupt within two years.\n\nThere is no middle path here. It's partnership or extinction. I need everyone on board because the alternative is unemployment for all of us.\"",
      highlight: "Either we accept this merger with GlobalTech and secure our future, or we reject it and watch the company go bankrupt within two years.",
      explanation: "This is a False Dilemma fallacy. The CEO presents only two options — merger or bankruptcy — when many other possibilities exist. The company could seek different partners, restructure internally, find new markets, reduce costs, attract new investors, or pursue incremental growth strategies. By framing the decision as binary, the CEO eliminates consideration of alternative paths and pressures employees into supporting the merger."
    },
    "slippery-slope": {
      text: "A parent argued at a PTA meeting: \"If we allow students to use calculators in math class, they'll stop learning mental arithmetic. Then they won't be able to do basic math without a device.\n\nBefore you know it, they'll need a computer to figure out how to tip at a restaurant, then they'll become completely dependent on AI for all thinking, and eventually human intelligence will just wither away entirely.\"",
      highlight: "Before you know it, they'll need a computer to figure out how to tip at a restaurant, then they'll become completely dependent on AI for all thinking, and eventually human intelligence will just wither away entirely.",
      explanation: "This is a Slippery Slope fallacy. The argument chains a series of increasingly extreme consequences from the initial, reasonable premise of using calculators. Allowing calculators → losing mental math → needing computers for tips → total AI dependence → human intelligence withering. Each step in this chain is unsupported and exaggerated. Many students use calculators and still maintain strong mathematical thinking skills."
    },
    "red-herring": {
      text: "During a budget review meeting, when questioned about overspending in the marketing department, the marketing director responded: \"I understand your concerns about our budget, but have you seen how well our employee wellness program is doing? We've had record participation in yoga classes and our cafeteria just added a new smoothie bar.\n\nI think what's really important here is the morale of our team, which has never been higher thanks to these wonderful initiatives.\"",
      highlight: "but have you seen how well our employee wellness program is doing?",
      explanation: "This is a Red Herring fallacy. The question was about overspending in the marketing budget, but the director redirects attention to the employee wellness program, yoga classes, and a smoothie bar — none of which address the original concern about marketing expenditures. These may be positive developments, but they are completely irrelevant to the budget oversight question being asked."
    },
    "bandwagon": {
      text: "A teenager tried to convince her parents: \"Mom, Dad, literally everyone at school has the new iPhone. I'm the only one without it, and people are starting to notice.\n\nAll my friends have upgraded, and even the teachers use iPhones now. When everyone is choosing the same phone, there's obviously a reason — it's clearly the best choice. I'd be crazy not to get one too.\"",
      highlight: "When everyone is choosing the same phone, there's obviously a reason — it's clearly the best choice.",
      explanation: "This is a Bandwagon (Ad Populum) fallacy. The argument relies on the popularity of the iPhone among peers as evidence of its quality and as justification for the purchase. The number of people who own a product doesn't determine whether it's the best choice for this individual's needs and budget. Popularity can be driven by marketing, social pressure, and trends rather than objective superiority."
    },
    "appeal-to-emotion": {
      text: "A charity fundraiser delivered this speech: \"Imagine little Timmy, sitting alone in a cold room with no food, no parents, and no hope. His tiny hands are shaking. He hasn't smiled in weeks.\n\nIf you don't open your wallets tonight, children like Timmy will continue to suffer. You have the power to make a difference — but only if you act now. Can you really live with yourself knowing you could have helped?\"",
      highlight: "If you don't open your wallets tonight, children like Timmy will continue to suffer.",
      explanation: "This is an Appeal to Emotion fallacy. The speech uses vivid, emotional imagery of a suffering child to manipulate the audience into donating. While the cause may be worthy, the argument provides no information about the charity's effectiveness, how funds are used, or whether this is the best way to help. The emotional manipulation replaces rational evaluation of the charity's merits and impact."
    },
    "appeal-to-fear": {
      text: "A home security salesman told a homeowner: \"Just last week, three houses on this very street were broken into. The criminals are getting bolder and more violent every day.\n\nWithout our premium security system, your family is essentially sleeping with the doors wide open. A break-in isn't a matter of if — it's a matter of when. And when it happens, and you haven't protected your family, you'll wish you had listened to me today.\"",
      highlight: "Without our premium security system, your family is essentially sleeping with the doors wide open. A break-in isn't a matter of if — it's a matter of when.",
      explanation: "This is an Appeal to Fear fallacy. The salesman uses exaggerated fear of imminent crime to pressure a purchase. Rather than presenting evidence about the product's effectiveness, coverage, or value compared to alternatives, he relies on scare tactics — painting a picture of inevitable victimhood to override rational decision-making about home security options."
    },
    "circular-reasoning": {
      text: "A philosophy student wrote in her essay: \"Freedom of the press is essential because people need access to information. And people need access to information because a free press is essential to a functioning democracy.\n\nTherefore, we can clearly see that freedom of the press is important because it is an essential right, and it is an essential right because it is important.\"",
      highlight: "Freedom of the press is essential because people need access to information. And people need access to information because a free press is essential.",
      explanation: "This is Circular Reasoning (begging the question). The argument goes in a circle: the press is essential because information access is needed, and information access is needed because the press is essential. The conclusion is assumed as its own premise. A proper argument would provide independent reasons why press freedom matters — accountability, informed voting, exposing corruption, etc."
    },
    "hasty-generalization": {
      text: "After visiting a new city, a traveler posted online: \"I spent one weekend in Portland and encountered three rude baristas and one unfriendly hotel clerk. Based on my experience, I can confidently say that Portland has the rudest people in America.\n\nI wouldn't recommend visiting this city to anyone. The people there clearly have no concept of hospitality or basic courtesy.\"",
      highlight: "Based on my experience, I can confidently say that Portland has the rudest people in America.",
      explanation: "This is a Hasty Generalization. The traveler met four people during a single weekend and generalized their behavior to an entire city of over 650,000 people. Four interactions out of hundreds of thousands of residents is an absurdly small sample size. The conclusion about Portland's entire population is wildly disproportionate to the evidence."
    },
    "tu-quoque": {
      text: "During a family discussion about healthy eating, a teenager said: \"Dad, you keep telling me I should eat more vegetables and cut down on junk food. But I've seen you eat pizza three times this week and you had ice cream yesterday!\n\nYou don't follow your own advice, so why should I listen to anything you say about nutrition? Your whole argument about healthy eating falls apart because you don't practice it yourself.\"",
      highlight: "You don't follow your own advice, so why should I listen to anything you say about nutrition?",
      explanation: "This is a Tu Quoque (You Too) fallacy. The teenager dismisses valid nutritional advice by pointing out the father's own unhealthy eating habits. However, the father's hypocrisy doesn't change whether the advice itself is medically sound. A doctor who smokes can still give correct medical advice about the dangers of smoking. The argument should be evaluated on its own merits, not the behavior of the person making it."
    },
    "appeal-to-ignorance": {
      text: "A supplement company advertised: \"Our new brain-boosting supplement, NeuroMax, has no studies showing it causes harm. In fact, no one has been able to prove that it doesn't work.\n\nSince there's no evidence against NeuroMax, it must be safe and effective. Until someone definitively proves our supplement doesn't enhance cognition, our claims stand as valid.\"",
      highlight: "Since there's no evidence against NeuroMax, it must be safe and effective.",
      explanation: "This is an Appeal to Ignorance. The supplement company shifts the burden by arguing that because no evidence exists against their product, it must work. The absence of negative evidence is not positive evidence. The company should provide studies proving their supplement works, not rely on the fact that nobody has disproven their claims. Many untested substances lack negative studies simply because they haven't been studied at all."
    },
    "post-hoc": {
      text: "A startup founder told investors: \"Right after we redesigned our website last month, our user signups increased by 40%. Clearly, the new design is what caused this dramatic growth.\n\nWe should invest even more in design because it's obviously the key driver of our business growth. The data speaks for itself — new design, more signups. Cause and effect.\"",
      highlight: "Right after we redesigned our website last month, our user signups increased by 40%. Clearly, the new design is what caused this dramatic growth.",
      explanation: "This is a False Cause (Post Hoc) fallacy. The founder assumes that because the signup increase happened after the redesign, the redesign caused it. But correlation doesn't equal causation. The increase could be due to seasonal trends, a viral social media post, a competitor shutting down, a marketing campaign, or many other factors. Proper analysis would require controlled testing (A/B tests) to isolate the design's impact."
    },
    "loaded-question": {
      text: "During a political debate, the moderator asked the candidate: \"When did you realize that your economic policies were hurting middle-class families?\"\n\nThe candidate struggled to respond because simply saying \"I didn't\" seemed defensive, and any other answer would acknowledge that her policies were harmful — even though no evidence had been presented to that effect.",
      highlight: "When did you realize that your economic policies were hurting middle-class families?",
      explanation: "This is a Loaded Question. The question presupposes two things: (1) that the candidate's policies hurt middle-class families, and (2) that the candidate has realized this. Neither claim has been established. Any direct answer — whether \"last year\" or \"recently\" — accepts the harmful premise. The question is designed to trap the respondent into implicitly confirming the embedded, unproven assumption."
    },
    "no-true-scotsman": {
      text: "In an online debate about music, someone wrote: \"True music lovers would never listen to pop music. It's manufactured garbage.\" Another person replied: \"But my uncle is a music professor who has studied music theory for 30 years, and he enjoys pop music.\"\n\n\"Well, then he's not a TRUE music lover. A real music lover with genuine appreciation would never enjoy such simplistic compositions.\"",
      highlight: "Well, then he's not a TRUE music lover. A real music lover with genuine appreciation would never enjoy such simplistic compositions.",
      explanation: "This is a No True Scotsman fallacy. When presented with a clear counterexample (a music professor who enjoys pop), the person redefines 'true music lover' to exclude anyone who likes pop music. The criteria shift to protect the original claim from being disproven. A 30-year music professor who enjoys pop is a perfectly valid counterexample that should challenge the original generalization."
    },
    "whataboutism": {
      text: "A politician deflected criticism at a press conference: \"You're asking me about our country's healthcare issues? What about the healthcare crisis in neighboring countries? They're spending even more and getting worse results.\n\nBefore we point fingers at our own system, maybe we should look at the mess other nations have created. Why aren't you asking them these tough questions instead?\"",
      highlight: "What about the healthcare crisis in neighboring countries? They're spending even more and getting worse results.",
      explanation: "This is Whataboutism. Instead of addressing the healthcare concerns in their own country, the politician deflects by pointing to problems in other nations. Other countries' healthcare issues don't resolve or address the domestic concerns being raised. This is a diversionary tactic that avoids accountability by redirecting attention elsewhere."
    },
    "appeal-to-nature": {
      text: "A food blogger argued: \"I only cook with organic, all-natural ingredients. Chemical-free food is the only way to be truly healthy. Our ancestors thrived for thousands of years without pesticides and preservatives.\n\nIf something doesn't come from nature, it shouldn't go into your body. Mother Nature knows best — she's been perfecting food for millions of years. Anything artificial is inherently suspicious.\"",
      highlight: "If something doesn't come from nature, it shouldn't go into your body. Mother Nature knows best.",
      explanation: "This is an Appeal to Nature fallacy. The blogger assumes that natural automatically equals healthy and artificial automatically equals harmful. In reality, many natural substances are toxic (arsenic, hemlock, certain mushrooms), and many artificial substances are beneficial (modern medicine, water purification). The natural/artificial distinction doesn't reliably predict safety or health value. Also, all food contains chemicals — water is a chemical."
    },
    "genetic-fallacy": {
      text: "During a discussion about a new educational app developed by a tech startup from a developing country, a venture capitalist said: \"Look, I'm sure the developers are talented, but this app was built in a country without a strong tech ecosystem.\n\nInnovation in education technology really comes from Silicon Valley or maybe Tel Aviv. I'd need to see the same product from a more established tech hub before I'd consider investing. The origin matters.\"",
      highlight: "Innovation in education technology really comes from Silicon Valley or maybe Tel Aviv. I'd need to see the same product from a more established tech hub before I'd consider investing.",
      explanation: "This is a Genetic Fallacy. The investor judges the educational app based on its country of origin rather than evaluating the product's actual features, user engagement, or market potential. An app's quality is determined by its design, functionality, and impact — not by where it was built. Great innovations have emerged from unexpected places throughout history."
    },
    "middle-ground": {
      text: "In a policy debate, a panelist argued: \"Climate scientists say we need to reduce emissions by 80% to prevent catastrophe. Industry leaders say no reductions are needed and the economy will suffer. The sensible position is clearly somewhere in the middle.\n\nLet's compromise and aim for a 40% reduction. That way, both sides get something they want, and we avoid the extremes. The truth usually lies in the middle.\"",
      highlight: "The sensible position is clearly somewhere in the middle. Let's compromise and aim for a 40% reduction.",
      explanation: "This is a Middle Ground (Golden Mean) fallacy. The argument assumes that splitting the difference between two positions automatically produces the correct answer. But if the scientific evidence supports an 80% reduction to prevent catastrophe, a 40% reduction isn't a reasonable compromise — it could still lead to catastrophe. The truth should be determined by evidence, not by averaging competing claims. Sometimes one side is simply more correct than the other."
    },
    "texas-sharpshooter": {
      text: "A marketing consultant presented findings to a client: \"I analyzed all 200 employees at your company and discovered something fascinating. The top 5 salespeople all happen to drink coffee before client calls, while 3 of your lowest performers prefer tea.\n\nThis clearly shows a pattern: coffee drinkers are better salespeople. I recommend providing free premium coffee to your entire sales team as a performance improvement strategy.\"",
      highlight: "The top 5 salespeople all happen to drink coffee before client calls, while 3 of your lowest performers prefer tea. This clearly shows a pattern.",
      explanation: "This is a Texas Sharpshooter fallacy. The consultant searched through data about 200 employees and found a coincidental pattern between beverage choice and sales performance. This is like painting a bullseye around a random cluster of bullet holes. With 200 people and countless variables, random correlations are inevitable. The \"pattern\" was discovered after the fact and doesn't demonstrate any causal relationship between coffee consumption and sales ability."
    },
    "burden-of-proof": {
      text: "In a community meeting about building a new playground, a resident objected: \"You say this playground equipment is safe, but I want you to prove it. Show me evidence! I shouldn't have to prove it's dangerous — it's your job to convince me it won't harm our children.\n\nUntil you can guarantee with 100% certainty that no child will ever be injured, I say we shouldn't build it. The people proposing this should bear the responsibility of proving absolute safety.\"",
      highlight: "I shouldn't have to prove it's dangerous — it's your job to convince me it won't harm our children.",
      explanation: "This is a Burden of Proof fallacy. While the proposers should demonstrate reasonable safety standards (which is standard for playground equipment), the objector is demanding impossible proof — that no child will EVER be injured. The objector shifts the burden unreasonably by demanding absolute certainty, which is an impossible standard for any physical activity. Safety is about managing risk to acceptable levels, not eliminating it entirely."
    },
    "anecdotal": {
      text: "A vaccine skeptic argued at a public forum: \"My neighbor's daughter got vaccinated and then developed allergies a month later. My cousin's child was perfectly healthy until his vaccinations. And I personally know someone whose child was fine until they got the flu shot.\n\nForget what the big studies say — I've seen the effects with my own eyes. When you have this many personal stories, you can't just dismiss them. Real experiences trump statistics.\"",
      highlight: "Forget what the big studies say — I've seen the effects with my own eyes. When you have this many personal stories, you can't just dismiss them.",
      explanation: "This is an Anecdotal Evidence fallacy. The speaker relies on a handful of personal stories to draw conclusions about vaccine safety, dismissing large-scale scientific studies in favor of individual experiences. Three personal anecdotes, even if genuinely observed, cannot account for coincidence, confirmation bias, or the millions of children who are vaccinated without issues. Systematic evidence from controlled studies is far more reliable than a few personal observations."
    },
    "appeal-to-tradition": {
      text: "A CEO defended the company's legacy software: \"We've been using this inventory management system for 25 years. My predecessor installed it, and her predecessor before her approved it.\n\nThis software has been the backbone of our operations through three economic recessions and two mergers. If it has worked for a quarter century, there's clearly no reason to change it now. Why fix what isn't broken? Our traditions have served us well.\"",
      highlight: "If it has worked for a quarter century, there's clearly no reason to change it now. Why fix what isn't broken?",
      explanation: "This is an Appeal to Tradition fallacy. The CEO uses the software's 25-year history as the primary argument against upgrading, rather than evaluating current needs, modern capabilities, security requirements, or competitive advantages of newer systems. The fact that something has been used for a long time doesn't mean it's still the best option. Technology evolves, business needs change, and what worked decades ago may now be a liability."
    },
    "false-equivalence": {
      text: "A pundit compared two political controversies on a talk show: \"Candidate A was caught embezzling $2 million from a charity, while Candidate B accidentally used the wrong email address for one work message.\n\nBoth candidates have shown poor judgment with important matters. Neither one can be trusted. They're both equally problematic, so it really doesn't matter which one you vote for. Corruption is corruption, big or small.\"",
      highlight: "Both candidates have shown poor judgment with important matters. Neither one can be trusted. They're both equally problematic.",
      explanation: "This is a False Equivalence fallacy. The pundit treats embezzling $2 million from a charity — a serious criminal offense — as comparable to accidentally using the wrong email address — a trivial mistake. These are vastly different in severity, intent, and consequence. Equating them creates a misleading impression that both candidates are equally flawed, when the evidence clearly shows a massive difference in the seriousness of their actions."
    },
    "motte-and-bailey": {
      text: "On social media, a commentator wrote: \"Modern education is completely destroying children's natural creativity and turning them into mindless robots!\" When challenged to provide evidence, they responded: \"I'm just saying that children need more creative outlets in schools.\"\n\nThe next day, the same person posted: \"The education system is a factory for conformity. It crushes every spark of originality in our children!\"",
      highlight: "When challenged to provide evidence, they responded: \"I'm just saying that children need more creative outlets in schools.\"",
      explanation: "This is a Motte and Bailey fallacy. The commentator makes a bold, controversial claim (the \"bailey\"): that education is \"completely destroying creativity\" and creating \"mindless robots.\" When challenged, they retreat to a much more modest, defensible position (the \"motte\"): that children need more creative outlets. But the next day, they return to the extreme claim. The reasonable position serves as a shield for the unreasonable one."
    },
    "kafkatrap": {
      text: "In a workplace training session about diversity, the facilitator said: \"If you feel uncomfortable with this training, that discomfort proves you have biases you need to work on. And if you claim you're already inclusive and don't need this training, that defensiveness is itself a sign that you need it most.\n\nThe very act of questioning the value of this program demonstrates exactly why it's necessary. There's no response you can give that would show you don't need it.\"",
      highlight: "If you feel uncomfortable with this training, that discomfort proves you have biases you need to work on. And if you claim you're already inclusive and don't need this training, that defensiveness is itself a sign that you need it most.",
      explanation: "This is a Kafkatrap. The facilitator creates a no-win situation: feeling uncomfortable proves bias, claiming to be inclusive proves defensiveness, and questioning the program proves its necessity. Every possible response — agreement, disagreement, discomfort, or confidence — is interpreted as evidence supporting the same conclusion. This makes the claim unfalsifiable, as there's literally no way to demonstrate that the conclusion is wrong."
    },
    "sealioning": {
      text: "In an online discussion about urban planning, one participant wrote a detailed post about why bike lanes improve city traffic flow. Another user replied:\n\n\"Interesting. Could you define what you mean by 'improve'? And by 'traffic flow,' are you referring to vehicles per minute, average speed, or congestion indices? Can you share the methodology of each study you're referencing? Also, what do you mean by 'city' — are we talking about any city or specific ones? Could you clarify your definition of 'bike lane' since there are different types? I'm just asking reasonable questions to understand your position better.\"",
      highlight: "Could you define what you mean by 'improve'? And by 'traffic flow,' are you referring to vehicles per minute, average speed, or congestion indices? Can you share the methodology of each study you're referencing?",
      explanation: "This is Sealioning. The responder poses an exhausting cascade of pedantic questions — demanding definitions of common words, precise methodologies, and increasingly granular clarifications — all under the guise of \"reasonable questions.\" These aren't genuine inquiries seeking to learn; they're designed to make productive conversation impossible by demanding an unreasonable level of justification for every basic concept. The polite tone masks the obstructive intent."
    },
    "gish-gallop": {
      text: "During a city council meeting about a proposed park renovation, one council member rapidly rattled off objections: \"The cost is too high, the design doesn't match neighborhood aesthetics, the trees chosen aren't native species, the benches are the wrong material, the walking path is 0.3 miles too short, the water fountain placement violates feng shui principles, the playground doesn't face east, the parking lot adds exactly 3 too many spaces, the grass seed brand has mixed reviews on Amazon, and the proposed opening date conflicts with National Pickle Day.\"\n\nThe proposing council member was left overwhelmed, unable to address all ten points in her allotted three minutes.",
      highlight: "The cost is too high, the design doesn't match neighborhood aesthetics, the trees chosen aren't native species, the benches are the wrong material, the walking path is 0.3 miles too short",
      explanation: "This is a Gish Gallop. The council member fires off a rapid succession of objections — mixing potentially valid concerns (cost, native species) with trivial or absurd ones (feng shui, National Pickle Day, Amazon grass seed reviews). The sheer volume makes it impossible to respond to everything in the limited time available. This creates the illusion that the proposal has overwhelming problems, when many of the objections are frivolous."
    },
    "nirvana-fallacy": {
      text: "When a city proposed adding bike lanes to reduce traffic congestion by an estimated 15%, a critic responded: \"Fifteen percent? So traffic will still be terrible 85% of the time. What's even the point?\n\nUnless you can completely eliminate traffic congestion, these bike lanes are just an expensive band-aid. We shouldn't waste taxpayer money on a solution that doesn't fully solve the problem. Come back when you have a plan that actually works — meaning zero congestion.\"",
      highlight: "Unless you can completely eliminate traffic congestion, these bike lanes are just an expensive band-aid.",
      explanation: "This is a Nirvana Fallacy (Perfect Solution fallacy). The critic rejects a solution that would reduce congestion by 15% because it doesn't eliminate congestion entirely. By demanding an impossible standard — zero congestion — they dismiss a meaningful improvement. A 15% reduction in traffic congestion would significantly improve commute times and quality of life. Rejecting good solutions because they aren't perfect means accepting no solution at all."
    },
    "reification": {
      text: "A guest on a talk show argued: \"The economy is telling us we need to spend more. It's hungry for stimulus and it's punishing us for our austerity. We have to listen to what the market wants, because the market has a wisdom of its own.\n\nWhen the economy is angry, bad things happen to everyone. We need to feed it what it demands, or it will turn against us. The invisible hand guides us, and right now it's pointing toward more spending.\"",
      highlight: "The economy is telling us we need to spend more. It's hungry for stimulus and it's punishing us for our austerity.",
      explanation: "This is a Reification fallacy. The speaker treats abstract concepts — the economy, the market, the invisible hand — as if they are sentient beings with desires, wisdom, hunger, and anger. The economy doesn't \"tell\" us anything, get \"hungry,\" or \"punish\" us. These are metaphors being treated as literal descriptions. Economic trends result from millions of individual decisions, not from a conscious entity with intentions."
    },
    "moving-goalposts": {
      text: "A job candidate went through an extensive hiring process: \"They asked me to pass a coding test — I scored 95%. Then they wanted a portfolio review — they said it was 'impressive.' Then they required three references — all excellent. Then a cultural fit interview — 'great match.'\n\nBut after all that, they said they also need me to complete a paid trial week, attend a team dinner, pass a personality assessment, and provide five more references from previous managers specifically. Every time I meet their requirements, they add new ones.\"",
      highlight: "Every time I meet their requirements, they add new ones.",
      explanation: "This is a Moving the Goalposts fallacy. The hiring process keeps adding new requirements after each previous requirement is met. The candidate successfully passes each test — coding, portfolio, references, cultural fit — but the criteria keep shifting. This makes it impossible to ever fully qualify, because the definition of success keeps changing. The original standards were either insufficient (poor planning) or the goalposts are being moved to avoid making a decision."
    }
  },
  versusScenarios: {
    "ad-hominem-vs-straw-man": {
      text: "During a town hall meeting about proposed zoning changes, a resident stands up and says: \"Why should we listen to Mr. Thompson's proposal for mixed-use development? He's been divorced twice, he got a DUI ten years ago, and I heard he doesn't even mow his own lawn. Clearly his ideas about our neighborhood are worthless.\"",
      explanation: "This is Ad Hominem, not Straw Man. The speaker attacks Mr. Thompson's personal character — his divorces, DUI, and lawn care habits — rather than addressing his actual zoning proposal. A Straw Man would distort or exaggerate what Mr. Thompson's proposal actually says. Here, the proposal itself is never even discussed; only the person is attacked.",
      distinction: "Ad Hominem attacks the person making the argument. Straw Man distorts the argument itself into a weaker version."
    },
    "straw-man-vs-ad-hominem": {
      text: "A colleague proposes adding a 15-minute stretching break to the workday. Another colleague responds: \"Oh, so you think we should just turn the office into a yoga studio? Maybe we should all wear leotards and bring meditation crystals too. Some of us actually have work to do and can't spend the whole day doing downward dog.\"",
      explanation: "This is a Straw Man, not Ad Hominem. The response exaggerates a simple 15-minute stretching break into turning the office into a yoga studio with leotards and crystals. The original argument is distorted into an absurd extreme. While slightly dismissive, the attack is aimed at a caricature of the proposal, not at the colleague's personal character.",
      distinction: "Straw Man distorts the argument into an easier-to-attack version. Ad Hominem attacks the person's character or traits instead."
    },
    "red-herring-vs-straw-man": {
      text: "A parent at a school board meeting raises concerns about the math curriculum being outdated. The superintendent responds: \"I appreciate your concern, but let me tell you about the incredible results our arts program achieved this year. Our students won three regional competitions, and our drama department just received state funding. We really should be celebrating these accomplishments.\"",
      explanation: "This is a Red Herring, not a Straw Man. The superintendent doesn't distort the parent's argument about the math curriculum — instead, they completely change the subject to the arts program's achievements. The math curriculum concern is simply ignored, not misrepresented. A Straw Man would involve twisting what the parent said about the math curriculum.",
      distinction: "Red Herring changes the subject entirely to something irrelevant. Straw Man distorts the original argument but stays on the same topic."
    },
    "slippery-slope-vs-false-dilemma": {
      text: "A politician argues against a new environmental regulation: \"If we pass this clean air act, factories will have to close, then thousands of workers will lose their jobs, then those communities will collapse, property values will plummet, and eventually entire regions of the country will become ghost towns. We can't let that happen.\"",
      explanation: "This is a Slippery Slope, not a False Dilemma. The politician chains together a series of increasingly dire consequences — factory closures leading to job losses leading to community collapse leading to ghost towns — each presented as inevitable. A False Dilemma would present only two options (e.g., 'either we reject this act or communities collapse'). Here, the focus is on the chain of escalating consequences.",
      distinction: "Slippery Slope chains together unlikely consequences as if each inevitably leads to the next. False Dilemma presents only two options when more exist."
    },
    "bandwagon-vs-appeal-to-authority": {
      text: "A manager tries to convince her team to adopt a new project management tool: \"Over 500,000 companies worldwide use this software. Fortune 500 companies are switching to it in droves. It's the fastest-growing tool in the industry. If so many organizations trust it, it must be the right choice for us too.\"",
      explanation: "This is a Bandwagon fallacy, not an Appeal to Authority. The argument relies on the sheer number of companies using the tool — its popularity — rather than citing a specific expert or authority figure who endorses it. Saying '500,000 companies use it' appeals to the crowd, not to any particular authority's expertise or credentials.",
      distinction: "Bandwagon argues something is good because many people do it. Appeal to Authority argues something is good because a specific expert or authority endorses it."
    },
    "appeal-to-emotion-vs-appeal-to-fear": {
      text: "During a debate about whether to cut funding for the city orchestra, a council member says: \"Picture the elderly musicians who have devoted their entire lives to this orchestra. Imagine them packing up their instruments for the last time, tears streaming down their faces, knowing their life's passion has been taken away. How could anyone vote for that?\"",
      explanation: "This is an Appeal to Emotion, not an Appeal to Fear. The speaker evokes sadness and sympathy — picturing tearful elderly musicians losing their passion — to persuade the audience. An Appeal to Fear would use threats or frightening consequences (e.g., 'crime will increase without the orchestra'). Here, the emotional manipulation works through compassion and guilt, not fear or threat.",
      distinction: "Appeal to Emotion uses feelings like sadness, sympathy, or guilt to persuade. Appeal to Fear specifically uses threats or frightening scenarios."
    },
    "tu-quoque-vs-ad-hominem": {
      text: "A senator argues against a campaign finance bill: \"My opponent says we need stricter donation limits, but let's not forget that she herself accepted a $50,000 donation from a tech lobbyist last year. She's a hypocrite — her argument for reform is meaningless when she does the exact same thing she's criticizing.\"",
      explanation: "This is Tu Quoque ('you do it too'), not a general Ad Hominem. The senator specifically points out that his opponent engages in the same behavior she's trying to regulate — accepting large donations while advocating for donation limits. While all tu quoque is a form of ad hominem, the key feature here is the hypocrisy charge. A general ad hominem would attack unrelated personal characteristics.",
      distinction: "Tu Quoque specifically accuses someone of hypocrisy ('you do it too'). Ad Hominem attacks the person's character in general without focusing on hypocrisy."
    },
    "hasty-generalization-vs-anecdotal-evidence": {
      text: "A marketing executive presents a strategy: \"My neighbor switched to organic social media marketing and her small bakery's sales tripled in two months. My college roommate did the same for his consulting firm and got amazing results too. Based on these cases, organic social media marketing clearly works better than paid advertising for all businesses.\"",
      explanation: "This is a Hasty Generalization, not merely Anecdotal Evidence. The key element is the sweeping conclusion — that organic social media marketing 'clearly works better for all businesses' — drawn from just two cases. While personal stories are used, the fallacy is specifically in generalizing from a tiny sample to all businesses. Anecdotal Evidence would simply use a personal story as proof without necessarily making such a broad universal claim.",
      distinction: "Hasty Generalization draws a broad conclusion from too few cases. Anecdotal Evidence uses personal stories as proof in place of stronger evidence."
    },
    "post-hoc-vs-slippery-slope": {
      text: "A sports commentator analyzes a team's season: \"Ever since the team started playing their new fight song before games in March, they've won 15 out of 18 games. Before that, they were 8-12. The fight song clearly energizes the players and has turned their season around. The music is the reason for their success.\"",
      explanation: "This is Post Hoc (after this, therefore because of this), not a Slippery Slope. The commentator observes that improved performance followed the introduction of a fight song and concludes the song caused the improvement. This confuses correlation with causation. A Slippery Slope would chain together future consequences (e.g., 'if we stop the song, morale drops, then attendance drops, then the team folds').",
      distinction: "Post Hoc claims that because B followed A, A must have caused B. Slippery Slope claims that A will inevitably lead to B, then C, then D in the future."
    },
    "circular-reasoning-vs-appeal-to-authority": {
      text: "In a philosophy class discussion, a student argues: \"Freedom of speech is important because people should be free to express themselves. And people should be free to express themselves because freedom of speech is a fundamental right. It's important because it's fundamental, and it's fundamental because it's important.\"",
      explanation: "This is Circular Reasoning, not an Appeal to Authority. The student's argument goes in a circle — freedom of speech is important because people should be free to speak, and people should be free to speak because freedom of speech is important. The conclusion is used as its own premise. No authority figure or expert is cited to support the claim; the argument simply restates itself.",
      distinction: "Circular Reasoning uses its own conclusion as a premise, going in a logical circle. Appeal to Authority cites a person or institution as evidence for a claim."
    },
    "no-true-scotsman-vs-hasty-generalization": {
      text: "In a debate about healthcare, someone argues: \"No true advocate for public health would oppose mandatory vaccinations. What about Dr. Rivera, who supports public health but thinks some vaccines should remain optional? Well, she's not a real public health advocate then — a genuine one would never say that.\"",
      explanation: "This is No True Scotsman, not a Hasty Generalization. When confronted with Dr. Rivera as a counterexample, the speaker redefines 'true public health advocate' to exclude anyone who disagrees, rather than accepting the counterexample. A Hasty Generalization would draw a broad conclusion from too few examples. Here the fallacy is in protecting a claim by changing the definition of the group.",
      distinction: "No True Scotsman redefines a group to exclude counterexamples. Hasty Generalization draws broad conclusions from an insufficient number of cases."
    },
    "loaded-question-vs-false-dilemma": {
      text: "A journalist asks a politician: \"When did you stop misusing campaign funds?\" The politician objects, but the journalist presses: \"It's a simple question — just tell the public when you stopped. Your refusal to give a date only makes you look more guilty.\"",
      explanation: "This is a Loaded Question, not a False Dilemma. The question 'When did you stop misusing campaign funds?' presupposes that the politician was misusing funds — the assumption is embedded in the question itself. Any direct answer would accept this unproven premise. A False Dilemma would present only two options. Here the trap is the hidden assumption baked into the question, not a limitation of choices.",
      distinction: "A Loaded Question embeds an unproven assumption that any answer would accept. A False Dilemma presents only two options when more exist."
    },
    "cherry-picking-vs-texas-sharpshooter": {
      text: "A pharmaceutical company publishes a report showing their new drug is effective, citing 15 studies. However, a review reveals that 40 studies were actually conducted — the company only published the 15 with positive results and buried the 25 that showed no benefit or harmful side effects. \"Our research clearly demonstrates the drug's effectiveness,\" the company states.",
      explanation: "This is Cherry Picking, not a Texas Sharpshooter. The company deliberately selected only the favorable studies (15 out of 40) and suppressed the unfavorable ones. They chose the data that supported their conclusion. A Texas Sharpshooter would find a pattern in random data after the fact — like noticing a cluster in results and then claiming it was the hypothesis all along. Here, the data selection was intentional, not post-hoc pattern finding.",
      distinction: "Cherry Picking deliberately selects only favorable data. Texas Sharpshooter finds a pattern in random data after the fact and pretends it was the target all along."
    },
    "genetic-fallacy-vs-ad-hominem": {
      text: "A critic dismisses a new theory on urban development: \"That theory was developed at a university funded by real estate developers. Any idea coming from an institution with those financial ties is automatically suspect and can't be trusted, regardless of the research methods or data involved.\"",
      explanation: "This is a Genetic Fallacy, not an Ad Hominem. The critic judges the theory based on its institutional origin — the funding source of the university — rather than evaluating the theory's actual content, methods, or data. An Ad Hominem would attack a specific person's character. Here, no individual researcher is attacked; instead, the idea itself is dismissed solely because of where it originated.",
      distinction: "Genetic Fallacy judges an idea by its origin or source. Ad Hominem attacks the person making the argument rather than the argument."
    },
    "appeal-to-nature-vs-genetic-fallacy": {
      text: "A wellness influencer promotes a product: \"Our all-natural herbal supplement is better than synthetic vitamins because it comes from nature. Plants have been around for millions of years — nature knows best. Anything made in a laboratory is inherently inferior to what the earth provides naturally.\"",
      explanation: "This is an Appeal to Nature, not a Genetic Fallacy. The argument specifically claims that being 'natural' makes something inherently better — nature is good, synthetic is bad. While both fallacies involve judging by origin, Appeal to Nature specifically equates naturalness with superiority. A Genetic Fallacy more broadly judges any idea by its source (which could be a person, institution, or historical context), not specifically by whether it's natural.",
      distinction: "Appeal to Nature assumes natural things are inherently good and artificial things are bad. Genetic Fallacy judges any argument or idea by its source or origin more broadly."
    },
    "middle-ground-vs-false-dilemma": {
      text: "Two city planners disagree about a new bridge. One says it should be built on the north side of the river for $50 million, with better traffic flow. The other insists it should be on the south side for $30 million, closer to residential areas. A mediator says: \"Let's compromise and build it in the middle of the river. That's the fair solution since both sides have valid points.\"",
      explanation: "This is a Middle Ground (argument to moderation) fallacy, not a False Dilemma. The mediator assumes the correct answer must be a compromise between two positions — building the bridge in the middle of the river — when that compromise is actually absurd and impractical. A False Dilemma would present only two choices and exclude other options. Here, the error is assuming the middle position is automatically correct.",
      distinction: "Middle Ground assumes the compromise between two positions is always the correct answer. False Dilemma presents only two options and excludes other possibilities."
    },
    "burden-of-proof-vs-appeal-to-ignorance": {
      text: "In an online debate about alternative medicine, someone claims: \"Acupuncture has never been proven to not work. Since science hasn't disproven it, the burden is on skeptics to show it doesn't work. Until you can prove it's ineffective, we should accept that it's a valid treatment.\"",
      explanation: "This is a Burden of Proof fallacy, not an Appeal to Ignorance. The key element is the explicit shifting of who must provide evidence — the speaker demands that skeptics disprove acupuncture rather than providing positive evidence for its effectiveness. An Appeal to Ignorance would simply say 'it hasn't been disproven, therefore it's true.' Here, the emphasis is on shifting the obligation to the other party.",
      distinction: "Burden of Proof shifts the obligation to prove or disprove to the wrong party. Appeal to Ignorance claims something is true simply because it hasn't been proven false."
    },
    "equivocation-vs-straw-man": {
      text: "A lawyer argues in court: \"My client has a right to a fair trial. And 'fair' means that the jury should consider all the circumstances. By 'fair,' I also mean that the punishment should fit the crime. And a 'fair' outcome means my client goes free, because fairness demands justice, and true justice means acquittal in this case.\" The word 'fair' shifts meaning in each sentence.",
      explanation: "This is Equivocation, not a Straw Man. The lawyer uses the word 'fair' with a different meaning each time — fair trial, fair consideration, fair punishment, fair outcome — gradually shifting the definition to reach a desired conclusion. A Straw Man would distort an opponent's argument. Here, no one's argument is being misrepresented; instead, a single word is being used ambiguously to create a misleading chain of reasoning.",
      distinction: "Equivocation exploits ambiguity by shifting the meaning of a word or phrase within an argument. Straw Man misrepresents someone else's argument to make it easier to attack."
    },
    "moving-goalposts-vs-no-true-scotsman": {
      text: "A hiring manager interviews a candidate who meets every qualification listed in the job posting. The manager says: \"Yes, you have the required five years of experience, the certifications we asked for, and strong references. But we've decided that candidates also need experience with our specific proprietary software — which we didn't mention before. Oh, and we now require someone with international experience as well.\" Each time the candidate meets the criteria, new ones are introduced.",
      explanation: "This is Moving the Goalposts, not No True Scotsman. The hiring manager keeps adding new requirements after the candidate meets the existing ones — the criteria for success keep shifting. No True Scotsman would involve redefining what counts as a 'qualified candidate' to exclude this person from the category. Here, the category isn't being redefined; the acceptance criteria are being changed.",
      distinction: "Moving the Goalposts changes the criteria for success after they've been met. No True Scotsman redefines a group or category to exclude counterexamples."
    },
    "motte-and-bailey-vs-straw-man": {
      text: "An activist makes a bold claim in an interview: \"We need to completely abolish the prison system.\" When challenged, they respond: \"All I'm saying is that we should reform how we approach criminal justice and consider alternatives to incarceration for non-violent offenders.\" When the interviewer agrees with that milder position, the activist returns to the original statement: \"Exactly — that's why we need to abolish prisons entirely.\"",
      explanation: "This is Motte and Bailey, not a Straw Man. The activist switches between a bold, controversial claim (abolish prisons — the 'bailey') and a more reasonable one (reform criminal justice — the 'motte') depending on whether they're being challenged. A Straw Man would involve distorting someone else's argument. Here, the speaker is strategically retreating to and advancing from their own positions.",
      distinction: "Motte and Bailey switches between a bold claim and a defensible one to avoid criticism. Straw Man distorts an opponent's argument into a weaker version to attack it."
    },
    "sealioning-vs-burden-of-proof": {
      text: "In an online forum, a user politely asks a climate scientist for evidence: \"Could you share the specific studies you're referencing? I'd also love to see the raw data if possible. And could you explain the methodology? Also, what about this other variable — can you address that too? And this one? I'm just trying to understand, I'm genuinely curious!\" Each answer is met with five more polite but exhausting questions, never engaging with the responses provided.",
      explanation: "This is Sealioning, not a Burden of Proof fallacy. The user appears to ask polite, genuine questions but never engages with the answers — instead, each response triggers even more questions. The goal is to exhaust the other person under the guise of civil inquiry. A Burden of Proof fallacy would simply demand the other side prove their claim while offering nothing. Here, the tactic is the endless, performatively polite questioning itself.",
      distinction: "Sealioning uses persistent, superficially polite questioning to exhaust and frustrate. Burden of Proof shifts the obligation of evidence to the wrong party."
    },
    "gish-gallop-vs-red-herring": {
      text: "During a debate on energy policy, a speaker rapidly states: \"Solar panels contain toxic chemicals, wind turbines kill millions of birds, nuclear power caused Chernobyl, hydroelectric dams destroy ecosystems, geothermal energy causes earthquakes, battery storage creates mining problems, and the electrical grid can't handle renewables anyway. Plus, the cost is astronomical, energy independence is a myth, and green jobs are just subsidized positions that will disappear.\" The opponent has two minutes to respond to all ten points.",
      explanation: "This is a Gish Gallop, not a Red Herring. The speaker overwhelms the opponent with a rapid succession of many arguments — some flawed, some misleading — making it impossible to adequately respond to all of them in the time available. A Red Herring would introduce one irrelevant topic to divert attention. Here, the arguments are arguably relevant to energy policy; the fallacy is in the sheer volume designed to overwhelm.",
      distinction: "Gish Gallop overwhelms with a flood of many arguments that can't all be addressed. Red Herring diverts attention with a single irrelevant point."
    },
    "nirvana-fallacy-vs-false-dilemma": {
      text: "A city council member opposes a proposal to reduce traffic accidents by 40% through new intersection designs: \"This plan won't eliminate all traffic accidents. People will still run red lights, drive distracted, and speed in other areas. Unless we can guarantee zero accidents citywide, this expensive redesign isn't worth pursuing. Why spend millions on something that won't completely solve the problem?\"",
      explanation: "This is the Nirvana Fallacy, not a False Dilemma. The council member rejects a realistic improvement (40% reduction) because it doesn't achieve a perfect solution (zero accidents). The standard being applied is unattainable perfection. A False Dilemma would present only two options. Here, the speaker isn't limiting choices — they're rejecting an imperfect but valuable solution by comparing it to an impossible ideal.",
      distinction: "The Nirvana Fallacy rejects good solutions because they aren't perfect. False Dilemma presents only two options when more possibilities exist."
    },
    "kafkatrap-vs-circular-reasoning": {
      text: "During a workplace sensitivity training discussion, an employee says: \"I don't think I've ever been unconsciously biased in my hiring decisions.\" The trainer responds: \"Your denial of having unconscious bias is itself proof that you have deep-seated bias. The more strongly you deny it, the more it confirms how deeply embedded your bias is. If you were truly unbiased, you would readily acknowledge your bias.\"",
      explanation: "This is a Kafkatrap, not Circular Reasoning. The trainer creates an unfalsifiable trap: denying bias is treated as proof of bias, making it impossible for the employee to defend themselves. Any denial strengthens the accusation. While similar to circular reasoning in its self-reinforcing nature, the key feature is that the accusation specifically uses the denial as evidence — a hallmark of the Kafkatrap. Circular Reasoning would simply use its conclusion as a premise without involving the accused's denial.",
      distinction: "A Kafkatrap treats denial of an accusation as proof the accusation is true. Circular Reasoning uses its own conclusion as its premise in a logical loop."
    }
  }
};
