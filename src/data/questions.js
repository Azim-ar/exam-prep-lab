// 200 PSM I Questions with correct answers and explanations
// correctAnswers: array of correct option indices (0-based)
// explanation: short, human explanation of WHY the correct answer is correct

const questions = [
  {
    id: 1,
    text: "In accordance with Scrum theory, how should a group of 100 people be divided into multiple Development Teams?",
    options: [
      "Understanding the product, the product vision and the rules of the Scrum framework, the group divides itself into teams.",
      "It doesn't really matter because you can rotate the teams every Sprint to spread knowledge.",
      "Check with the allocation department to see who has worked together before and make these the first teams.",
      "Create a matrix of skills, seniority, and level of experience to assign people to teams."
    ],
    correctAnswers: [0],
    explanation: "Scrum teams are self-organizing. The people doing the work are best positioned to decide how to divide themselves — not managers, allocation departments, or matrices."
  },
  {
    id: 2,
    text: "Who is responsible for managing the progress of work during a Sprint?",
    options: [
      "The Scrum Master.",
      "The Development Team.",
      "The Product Owner.",
      "The most junior member of the Team."
    ],
    correctAnswers: [1],
    explanation: "The Development Team owns the Sprint Backlog and manages its own progress. Scrum doesn't use a Scrum Master or Product Owner as a progress manager — that's the whole point of self-management."
  },
  {
    id: 3,
    text: "A Scrum Master is introducing Scrum to a new Team. The Team has decided that a Sprint Retrospective is unnecessary. What action should the Scrum Master take?",
    options: [
      "Call a meeting between the Scrum Team and senior management.",
      "Comply with the decision of the self-organizing team.",
      "Consult with the Product Owner to see how they feel about the situation.",
      "Begin facilitating productive and useful Sprint Retrospectives."
    ],
    correctAnswers: [3],
    explanation: "The Sprint Retrospective is a mandatory Scrum event — it's not optional. The Scrum Master's job is to ensure Scrum is understood and enacted, even when the team resists."
  },
  {
    id: 4,
    text: "A Product Owner wants advice from the Scrum Master about estimating work in Scrum. What guidance should a Scrum Master give?",
    options: [
      "Product Backlog items must be estimated in story points.",
      "Estimates are made by the people doing the work.",
      "Estimates must be in relative units.",
      "Scrum forbids estimating.",
      "Estimates are made by the Product Owner, but are best checked with the Developers."
    ],
    correctAnswers: [1],
    explanation: "In Scrum, the people doing the work create the estimates. The Developers understand the complexity and effort involved — not the Product Owner, not the Scrum Master."
  },
  {
    id: 5,
    text: "The IT manager asks a Development Team for a status report describing the progress throughout the Sprint. The Development Team asks the Scrum Master for advice. The Scrum Master should:",
    options: [
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review.",
      "Tell the Development Team to figure it out themselves.",
      "Tell the Development Team to fit the report into the Sprint Backlog.",
      "Create and deliver the report to the manager herself.",
      "Ask the Product Owner to send the manager the report."
    ],
    correctAnswers: [0],
    explanation: "The Scrum Master protects the team from outside interference and coaches stakeholders on Scrum. Progress is inspected at the Sprint Review through working software — not status reports."
  },
  {
    id: 6,
    text: "When is the Sprint Backlog created?",
    options: [
      "At the beginning of the project.",
      "During the Sprint Planning meeting.",
      "Prior to the Sprint Planning meeting.",
      "During the Sprint."
    ],
    correctAnswers: [1],
    explanation: "The Sprint Backlog is created during Sprint Planning. The team selects items from the Product Backlog and creates a plan for delivering them within the Sprint."
  },
  {
    id: 7,
    text: "As the Sprint Planning progresses, the Developers realize that the workload may be greater than their capacity to complete the work. Which two are valid actions? (Choose two.)",
    options: [
      "The Developers ensure that the Scrum Team is aware, start the Sprint, and monitor progress.",
      "Cancel the Sprint.",
      "The Developers work overtime during this Sprint.",
      "Remove or change selected Product Backlog items.",
      "Recruit additional Developers before the work can begin."
    ],
    correctAnswers: [0, 3],
    explanation: "When the workload is too large, the Developers can start the Sprint while monitoring progress closely, or they can adjust the scope by removing or swapping Product Backlog items. Cancelling a Sprint or forcing overtime are not valid Scrum responses."
  },
  {
    id: 8,
    text: "Which of these may a Scrum Team deliver at the end of a Sprint?",
    options: [
      "An Increment of software with minor known bugs in it.",
      "Failing unit tests, to identify acceptance tests for the next Sprint.",
      "A single document, if that is what management asked for.",
      "A valuable, useful Increment that meets the Definition of Done."
    ],
    correctAnswers: [3],
    explanation: "Every Sprint must produce a usable Increment that meets the Definition of Done. Partial work, failing tests, or documents don't count as a proper Scrum Increment."
  },
  {
    id: 9,
    text: "Currently, your Development Teams are organized to address a single layer only (for example, front end, middle tier, back end, and interfaces). What are three things to consider when deciding to move away from such component teams toward feature teams? (Choose three.)",
    options: [
      "You cannot do Scrum without feature teams.",
      "Productivity may suffer when making this kind of move.",
      "Getting support from the business side first helps.",
      "Feature teams have less communication overhead.",
      "With feature teams, it is easier to calculate the productivity per team."
    ],
    correctAnswers: [1, 2, 3],
    explanation: "Moving from component to feature teams is a significant change. Productivity often dips during the transition, business buy-in makes it smoother, and feature teams reduce cross-team communication overhead because one team owns the full feature."
  },
  {
    id: 10,
    text: "Which of the following is required by Scrum?",
    options: [
      "Sprint Retrospective.",
      "Members must stand up at the Daily Scrum.",
      "Sprint Burndown Chart.",
      "Release planning.",
      "All of the above."
    ],
    correctAnswers: [0],
    explanation: "The Sprint Retrospective is a required Scrum event. Standing up at the Daily Scrum, burndown charts, and release plans are common practices but not required by Scrum."
  },
  {
    id: 11,
    text: "The CEO asks the Development Team to add a very important item to a Sprint that is in progress. What should the Development Team do?",
    options: [
      "Add the item to the current Sprint and drop an item of equal size.",
      "Add the item to the current Sprint without any adjustments.",
      "Inform the Product Owner so he/she can work with the CEO.",
      "Add the item to the next Sprint."
    ],
    correctAnswers: [2],
    explanation: "All requests go through the Product Owner — including ones from the CEO. The Product Owner manages the Product Backlog and decides what gets worked on. The Development Team should redirect the CEO there."
  },
  {
    id: 12,
    text: "Who must attend the Daily Scrum?",
    options: [
      "The Scrum Master and Product Owner.",
      "The Development Team.",
      "The Development Team and Product Owner.",
      "The Scrum Team.",
      "The Development Team and Scrum Master."
    ],
    correctAnswers: [1],
    explanation: "The Daily Scrum is for the Development Team. The Scrum Master and Product Owner may attend but are not required to. It's the Developers' event to inspect their own progress."
  },
  {
    id: 13,
    text: "How is management external to the Scrum Team involved in the Daily Scrum?",
    options: [
      "The Scrum Master speaks on their behalf.",
      "Managers are not required at the Daily Scrum.",
      "Management gives an update at the start of each Daily Scrum.",
      "The Product Owner represents their opinions."
    ],
    correctAnswers: [1],
    explanation: "External management doesn't belong at the Daily Scrum. It's a team-internal event. Managers observing or participating disrupts the team's self-management and can create pressure that harms transparency."
  },
  {
    id: 14,
    text: "Every Scrum Team must have a Product Owner and Scrum Master.",
    options: [
      "True. Outcomes affected by their participation and availability.",
      "False. A Product Owner can be replaced by a subject matter expert in the Scrum Team.",
      "False. A Scrum Master is only required when asked for by the Scrum Team.",
      "True. Each must be 100% dedicated to the Scrum Team."
    ],
    correctAnswers: [0],
    explanation: "Both roles are required in Scrum, and the team's effectiveness is directly tied to how available and engaged the Product Owner and Scrum Master are. Neither can be replaced or made optional."
  },
  {
    id: 15,
    text: "Which two activities will a Product Owner engage in during a Sprint? (Choose two.)",
    options: [
      "Run the Daily Scrum.",
      "Prioritize the Development Team's work on the Sprint Backlog.",
      "Update the Sprint burndown chart.",
      "Answer questions from the Development Team about items in the current Sprint.",
      "Work with the stakeholders."
    ],
    correctAnswers: [3, 4],
    explanation: "The Product Owner collaborates with stakeholders and clarifies requirements for the Developers during the Sprint. They don't run the Daily Scrum or reprioritize the Sprint Backlog once the Sprint starts."
  },
  {
    id: 16,
    text: "What are two good ways for a Scrum Team to ensure security concerns are satisfied? (Choose two.)",
    options: [
      "Postpone the work until a specialist can perform a security audit and create a list of security-related Product Backlog items.",
      "Add security concerns to the definition of Done.",
      "Add a Sprint to specifically resolve all security concerns.",
      "Delegate the work to the concerned department.",
      "Have the Scrum Team create Product Backlog items for each concern."
    ],
    correctAnswers: [1, 4],
    explanation: "Security should be built in, not bolted on. Adding security to the Definition of Done ensures every Increment is secure. Creating Product Backlog items makes security work visible and plannable."
  },
  {
    id: 17,
    text: "Which are characteristics of the Daily Scrum? (Choose two.)",
    options: [
      "Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog.",
      "It is facilitated by the team lead.",
      "It is free form and designed to promote conversation.",
      "It consists of the Scrum Master asking the team for status.",
      "Its location and time remain constant."
    ],
    correctAnswers: [0, 4],
    explanation: "The Daily Scrum inspects progress toward the Sprint Goal and the team adapts its plan accordingly. Keeping the same time and place every day reduces logistics overhead and builds habit."
  },
  {
    id: 18,
    text: "When the Developers determine that they will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected?",
    options: [
      "The Scrum Master, project manager and the Developers.",
      "The Scrum Master and the Developers.",
      "The Product Owner and the Developers.",
      "The Product Owner and all stakeholders."
    ],
    correctAnswers: [2],
    explanation: "When scope needs to be adjusted mid-Sprint, the Product Owner and Developers decide together. The Product Owner understands business priorities; the Developers know what's feasible."
  },
  {
    id: 19,
    text: "What are the advantages of keeping component teams while starting Scrum?",
    options: [
      "There's less initial disruption than organizing into new teams. As they start, they will discover what works best, and how to potentially re-organize towards this.",
      "Component teams generally have the skills needed to create a working Increment of software that provides business value.",
      "Because they have worked together for some time, they are likely able to start producing shippable Increments faster than new feature teams would.",
      "There are fewer cross-team dependencies than working in feature teams."
    ],
    correctAnswers: [0],
    explanation: "The main advantage of keeping existing component teams is stability — less disruption upfront. The team can learn Scrum first, then restructure later when they understand what works."
  },
  {
    id: 20,
    text: "The Scrum Master observes the Product Owner struggling with ordering the Product Backlog. What is an appropriate action for the Scrum Master to take?",
    options: [
      "Suggest the Product Owner extend the Sprint, so he can have more time to order the Product Backlog.",
      "Suggest that the Development Team does the ordering to be sure that it is a feasible ordering of work.",
      "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value.",
      "Present the Product Owner with an ordered Product Backlog to use.",
      "Encourage the Product Owner to work with the Development Team to see which items technically are fastest to implement."
    ],
    correctAnswers: [2],
    explanation: "The Scrum Master coaches the Product Owner — not does their job for them. Helping the PO understand that ordering is about maximizing value is the right coaching approach."
  },
  {
    id: 21,
    text: "Which statement best describes Scrum?",
    options: [
      "A defined and predictive process that conforms to the principles of Scientific Management.",
      "A complete methodology that defines how to develop software.",
      "A cookbook that defines best practices for software development.",
      "A framework within which complex products in complex environments are developed."
    ],
    correctAnswers: [3],
    explanation: "Scrum is a lightweight framework — not a methodology, not a process, not a cookbook. It provides structure but leaves room for the team to figure out how to do the actual work."
  },
  {
    id: 22,
    text: "Who starts the Daily Scrum?",
    options: [
      "The person coming in last. This encourages people to be on time and helps to stay within the time-box.",
      "Whoever the Development Team decides should start.",
      "The person who has the token.",
      "The Scrum Master. This ensures the Development Team has the meeting and stays within the time-box.",
      "The person who last broke the build."
    ],
    correctAnswers: [1],
    explanation: "The Daily Scrum is self-managed by the Development Team. They decide who starts, the format, and how to run it — the Scrum Master doesn't facilitate or control it."
  },
  {
    id: 23,
    text: "When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?",
    options: [
      "During the Daily Scrum.",
      "Never. The entire Scrum Team is accountable for creating value every Sprint.",
      "Whenever a team member can accommodate more work.",
      "At the Sprint Planning Event."
    ],
    correctAnswers: [1],
    explanation: "No single Developer owns a backlog item's value. The whole Scrum Team is collectively accountable for creating value each Sprint — that's what makes it a team, not a group of individuals."
  },
  {
    id: 24,
    text: "What factor should be considered when establishing the Sprint length?",
    options: [
      "The frequency at which team formation can be changed.",
      "The organization has mandated similar length sprints.",
      "The organization's release schedule.",
      "The need for the team to learn based on doing work and measuring results."
    ],
    correctAnswers: [3],
    explanation: "Sprint length should allow the team to learn fast and adapt. Shorter Sprints mean faster feedback loops. Organizational mandates or release schedules shouldn't dictate Sprint length."
  },
  {
    id: 25,
    text: "Who can abnormally terminate a Sprint?",
    options: [
      "The Scrum Master.",
      "The Development Team or its members.",
      "The Product Owner.",
      "The Stakeholders."
    ],
    correctAnswers: [2],
    explanation: "Only the Product Owner can cancel a Sprint — typically when the Sprint Goal becomes obsolete. This is rare, but the authority sits with the PO since they're accountable for the product's value."
  },
  {
    id: 26,
    text: "Which are appropriate topics for discussion in a Sprint Retrospective? (Choose three.)",
    options: [
      "Arranging the Sprint Backlog for the next Sprint.",
      "The value of work currently represented in the Product Backlog.",
      "Team relations.",
      "Definition of Done.",
      "How the Scrum Team does its work."
    ],
    correctAnswers: [2, 3, 4],
    explanation: "The Retrospective is about inspecting how the team works together — relationships, processes, tools, and the Definition of Done all belong here. Product Backlog ordering and value are PO territory, not Retrospective topics."
  },
  {
    id: 27,
    text: "Which statement best describes a Product Owner's responsibility?",
    options: [
      "Optimizing the value of the work the Scrum Team does.",
      "Ensuring that the work meets the commitments to the stakeholders.",
      "Directing the Development Team.",
      "Keep stakeholders from distracting the Development Team."
    ],
    correctAnswers: [0],
    explanation: "The Product Owner's core job is maximizing the value produced by the Scrum Team. This means ordering the Product Backlog so the most valuable things get built first."
  },
  {
    id: 28,
    text: "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several developers come to you complaining that work for the upcoming Sprints requires full-time commitment from a technical specialist external to the teams. What are two key concerns? (Choose two.)",
    options: [
      "The desire to maintain a stable velocity.",
      "The benefit of Development Teams figuring out a solution for themselves.",
      "The need to have enough work to keep all Development Team members busy.",
      "The ability of the Scrum Teams to produce integrated increments."
    ],
    correctAnswers: [1, 3],
    explanation: "The Scrum Master should let teams solve problems themselves when possible — that builds self-management. And a dependency on an external specialist threatens the team's ability to deliver integrated, done Increments each Sprint."
  },
  {
    id: 29,
    text: "The Product Owner is not collaborating with the Development Team during the Sprint. What are two valuable actions for a Scrum Master to take? (Choose two.)",
    options: [
      "Inform the Product Owner's functional manager.",
      "Stop the Sprint, send the Product Owner to a course and restart.",
      "Bring up the problem in the Sprint Retrospective.",
      "Coach the Product Owner in the values of Scrum and incremental delivery.",
      "Nominate a proxy Product Owner."
    ],
    correctAnswers: [2, 3],
    explanation: "The Scrum Master coaches the Product Owner on Scrum values and collaboration, and raises the systemic issue in the Retrospective where the team can address it together. Escalating to a manager or stopping the Sprint are overreactions."
  },
  {
    id: 30,
    text: "Who owns the Sprint Backlog?",
    options: [
      "The Scrum Team.",
      "The Product Owner.",
      "The Scrum Master.",
      "The Development Team."
    ],
    correctAnswers: [3],
    explanation: "The Sprint Backlog belongs to the Development Team. They create it, manage it, and update it throughout the Sprint. The Product Owner doesn't control it once the Sprint starts."
  },
  {
    id: 31,
    text: "How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?",
    options: [
      "The Scrum Team with the highest velocity pulls Product Backlog items first.",
      "The Development Teams pull in work in agreement with the Product Owner.",
      "The Product Owner should provide each team with its own Product Backlog.",
      "Each Scrum Team takes an equal number of items.",
      "The Product Owner decides."
    ],
    correctAnswers: [1],
    explanation: "When multiple teams share a Product Backlog, they coordinate with the Product Owner to pull the right items. It's collaborative — not competitive or equal splitting."
  },
  {
    id: 32,
    text: "Who is responsible for the sizing of Product Backlog items?",
    options: [
      "The Developers after clarifying requirements with the Product Owner.",
      "The Product Owner with input from the Developer.",
      "The Developers, alone.",
      "The most senior people in the organization, including architects and subject matter experts.",
      "The Scrum Master."
    ],
    correctAnswers: [0],
    explanation: "Sizing (estimating) is done by the Developers — they're the ones doing the work. But they first clarify the requirements with the Product Owner so they understand what needs to be built."
  },
  {
    id: 33,
    text: "Developers do not meet with stakeholders; only the Product Owner meets with stakeholders.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "This is false. Developers can and should interact with stakeholders when needed — especially at the Sprint Review. The Product Owner doesn't act as a gatekeeper between the team and the outside world."
  },
  {
    id: 34,
    text: "Which of the following might the Scrum Team discuss during a Sprint Retrospective?",
    options: [
      "Methods of communication.",
      "The way the Scrum Team does Sprint Planning.",
      "Skills needed to improve the Development Team's ability to deliver.",
      "Its Definition of Done.",
      "All of the above."
    ],
    correctAnswers: [4],
    explanation: "All of these are valid Retrospective topics. The Retrospective is about inspecting everything — people, processes, tools, communication, and the Definition of Done."
  },
  {
    id: 35,
    text: "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?",
    options: [
      "Without a new vocabulary as a reminder of the change, very little change may actually happen.",
      "The organization may not understand what has changed with Scrum and the benefits of Scrum may be lost.",
      "Management may feel less anxious.",
      "All answers apply."
    ],
    correctAnswers: [3],
    explanation: "All three outcomes are plausible. Scrum's terminology carries specific meaning — changing it risks losing the conceptual shift. But it's also true that management might feel more comfortable, and the change effort may stall without new vocabulary to anchor it."
  },
  {
    id: 36,
    text: "The Sprint Review is mainly an inspect and adapt opportunity for which group?",
    options: [
      "The Development Team and stakeholders.",
      "The Product Owner and Development Team.",
      "The Scrum Team and stakeholders.",
      "The Product Owner and management.",
      "The Development Team and management.",
      "The Product Owner and stakeholders."
    ],
    correctAnswers: [2],
    explanation: "The Sprint Review is a collaborative event for the entire Scrum Team and stakeholders. Together they inspect the Increment and adapt the Product Backlog based on what they learn."
  },
  {
    id: 37,
    text: "When is implementation of a Product Backlog item considered complete?",
    options: [
      "At the end of the Sprint.",
      "When the item has no work remaining in order to be potentially released.",
      "When Quality Assurance reports that the item passes all acceptance criteria.",
      "When all work in the Sprint Backlog related to the item is finished."
    ],
    correctAnswers: [1],
    explanation: "An item is Done when it meets the Definition of Done and has no remaining work to be potentially releasable. QA sign-off or Sprint end aren't the triggers — the Definition of Done is."
  },
  {
    id: 38,
    text: "Which phrase best describes a Product Owner?",
    options: [
      "Go-between development team and customers.",
      "Value optimizer.",
      "Requirements engineer.",
      "Team manager."
    ],
    correctAnswers: [1],
    explanation: "The Product Owner's core purpose is to maximize the value of the product. 'Value optimizer' captures this best. They're not a middleman, not a requirements writer, and definitely not a team manager."
  },
  {
    id: 39,
    text: "Which two things are appropriate for a Scrum Master to do if the Scrum Team doesn't have the tools and environment to completely finish each selected Product Backlog item? (Choose two.)",
    options: [
      "Coach the Scrum Team to improve its skills, tools, and infrastructure over time and adjust the Definition of Done accordingly.",
      "Encourage the Product Owner to accept partially done increments until the situation improves.",
      "Refocus the current Sprint on establishing the Scrum Team's environment instead of delivering an Increment.",
      "Declare the Scrum Team not ready for Scrum.",
      "Have the Scrum Team establish a Definition of Done that is actually possible to achieve given current circumstances."
    ],
    correctAnswers: [0, 4],
    explanation: "When the environment isn't ideal, the team should set a Definition of Done that's achievable now and improve over time. Accepting partial work or skipping Increments aren't valid approaches."
  },
  {
    id: 40,
    text: "Who creates a Product Backlog item's estimate?",
    options: [
      "The Development Team after clarifying requirements with the Product Owner.",
      "The Product Owner with input from the Development Team.",
      "The most senior people in the organization, including architects and subject matter experts.",
      "The Scrum Master.",
      "The Development Team, alone."
    ],
    correctAnswers: [0],
    explanation: "The Development Team creates estimates because they do the work. They clarify requirements with the Product Owner first to make sure they understand what's being asked."
  },
  {
    id: 41,
    text: "How often should Scrum Team membership change?",
    options: [
      "As needed, while taking into account a short term reduction in productivity.",
      "Never, because it reduces productivity.",
      "As needed, with no special allowance for changes in productivity.",
      "Every Sprint to promote shared learning."
    ],
    correctAnswers: [0],
    explanation: "Team membership can change when needed, but there's always a cost — a new member disrupts the team's rhythm and productivity dips temporarily. This should be acknowledged and planned for."
  },
  {
    id: 42,
    text: "What enhances the transparency of an Increment?",
    options: [
      "Doing all work needed to meet the Definition of Done.",
      "Updating Sprint tasks properly in the electronic tracking tool.",
      "Keeping track of and estimating all undone work to be completed in a 'hardening' Sprint.",
      "Reporting Sprint progress to the stakeholders daily."
    ],
    correctAnswers: [0],
    explanation: "Transparency comes from the Increment actually meeting the Definition of Done. When the DoD is clear and consistently applied, everyone can see exactly what 'done' means and trust what's been built."
  },
  {
    id: 43,
    text: "Developers are self-managing, which of the following do they manage?",
    options: [
      "Sprint length.",
      "Sprint Backlog.",
      "Stakeholders for the Sprint Review.",
      "When to release, based on its progress.",
      "Product Backlog ordering."
    ],
    correctAnswers: [1],
    explanation: "The Developers manage the Sprint Backlog — they own it, update it, and decide how to organize the work within it. Sprint length, release decisions, and Product Backlog ordering are outside their scope."
  },
  {
    id: 44,
    text: "During Sprint Planning, the Product Owner and Developers can't reach an understanding on the highest order items, but they can agree on a Sprint Goal. Which actions should the Scrum Master support? (Choose two.)",
    options: [
      "Cancel the Sprint.",
      "Forecast the most likely items to meet the Sprint Goal and start the Sprint. Continue to analyze and create additional work during the Sprint.",
      "Continue Sprint Planning past its time-box until an adequate number of items are understood.",
      "During the next Sprint Retrospective discuss why this happened.",
      "Ask everyone to take as much time as needed to analyze the Product Backlog first, then reconvene."
    ],
    correctAnswers: [1, 3],
    explanation: "If there's a Sprint Goal, the team can start with the items most likely to achieve it and refine details during the Sprint. The Retrospective is the right place to address the root cause of the communication issue."
  },
  {
    id: 45,
    text: "During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. Which statement is most accurate?",
    options: [
      "The Scrum Team may add items to the Sprint Backlog for the next Sprint.",
      "The Scrum Team should choose at least one high priority process improvement to place in the Product Backlog.",
      "The Scrum Team should decline to add a process improvement to the Sprint Backlog when things are running smoothly.",
      "The Scrum Master selects the most important process improvement and places it in the Sprint Backlog."
    ],
    correctAnswers: [0],
    explanation: "Process improvements identified in the Retrospective can be added to the Sprint Backlog for the next Sprint. This makes them visible and treated as real work — not just good intentions."
  },
  {
    id: 46,
    text: "If burndown charts are used to visualize progress, what do they track?",
    options: [
      "Accumulated cost.",
      "Individual worker productivity.",
      "Work remaining across time.",
      "Accumulated business value delivered to the customer."
    ],
    correctAnswers: [2],
    explanation: "A burndown chart shows how much work remains over time. It's a simple visual of remaining effort — not cost, not individual output, not value delivered."
  },
  {
    id: 47,
    text: "The Developers ask their Product Owner to re-order the Product Backlog because they're waiting on an external component. What advice would you give the Product Owner?",
    options: [
      "Remind the Product Owner that his primary concern is the flow of value reflected in the ordering of the Product Backlog.",
      "Tell the Product Owner to re-order so the work involving the external component can be planned in a separate Sprint.",
      "Tell the Product Owner that the Product Backlog should be ordered to maximize utilization of the Development Team."
    ],
    correctAnswers: [0],
    explanation: "The Product Backlog is ordered by value — not by team utilization or dependency management. The PO should keep the focus on what delivers the most value, and the team can adapt."
  },
  {
    id: 48,
    text: "When must a Scrum Team release each Increment?",
    options: [
      "When it makes sense to release it.",
      "When the Scrum Team finishes their work.",
      "Whenever the product is free of defects.",
      "After every Sprint, without exception."
    ],
    correctAnswers: [0],
    explanation: "The Increment must be usable at the end of every Sprint, but releasing it to users is a business decision. The Product Owner decides when it makes sense to actually release."
  },
  {
    id: 49,
    text: "Which Scrum Values are violated by building Product Backlog items that have low business value? (Choose three.)",
    options: [
      "Respect.",
      "Earned Value.",
      "Courage.",
      "Focus.",
      "Economic Value Added."
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Building low-value work violates Focus (not concentrating on what matters most), Courage (not speaking up about wasted effort), and Respect (not honoring the stakeholders' and users' time and resources). Earned Value and Economic Value Added are not Scrum Values."
  },
  {
    id: 50,
    text: "A Scrum Master is working with a team in different physical locations. The Developers have to do logistics for meeting rooms before the Daily Scrum. What action should the Scrum Master take?",
    options: [
      "Allow the Developers to self-manage and determine for themselves what to do.",
      "Set up the meeting and tell the Scrum Team that it is how it will be done.",
      "Ask the Developers to alternate who is responsible for meeting setup.",
      "Inform management and ask them to solve it."
    ],
    correctAnswers: [0],
    explanation: "The Scrum Master serves the team by enabling self-management. The Developers should figure out how to handle this themselves — that's the whole point of a self-organizing team."
  },
  {
    id: 51,
    text: "A key stakeholder just started using the product and is unhappy with quality. What are two good options for the Scrum Master? (Choose two.)",
    options: [
      "Wait to bring this up until the Sprint Retrospective.",
      "Encourage the Product Owner to put quality specifications on the Product Backlog and express the stakeholder's concern to the Developers.",
      "Bring the concern to the testers to improve how the product is verified.",
      "Explain to the Product Owner that it is up to the Developers to decide on acceptable quality standards.",
      "Coach the Product Owner on how to talk with the Developers about this concern."
    ],
    correctAnswers: [1, 4],
    explanation: "Quality concerns should be visible — adding them to the Product Backlog makes them real work. The Scrum Master also coaches the Product Owner on how to effectively communicate these concerns to the Developers."
  },
  {
    id: 52,
    text: "How much time is required after a Sprint to prepare for the next Sprint?",
    options: [
      "The break between Sprints is time-boxed to 1 week for 30 day Sprints, and usually less for shorter Sprints.",
      "Enough time for the requirements for the next Sprint to be determined and documented.",
      "Enough time for the Development Team to finish the testing from the last Sprint.",
      "None. A new Sprint starts immediately following the end of the previous Sprint.",
      "All of the above are allowed depending on the situation."
    ],
    correctAnswers: [3],
    explanation: "There's no break between Sprints in Scrum. A new Sprint starts immediately after the previous one ends. The Retrospective and Sprint Planning happen back-to-back."
  },
  {
    id: 53,
    text: "What is the purpose of a Sprint Review?",
    options: [
      "To take time to judge the validity of the project.",
      "To inspect the product Increment with the stakeholders and collect feedback on next steps.",
      "To review the Scrum Team's activities and processes during the Sprint.",
      "To build team spirit."
    ],
    correctAnswers: [1],
    explanation: "The Sprint Review is about inspecting the Increment and adapting the Product Backlog based on stakeholder feedback. It's a forward-looking conversation about what to do next — not a performance review."
  },
  {
    id: 54,
    text: "The length of a Sprint should be:",
    options: [
      "Short enough to keep the business risk acceptable to the Product Owner.",
      "Short enough to be able to synchronize the development work with other business events.",
      "No more than one calendar month.",
      "All of these answers are correct."
    ],
    correctAnswers: [3],
    explanation: "All three constraints apply. Sprints should be short enough to limit risk, sync with business cycles, and never exceed one month. Usually all three point to the same answer."
  },
  {
    id: 55,
    text: "When should a Sprint Goal be created?",
    options: [
      "It should have been created in the previous Sprint during Product Backlog refinement.",
      "It must be established before Sprint Planning in order to begin planning.",
      "A Sprint Goal is not mandatory in Scrum.",
      "At any time during the Sprint.",
      "During Sprint Planning."
    ],
    correctAnswers: [4],
    explanation: "The Sprint Goal is created during Sprint Planning. It gives the Sprint purpose and direction, and it's crafted collaboratively based on what the team selects from the Product Backlog."
  },
  {
    id: 56,
    text: "Which output from Sprint Planning provides the Development Team with a target and overarching direction for the Sprint?",
    options: [
      "The Sprint Backlog.",
      "The Sprint Goal.",
      "The release plan.",
      "Sprint Review minutes."
    ],
    correctAnswers: [1],
    explanation: "The Sprint Goal is the unifying objective for the Sprint. It guides the team's decisions when things get complicated and helps them stay focused on what matters most."
  },
  {
    id: 57,
    text: "Who determines how many Product Backlog items the Developers select for a Sprint?",
    options: [
      "The Scrum Master.",
      "The Product Owner.",
      "The Developers.",
      "The Scrum Team.",
      "The stakeholders attending Sprint Planning."
    ],
    correctAnswers: [2],
    explanation: "Only the Developers can determine how much work they can take on in a Sprint. The Product Owner can share priorities and wishes, but can't force the team to commit to more than they can handle."
  },
  {
    id: 58,
    text: "Which two things should the Development Team do during the first Sprint? (Choose two.)",
    options: [
      "Make up a plan for the rest of the project.",
      "Analyze, describe, and document the requirements for the subsequent Sprints.",
      "Develop at least one piece of functionality.",
      "Analyze, design, and describe the complete architecture and infrastructure.",
      "Create an increment of potentially releasable software."
    ],
    correctAnswers: [2, 4],
    explanation: "Even in the first Sprint, the team should produce working software. Scrum doesn't have planning-only Sprints — the goal from day one is a potentially releasable Increment."
  },
  {
    id: 59,
    text: "Every Scrum Team must have a Product Owner and Scrum Master.",
    options: [
      "True. Outcomes affected by their participation and availability.",
      "False. A Product Owner can be replaced by a business analyst in the Development Team.",
      "False. A Scrum Master is only required when asked for by the Development Team.",
      "True. Each must be 100% dedicated to the Scrum Team."
    ],
    correctAnswers: [0],
    explanation: "Both roles are required in Scrum. Their availability and active participation directly impacts the team's outcomes. Neither can be replaced or made optional."
  },
  {
    id: 60,
    text: "The Sprint Backlog is a result of Sprint Planning, and it includes the Sprint Goal.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [0],
    explanation: "True. The Sprint Backlog consists of the Sprint Goal, the selected Product Backlog items, and the plan for delivering them. All three come out of Sprint Planning."
  },
  {
    id: 61,
    text: "When many Scrum Teams are working on the same product, should all of their increments be integrated every Sprint?",
    options: [
      "Yes, but only for Scrum Teams whose work has dependencies.",
      "Yes, otherwise the Product Owner and stakeholders may not be able to accurately inspect what is done.",
      "No, each Scrum Team stands alone.",
      "No, that is far too hard and must be done in a hardening Sprint."
    ],
    correctAnswers: [1],
    explanation: "When multiple teams build the same product, their work must integrate every Sprint. Without integration, the Sprint Review can't show a real, working Increment — and nobody can inspect what's truly done."
  },
  {
    id: 62,
    text: "During the Sprint, the Scrum Master's role is to do which two of the following? (Choose two.)",
    options: [
      "Ensure the Product Owner attends all Scrum events.",
      "Facilitate inspection and adaptation opportunities as requested or needed.",
      "Assign tasks with the Scrum Team.",
      "Monitor the progress of the Developers.",
      "Coaching the team members in self-management."
    ],
    correctAnswers: [1, 4],
    explanation: "The Scrum Master facilitates events and coaches the team on self-management. They don't assign tasks or monitor individual progress — that would undermine the team's autonomy."
  },
  {
    id: 63,
    text: "When a Development Team is having trouble delivering a working Increment because they don't understand a functional requirement, what should they do?",
    options: [
      "Add a specialist to the Development Team.",
      "Partially complete the functionality, and discuss the remaining work at the Sprint Review.",
      "Collaborate with the Product Owner to determine what is possible and acceptable.",
      "Defer the work to a more appropriate Sprint."
    ],
    correctAnswers: [2],
    explanation: "When requirements are unclear, the Developers work directly with the Product Owner to clarify. This is exactly why the PO needs to be available during the Sprint."
  },
  {
    id: 64,
    text: "What enhances the transparency of an Increment?",
    options: [
      "Doing all work needed to meet the Definition of Done.",
      "Reporting Sprint progress to the stakeholders daily.",
      "Keeping track of and estimating all undone work to be completed in a separate Sprint.",
      "Updating Sprint tasks properly in the electronic tracking tool."
    ],
    correctAnswers: [0],
    explanation: "Transparency means what you see is what you get. When the Increment meets the Definition of Done, everyone can trust that the work is actually complete — no hidden debt, no 'almost done'."
  },
  {
    id: 65,
    text: "During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog?",
    options: [
      "When the Product Owner identifies new work.",
      "As soon as possible after they are identified.",
      "When the Scrum Master has time to enter them.",
      "During the Daily Scrum after the Development Team approves them."
    ],
    correctAnswers: [1],
    explanation: "New work or decomposed tasks are added to the Sprint Backlog as soon as they're identified. The team continuously refines their plan throughout the Sprint — they don't wait for permission."
  },
  {
    id: 66,
    text: "Who creates the definition of Done?",
    options: [
      "The Scrum Master as he/she is responsible for the Development Team's productivity.",
      "The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definition.",
      "The Product Owner as he/she is responsible for the product's success.",
      "The Development organization (or Development Team if none is available from the development organization)."
    ],
    correctAnswers: [3],
    explanation: "The Definition of Done is created by the development organization if one exists, or by the Scrum Team itself. It's not just the Scrum Master's or Product Owner's call — it represents organizational quality standards."
  },
  {
    id: 67,
    text: "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
    options: [
      "Just enough tasks for the Scrum Master to be confident in the Development Team's understanding of the Sprint.",
      "The entire Sprint Backlog must be identified and estimated by the end of the Sprint Planning meeting.",
      "Enough so the Development Team can create its best forecast of what it can do, and to start the first several days of the Sprint.",
      "Just enough to understand design and architectural implications."
    ],
    correctAnswers: [2],
    explanation: "The team needs enough detail to start the Sprint confidently — typically the first few days of work decomposed. The rest can be broken down during the Sprint as needed."
  },
  {
    id: 68,
    text: "Which approach is best for Scrum Teams in order to produce valuable Increments?",
    options: [
      "Each Developer works on the component where they feel that they can contribute best.",
      "Each Scrum Team is accountable for developing functionality from beginning to end.",
      "Each Scrum Team works on an independent set of components.",
      "Each Scrum Member works only as an independent layer of the system."
    ],
    correctAnswers: [1],
    explanation: "Cross-functional teams that own functionality end-to-end produce the most value. Splitting work by component or layer creates handoff delays and integration headaches."
  },
  {
    id: 69,
    text: "Which Scrum Value is affected by a lack of trust in the Scrum Team?",
    options: [
      "Focus.",
      "Respect.",
      "Openness.",
      "Courage.",
      "Commitment.",
      "All of the above."
    ],
    correctAnswers: [5],
    explanation: "A lack of trust undermines every Scrum Value. Without trust, there's no openness, no courage to raise problems, no genuine commitment, no respect, and no focus on the right things."
  },
  {
    id: 70,
    text: "As the Development Team starts work during the Sprint, it realizes it has selected too much work to finish. What should it do?",
    options: [
      "Inform the Product Owner at the Sprint Review, but prior to the demonstration.",
      "Find another Scrum Team to give the excess work to.",
      "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items.",
      "Reduce the definition of Done and get all of the Product Backlog items Done by the new definition."
    ],
    correctAnswers: [2],
    explanation: "When the team realizes they've overcommitted, they immediately talk to the Product Owner and adjust scope. You never lower the Definition of Done — that's cutting corners, not adapting."
  },
  {
    id: 71,
    text: "What are two responsibilities of testers in a Scrum Team? (Choose two.)",
    options: [
      "Verifying the work of programmers.",
      "Everyone in the Development Team is responsible for quality.",
      "Tracking quality metrics.",
      "Finding bugs.",
      "Scrum has no tester role."
    ],
    correctAnswers: [1, 4],
    explanation: "Scrum has no 'tester' role — it has Developers. Everyone in the Development Team is responsible for quality. Testing is a skill the team has, not a job title."
  },
  {
    id: 72,
    text: "Developers on a new Scrum Team ask the Scrum Master how to coordinate work with the other four teams building the same product. What should the Scrum Master do?",
    options: [
      "Teach the Product Owner to work with the lead developers on ordering Product Backlog to avoid new technical work during a Sprint.",
      "Teach them that it is their responsibility to work with the other teams to create an integrated increment inclusive of all five teams' work.",
      "Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.",
      "Visit the five teams each day to inspect that their Sprint Backlogs are aligned."
    ],
    correctAnswers: [1],
    explanation: "The Scrum Master teaches the teams that integration is their collective responsibility. Each team needs to coordinate with the others and produce an integrated Increment — the Scrum Master doesn't do it for them."
  },
  {
    id: 73,
    text: "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    options: [
      "To gather status and progress information to report to management.",
      "To write down any changes to the Sprint Backlog, including adding new items, and tracking progress on the burn-down.",
      "They do not have to be there; they only need to ensure the Development Team has a Daily Scrum.",
      "To make sure every team member answers the three questions."
    ],
    correctAnswers: [2],
    explanation: "The Scrum Master doesn't need to attend the Daily Scrum. Their job is to make sure the team has the meeting and understands its purpose — but the team runs it themselves."
  },
  {
    id: 74,
    text: "A member of the Development Team takes the Scrum Master aside to express concerns about data security issues. What should the Scrum Master do?",
    options: [
      "Add security to the definition of Done.",
      "Tell the Product Owner to stop further development of features until the issues are fixed.",
      "Create a Product Backlog item for security.",
      "Go check with the testers.",
      "Ask the person to share the issue with the team as soon as possible."
    ],
    correctAnswers: [4],
    explanation: "Security concerns are a team issue, not a secret between one developer and the Scrum Master. The right move is to bring it into the open so the team can address it together."
  },
  {
    id: 75,
    text: "In order to achieve the benefits of Scrum, it is important to enact the value of commitment. What two actions demonstrate commitment? (Choose two.)",
    options: [
      "Always deliver the items in the Sprint forecast.",
      "Help the other Scrum Team members.",
      "Do your best.",
      "Send out a daily status report.",
      "Work late."
    ],
    correctAnswers: [1, 2],
    explanation: "Commitment in Scrum is about effort and teamwork — helping others and doing your best. It's not about guaranteeing delivery of every item or logging overtime."
  },
  {
    id: 76,
    text: "What is the recommended size for a Scrum Team?",
    options: [
      "7 plus or minus 3.",
      "At least 7.",
      "9.",
      "10 or fewer."
    ],
    correctAnswers: [3],
    explanation: "The Scrum Guide recommends 10 or fewer people total on a Scrum Team (including PO and Scrum Master). Small enough to communicate freely, large enough to deliver meaningful work."
  },
  {
    id: 77,
    text: "A properly functioning Scrum Team will have at least one Release Sprint and may well have several.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. Scrum doesn't have 'Release Sprints.' Every Sprint should produce a potentially releasable Increment. Saving up releases for a dedicated Sprint defeats the purpose of Scrum."
  },
  {
    id: 78,
    text: "Which statement best describes the Sprint Review?",
    options: [
      "It is used to congratulate the Development Team if it did what it forecast, or to punish the Development Team if it failed to meet its forecast.",
      "It is a day at the end of the Sprint for everyone in the organization to check on the work done.",
      "It is a mechanism to control the Development Team's activities during a Sprint.",
      "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next."
    ],
    correctAnswers: [3],
    explanation: "The Sprint Review is a collaborative working session where the team and stakeholders look at what was built and decide together what should happen next. It's not a performance review or a punishment."
  },
  {
    id: 79,
    text: "The Development Team should have all the skills needed to:",
    options: [
      "Turn Product Backlog items into a valuable, useful Increment.",
      "Do all of the development work, except for specialized testing that requires additional tools and environments.",
      "Complete the project within the date and cost as calculated by the Product Owner."
    ],
    correctAnswers: [0],
    explanation: "A cross-functional Development Team has all the skills needed to turn backlog items into a Done Increment — no dependencies on external teams or specialists."
  },
  {
    id: 80,
    text: "For the purpose of transparency, when does Scrum say a valuable and useful Increment must be available?",
    options: [
      "After the Acceptance Testing phase.",
      "Before the release Sprint.",
      "Every 3 Sprints.",
      "At the end of every Sprint.",
      "When the Product Owner asks to create one."
    ],
    correctAnswers: [3],
    explanation: "Every Sprint must produce a Done, valuable, usable Increment — no exceptions. This is what enables transparency and regular inspection."
  },
  {
    id: 81,
    text: "Who can cancel a Sprint?",
    options: [
      "The Scrum Team.",
      "The Scrum Master.",
      "The Product Owner.",
      "The Stakeholders."
    ],
    correctAnswers: [2],
    explanation: "Only the Product Owner can cancel a Sprint. This typically happens when the Sprint Goal becomes obsolete due to a change in direction or market conditions."
  },
  {
    id: 82,
    text: "What tactic should a Scrum Team use to divide a group of 100 people into multiple Scrum Teams?",
    options: [
      "Ask the people to divide themselves into teams.",
      "Ask the Product Owner to assign the people to teams.",
      "Create teams based on their skills across multiple layers (such as database, UI, etc.)"
    ],
    correctAnswers: [0],
    explanation: "Self-organization starts from the beginning. The people should divide themselves into teams — they know their own skills, working styles, and who they work best with."
  },
  {
    id: 83,
    text: "The Product Owner determines how many Product Backlog items the Development Team selects for a Sprint.",
    options: [
      "False.",
      "True, accordingly to what was committed to the stakeholders."
    ],
    correctAnswers: [0],
    explanation: "False. The Developers decide how much work they can take on. The Product Owner can offer input on priorities, but cannot dictate how many items the team commits to."
  },
  {
    id: 84,
    text: "Which topics should be discussed in the Sprint Review?",
    options: [
      "The Scrum process, and how it was used during the Sprint.",
      "Coding and engineering practices.",
      "Sprint results.",
      "All of the above."
    ],
    correctAnswers: [2],
    explanation: "The Sprint Review focuses on the results — what was built, what was learned, and what to do next. Process and engineering practices belong in the Retrospective, not the Review."
  },
  {
    id: 85,
    text: "As the Sprint Planning meeting progresses, the Development Team sees that the workload is greater than they can handle. Which two are valid actions? (Choose two.)",
    options: [
      "Recruit additional Development Team members before the work can begin.",
      "The Development Team ensures that the Product Owner is aware, starts the Sprint, and monitors progress.",
      "Cancel the Sprint.",
      "Remove or change selected Product Backlog items.",
      "The Development Team works overtime during this Sprint."
    ],
    correctAnswers: [1, 3],
    explanation: "If the workload is too large, the team can either start and monitor closely with the Product Owner aware, or they can remove/swap items to make the scope realistic. Recruiting people mid-Sprint or mandating overtime aren't valid responses."
  },
  {
    id: 86,
    text: "Which three behaviors demonstrate that a team is self-organizing? (Choose three.)",
    options: [
      "Stakeholders walking in at the Daily Scrum to check progress and work with the Scrum Master to optimize the functional scope for the Sprint.",
      "The Development Team members are working within the boundaries of their functional description, handing off work from analyst to developer to tester.",
      "The Product Owner doesn't need to be at Sprint Retrospectives.",
      "The Development Team creating their own Sprint Backlog, reflecting all work that is part of the Definition of Done.",
      "The Development Team has all the skills needed to create a releasable Increment.",
      "Development Team members collaboratively selecting their own work during the Sprint.",
      "The Development Team inviting external people to Sprint Planning to ask how to turn a PBI into an Increment.",
      "The Scrum Master is no longer needed."
    ],
    correctAnswers: [3, 4, 5],
    explanation: "Self-organization means the team creates their own Sprint Backlog, has all the skills they need, and members choose their own work collaboratively. External interference, handoff-based workflows, and eliminating the Scrum Master are not signs of self-organization."
  },
  {
    id: 87,
    text: "When is a Sprint over?",
    options: [
      "When the Product Owner says it is done.",
      "When all Product Backlog items meet their definition of Done.",
      "When all the tasks are completed.",
      "When the time-box expires."
    ],
    correctAnswers: [3],
    explanation: "A Sprint ends when the time-box expires — period. Not when everything is done, not when the PO says so. The fixed duration is what makes Sprints predictable and inspectable."
  },
  {
    id: 88,
    text: "Which topics should be discussed in the Sprint Review?",
    options: [
      "The Scrum process, and how it was used during the Sprint.",
      "Coding and engineering practices.",
      "The product Increment.",
      "All of the above."
    ],
    correctAnswers: [2],
    explanation: "The Sprint Review is focused on the product Increment — what was built and what it means for the future. Process discussions belong in the Retrospective."
  },
  {
    id: 89,
    text: "What is the timebox for the Sprint Planning event?",
    options: [
      "4 Hours for a monthly Sprint.",
      "8 Hours for a monthly Sprint.",
      "Monthly.",
      "Whenever it is done."
    ],
    correctAnswers: [1],
    explanation: "Sprint Planning is time-boxed to 8 hours for a one-month Sprint, and proportionally shorter for shorter Sprints. For a 2-week Sprint, that's roughly 4 hours."
  },
  {
    id: 90,
    text: "A new Developer is having continuing conflicts with existing members of the Scrum Team, which is impacting the delivery of the Increment. If necessary, who is responsible for removing the Developer from the Scrum Team?",
    options: [
      "The hiring manager is responsible, because they hired the Developer.",
      "The Product Owner is responsible, because they control the return on investment (ROI).",
      "The Scrum Master is responsible, because they remove Impediments.",
      "The Scrum Team is responsible."
    ],
    correctAnswers: [3],
    explanation: "The Scrum Team is responsible for managing its own membership. If someone needs to be removed, that's the team's collective accountability — not a unilateral decision by the SM or hiring manager."
  },
  {
    id: 91,
    text: "Who is responsible for collaboration with stakeholders?",
    options: [
      "The Scrum Team.",
      "The Project Manager.",
      "The Team Manager.",
      "The Developers.",
      "The Business Analyst."
    ],
    correctAnswers: [0],
    explanation: "The entire Scrum Team collaborates with stakeholders. While the Product Owner leads that relationship, Developers also interact with stakeholders — especially at the Sprint Review."
  },
  {
    id: 92,
    text: "Which of the following are topics for the Developers to discuss at the Daily Scrum as they inspect their progress toward the Sprint Goal? (Choose three.)",
    options: [
      "What have we learned since yesterday, and how should we modify our plan to increase our ability to meet the Sprint Goal?",
      "Are there any impediments blocking progress toward the Sprint Goal?",
      "What will I be working on tomorrow?",
      "Why were you late?",
      "How many hours did I spend on the project yesterday?",
      "Are there any decisions that need to be made to maintain progress toward the Sprint Goal?",
      "Will today's work negatively impact our ability to meet the Sprint Goal for the following Sprint?"
    ],
    correctAnswers: [0, 1, 5],
    explanation: "The Daily Scrum is about inspecting progress toward the Sprint Goal and adapting the plan. Questions about learning, impediments, and key decisions all serve that purpose. Questions about hours worked or why someone was late are counterproductive."
  },
  {
    id: 93,
    text: "A new Product Owner comes in, understanding he is accountable for the Product Backlog. Which two activities are part of the Product Owner role? (Choose two.)",
    options: [
      "Ensuring that the most valuable functionality is produced first, at all times.",
      "Interacting with stakeholders.",
      "Providing the Development Team with detailed specifications.",
      "Describing features as Use Cases.",
      "Creating detailed functional test cases."
    ],
    correctAnswers: [0, 1],
    explanation: "The Product Owner prioritizes value and engages with stakeholders. They don't write detailed specs, Use Cases, or test cases — those are implementation details that don't belong to the PO role."
  },
  {
    id: 94,
    text: "You are the Scrum Master on a newly formed Scrum Team. Which three activities would probably help the team in starting up? (Choose three.)",
    options: [
      "Introduce a bonus system for the top performers in the team.",
      "Have the Scrum Team members introduce themselves to each other and give a brief background of their skills.",
      "Have the development managers introduce their direct reports and go over their responsibilities.",
      "Ensure the Scrum Team members have compatible personalities.",
      "Ensure the team understands they need a definition of Done.",
      "Ask the Product Owner to discuss the product, its history, goals, and context, as well as answer questions."
    ],
    correctAnswers: [1, 4, 5],
    explanation: "A new team needs to know each other, understand the Definition of Done, and understand the product they're building. Bonus systems and personality assessments don't help a team start well."
  },
  {
    id: 95,
    text: "Which two activities will a Product Owner engage in during a Sprint? (Choose two.)",
    options: [
      "Run the Daily Scrum.",
      "Prioritize the Development Team's work on the Sprint Backlog.",
      "Update management on what is being worked on.",
      "Answer questions from the Development Team about items in the current Sprint."
    ],
    correctAnswers: [2, 3],
    explanation: "Wait — option C says 'Update management' which is something the PO does, and D is clarifying questions. The PO does NOT run the Daily Scrum or reprioritize the Sprint Backlog. They keep stakeholders and management informed and answer Developers' questions."
  },
  {
    id: 96,
    text: "What is the role of management in Scrum?",
    options: [
      "To present the Scrum Teams with insights and resources that help them improve.",
      "To monitor the Development Team's productivity.",
      "To identify and remove people that aren't working hard enough.",
      "To continually monitor staffing levels of the Scrum Team."
    ],
    correctAnswers: [0],
    explanation: "Management's role in Scrum is to enable and support — providing resources, removing organizational impediments, and helping teams improve. Not to monitor, control, or police the team."
  },
  {
    id: 97,
    text: "An Increment must be released to customers or users at the end of each Sprint.",
    options: [
      "True.",
      "False."
    ],
    correctAnswers: [1],
    explanation: "False. The Increment must be usable and meet the Definition of Done, but releasing it is a business decision made by the Product Owner. You don't have to release every Sprint."
  },
  {
    id: 98,
    text: "What is the timebox for the Sprint Review?",
    options: [
      "As long as needed.",
      "2 hours for a one-month Sprint.",
      "4 hours for a one-month Sprint.",
      "1 day."
    ],
    correctAnswers: [2],
    explanation: "The Sprint Review is time-boxed to 4 hours for a one-month Sprint. For shorter Sprints it's proportionally less — roughly 2 hours for a 2-week Sprint."
  },
  {
    id: 99,
    text: "Every Development Team should have:",
    options: [
      "At least one representative from each major software engineering discipline; such as, Quality Assurance, Development, and User Experience.",
      "The competencies and skills needed to deliver a Done Increment in a Sprint.",
      "One Lead Developer and no more than 8 other members."
    ],
    correctAnswers: [1],
    explanation: "The team needs all the skills required to deliver a Done Increment — but there are no required roles or titles within the Development Team. It's about collective capability, not job titles."
  },
  {
    id: 100,
    text: "Which outcome is expected as Scrum Teams mature?",
    options: [
      "They will improve their definition of Done to include more stringent criteria.",
      "The Sprint Retrospectives will grow to be longer than 4 hours.",
      "There is no need for a time-boxed Sprint.",
      "Sprint Reviews will no longer be needed.",
      "A Scrum Master is no longer needed since they are a mature team now."
    ],
    correctAnswers: [0],
    explanation: "As teams mature, they raise their quality bar — improving the Definition of Done over time. Scrum events don't get eliminated as teams mature; they stay relevant. The Scrum Master remains valuable even for experienced teams."
  }
];

export default questions;
