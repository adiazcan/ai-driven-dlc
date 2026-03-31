# Integration Test Instructions

## Purpose
Validate interactions between generated units as additional units are implemented.

## Current Applicability
The current codebase contains only the `puzzle-domain-core` unit plus a minimal application shell preview. A dedicated multi-unit integration suite is **not yet applicable** because the guided solver, persistence, and full UI orchestration units have not been implemented.

## Planned Future Integration Scenarios

### Scenario 1: Puzzle Domain Core -> Guided Solver Flow
- **Description**: Verify that solver sequencing consumes the same domain contracts used by move evaluation
- **Expected Future Validation**: Shared state and outcome semantics remain consistent between units

### Scenario 2: Puzzle Domain Core -> Persistence and Session Continuity
- **Description**: Verify that saved state can be restored into the same domain model without contract drift
- **Expected Future Validation**: Reset and restore flows preserve canonical state expectations

### Scenario 3: Puzzle Domain Core -> Application UI and Interaction Shell
- **Description**: Verify that UI actions and rendered state remain aligned with domain results
- **Expected Future Validation**: Invalid actions, failures, and successes are surfaced correctly

## Current Recommendation
- Revisit this instruction file after the next code-generation units are complete
- Add an executable integration test command once multiple implemented units interact through real application flows
