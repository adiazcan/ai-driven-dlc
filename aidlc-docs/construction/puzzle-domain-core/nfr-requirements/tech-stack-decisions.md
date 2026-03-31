# Tech Stack Decisions - puzzle-domain-core

## Decision Summary
The Puzzle Domain Core should be implemented as a pure TypeScript domain module inside the frontend codebase.

## Primary Decisions

### TS-01: Pure TypeScript implementation
**Decision**: Implement the domain core in plain TypeScript modules without framework-specific runtime dependencies.

**Rationale**:
- Keeps puzzle logic portable and easy to test
- Avoids coupling rule evaluation to React rendering concerns
- Supports deterministic unit tests with minimal setup

### TS-02: Functional-style state transitions
**Decision**: Prefer pure functions that accept a state and action and return a result object rather than mutable class-heavy domain behavior.

**Rationale**:
- Matches the deterministic puzzle rules well
- Simplifies testing and state inspection
- Reduces accidental side effects during move handling

### TS-03: Explicit discriminated result types
**Decision**: Represent move results and outcomes with explicit typed variants instead of loose objects or stringly typed status handling.

**Rationale**:
- Improves downstream safety for UI and persistence integration
- Makes invalid and failed result handling clearer
- Keeps reason-code handling structured for user messaging

### TS-04: No external state library in the domain unit
**Decision**: Keep the domain core free of global state libraries and React hooks.

**Rationale**:
- Preserves separation of concerns
- Prevents UI state management from contaminating business logic
- Keeps the unit reusable by solver and persistence layers

### TS-05: Native test-runner compatibility
**Decision**: Design the module so it can be tested cleanly with the frontend project's chosen test runner, expected to be Vitest in a Vite-based setup.

**Rationale**:
- Aligns with the approved React + Vite + TypeScript project direction
- Supports low-friction automated verification
- Encourages colocated or domain-focused test coverage

## Rejected Alternatives

### RA-01: Embedding rule logic in React components
**Rejected Because**:
- Would duplicate or scatter domain logic
- Would make puzzle validation harder to test and maintain
- Would blur the approved unit boundaries

### RA-02: Using backend APIs for move validation
**Rejected Because**:
- The approved architecture is a static SPA with in-browser logic
- Network round trips would hurt responsiveness for a simple deterministic puzzle
- Backend infrastructure is intentionally out of scope for v1

## Implementation Guidance
- Place the unit under a domain-focused source area such as `src/domain/puzzle/`
- Export small, explicit functions for initialization, move evaluation, outcome derivation, and available-move calculation
- Use shared type definitions that can be reused by solver, persistence, and UI orchestration layers without creating circular dependencies
