# Unit of Work Definitions

## Decomposition Summary
The River Crossing Web Application is organized as a single deployable frontend application with five logical units of work. These units preserve separation of concerns while remaining practical for one React + TypeScript codebase.

## Code Organization Strategy
- Keep one deployable SPA in the workspace root
- Separate concerns by logical module boundaries rather than independent services
- Organize source to align with the approved application design:
  - `src/components/` for App Shell, Puzzle Board, Guidance Panel, Control Bar, and Status Banner
  - `src/app/` or `src/state/` for App State Coordinator, app commands, and view-model mapping
  - `src/domain/puzzle/` for puzzle state modeling and rule evaluation
  - `src/domain/solver/` for guided solution sequencing and explanation structures
  - `src/persistence/` for browser-local session storage
  - `src/test/` or colocated `*.test.ts(x)` files for unit and UI verification

## Unit 1: Puzzle Domain Core
**Purpose**: Provide the domain backbone for manual gameplay.

**Responsibilities**:
- Represent the puzzle state and its legal transitions
- Accept move requests and produce move results
- Detect solved and failed puzzle outcomes
- Expose available-move information for UI guidance

**Primary Design Alignment**:
- `Puzzle Engine`
- Parts of `Game Orchestration Service`

**Primary Output Areas**:
- Domain types for puzzle entities and state
- Rule evaluation helpers
- Outcome derivation logic

## Unit 2: Guided Solver Flow
**Purpose**: Provide the guided-solver experience as a first-class learning capability.

**Responsibilities**:
- Produce the canonical solution sequence
- Translate solver steps into explanation-ready content
- Support sequential navigation through solver guidance
- Align guidance state with puzzle-state context

**Primary Design Alignment**:
- `Solver Engine`
- `Guided Solver Service`
- Guidance-focused coordinator behavior

**Primary Output Areas**:
- Solver sequence generation
- Guidance step modeling
- Explanation view preparation

## Unit 3: Application UI and Interaction Shell
**Purpose**: Deliver the user-facing SPA structure and interaction flow.

**Responsibilities**:
- Render the board, controls, status, and guidance regions
- Route user intents through the application coordinator
- Support manual-play and guided-solver modes
- Maintain responsive and understandable layouts across devices

**Primary Design Alignment**:
- `App Shell`
- `Puzzle Board`
- `Guidance Panel`
- `Control Bar`
- `Status Banner`
- `App State Coordinator`
- `View Model Mapping Service`

**Primary Output Areas**:
- React components and page composition
- Interaction handlers and command dispatch
- View-model rendering logic

## Unit 4: Persistence and Session Continuity
**Purpose**: Preserve lightweight user continuity inside the browser.

**Responsibilities**:
- Save puzzle progress and lightweight preferences locally
- Restore saved progress at startup when valid
- Support reset and state-clearing flows
- Keep persistence isolated from UI details

**Primary Design Alignment**:
- `Persistence Gateway`
- `Session Restore Service`
- Persistence-related coordinator integration

**Primary Output Areas**:
- Local storage adapters
- Serialization and hydration helpers
- Safe fallback behavior for missing or stale saved data

## Unit 5: Verification and Quality Safeguards
**Purpose**: Ensure the implementation remains correct, maintainable, and ready for build/test verification.

**Responsibilities**:
- Validate puzzle rules and solver correctness through automated tests
- Cover critical UI-visible behaviors with focused tests
- Support confidence in reset, resume, and guided-flow behavior
- Provide a test foundation for build-and-test stage validation

**Primary Design Alignment**:
- Requirements maintainability goals
- Acceptance criteria across all user stories

**Primary Output Areas**:
- Domain tests
- UI/component integration tests
- Test fixtures and helper utilities

## Unit Boundary Validation
- Puzzle rules remain independent of React components
- Guided solving remains independent of local persistence concerns
- Persistence remains isolated behind dedicated gateway logic
- UI shell orchestration depends on domain and persistence units, but domain units do not depend on UI
- Verification spans all units but does not own business behavior itself

## Readiness for Construction
These units are suitable for downstream functional and NFR design because they cleanly separate puzzle behavior, solver behavior, UI composition, persistence, and verification responsibilities.
