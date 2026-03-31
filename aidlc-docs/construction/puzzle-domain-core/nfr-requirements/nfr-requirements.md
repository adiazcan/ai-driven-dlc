# NFR Requirements - puzzle-domain-core

## Scope
This assessment covers the Puzzle Domain Core unit, which is responsible for puzzle-state modeling, move evaluation, outcome derivation, reset behavior, and available-move calculation.

## Performance Requirements

### NFR-P-01: Immediate move evaluation
Move evaluation for the classic river crossing puzzle must complete fast enough to feel immediate in the browser during normal interaction.

### NFR-P-02: Lightweight derived-state computation
Outcome checks and available-move derivation must remain lightweight enough to run after each accepted move without visible lag.

### NFR-P-03: No unnecessary recomputation
The unit should avoid redundant recalculation beyond what is required to validate the move and derive the resulting outcome.

## Reliability Requirements

### NFR-R-01: Deterministic domain behavior
Given the same puzzle state and move action, the unit must always produce the same result.

### NFR-R-02: Fail-closed invalid actions
Invalid move requests must be rejected without mutating the current puzzle state.

### NFR-R-03: Canonical reset consistency
Reset behavior must always return the exact canonical initial state.

### NFR-R-04: Outcome correctness
Solved, failed, and in-progress states must be derived from the actual arrangement of entities, not from UI-side assumptions.

## Maintainability Requirements

### NFR-M-01: UI-independent domain logic
The puzzle domain must remain independent from React components, browser APIs, and view-model formatting concerns.

### NFR-M-02: Typed domain contracts
The unit must use explicit types for puzzle state, move actions, move results, and outcome reasons to keep future integration safe.

### NFR-M-03: Test-first suitability
The unit design must remain easy to exercise through isolated automated tests without mounting UI components.

### NFR-M-04: Rule centralization
All move-validation and outcome rules must be centralized in the domain unit rather than duplicated across calling layers.

## Usability-Supporting Requirements

### NFR-U-01: Explanation-ready reason codes
Invalid and failed outcomes must provide structured reason information that downstream UI layers can translate into clear user-facing feedback.

### NFR-U-02: Available-move support
The unit must expose legal move options or equivalent derivation support so the UI can guide user choices without reimplementing domain rules.

## Security and Safety Requirements

### NFR-S-01: No trust in caller assumptions
The unit must validate move legality from current state input rather than relying on the UI to prefilter invalid actions.

### NFR-S-02: No sensitive data concerns
Because this unit processes only local puzzle state and no credentials or personal data, no special data-protection controls are required beyond code correctness.

### NFR-S-03: Controlled error shaping
The unit should return structured result states for expected invalid actions rather than relying on exception-driven control flow for normal gameplay errors.

## Availability and Scalability Requirements

### NFR-A-01: Offline-compatible behavior
The unit must function entirely in-browser after application assets are loaded, with no network dependency for puzzle evaluation.

### NFR-A-02: Single-user interaction scale
The unit only needs to support single-browser-session gameplay for the first release and does not require distributed scaling strategies.

## Quality Verification Expectations
- Domain logic must be covered by automated tests for valid moves, invalid moves, failure states, solved states, and reset behavior
- Functional outputs must remain stable enough to support guided solver, persistence, and UI-shell units without redefining puzzle logic
- Any future expansion beyond the classic puzzle should be possible through typed, well-isolated domain changes rather than UI rewrites
