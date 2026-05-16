const questions2 = [
  {
    id: 101,
    text: "Which two of the following are appropriate topics for discussion during a Sprint Retrospective? (Choose two.)",
    options: [
      "Identifying high priority process improvements for the next Sprint.",
      "The order of items in the Product Backlog.",
      "How the team collaborates.",
      "Documenting acceptance criteria for items in the next Sprint."
    ],
    correctAnswers: [0, 2],
    explanation: "The Retrospective is about how the team works — process improvements and collaboration are perfect topics. Product Backlog ordering and acceptance criteria belong in refinement, not the Retrospective."
  },
  {
    id: 102,
    text: "Which technique is the best way the Scrum Master can ensure that the Development Team communicates effectively with the Product Owner?",
    options: [
      "Monitor communications between them and facilitate direct collaboration.",
      "Teach the Development Team to talk in terms of business needs and objectives.",
      "Teach the Product Owner about the technologies employed during the Sprints.",
      "Act as a go-between for them."
    ],
    correctAnswers: [0],
    explanation: "The Scrum Master facilitates direct collaboration — not acts as a middleman. If the SM routes all communication, it creates a bottleneck and prevents the team from building a real working relationship with the PO."
  },
  {
    id: 103,
    text: "The Product Backlog is ordered by:",
    options: [
      "The Product Owner with the most valuable items placed at the top.",
      "Risk, where safer items are at the top, and riskier items are at the bottom.",
      "Items are randomly arranged.",
      "Size, where small items are at the top and large items are at the bottom."
    ],
    correctAnswers: [0],
    explanation: "The Product Owner orders the Product Backlog to maximize value. The most valuable items are at the top so they get done first. Size, risk, and random order aren't the primary ordering criteria."
  },
  {
    id: 104,
    text: "Multiple Scrum Teams working on the same project must have the same Sprint start date.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. Multiple Scrum Teams can have different Sprint start dates. While aligning them can help with coordination, it's not a Scrum requirement."
  },
  {
    id: 105,
    text: "When a Development Team determines that it will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected?",
    options: [
      "The Development Team.",
      "The Product Owner and all stakeholders.",
      "The Product Owner and the Development Team.",
      "The Scrum Master, project manager and Development Team."
    ],
    correctAnswers: [2],
    explanation: "When scope needs to be adjusted, the Product Owner and Development Team decide together. The PO brings business priorities; the team brings technical reality. Stakeholders and project managers aren't needed for this."
  },
  {
    id: 106,
    text: "You are the Scrum Master of a new product requiring 45 people. What is a good first question for you to suggest the group thinks about when forming into teams?",
    options: [
      "How will we make sure all teams have the right amount of expertise?",
      "What is the right mixture of senior and junior people on each team?",
      "Who are going to be the team leads?",
      "Who are the subject matter experts on each team?"
    ],
    correctAnswers: [0],
    explanation: "The first priority when forming multiple teams is ensuring each team can be cross-functional and self-sufficient. Asking about expertise distribution addresses the core Scrum requirement that teams have all skills needed to deliver."
  },
  {
    id: 107,
    text: "What is the key concern when multiple Development Teams are working from the same Product Backlog?",
    options: [
      "Minimizing dependencies between teams.",
      "Clear definition of requirements.",
      "Meeting original scope projections.",
      "Making sure there's enough work for everyone on every team.",
      "Maximizing velocity."
    ],
    correctAnswers: [0],
    explanation: "Dependencies between teams are the biggest risk in scaled Scrum. When teams are tightly coupled, one team's delay blocks others. Minimizing dependencies keeps teams able to deliver independently."
  },
  {
    id: 108,
    text: "Which two things should the Scrum Team do during the first Sprint? (Choose two.)",
    options: [
      "Make up a plan for the rest of the project.",
      "Define the major product features and a release plan architecture.",
      "Build at least one piece of valuable functionality.",
      "Analyze, describe, and document the requirements for the subsequent Sprints.",
      "Create at least one valuable, useful Increment."
    ],
    correctAnswers: [2, 4],
    explanation: "From Sprint 1, the team delivers real working software. There are no 'setup Sprints' in Scrum. Building functionality and creating a usable Increment are the goals from the very start."
  },
  {
    id: 109,
    text: "When is it most appropriate for a Development Team to change the definition of Done?",
    options: [
      "During Sprint Planning.",
      "Prior to starting a new Sprint.",
      "During the Sprint Retrospective.",
      "Prior to starting a new project."
    ],
    correctAnswers: [2],
    explanation: "The Definition of Done is inspected and potentially improved during the Sprint Retrospective. That's the designated time for the team to reflect on quality standards and raise the bar."
  },
  {
    id: 110,
    text: "When might a Sprint be cancelled?",
    options: [
      "When the Developers determine the product plan is infeasible.",
      "When the Sprint Goal becomes obsolete.",
      "When the sales department has an important new opportunity.",
      "When it becomes clear that not everything will be finished by the end of the Sprint."
    ],
    correctAnswers: [1],
    explanation: "A Sprint can be cancelled when the Sprint Goal becomes obsolete — for example, if market conditions change dramatically or the business direction shifts entirely. Not finishing all items is normal and never a reason to cancel."
  },
  {
    id: 111,
    text: "Marian is the Product Owner projecting a release date based on a velocity of 17 units per Sprint. Over the first 3 Sprints, the average velocity was 13, with work estimated as 90% done. The Development Team thinks 17 is within reach. What is a good way to continue?",
    options: [
      "The Development Team makes sure that all selected scope per Sprint is as Done as possible. The undone work is estimated and added to the Sprint Backlog of the next Sprint.",
      "Add enough people to the Development Team for the deadline to be made.",
      "The produced software is not usable. As the rules of Scrum have not been respected, it is the Scrum Master's duty to assess whether repair is possible, or restart with a more reliable team.",
      "The Development Team should remind Marian to find funding for enough Release Sprints in which the remaining work can be done."
    ],
    correctAnswers: [2],
    explanation: "Software that is '90% done' isn't done. This is a transparency and Scrum values problem. The Scrum Master must address the fact that undone work and inflated velocity have replaced honest inspection — the situation requires intervention, not workarounds."
  },
  {
    id: 112,
    text: "What activities would a Product Owner typically undertake in the phase between the end of the current Sprint and the start of the next Sprint?",
    options: [
      "There are no such activities. The next Sprint starts immediately after the current Sprint.",
      "Refine the Product Backlog.",
      "Work with the Quality Assurance departments on the Increment of the current Sprint.",
      "Update the project plan with stakeholders."
    ],
    correctAnswers: [0],
    explanation: "There is no gap between Sprints in Scrum. The next Sprint starts immediately. Product Backlog refinement is an ongoing activity that happens throughout the Sprint, not in a gap between them."
  },
  {
    id: 113,
    text: "A product Increment must be released to production at the end of each Sprint.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. The Increment must be Done and potentially releasable, but the Product Owner decides when to actually release. Not every Sprint requires a production release."
  },
  {
    id: 114,
    text: "When must a Product Owner release each Increment?",
    options: [
      "When it makes sense to release it.",
      "When the Scrum Team finishes their work.",
      "Whenever the product is free of defects.",
      "After every Sprint, without exception."
    ],
    correctAnswers: [0],
    explanation: "The Product Owner releases the Increment when it makes business sense. This is a strategic decision — not triggered by the Sprint ending, defect-free status, or any automatic rule."
  },
  {
    id: 115,
    text: "Which are properties of the Daily Scrum? (Choose two.)",
    options: [
      "It is facilitated by the team lead.",
      "It is held first thing in the morning.",
      "It is fifteen minutes or less in duration.",
      "It is free from and designed to promote conversation.",
      "It consists of the Scrum Master asking the Team members the three questions.",
      "Its location and time remain constant."
    ],
    correctAnswers: [2, 5],
    explanation: "The Daily Scrum is 15 minutes maximum, and it's held at the same time and place every day. It doesn't have to be in the morning, it's not facilitated by a team lead, and the Scrum Master doesn't ask the three questions."
  },
  {
    id: 116,
    text: "Who does the work to make sure Product Backlog items conform to the Definition of Done?",
    options: [
      "The Quality Assurance Team.",
      "The Scrum Master.",
      "The Developers.",
      "The Product Owner.",
      "The Scrum Team."
    ],
    correctAnswers: [2],
    explanation: "The Developers do the work to meet the Definition of Done. There's no separate QA team in Scrum — quality is built in by the people building the product."
  },
  {
    id: 117,
    text: "When does a Sprint conclude?",
    options: [
      "When all Product Backlog items meet their Definition of Done.",
      "When the Sprint Retrospective is complete.",
      "When the Product Owner decides enough has been delivered to meet the Sprint Goal.",
      "When all the tasks are completed by the Developers."
    ],
    correctAnswers: [1],
    explanation: "A Sprint concludes when the Sprint Retrospective is complete — that's the last event in the Sprint. The time-box doesn't end at the Review; the Retrospective is still part of the Sprint."
  },
  {
    id: 118,
    text: "Scrum is a methodology that tells in detail how to build software incrementally.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. Scrum is a framework, not a methodology. It doesn't prescribe how to do the work — it provides a structure within which teams figure out the best approach for their context."
  },
  {
    id: 119,
    text: "Why does the Product Owner want the Development Team to adhere to its definition of Done?",
    options: [
      "To have complete transparency into what has been done at the end of each Sprint.",
      "To be able to reprimand the team when they don't meet their velocity goal for the Sprint.",
      "To know what the team will deliver over the next three Sprints.",
      "To predict the team's productivity over time."
    ],
    correctAnswers: [0],
    explanation: "The Definition of Done creates transparency. When the team consistently applies it, the Product Owner and stakeholders can trust that 'Done' actually means done — no hidden work, no nasty surprises."
  },
  {
    id: 120,
    text: "The time-box for a Daily Scrum is:",
    options: [
      "Two minutes per person.",
      "15 minutes.",
      "The same time of day every day.",
      "4 hours."
    ],
    correctAnswers: [1],
    explanation: "The Daily Scrum is time-boxed to 15 minutes. It's short by design — just enough to inspect progress and adapt the plan for the day."
  },
  {
    id: 121,
    text: "Which statement best describes the Sprint Backlog as outcome of Sprint Planning?",
    options: [
      "It is a complete list of all work to be done in a Sprint.",
      "Every item has a designated owner.",
      "Each task is estimated in hours.",
      "It is the Scrum Team's plan for the Sprint.",
      "It is ordered by the Product Owner."
    ],
    correctAnswers: [3],
    explanation: "The Sprint Backlog is the team's plan for achieving the Sprint Goal. It's not necessarily complete, tasks don't need individual owners or hour estimates, and the PO doesn't order it."
  },
  {
    id: 122,
    text: "What is a Development Team responsible for? (Choose two.)",
    options: [
      "Resolving internal team conflicts.",
      "Reporting productivity.",
      "Selecting the Product Owner.",
      "Organizing the work required to meet the Sprint Goal."
    ],
    correctAnswers: [0, 3],
    explanation: "The Development Team resolves its own internal conflicts (self-management) and organizes how to achieve the Sprint Goal. They don't report productivity metrics or select the Product Owner."
  },
  {
    id: 123,
    text: "Which of the following is an example of an Increment?",
    options: [
      "A plan for the overall product release.",
      "A mock-up of the product marketing materials.",
      "A design for the product.",
      "A product roll-out plan.",
      "A valuable, useful set of product features.",
      "All of the above."
    ],
    correctAnswers: [4],
    explanation: "An Increment is working, usable software — a valuable set of product features that meets the Definition of Done. Plans, mock-ups, and designs are not Increments."
  },
  {
    id: 124,
    text: "When can a Development Team cancel a Sprint?",
    options: [
      "It can't. Only Product Owners can cancel Sprints.",
      "When functional expectations are not well understood.",
      "When the Product Owner is absent too often.",
      "When the selected Product Backlog items for the Sprint become unachievable.",
      "When a technical dependency cannot be resolved."
    ],
    correctAnswers: [0],
    explanation: "Only the Product Owner can cancel a Sprint. The Development Team cannot cancel a Sprint regardless of circumstances — they adapt within the Sprint or raise the issue with the PO."
  },
  {
    id: 125,
    text: "You are the Scrum Master on a newly formed Scrum Team. Which two activities would probably help the team in starting up? (Choose two.)",
    options: [
      "Have the manager for each Developer introduce their direct reports to go over their responsibilities.",
      "Ensure the Scrum Team members have compatible personalities.",
      "Introduce a bonus system for the top performers in the team.",
      "Ask the Product Owner to discuss the product, its vision, history, goals, and context, as well as answer questions.",
      "Ensure the team understands they need a Definition of Done."
    ],
    correctAnswers: [3, 4],
    explanation: "A new team needs product context from the Product Owner and a clear understanding of their quality standards (Definition of Done). Manager introductions, personality tests, and bonus systems don't help a team start working together effectively."
  },
  {
    id: 126,
    text: "For which is the Scrum Master responsible?",
    options: [
      "Managing the performance of the Scrum Team.",
      "The meetings and the objectives that a Scrum Team sets for itself.",
      "The Scrum framework being adopted and used properly.",
      "Keeping track of resource allocation."
    ],
    correctAnswers: [2],
    explanation: "The Scrum Master is responsible for the Scrum framework being understood and properly enacted. They don't manage performance, set objectives for the team, or track resource allocation."
  },
  {
    id: 127,
    text: "What are two ways that regulatory compliance issues are dealt with in Scrum? (Choose two.)",
    options: [
      "They are discussed, determined, and documented before the actual feature development Sprints.",
      "They are addressed along with functional development of the product.",
      "They are added to the Product Backlog and addressed in early Sprints, while always requiring at least some business functionality.",
      "They are addressed by a separate team who is responsible for compliance issues."
    ],
    correctAnswers: [1, 2],
    explanation: "Compliance work is treated like any other work — it runs alongside feature development and is managed through the Product Backlog. There are no pre-development documentation phases or separate compliance teams in Scrum."
  },
  {
    id: 128,
    text: "The Sprint Goal is a result of Sprint Planning, as is the Sprint Backlog.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [0],
    explanation: "True. Both the Sprint Goal and the Sprint Backlog are outputs of Sprint Planning. The Sprint Goal provides direction; the Sprint Backlog provides the plan to achieve it."
  },
  {
    id: 129,
    text: "A Development Team is required to deliver a Done Increment by the end of a Sprint. Select two statements that explain what Done means. (Choose two.)",
    options: [
      "All work the Development Team is willing to do.",
      "Ready for integration.",
      "No work left from the definition of Done.",
      "Whatever the Product Owner defines as quality.",
      "Ready to be released to end users."
    ],
    correctAnswers: [2, 4],
    explanation: "Done means all criteria in the Definition of Done are met and the Increment is ready to release to end users. It's not just 'ready for integration' or whatever the team feels like doing."
  },
  {
    id: 130,
    text: "Choose two responsibilities of a self-organizing Development Team. (Choose two.)",
    options: [
      "Reorder the Product Backlog.",
      "Pull Product Backlog items for the Sprint.",
      "Do the work planned in the Sprint Backlog.",
      "Increase velocity.",
      "Report daily progress to stakeholders."
    ],
    correctAnswers: [1, 2],
    explanation: "The Development Team pulls items from the Product Backlog and executes the Sprint Backlog. They don't reorder the Product Backlog (that's the PO's job) or report daily to stakeholders."
  },
  {
    id: 131,
    text: "What is the tactic a Scrum Master should use to divide a group of 100 people into multiple Development Teams?",
    options: [
      "Create teams based on their skills across multiple layers (such as database, UI, etc.)",
      "Ask the Product Owner to assign the people to teams.",
      "Ask the developers to divide themselves into teams."
    ],
    correctAnswers: [2],
    explanation: "Self-organization applies to team formation too. The Scrum Master should let the developers form their own teams — they know who they work well with and what skills they bring."
  },
  {
    id: 132,
    text: "Cross-functional teams are optimized to work on one technical layer of a system only (e.g. GUI, database, middle tier, interfaces).",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. Cross-functional means the team has all skills needed to deliver end-to-end. Working on only one layer is the opposite of cross-functional — that's a component team."
  },
  {
    id: 133,
    text: "Who determines how work is performed during the Sprint?",
    options: [
      "The Developers.",
      "The Scrum Team.",
      "The Scrum Master.",
      "Team manager.",
      "Subject matter experts."
    ],
    correctAnswers: [0],
    explanation: "The Developers decide how to do their work. That's what self-management means — no one tells them which techniques to use, how to organize tasks, or who does what."
  },
  {
    id: 134,
    text: "Developers can't finish tasks because the Product Owner isn't available to clarify requirements. They ask the Scrum Master to get answers for them. What is the most appropriate action?",
    options: [
      "The Scrum Master should act as a middleman, collecting questions and bringing back answers.",
      "The Scrum Master should coach the Developers and Product Owner on the importance of collaboration and facilitate direct interactions.",
      "The Scrum Master should tell the Developers to make their own best assumptions and keep working.",
      "The Scrum Master should cancel the Sprint since the lack of a Product Owner makes the Sprint Goal impossible."
    ],
    correctAnswers: [1],
    explanation: "The Scrum Master coaches and facilitates — they don't become a communication relay. The right fix is to build a direct working relationship between the Developers and Product Owner."
  },
  {
    id: 135,
    text: "What is the typical size for a Scrum Team?",
    options: [
      "10 or fewer.",
      "At least 7.",
      "7 plus or minus 3.",
      "9."
    ],
    correctAnswers: [0],
    explanation: "The Scrum Guide recommends 10 or fewer people total on a Scrum Team. This keeps communication overhead manageable while allowing enough capacity to deliver meaningful work."
  },
  {
    id: 136,
    text: "When does a Developer become accountable for an item in the Sprint Backlog?",
    options: [
      "During the Daily Scrum.",
      "As soon as a Developer on the Scrum Team can accommodate more work.",
      "Never. All Developers on the Scrum Team share accountability for items in the Sprint Backlog.",
      "At Sprint Planning when all of the Sprint Backlog items are split evenly across the Developers."
    ],
    correctAnswers: [2],
    explanation: "No individual Developer owns a Sprint Backlog item. The entire team is collectively accountable for the Sprint Backlog. This is what makes them a team and not just a group of individuals."
  },
  {
    id: 137,
    text: "Which Scrum Values are exhibited by not building Product Backlog items that have low business value? (Choose three.)",
    options: [
      "Economic Value Added.",
      "Respect.",
      "Focus.",
      "Earned Value.",
      "Courage."
    ],
    correctAnswers: [1, 2, 4],
    explanation: "Choosing not to build low-value items shows Focus (concentrating on what matters), Courage (saying no to stakeholders pushing for less important features), and Respect (valuing everyone's time and resources). Economic Value Added and Earned Value are not Scrum Values."
  },
  {
    id: 138,
    text: "True or False: The purpose of a Sprint is to produce a valuable, useful Increment.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [0],
    explanation: "True. Every Sprint exists to produce something real and useful. That's the entire point — not to run through a process, but to deliver value."
  },
  {
    id: 139,
    text: "True or False: The Product Owner makes sure the Developers select enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. The Developers decide how much work they can take on. The Product Owner can share priorities and expectations, but cannot force the team to take more work than they believe they can complete."
  },
  {
    id: 140,
    text: "Which of these may a Development Team deliver at the end of a Sprint?",
    options: [
      "Failing unit tests, to identify acceptance tests for the next Sprint.",
      "An increment of software with minor known bugs in it.",
      "An increment of working software that is done.",
      "A single document, if that is what the Scrum Master asked for."
    ],
    correctAnswers: [2],
    explanation: "The only valid delivery is a Done Increment of working software. Known bugs mean it's not Done. Documents and failing tests don't count as Increments in Scrum."
  },
  {
    id: 141,
    text: "During a Sprint Retrospective, the Development Team proposes moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master? (Choose two.)",
    options: [
      "Consider the request and decide on which days the Daily Scrum should occur.",
      "Coach the team on why the Daily Scrum is important as an opportunity to update the plan.",
      "Have the developers vote.",
      "Learn why the Development Team wants this and work with them to improve the outcome of the Daily Scrum.",
      "Acknowledge and support the self-organizing team's decision."
    ],
    correctAnswers: [1, 3],
    explanation: "The Scrum Master coaches the team on why daily inspection matters, and also listens to understand the root cause. Maybe the Daily Scrum isn't valuable enough — that's worth exploring. But reducing frequency isn't a valid Scrum solution."
  },
  {
    id: 142,
    text: "Which of the following are true about the length of the Sprint? (Choose two.)",
    options: [
      "The length of the Sprint should be proportional to the work that is done in between Sprints.",
      "It is best to have Sprints of consistent length throughout a development effort.",
      "Sprint length is determined during Sprint Planning, and should hold the time to code planned features but not testing.",
      "Sprint length is determined during Sprint Planning and should be long enough to make sure the team can deliver.",
      "All Sprints must be 1 month or less."
    ],
    correctAnswers: [1, 4],
    explanation: "Consistent Sprint length creates a predictable rhythm and makes velocity meaningful. And all Sprints must be one month or less — that's a firm rule in Scrum."
  },
  {
    id: 143,
    text: "During a Sprint, the Developers determine that they will not be able to complete all of the work they forecasted. What should they do?",
    options: [
      "Extend the Sprint to finish all the work.",
      "Immediately contact the Product Owner and ask to cancel the Sprint.",
      "Collaborate with the Product Owner to remove or adjust work from the Sprint Backlog to meet the Sprint Goal.",
      "Work overtime to deliver everything that was forecasted."
    ],
    correctAnswers: [2],
    explanation: "When the team can't finish everything, they work with the Product Owner to adjust scope — not extend the Sprint or work overtime. The Sprint Goal stays; the exact scope is flexible."
  },
  {
    id: 144,
    text: "A Scrum Master is essentially the same thing as a traditional PM (Project Manager).",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. A traditional PM plans, controls, and directs. A Scrum Master serves, coaches, and facilitates. They remove impediments and teach Scrum — they don't manage the team or own the project plan."
  },
  {
    id: 145,
    text: "At the seventh Sprint Review, stakeholders are disappointed — the product won't meet their needs and costs more than expected. What factors likely led to this? (Choose two.)",
    options: [
      "The Project Management Office (PMO) has not been engaged adequately.",
      "The Product Owner has not been keeping the stakeholders aware of the progress of the project.",
      "The stakeholders haven't been using the Sprint Reviews to inspect and evaluate progress.",
      "The stakeholders were not allowed to enter the development area."
    ],
    correctAnswers: [1, 2],
    explanation: "Seven Sprints of surprise means two things went wrong: the Product Owner wasn't communicating progress, and stakeholders weren't doing their job of attending Sprint Reviews to inspect and give feedback. Both parties failed."
  },
  {
    id: 146,
    text: "What are the two primary ways a Scrum Master keeps a Development Team working at its highest level of productivity? (Choose two.)",
    options: [
      "By ensuring the meetings start and end at the proper time.",
      "By keeping high value features high in the Product Backlog.",
      "By facilitating Scrum Team decisions.",
      "By removing impediments that hinder the Scrum Team."
    ],
    correctAnswers: [2, 3],
    explanation: "The Scrum Master maximizes productivity by facilitating good decisions and clearing the path for the team to work unobstructed. Timeboxing and backlog ordering are important but not the Scrum Master's primary levers."
  },
  {
    id: 147,
    text: "When is it most appropriate for a Scrum Team to change the Definition of Done?",
    options: [
      "Prior to starting a new project.",
      "During Product Backlog refinement.",
      "During Sprint Planning.",
      "During the Sprint Retrospective."
    ],
    correctAnswers: [3],
    explanation: "The Sprint Retrospective is the designated time to inspect and improve the Definition of Done. It's the natural moment to ask 'are our quality standards good enough, and how can we raise the bar?'"
  },
  {
    id: 148,
    text: "The Definition of Done serves which three purposes? (Choose three.)",
    options: [
      "Describe the purpose, objective, and timebox of each Scrum event.",
      "Guide the Developers on how many Product Backlog items to select for the Sprint.",
      "Describe the work that must be mostly done before the Sprint is allowed to end.",
      "Create a shared understanding of when work is complete.",
      "Increase transparency."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "The Definition of Done helps the team estimate how much they can take on, creates a shared understanding of completion, and makes the state of the Increment transparent to everyone. It doesn't describe Scrum events."
  },
  {
    id: 149,
    text: "Which of the following best describes the role of the Scrum Master?",
    options: [
      "A manager who directs the team's daily work and resolves conflicts.",
      "A servant-leader who helps the Scrum Team and the organization understand and enact Scrum.",
      "A project coordinator who tracks progress and reports to stakeholders.",
      "A technical lead who makes architectural decisions for the Development Team."
    ],
    correctAnswers: [1],
    explanation: "The Scrum Master is a servant-leader — they serve the team and the organization by helping everyone understand Scrum. They don't direct work, manage people, or make technical decisions."
  },
  {
    id: 150,
    text: "Which three purposes does the definition of Done serve? (Choose three.)",
    options: [
      "Guide the Development Team on how many Product Backlog items to select for the Sprint.",
      "Create a shared understanding of when work is complete.",
      "Describe the purpose, objective, and time-box of each Scrum event.",
      "Describe the work that must be done before the Sprint is allowed to end.",
      "Increase transparency."
    ],
    correctAnswers: [0, 1, 4],
    explanation: "The Definition of Done guides Sprint selection, creates shared understanding of completion, and increases transparency. It does not describe Scrum events — that's the Scrum Guide's job."
  },
  {
    id: 151,
    text: "True or False: Scrum has a role called Project Manager.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. Scrum has three roles: Product Owner, Scrum Master, and Developers. There is no Project Manager role in Scrum."
  },
  {
    id: 152,
    text: "Which of the following are true about the Product Owner role? (Choose two.)",
    options: [
      "The Product Owner is one person.",
      "The Product Owner is accountable for ordering the Product Backlog.",
      "Multiple people can share the Product Owner role on a Scrum Team.",
      "The Product Owner role can be played by a committee or a team of people."
    ],
    correctAnswers: [0, 1],
    explanation: "The Product Owner is exactly one person — not a committee, not a group. And they are accountable for the Product Backlog ordering. Shared ownership of the PO role dilutes accountability."
  },
  {
    id: 153,
    text: "Which two ways of creating Development Teams are consistent with Scrum's values? (Choose two.)",
    options: [
      "Existing teams propose how they would like to go about organizing into the new structure.",
      "Managers personally re-assign current subordinates to new teams.",
      "Managers collaborate to assign individuals to specific teams.",
      "Bring all the developers together and let them self-organize into Development Teams.",
      "The Chief Product Owner determines the new team structures and assignments."
    ],
    correctAnswers: [0, 3],
    explanation: "Scrum values self-organization. Teams should propose their own structure or self-organize entirely. Manager assignments — whether unilateral or collaborative — contradict the principle of self-managing teams."
  },
  {
    id: 154,
    text: "Which best describes the Product Backlog?",
    options: [
      "It is allowed to grow and change as more is learned about the product and its customers.",
      "It provides just enough information to enable a Scrum team to start the design phase of a product.",
      "It contains all foreseeable tasks and requirements from which the Scrum team can develop and maintain a complete project plan.",
      "It is baselined to follow change management processes."
    ],
    correctAnswers: [0],
    explanation: "The Product Backlog is a living artifact — it evolves as the team learns more. It's never complete, never baselined, and certainly not a requirements document or project plan."
  },
  {
    id: 155,
    text: "Which three of the following are feedback loops in Scrum? (Choose three.)",
    options: [
      "Sprint Review.",
      "Release Planning.",
      "Sprint Retrospective.",
      "Refinement Meeting.",
      "Daily Scrum."
    ],
    correctAnswers: [0, 2, 4],
    explanation: "The Sprint Review, Sprint Retrospective, and Daily Scrum are all feedback loops — inspect and adapt moments built into Scrum. Release planning and refinement are useful activities but aren't the core feedback loops."
  },
  {
    id: 156,
    text: "Who creates the Definition of Done?",
    options: [
      "The Scrum Team.",
      "The Scrum Master.",
      "The Product Owner.",
      "The Developers."
    ],
    correctAnswers: [0],
    explanation: "The Scrum Team creates the Definition of Done collaboratively. If the organization has one, the team adopts it as a minimum. It's not solely the SM's, PO's, or Developers' decision."
  },
  {
    id: 157,
    text: "What does it mean to say that an event has a time-box?",
    options: [
      "The event must happen at a set time.",
      "The event must happen by a given time.",
      "The event must take at least a minimum amount of time.",
      "The event can take no more than a maximum amount of time."
    ],
    correctAnswers: [3],
    explanation: "A time-box sets a maximum duration. Events should end when the purpose is achieved, but never exceed the time-box. It's a ceiling, not a floor or a fixed schedule."
  },
  {
    id: 158,
    text: "How should a Development Team deal with non-functional requirements?",
    options: [
      "Ensure every Increment meets them.",
      "Make sure the release department understands these requirements, but it is not the Development Team's responsibility.",
      "Handle them during the Integration Sprint preceding the Release Sprint.",
      "Assign them to the lead developers on the team."
    ],
    correctAnswers: [0],
    explanation: "Non-functional requirements — performance, security, scalability — must be met by every Increment. They belong in the Definition of Done. Deferring them to special Sprints or other teams creates technical debt."
  },
  {
    id: 159,
    text: "What two factors are best considered when establishing the Sprint length? (Choose two.)",
    options: [
      "The organization has mandated similar length sprints.",
      "The level of uncertainty over the technology to be used.",
      "The frequency at which team formation can be changed.",
      "The risk of being disconnected from the stakeholders."
    ],
    correctAnswers: [1, 3],
    explanation: "Higher uncertainty calls for shorter Sprints to get feedback faster and reduce risk. Longer Sprints risk losing touch with stakeholders. Team formation frequency and organizational mandates aren't good reasons to set Sprint length."
  },
  {
    id: 160,
    text: "When do Development Team members take ownership of a Sprint Backlog item?",
    options: [
      "At the Sprint planning meeting.",
      "During the Daily Scrum.",
      "Never. All Sprint Backlog Items are owned by the entire Scrum Team.",
      "Whenever a team member can accommodate more work."
    ],
    correctAnswers: [2],
    explanation: "No individual owns a Sprint Backlog item. The entire Development Team collectively owns the Sprint Backlog. Individual ownership contradicts self-management and team accountability."
  },
  {
    id: 161,
    text: "The Daily Scrum happens every day. What would be three key concerns if the frequency were lowered to every two or three days? (Choose three.)",
    options: [
      "Opportunities to inspect and adapt the Sprint Backlog are lost.",
      "Impediments are raised and resolved more slowly.",
      "The Product Owner cannot accurately report progress to the stakeholders.",
      "Too much work is spent updating the Scrum board before the meeting.",
      "The Scrum Master loses the ability to update the Gantt chart properly.",
      "The Sprint plan may become inaccurate."
    ],
    correctAnswers: [0, 1, 5],
    explanation: "Less frequent Daily Scrums mean fewer opportunities to inspect and adapt, slower impediment resolution, and a Sprint plan that drifts from reality. The Product Owner's reporting and Scrum boards/Gantt charts are not core concerns."
  },
  {
    id: 162,
    text: "When must the Product Owner participate in the Daily Scrum?",
    options: [
      "When the Product Owner needs to represent the stakeholders' point of view to the Developers.",
      "When there are impediments to discuss.",
      "When the Scrum Master asks the Product Owner to attend.",
      "When the Product Owner is actively working on items on the Sprint Backlog; however, they participate as a Developer."
    ],
    correctAnswers: [3],
    explanation: "The Product Owner only needs to attend the Daily Scrum if they're actively working on Sprint Backlog items — and in that case, they participate as a Developer, not in their PO role."
  },
  {
    id: 163,
    text: "Which of the following services are appropriate for a Scrum Master in regard to the Daily Scrum?",
    options: [
      "Lead the discussions of the Development Team.",
      "Make sure that all 3 questions have been answered by each member of the team.",
      "Keep track of whether each team member has a chance to speak.",
      "Teach the Development Team to keep the Daily Scrum within the 15-minute time-box.",
      "All of the above."
    ],
    correctAnswers: [3],
    explanation: "The Scrum Master teaches the team to keep the Daily Scrum effective and within the time-box. They don't lead the discussion, police the three questions, or make sure everyone speaks — that would undermine the team's self-management."
  },
  {
    id: 164,
    text: "Why does a Development Team need a Sprint Goal?",
    options: [
      "A Sprint Goal only gives purpose to Sprint 0.",
      "Sprint Goals are not valuable. Everything is known from the Product Backlog.",
      "The Development Team is more focused with a common yet specific goal.",
      "A Sprint Goal ensures that all of the Product Backlog items selected for the Sprint are implemented."
    ],
    correctAnswers: [2],
    explanation: "The Sprint Goal gives the team a shared purpose and direction. It helps them make decisions during the Sprint and stay focused on what matters most, rather than just working through a list of items."
  },
  {
    id: 165,
    text: "Which of the following are roles on a Scrum Team? (Choose three.)",
    options: [
      "Users.",
      "Scrum Master.",
      "Product Owner.",
      "Development Team.",
      "Customers."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "The three Scrum roles are: Scrum Master, Product Owner, and Development Team (Developers). Users and customers are stakeholders, not Scrum Team members."
  },
  {
    id: 166,
    text: "True or False: To get started in Scrum, you need no more than a Product Owner with enough ideas for a first Sprint, a Development Team to implement those ideas, and a Scrum Master to help guide the process.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [0],
    explanation: "True. You don't need elaborate plans, complete requirements, or a perfect setup. Scrum is designed to start small and learn fast — a PO with ideas, a team to build, and a Scrum Master to facilitate is enough to begin."
  },
  {
    id: 167,
    text: "Who determines when it is appropriate to update the Sprint Backlog during a Sprint?",
    options: [
      "The Project Manager.",
      "The Development Team.",
      "The Scrum Team.",
      "The Product Owner."
    ],
    correctAnswers: [1],
    explanation: "The Development Team owns the Sprint Backlog and updates it continuously throughout the Sprint as they learn more. No one else decides when updates are appropriate."
  },
  {
    id: 168,
    text: "What is the Product Owner responsible for during the Sprint Retrospective?",
    options: [
      "Participating as a Scrum Team member.",
      "Summarizing and reporting the discussions to the stakeholders they represent.",
      "Capturing requirements for the Product Backlog.",
      "The Product Owner should not take part in Sprint Retrospectives."
    ],
    correctAnswers: [0],
    explanation: "The Product Owner participates in the Sprint Retrospective as a full Scrum Team member — contributing to the discussion about how the team works together. They don't report out or capture requirements during this event."
  },
  {
    id: 169,
    text: "Which three behaviors demonstrate that a Scrum Team is self-managing? (Choose three.)",
    options: [
      "The Scrum Team has all the skills needed to create an increment.",
      "Developers collaboratively selecting their own work during the Sprint.",
      "The Developers create their own Sprint Backlog, reflecting all work that is part of the Definition of Done.",
      "The Scrum Master is no longer needed.",
      "Stakeholders are attending the Daily Scrum to check progress.",
      "The Scrum Team members are working within the boundaries of their functional description and handing off work sequentially."
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Self-management means having all necessary skills, choosing your own work collaboratively, and owning your Sprint plan. The Scrum Master remains valuable even in mature teams, and sequential handoffs are a sign of component thinking — not self-management."
  },
  {
    id: 170,
    text: "What are three ways Scrum promotes self-organization? (Choose three.)",
    options: [
      "By not allowing documentation.",
      "By the Development Team deciding what work to do in a Sprint.",
      "By preventing stakeholders from entering the development room.",
      "By removing titles for Development Team members.",
      "By being a lightweight framework."
    ],
    correctAnswers: [1, 3, 4],
    explanation: "Scrum promotes self-organization by letting the team decide their work, removing titles that enforce hierarchy within the team, and staying lightweight so teams have room to figure things out themselves."
  },
  {
    id: 171,
    text: "Which of the following are true about the Product Owner? (Choose two.)",
    options: [
      "The Product Owner can be represented by a committee or a team of people.",
      "The Product Owner is accountable for ordering the Product Backlog.",
      "The Scrum Team can have multiple Product Owners.",
      "The Product Owner is one person."
    ],
    correctAnswers: [1, 3],
    explanation: "The Product Owner is one person — always. And they are accountable for Product Backlog ordering. Committees and multiple POs dilute accountability and create confusion."
  },
  {
    id: 172,
    text: "What are three ways Scrum promotes self-management? (Choose three.)",
    options: [
      "By the Scrum Team deciding what work to do in a Sprint.",
      "By being a lightweight framework.",
      "By having the Scrum Master protect the Scrum Team from interruptions.",
      "By removing titles for Scrum Team members."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Self-management is promoted by the team choosing their own work, Scrum staying out of the way as a lightweight framework, and removing titles that create internal hierarchy. The Scrum Master protecting the team from interruptions is servant leadership, not a structural Scrum feature."
  },
  {
    id: 173,
    text: "Which of the following best describes an increment of working software?",
    options: [
      "A decomposition of all Product Backlog items into tasks for future Sprint Backlog lists.",
      "Additional features in a usable state that complement those delivered in previous iterations.",
      "A new user interface design for functionality delivered in previous iterations.",
      "An automated test suite to verify functionality delivered in previous iterations.",
      "UML diagrams that describe how to deliver functionality in future iterations."
    ],
    correctAnswers: [1],
    explanation: "An Increment is working software — new features that are usable and build on what was previously delivered. Designs, test suites, task decompositions, and diagrams are not Increments."
  },
  {
    id: 174,
    text: "What are two effective ways for the Scrum Team to make non-functional requirements visible? (Choose two.)",
    options: [
      "Put them on a separate list on the Scrum board, available for all to see.",
      "Add them to the Product Backlog to ensure transparency.",
      "Run the integration and regression tests before the end of the Sprint, and capture open work for the next Sprint Backlog.",
      "Add them to the definition of Done so the work is taken care of every Sprint."
    ],
    correctAnswers: [1, 3],
    explanation: "Non-functional requirements become visible through the Product Backlog (making them explicit, plannable work) and the Definition of Done (ensuring they're addressed every Sprint automatically)."
  },
  {
    id: 175,
    text: "A Scrum Master has a growing list of open impediments and has only resolved a small portion. Which three techniques would be most helpful? (Choose three.)",
    options: [
      "Consulting with the Development Team.",
      "Prioritizing the list and working on them in order.",
      "Arranging a triage meeting with all project managers.",
      "Alerting management to the impediments and their impact."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "The Scrum Master should consult the team (they may have solutions), prioritize the list to tackle the most impactful first, and escalate to management when organizational issues are blocking the team. Involving project managers isn't a standard Scrum approach."
  },
  {
    id: 176,
    text: "Select two ways in which technical debt impacts transparency. (Choose two.)",
    options: [
      "When calculated and estimated, the total amount of technical debt shows exactly how long until the Product Owner can release the Increment.",
      "It leads to false assumptions about the current state of the system, specifically of an Increment being releasable at the end of a Sprint.",
      "As development progresses and code is added, the system becomes more difficult to stabilize, which results in future work being slowed down in unpredictable ways.",
      "It enhances transparency for the Product Owner as a Development Team is not allowed to do additional feature development in a Sprint as long as there is technical debt."
    ],
    correctAnswers: [1, 2],
    explanation: "Technical debt creates false assumptions — things appear Done but aren't truly releasable. And accumulated debt makes future work unpredictable, which undermines the team's ability to forecast and plan transparently."
  },
  {
    id: 177,
    text: "A Development Team selects Product Backlog items for a Sprint with the intent to get them Done. Which three phrases best describe the purpose of a definition of Done? (Choose three.)",
    options: [
      "It controls whether the developers have performed their tasks.",
      "It provides a template for elements that need to be included in the technical documentation.",
      "It creates transparency over the work inspected at the Sprint Review.",
      "It tracks the percent completeness of a Product Backlog item.",
      "It guides the Development Team in creating a forecast at Sprint Planning.",
      "It defines what it takes for an Increment to be ready for release."
    ],
    correctAnswers: [2, 4, 5],
    explanation: "The Definition of Done creates transparency at the Sprint Review, helps the team forecast how much they can take on during Sprint Planning, and defines the release standard for the Increment. It doesn't control developers or track percentages."
  },
  {
    id: 178,
    text: "What are three benefits of self-organization? (Choose three.)",
    options: [
      "Increased creativity.",
      "Increased rule compliance.",
      "Increased accuracy of estimates.",
      "Increased self-accountability.",
      "Increased commitment."
    ],
    correctAnswers: [0, 3, 4],
    explanation: "Self-organizing teams are more creative, more accountable for their own work, and more committed to outcomes they chose themselves. Rule compliance and estimate accuracy aren't the core benefits of self-organization."
  },
  {
    id: 179,
    text: "Which are NOT appropriate topics for discussion in a Sprint Retrospective? (Choose two.)",
    options: [
      "Definition of Done.",
      "How the team does its work.",
      "Team relations.",
      "The value of work currently represented in the Product Backlog.",
      "Arranging the Sprint Backlog for the next Sprint."
    ],
    correctAnswers: [3, 4],
    explanation: "The Retrospective is about how the team works — processes, tools, relationships, and quality standards. Product Backlog value and Sprint Backlog planning belong in other contexts, not the Retrospective."
  },
  {
    id: 180,
    text: "You manage six new Scrum Teams building one product. Select two conditions you should strive for. (Choose two.)",
    options: [
      "There should be six Product Owners, one for each Scrum Team.",
      "There should be six Product Owners, reporting to a chief Product Owner.",
      "The product has one Product Backlog.",
      "Each Scrum Team should have a separate Product Backlog.",
      "There should be only one Product Owner."
    ],
    correctAnswers: [2, 4],
    explanation: "One product = one Product Backlog = one Product Owner. Multiple teams can work from the same backlog, but splitting the backlog or having multiple POs creates conflicting priorities and fragments accountability."
  },
  {
    id: 181,
    text: "Which of the following is the best example of 'Inspection' in the context of Scrum's empirical process control?",
    options: [
      "A Project Manager reviewing the team's progress against a pre-defined Gantt chart.",
      "The Scrum Team and stakeholders examining the Increment and the progress toward the Product Goal during the Sprint Review.",
      "A Developer checking their own code for bugs before committing it.",
      "The Product Owner updating the Product Backlog in isolation to reflect changing market conditions."
    ],
    correctAnswers: [1],
    explanation: "Inspection in Scrum's empirical process is about the whole team and stakeholders examining real output together — the Sprint Review is the prime example. Individual code review and solo backlog updates aren't the Scrum definition of inspection."
  },
  {
    id: 182,
    text: "Developers are frequently interrupted by urgent ad-hoc requests from senior stakeholders, preventing Sprint Goals from being met. The Scrum Master suggests the team needs more Courage and Focus. Which action best demonstrates Scrum Values?",
    options: [
      "The Developers should work overtime to show Commitment to both the Sprint Goal and the ad-hoc requests.",
      "The Scrum Team should be Open about the impact of these interruptions and have the Courage to say 'No' to work not in the Sprint Backlog.",
      "The Scrum Master should Respect the stakeholders' seniority and create a separate 'Fast Track' process for their requests.",
      "The Product Owner should stay Focused by ignoring the stakeholders' concerns entirely."
    ],
    correctAnswers: [1],
    explanation: "Living Scrum Values means being transparent about the impact of interruptions and having the courage to protect the Sprint Goal. Working overtime, creating workarounds, or ignoring stakeholders entirely all miss the point."
  },
  {
    id: 183,
    text: "Which two statements best describe how Scrum differs from traditional Waterfall project management? (Choose two.)",
    options: [
      "Scrum limits waste by ensuring only the most valuable features are developed through constant re-prioritization.",
      "Waterfall manages risk through early detailed planning, while Scrum manages risk by creating a usable Increment every Sprint to enable frequent inspection.",
      "Lean thinking in Scrum is achieved by increasing the number of specialists to ensure high-quality documentation.",
      "Traditional management focuses on 'Value Delivery,' whereas Scrum focuses on 'Phase Completion.'",
      "Scrum reduces waste by ensuring all Developers are 100% busy at all times, regardless of the Sprint Goal."
    ],
    correctAnswers: [0, 1],
    explanation: "Scrum's key advantages over Waterfall are: continuous re-prioritization to focus on value, and frequent delivery of working software to manage risk. Waterfall front-loads planning; Scrum front-loads learning."
  },
  {
    id: 184,
    text: "Developers are blocked by a complex technical dependency with another department. They ask the Scrum Master to 'fix the problem.' Which action best describes the Scrum Master acting as a True Leader?",
    options: [
      "The Scrum Master contacts the other department and demands they prioritize the team's request immediately.",
      "The Scrum Master tells the Developers they must resolve all technical issues on their own.",
      "The Scrum Master facilitates a meeting between the Developers and the other department, coaching the team on how to manage dependencies in the future.",
      "The Scrum Master asks the Product Owner to remove the item from the Sprint Backlog."
    ],
    correctAnswers: [2],
    explanation: "A servant leader removes impediments while building the team's capability to handle similar situations themselves. Facilitating the conversation and coaching is more empowering than either demanding compliance or leaving the team alone."
  },
  {
    id: 185,
    text: "A Product Owner has 300 Product Backlog items. Stakeholders say their requests are getting lost, and Developers don't understand the long-term direction. What are two most effective approaches? (Choose two.)",
    options: [
      "Delegate Product Backlog ordering to the Scrum Master.",
      "Rigorously perform Product Backlog refinement, deleting or archiving items that no longer contribute to the Product Goal.",
      "Ensure the Product Goal is clear and well-communicated to provide a filter for what belongs in the Product Backlog.",
      "Keep all 300 items but move less important ones to a 'Shadow Backlog.'",
      "Ask the Developers to estimate all 300 items immediately to determine ROI."
    ],
    correctAnswers: [1, 2],
    explanation: "A clear Product Goal acts as a filter — items that don't serve it shouldn't be in the backlog. Rigorous refinement keeps the backlog manageable. Shadow backlogs and mass estimation exercises don't solve the root problem."
  },
  {
    id: 186,
    text: "The database work is done early but the dedicated tester is overwhelmed and becomes a bottleneck. How should the Developers respond?",
    options: [
      "The database administrator should wait for the next Sprint's database tasks.",
      "The Scrum Master should hire an additional tester immediately.",
      "The Developers should collaborate and share the testing workload, even if specialists work outside their primary domain.",
      "The Product Owner should extend the Sprint to allow the tester enough time."
    ],
    correctAnswers: [2],
    explanation: "Self-managing, cross-functional teams help each other when bottlenecks appear. The database developer should pitch in with testing — the Sprint Goal belongs to the whole team, not individual specialists."
  },
  {
    id: 187,
    text: "Which two statements best describe the characteristics of a Scrum Team? (Choose two.)",
    options: [
      "The Scrum Team is self-managing, meaning it decides internally who does what, when, and how.",
      "The Scrum Team is cross-functional, meaning its members have all the skills necessary to create value each Sprint.",
      "The Scrum Team should include at least one specialist from every department to ensure complete coverage.",
      "Self-management means the Scrum Team can decide to change the core rules of Scrum.",
      "Cross-functional teams are composed of individuals who each possess the exact same set of skills."
    ],
    correctAnswers: [0, 1],
    explanation: "Self-managing means the team decides how to do the work internally. Cross-functional means they collectively have all required skills. Neither means every person has every skill, nor that they can rewrite Scrum rules."
  },
  {
    id: 188,
    text: "A significant technical hurdle is discovered mid-Sprint, and the Product Owner also identifies a new urgent market opportunity. What is the most appropriate action?",
    options: [
      "Change the Sprint Goal to include the new market opportunity and extend the Sprint duration.",
      "The Developers work with the Product Owner to negotiate scope while staying focused on the original Sprint Goal.",
      "The Scrum Master should cancel the Sprint immediately to start fresh.",
      "Discard the Sprint Goal and focus entirely on the new urgent requests."
    ],
    correctAnswers: [1],
    explanation: "The Sprint Goal is the anchor. The team can adapt the scope (which items they work on) while protecting the Goal. Changing the Goal, extending the Sprint, or abandoning it entirely are not appropriate first responses."
  },
  {
    id: 189,
    text: "During Sprint Planning, Developers and Product Owner disagree on how to implement a high-priority item. What is the most appropriate action?",
    options: [
      "The Scrum Master makes the final decision on the technical approach.",
      "The Product Owner selects a different, easier item to replace it.",
      "The Developers decide on the technical approach while collaborating with the Product Owner to ensure the Sprint Goal remains viable.",
      "The meeting is adjourned until a technical expert from outside can provide a solution."
    ],
    correctAnswers: [2],
    explanation: "Technical decisions belong to the Developers — that's what self-management means. But they collaborate with the PO to make sure the approach still serves the Sprint Goal. The Scrum Master doesn't decide technical matters."
  },
  {
    id: 190,
    text: "The Scrum Master notices Developers spend most of the Daily Scrum reporting status to her and looking for her approval. What is the most appropriate action?",
    options: [
      "The Scrum Master should start taking notes and updating the burn-down chart to save Developers' time.",
      "The Scrum Master should remind the Developers that the Daily Scrum is for them to inspect progress and adapt the Sprint Backlog, then may consider not attending for a while.",
      "The Scrum Master should ask each Developer 'What did you do yesterday?' to ensure everyone is being productive.",
      "The Scrum Master should invite the Product Owner so Developers can report status to him instead."
    ],
    correctAnswers: [1],
    explanation: "If the team is reporting status to the Scrum Master instead of self-managing, the Scrum Master needs to redirect this behavior. Coaching the team on the Daily Scrum's purpose — and potentially stepping back — helps them own the event themselves."
  },
  {
    id: 191,
    text: "Which two of the following are the primary purposes of the Sprint Review? (Choose two.)",
    options: [
      "For the Developers to provide a status report to the Project Manager on tasks completed.",
      "For the Scrum Team and Stakeholders to inspect the outcome of the Sprint and determine future adaptations.",
      "For the Product Owner to present the current state of the Product Backlog and discuss likely target dates based on progress.",
      "For the Scrum Master to review the team's velocity and individual performance metrics with Stakeholders.",
      "For the Developers to demonstrate all work done during the Sprint, even if it doesn't meet the Definition of Done."
    ],
    correctAnswers: [1, 2],
    explanation: "The Sprint Review is a collaborative event where the team and stakeholders inspect what was built and adapt the plan. The PO also shares Product Backlog status and likely timelines. It's not a status report, and work that doesn't meet the DoD shouldn't be presented."
  },
  {
    id: 192,
    text: "Which three of the following are primary objectives of the Sprint Retrospective? (Choose three.)",
    options: [
      "To inspect how the last Sprint went with regards to individuals, interactions, processes, tools, and the Definition of Done.",
      "To create a plan for implementing improvements to the way the Scrum Team does its work.",
      "To identify and order the most important Product Backlog items for the next Sprint.",
      "To reflect on the team's adherence to the Scrum Values and how to strengthen them.",
      "To resolve technical bugs discovered during the Sprint Review.",
      "To report individual performance metrics to HR for annual reviews."
    ],
    correctAnswers: [0, 1, 3],
    explanation: "The Retrospective inspects how the team worked, creates an improvement plan, and reflects on Scrum Values. It's not for backlog ordering, bug fixing, or performance reporting — those belong elsewhere."
  },
  {
    id: 193,
    text: "A major regulatory change makes the current Sprint Goal obsolete mid-Sprint. Who has authority to cancel the Sprint, and what happens to completed work?",
    options: [
      "The Scrum Master cancels the Sprint. All work is discarded to start fresh.",
      "The Developers cancel the Sprint. Completed items are moved to the next Sprint.",
      "Only the Product Owner can cancel the Sprint. Done items are reviewed and potentially releasable items may be accepted.",
      "Stakeholders cancel the Sprint by informing the Scrum Master. All work is moved back for re-estimation."
    ],
    correctAnswers: [2],
    explanation: "Only the Product Owner can cancel a Sprint. Any 'Done' items are reviewed — if they're potentially releasable, they may still be accepted. Incomplete items go back to the Product Backlog for re-evaluation."
  },
  {
    id: 194,
    text: "A new feature doesn't align with the established Product Goal. What is the most appropriate action for the Scrum Team?",
    options: [
      "The Developers should immediately start working because the Product Owner controls the Product Backlog.",
      "The Scrum Team should discuss whether the Product Goal is still valid. If it is, the feature should be reconsidered or the Product Goal updated before work begins.",
      "The Scrum Master should decide whether the feature is allowed to enter the Product Backlog.",
      "The Product Owner should create a second Product Backlog for this new direction."
    ],
    correctAnswers: [1],
    explanation: "The Product Goal is a commitment — features that don't serve it should be questioned. The team discusses whether the Goal is still relevant, and either the feature or the Goal needs to be reconsidered. You can't have both without alignment."
  },
  {
    id: 195,
    text: "Which two statements best describe the purpose and impact of the Sprint Goal on Developers' work? (Choose two.)",
    options: [
      "It provides a fixed list of tasks that cannot be changed once the Sprint has started.",
      "It acts as a unifying objective that provides guidance on why they are building the Increment.",
      "It allows for flexibility in the work (the 'How') while maintaining focus on the desired outcome.",
      "It is a secondary document used only when Developers finish all Sprint Backlog tasks early.",
      "It is used by the Scrum Master to evaluate individual performance at the end of the Sprint."
    ],
    correctAnswers: [1, 2],
    explanation: "The Sprint Goal unifies the team around a shared purpose and guides their decisions. It allows scope flexibility — the team can adapt which items they work on — while keeping the outcome consistent."
  },
  {
    id: 196,
    text: "Security testing (required in the Definition of Done) hasn't been done due to lack of time. The Product Owner asks to include the item in the Increment anyway, promising it will be tested next Sprint. What is the most appropriate action?",
    options: [
      "Include the item and present it at the Sprint Review, but add a 'Security Testing' task to the next Sprint Backlog.",
      "Do not include the item in the Increment and don't present it. The item returns to the Product Backlog for the Product Owner to re-prioritize.",
      "The Scrum Master should decide whether the risk is low enough to bypass the Definition of Done.",
      "Change the Definition of Done temporarily to exclude security testing so the item can be considered Done."
    ],
    correctAnswers: [1],
    explanation: "If it doesn't meet the Definition of Done, it's not Done — full stop. The item goes back to the Product Backlog. You never lower the Definition of Done or present undone work as an Increment. The PO re-prioritizes it for the next Sprint."
  },
  {
    id: 197,
    text: "During refinement, Developers can't estimate several complex items because technical requirements are too uncertain. The Product Owner insists estimates are needed now. What is the most appropriate action?",
    options: [
      "The Scrum Master should provide estimates based on previous experience to break the deadlock.",
      "The Developers should provide a 'best guess' estimate immediately to satisfy the Product Owner.",
      "Break down the complex items into smaller pieces and possibly perform a Spike to reduce uncertainty before estimating.",
      "The Product Owner should remove these items from the Product Backlog since they cannot be estimated."
    ],
    correctAnswers: [2],
    explanation: "When uncertainty is too high to estimate, the answer is to reduce uncertainty first — through research, spikes, or decomposition. Forced guesses produce meaningless estimates that harm planning. Removing items from the backlog just because they're hard to estimate is also wrong."
  },
  {
    id: 198,
    text: "An organization uses 5 Scrum Teams to build a single mobile banking application. How should the Product Backlog and Product Owner accountability be structured?",
    options: [
      "Each Scrum Team should have its own Product Owner and Product Backlog to work independently.",
      "There should be only one Product Owner and one Product Backlog for the entire product, regardless of the number of teams.",
      "There should be one 'Chief Product Owner' who manages 5 'Junior Product Owners,' each with their own separate backlog.",
      "The 5 teams share the same Product Backlog, but each team should have its own Product Owner."
    ],
    correctAnswers: [1],
    explanation: "One product = one Product Backlog = one Product Owner. Multiple teams can pull from the same backlog, but splitting it creates conflicting priorities, inconsistent ordering, and fragmented product vision."
  },
  {
    id: 199,
    text: "A Scrum Team is consistently blocked by a slow legal approval process, preventing Increments from being Done. Developers ask the Scrum Master to solve this. What is the most effective approach?",
    options: [
      "The Scrum Master should contact the legal department and perform the approval tasks themselves.",
      "The Scrum Master should tell Developers to ignore legal requirements for now and focus on code.",
      "The Scrum Master should work with the legal department and organizational leadership to explain the impact and help find a way to streamline the approval process.",
      "The Scrum Master should tell the Product Owner to stop adding items that require legal approval."
    ],
    correctAnswers: [2],
    explanation: "Organizational impediments require organizational solutions. The Scrum Master escalates to leadership, explains the business impact, and works to change the system — not work around it or ignore the legal requirement."
  },
  {
    id: 200,
    text: "Executive leadership wants to replace annual performance reviews with rewards based on the number of Story Points each Developer completes per Sprint. What is the most appropriate response from the Scrum Master?",
    options: [
      "Support this decision as it promotes accountability and motivates Developers to work faster.",
      "Suggest the reward be based on hours worked instead of Story Points for accuracy.",
      "Coach the leadership on why rewarding individual output metrics like Story Points can lead to decreased quality, loss of transparency, and damage to team collaboration.",
      "Remain neutral and allow the organization to implement the policy, as HR decisions are outside the scope of Scrum."
    ],
    correctAnswers: [2],
    explanation: "Story Points measure team effort, not individual performance. Rewarding individuals by Story Points creates gaming, inflated estimates, hoarding of easy tasks, and destroys collaboration. The Scrum Master's job is to coach the organization — including leadership — on what actually works."
  }
];

export default questions2;
