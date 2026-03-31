# Business Logic Model - Puzzle Domain Core

## Purpose
Model the domain behavior that governs the river crossing puzzle independently of UI and persistence concerns.

## Core Workflow
1. Start from the canonical initial state:
   - Farmer, fox, chicken, and grain begin on the origin bank
   - The boat begins on the origin bank
2. Receive a move request describing:
   - Which passenger, if any, boards the boat with the farmer
   - Which bank the crossing departs from
3. Validate whether the requested move is legal in the current state.
4. If the move is legal:
   - Apply the crossing
   - Produce a new puzzle state
   - Recalculate derived outcome
5. If the move is illegal:
   - Reject the move without mutating the puzzle state
   - Produce a reason code for downstream explanation
6. After every accepted state transition:
   - Determine whether the puzzle is still in progress
   - Determine whether a failure state has occurred
   - Determine whether the puzzle is solved

## Functional Subdomains

### 1. State Initialization
- Produces the canonical starting arrangement
- Produces a reset target identical to the initial arrangement
- Ensures all entity locations and boat position are internally consistent

### 2. Move Evaluation
- Accepts a proposed move action
- Confirms that the farmer is always part of a crossing
- Confirms that the optional passenger is currently on the same bank as the farmer and boat
- Confirms that at most one passenger accompanies the farmer
- Produces an accepted next state or a rejected result

### 3. Outcome Evaluation
- Checks for failure conditions on any unattended bank
- Checks for solved state when all entities are on the destination bank
- Returns one of three outcomes:
  - `in-progress`
  - `failed`
  - `solved`

### 4. Available Move Derivation
- Computes the legal next moves from the current state
- Supports downstream interaction guidance without embedding presentation rules
- Uses the same legality rules as move evaluation

## State Transition Model

### Input
- Current puzzle state
- Move action

### Processing
- Validate move preconditions
- Apply crossing if valid
- Evaluate outcome on the resulting state
- Derive follow-up available moves when still in progress

### Output
- Result type: accepted or rejected
- New or unchanged puzzle state
- Outcome classification
- Reason metadata for invalid or failed cases

## Reset Model
- Reset is not a special business rule branch inside move evaluation
- Reset returns a freshly initialized state identical to the canonical start state
- Reset clears any previously derived failure or solved outcome

## Invariants
- The farmer and boat must always occupy the same bank
- Every entity occupies exactly one bank at any time
- A move changes banks only for the farmer and, optionally, one passenger
- A solved or failed state is derived from the state arrangement, not manually flagged without reevaluation
