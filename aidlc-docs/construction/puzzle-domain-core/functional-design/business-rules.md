# Business Rules - Puzzle Domain Core

## Rule Set Overview
These rules govern legal movement, invalid move handling, failure detection, solved-state detection, and reset semantics.

## Movement Rules

### BR-01: Farmer-required crossing
The farmer must be present in every crossing. No entity can cross the river alone.

### BR-02: Boat capacity
The boat may carry the farmer plus zero or one additional passenger.

### BR-03: Shared departure bank
The farmer, the boat, and any selected passenger must all begin the move on the same bank.

### BR-04: Crossing direction
A valid move always transfers the farmer and optional passenger from the current boat bank to the opposite bank.

### BR-05: No invalid passenger selection
An entity cannot be selected as a passenger if it is not on the same bank as the farmer at move time.

### BR-06: State immutability on rejection
If a move is invalid, the current puzzle state remains unchanged.

## Failure Rules

### BR-07: Fox-chicken failure condition
If the fox and chicken are left together on a bank without the farmer, the state is failed.

### BR-08: Chicken-grain failure condition
If the chicken and grain are left together on a bank without the farmer, the state is failed.

### BR-09: Failure evaluation timing
Failure is evaluated immediately after every accepted move.

### BR-10: Failure precedence
If a resulting state satisfies a failure condition, the state is failed even if the user completed an otherwise valid crossing.

## Success Rules

### BR-11: Solved-state condition
The puzzle is solved only when the farmer, fox, chicken, and grain are all on the destination bank.

### BR-12: Solved-state exclusivity
A state cannot be simultaneously reported as both solved and in progress.

### BR-13: Failure-over-success safety
Outcome evaluation must ensure that a failed state is not mislabeled as solved due to incomplete or unordered checks.

## Move Guidance Rules

### BR-14: Available move list integrity
Available moves must include only moves that satisfy all movement rules.

### BR-15: Empty crossing allowance
The farmer may cross alone when doing so satisfies all movement rules.

## Reset Rules

### BR-16: Canonical reset target
Reset must restore the exact initial arrangement of all entities and the boat.

### BR-17: Outcome clearing on reset
Reset clears derived failure and success outcomes by returning the puzzle to the initial state.

## Invalid Move Result Rules

### BR-18: Rejection result availability
An invalid move result must include a reason category suitable for user-facing explanation in later stages.

### BR-19: No hidden side effects
Rejected moves must not alter move history, available moves, or outcome state beyond recomputing the unchanged current view if needed.

## Edge Conditions

### BR-20: Deterministic evaluation
The same input state and move action must always produce the same result.

### BR-21: Validity from state, not history
Move legality is determined from the current state only; prior moves do not create special exceptions.

### BR-22: Reset availability
Reset remains valid regardless of whether the current state is in progress, failed, or solved.
