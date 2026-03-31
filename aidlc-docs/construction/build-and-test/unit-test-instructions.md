# Unit Test Execution

## Run Unit Tests

### 1. Execute All Unit Tests
```bash
npm run test
```

### 2. Review Test Results
- **Expected**: 8 tests pass, 0 failures
- **Test Coverage Focus**:
  - canonical initial state
  - reset behavior
  - valid move acceptance
  - invalid move rejection without state mutation
  - failure detection
  - solved-state derivation
  - available move derivation
  - deterministic repeatability
- **Test Report Location**: Console output from Vitest

### 3. Fix Failing Tests
If tests fail:
1. Review the failing Vitest output
2. Identify the affected puzzle-domain file or test case
3. Fix the implementation or test expectation
4. Rerun `npm run test` until all tests pass
