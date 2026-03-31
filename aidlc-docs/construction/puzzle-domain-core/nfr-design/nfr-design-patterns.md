# NFR Design Patterns - puzzle-domain-core

## Overview
This design translates the approved non-functional requirements into concrete patterns for the Puzzle Domain Core unit.

## Performance Patterns

### Pattern 1: Small immutable state objects
Use compact puzzle-state structures with explicit bank assignments so each move evaluation works on a small, predictable data shape.

**Why it fits**:
- Supports immediate in-browser computation
- Makes state inspection straightforward in tests
- Avoids deep object graphs and unnecessary traversal

### Pattern 2: Single-pass evaluation flow
Evaluate a move through a bounded sequence:
1. Validate preconditions
2. Apply the transition
3. Derive outcome
4. Derive available moves if needed

**Why it fits**:
- Keeps computation predictable
- Reduces repeated logic and accidental recomputation
- Aligns with the approved deterministic workflow

## Reliability Patterns

### Pattern 3: Pure-function domain operations
Implement initialization, move evaluation, outcome derivation, and move derivation as pure functions.

**Why it fits**:
- Guarantees deterministic behavior for equal inputs
- Makes invalid-action rejection easier to reason about
- Prevents hidden side effects that could corrupt puzzle state

### Pattern 4: Fail-closed result modeling
Return explicit accepted/rejected results instead of mutating state optimistically or relying on thrown exceptions for expected invalid actions.

**Why it fits**:
- Preserves state integrity on bad input
- Produces structured outputs for downstream UI feedback
- Keeps the domain logic safe even if callers submit invalid actions

### Pattern 5: Canonical-state reset
Use a single canonical initialization function as the source of truth for both initial load and reset behavior.

**Why it fits**:
- Prevents drift between start and reset states
- Simplifies testing of reset expectations
- Supports consistent restore fallback behavior in later units

## Maintainability Patterns

### Pattern 6: Typed domain contracts
Use explicit domain types for puzzle state, move action, result status, outcome, and reason codes.

**Why it fits**:
- Makes integration safer for solver, persistence, and UI layers
- Prevents stringly typed branching
- Improves discoverability of domain behavior

### Pattern 7: Centralized rule engine boundary
Keep movement rules, failure checks, solved-state checks, and available-move derivation inside the same domain-focused module boundary.

**Why it fits**:
- Avoids rule duplication across multiple callers
- Preserves one source of truth for puzzle semantics
- Simplifies future extensions of the classic puzzle

### Pattern 8: Explanation-ready reason-code mapping
Represent invalid and failed outcomes with structured reason categories rather than preformatted UI text.

**Why it fits**:
- Keeps the domain unit presentation-agnostic
- Allows UI layers to render learner-friendly messages
- Supports consistent behavior across manual and guided modes

## Availability and Scalability Patterns

### Pattern 9: Fully local execution
Keep all domain evaluation synchronous and local to the browser runtime with no network dependency.

**Why it fits**:
- Supports offline-capable behavior
- Removes latency and reliability dependency on external services
- Matches the approved static SPA architecture

### Pattern 10: Single-session simplicity
Optimize for correctness and clarity over distributed or multi-user concerns.

**Why it fits**:
- The puzzle is inherently lightweight
- No concurrency or shared-session complexity is needed in v1
- Keeps the domain unit focused on the actual game rules

## Testability Pattern

### Pattern 11: Domain-first test seam
Design the public API around small exported functions that can be tested without UI rendering or browser-specific setup.

**Why it fits**:
- Encourages robust automated tests early
- Makes regression detection straightforward
- Supports build-and-test verification later in the workflow
