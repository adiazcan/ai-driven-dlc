# Domain Entities - Puzzle Domain Core

## Entity: RiverBank
**Description**: Represents one side of the river.

**Values**:
- `origin`
- `destination`

**Role in Domain**:
- Provides the location axis for all movable entities and the boat

## Entity: CargoEntity
**Description**: Represents a puzzle participant whose location affects puzzle validity.

**Members**:
- `farmer`
- `fox`
- `chicken`
- `grain`

**Role in Domain**:
- Defines the actors governed by move and failure rules

## Entity: PuzzleState
**Description**: Canonical representation of the current puzzle arrangement.

**Core Attributes**:
- `boatBank`
- `entityBanks` keyed by cargo entity

**Derived Characteristics**:
- Current outcome
- Available moves

**Constraints**:
- Every cargo entity must have exactly one bank
- `boatBank` must match the farmer's bank

## Entity: MoveAction
**Description**: Represents a requested crossing.

**Core Attributes**:
- `passenger`: optional cargo entity other than the farmer

**Implicit Meaning**:
- The farmer always participates
- The crossing departs from the current `boatBank`

## Entity: MoveResult
**Description**: Result of evaluating a move request.

**Core Attributes**:
- `status`: accepted or rejected
- `state`: next state if accepted, current state if rejected
- `outcome`: in-progress, failed, or solved
- `reason`: optional rejection or failure reason

## Entity: PuzzleOutcome
**Description**: High-level classification of the puzzle state.

**Values**:
- `in-progress`
- `failed`
- `solved`

## Entity: MoveOption
**Description**: Represents a legal action available from the current state.

**Core Attributes**:
- passenger choice
- resulting target bank

**Role in Domain**:
- Enables downstream guidance without coupling to UI rendering

## Entity: OutcomeReason
**Description**: Encodes why a move was rejected or why a state failed.

**Example Categories**:
- invalid-passenger-location
- over-capacity
- fox-with-chicken
- chicken-with-grain

## Relationships
- `PuzzleState` contains the locations for all `CargoEntity` members
- `MoveAction` is evaluated against a `PuzzleState`
- `MoveResult` references a `PuzzleState`, `PuzzleOutcome`, and optional `OutcomeReason`
- `MoveOption` is derived from `PuzzleState`

## Aggregate Boundary
`PuzzleState` is the aggregate root for the puzzle domain. All move evaluation and outcome checks operate against this aggregate, and all related entities are derived from or validated against it.
