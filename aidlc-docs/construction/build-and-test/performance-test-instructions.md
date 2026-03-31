# Performance Test Instructions

## Purpose
Document the current performance validation posture for the generated unit.

## Current Applicability
Formal load or stress testing is **not yet required** for the current implementation because:
- the current generated code is a local in-browser puzzle domain module
- the puzzle workload is extremely small and deterministic
- no backend, network, or concurrent multi-user infrastructure exists in v1

## Practical Performance Expectations
- Move evaluation should feel immediate to a single browser user
- Outcome derivation and available-move calculation should complete without visible lag
- Domain logic should remain lightweight enough to run after every move

## Current Verification Approach
- Keep the domain functions pure and bounded in complexity
- Use build and unit-test success as the current verification baseline
- Reassess dedicated performance testing after the interactive UI and additional units are implemented

## Future Triggers for Expanded Performance Testing
- Complex animation or high-frequency UI updates
- Larger or configurable puzzle variants
- Heavy persistence or synchronization logic
- Client-side performance regressions reported during manual testing
