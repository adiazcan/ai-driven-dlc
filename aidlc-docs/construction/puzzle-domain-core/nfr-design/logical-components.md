# Logical Components - puzzle-domain-core

## Overview
The Puzzle Domain Core should remain small and internally modular. The following logical components satisfy the unit's NFR profile without introducing unnecessary infrastructure or abstraction.

## 1. State Factory
**Purpose**: Produce canonical puzzle states.

**Responsibilities**:
- Create the initial puzzle state
- Provide the reset target state
- Normalize state construction for tests and future restore fallback flows

**NFR Contribution**:
- Supports reliability through canonical reset behavior
- Improves maintainability by centralizing default-state creation

## 2. Move Validator
**Purpose**: Check whether a requested crossing satisfies all movement preconditions.

**Responsibilities**:
- Confirm the farmer is always part of the crossing
- Confirm the selected passenger is valid and colocated
- Confirm the boat capacity rule
- Reject impossible transitions before mutation

**NFR Contribution**:
- Supports fail-closed invalid action handling
- Keeps rule validation deterministic and explicit

## 3. State Transition Calculator
**Purpose**: Apply valid crossings to produce the next puzzle state.

**Responsibilities**:
- Move the farmer and optional passenger across the river
- Preserve invariants across accepted transitions
- Return a fresh result state without mutating inputs

**NFR Contribution**:
- Supports pure-function behavior
- Keeps performance predictable through bounded local computation

## 4. Outcome Evaluator
**Purpose**: Determine whether a state is in progress, failed, or solved.

**Responsibilities**:
- Detect fox-chicken and chicken-grain failure conditions
- Detect solved-state completion
- Provide structured outcome classifications and reasons

**NFR Contribution**:
- Preserves correctness and deterministic evaluation
- Produces explanation-ready outputs for UI integration

## 5. Available Move Deriver
**Purpose**: Enumerate legal next actions from the current state.

**Responsibilities**:
- Generate legal passenger combinations for the current bank
- Reuse movement-rule logic rather than reimplementing it
- Provide guidance-ready outputs for downstream layers

**NFR Contribution**:
- Supports usability without leaking rules into UI code
- Keeps move guidance aligned with the true domain semantics

## 6. Domain Result Mapper
**Purpose**: Standardize accepted and rejected move-result structures.

**Responsibilities**:
- Shape accepted results with next state and outcome
- Shape rejected results with unchanged state and reason code
- Keep result contracts explicit and consistent

**NFR Contribution**:
- Improves maintainability and integration safety
- Avoids exception-driven control flow for normal invalid actions

## Internal Composition
- `State Factory` feeds `Move Validator` and reset flows
- `Move Validator` gates the `State Transition Calculator`
- `State Transition Calculator` feeds the `Outcome Evaluator`
- `Available Move Deriver` works from the same state contract and rule base
- `Domain Result Mapper` standardizes outputs to all callers

## Boundary Constraints
- No logical component depends on React or browser-specific APIs
- No logical component performs persistence directly
- No logical component contains user-facing copy
- All components operate on shared typed domain contracts
