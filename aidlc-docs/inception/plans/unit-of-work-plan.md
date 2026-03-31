# Unit of Work Plan

## Objective
Decompose the River Crossing Web Application into manageable implementation units that preserve clear responsibilities while keeping the first release practical for a single frontend codebase.

## Decomposition Approach
- Use a **single-application, multi-module** decomposition because the project is a greenfield static SPA with no backend services
- Treat each unit of work as a logical module inside one React + TypeScript application
- Group stories by domain responsibility so puzzle logic, solver guidance, UI orchestration, and persistence/testing can be developed with clear boundaries

## Clarification Assessment
The requirements, user stories, application design, and execution plan provide enough detail to proceed without additional decomposition questions.

## Planned Units

### Unit 1: Puzzle Domain Core
- Covers puzzle-state modeling, move validation entry points, solved/failed outcome detection, and available-move derivation
- Supports stories: `US-01`, `US-03`, `US-04`, `US-05`

### Unit 2: Guided Solver Flow
- Covers canonical solution sequencing, explanation-ready solver steps, and guided navigation support
- Supports stories: `US-06`, `US-07`

### Unit 3: Application UI and Interaction Shell
- Covers top-level app composition, board rendering, control surfaces, status messaging, mode switching, and responsive layout behavior
- Supports stories: `US-01`, `US-02`, `US-03`, `US-05`, `US-06`, `US-08`, `US-10`

### Unit 4: Persistence and Session Continuity
- Covers browser-local save/load behavior for progress and lightweight preferences, plus restore/reset integration
- Supports stories: `US-08`, `US-09`

### Unit 5: Verification and Quality Safeguards
- Covers automated test structure for core puzzle logic and critical user-visible flows
- Supports requirements for maintainability and story acceptance validation across all units

## Code Organization Strategy
- Keep one deployable frontend application in the workspace root
- Organize source by logical modules rather than separate deployable services
- Expected top-level code areas:
  - `src/components/` for presentation components
  - `src/state/` or `src/app/` for coordination and view-model logic
  - `src/domain/` for puzzle and solver logic
  - `src/persistence/` for local storage integration
  - `src/test/` or colocated tests for unit and UI verification

## Execution Checklist
- [x] Review requirements, stories, application design, and workflow plan
- [x] Select a single-application, multi-module decomposition strategy
- [x] Define implementation units with clear boundaries and responsibilities
- [x] Ensure all stories and key requirements are represented across the unit set
- [x] Generate `aidlc-docs/inception/application-design/unit-of-work.md` with unit definitions and responsibilities
- [x] Generate `aidlc-docs/inception/application-design/unit-of-work-dependency.md` with dependency matrix
- [x] Generate `aidlc-docs/inception/application-design/unit-of-work-story-map.md` mapping stories to units
- [x] Document code organization strategy in `unit-of-work.md`
- [x] Validate unit boundaries and dependencies
- [x] Verify readiness for construction-phase design stages
