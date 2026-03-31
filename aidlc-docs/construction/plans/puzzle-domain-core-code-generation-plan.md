# Code Generation Plan - puzzle-domain-core

## Unit Context
- **Unit**: `puzzle-domain-core`
- **Stories Implemented**: `US-01`, `US-03`, `US-04`, `US-05`, `US-08`
- **Dependencies**: None at runtime for this unit; downstream consumers include guided solver, persistence, and UI orchestration
- **Project Type**: Greenfield multi-unit monolith in a single frontend SPA
- **Workspace Root**: `C:\Users\adiaz\.copilot\worktrees\ai-driven-dlc\adiazcan\boggy-ollie`

## Code Location
- **Application Code**: workspace root only
- **Target Structure**:
  - `package.json`
  - `vite.config.ts`
  - `tsconfig*.json`
  - `src/domain/puzzle/`
  - `src/domain/puzzle/__tests__/` or colocated `*.test.ts`

## Expected Interfaces and Contracts
- Domain types for:
  - river banks
  - cargo entities
  - puzzle state
  - move action
  - move result
  - puzzle outcome
  - move option
  - outcome reason
- Public domain functions for:
  - initialization/reset
  - move evaluation
  - outcome derivation
  - available-move derivation

## Step-by-Step Plan

### Step 1: Project structure setup
- [x] Create the greenfield frontend project scaffold for React + Vite + TypeScript at the workspace root
- [x] Ensure test tooling is available and compatible with domain-unit testing
- [x] Verify the root project structure supports the approved module layout

### Step 2: Domain contract generation
- [x] Create `src/domain/puzzle/types.ts` for the typed puzzle-domain contracts
- [x] Encode discriminated result types and structured reason categories
- [x] Keep contracts free of UI or persistence concerns

### Step 3: Canonical state and reset generation
- [x] Create `src/domain/puzzle/state.ts` for canonical initialization and reset helpers
- [x] Implement the source-of-truth initial state for farmer, fox, chicken, grain, and boat placement
- [x] Ensure reset behavior reuses canonical state creation rather than duplicating logic

### Step 4: Move evaluation generation
- [x] Create `src/domain/puzzle/moves.ts` for move validation and transition handling
- [x] Implement farmer-required crossing, boat capacity, shared-bank validation, and fail-closed rejection
- [x] Return typed accepted/rejected results without mutating input state

### Step 5: Outcome and guidance support generation
- [x] Create `src/domain/puzzle/outcomes.ts` for solved-state and failed-state evaluation
- [x] Create `src/domain/puzzle/options.ts` for legal move derivation
- [x] Ensure available-move generation shares domain rule logic rather than reimplementing it separately

### Step 6: Public domain surface generation
- [x] Create `src/domain/puzzle/index.ts` to expose the approved public API
- [x] Export only the functions and types needed by downstream solver, persistence, and UI units
- [x] Keep module boundaries small and explicit

### Step 7: Domain unit testing
- [x] Create domain tests covering initialization, reset, valid moves, invalid moves, failed states, solved states, and available moves
- [x] Verify deterministic outputs for repeated identical inputs
- [x] Verify rejected moves do not mutate current state

### Step 8: Unit summary documentation
- [x] Create `aidlc-docs/construction/puzzle-domain-core/code/code-summary.md`
- [x] Summarize created application files, implemented contracts, and test coverage for this unit

## Story Traceability
- [x] `US-01`: supported by state representation and available-move derivation
- [x] `US-03`: supported by move validation and transition logic
- [x] `US-04`: supported by failure detection and reason-code outputs
- [x] `US-05`: supported by solved-state evaluation
- [x] `US-08`: supported by canonical reset behavior

## Single Source of Truth
This plan is the single source of truth for code generation of the `puzzle-domain-core` unit. Generation should follow the numbered steps in sequence and update checkboxes immediately as work is completed.
