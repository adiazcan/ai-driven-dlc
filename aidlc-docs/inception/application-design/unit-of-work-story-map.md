# Unit of Work Story Map

## Story-to-Unit Coverage

| Story / Requirement Area | Assigned Unit(s) | Why It Belongs There |
|---|---|---|
| US-01 View the puzzle state clearly | Unit 1, Unit 3 | Puzzle state originates in the domain core and is rendered by the UI shell |
| US-02 Understand the rules and available actions | Unit 3 | Rule explanations and affordances are primarily surfaced through UI composition and guidance display |
| US-03 Make valid moves manually | Unit 1, Unit 3 | Domain logic validates moves while the UI shell captures and displays them |
| US-04 Understand failure states | Unit 1, Unit 3 | Failure detection belongs to the domain core; messaging belongs to the UI shell |
| US-05 Know when the puzzle is solved | Unit 1, Unit 3 | Solved-state detection is domain logic; success feedback is presentation behavior |
| US-06 Access a guided solution journey | Unit 2, Unit 3 | Solver behavior is domain-adjacent guidance logic exposed through the UI shell |
| US-07 Step through the recommended solution | Unit 2, Unit 3 | Guided sequencing belongs to the solver flow; navigation and display belong to the UI shell |
| US-08 Reset the puzzle quickly | Unit 1, Unit 3, Unit 4 | Reset touches domain defaults, UI flow, and saved-session clearing/realignment |
| US-09 Resume saved progress and preferences | Unit 4, Unit 3 | Persistence restores state while the UI shell rehydrates and presents it |
| US-10 Use the app on desktop and mobile | Unit 3 | Responsive layout and accessible interaction are primarily UI-shell concerns |
| Maintainability and automated tests | Unit 5 | Verification ensures logic and user-facing flows stay trustworthy |

## Coverage by Unit

### Unit 1: Puzzle Domain Core
- Directly supports: `US-01`, `US-03`, `US-04`, `US-05`, `US-08`
- Requirement emphasis: rule correctness, state transitions, outcome detection

### Unit 2: Guided Solver Flow
- Directly supports: `US-06`, `US-07`
- Requirement emphasis: canonical solution sequencing and explanation-friendly guidance

### Unit 3: Application UI and Interaction Shell
- Directly supports: `US-01`, `US-02`, `US-03`, `US-04`, `US-05`, `US-06`, `US-07`, `US-08`, `US-09`, `US-10`
- Requirement emphasis: usability, responsiveness, visible state, controls, messaging, and interaction orchestration

### Unit 4: Persistence and Session Continuity
- Directly supports: `US-08`, `US-09`
- Requirement emphasis: local save/restore behavior and stable reset/resume flows

### Unit 5: Verification and Quality Safeguards
- Cross-cuts all units
- Requirement emphasis: maintainability, automated validation, and readiness for build/test verification

## Validation Summary
- Every user story is assigned to at least one unit
- Integration-heavy stories intentionally map to more than one unit
- No unit exists without a clear relationship to approved stories or requirements
