# Component Methods

## App Shell
- `renderApp(model: AppViewModel): UI`
  - Renders the full application shell from derived state
- `handleAppCommand(command: AppCommand): void`
  - Routes app-level user commands to the coordinator

## Puzzle Board
- `renderBoard(state: PuzzleStateViewModel): UI`
  - Displays the current puzzle layout and interaction affordances
- `handleMoveAttempt(selection: MoveSelection): void`
  - Submits a requested move from the UI layer

## Guidance Panel
- `renderGuidance(model: GuidanceViewModel): UI`
  - Renders rule help, solver explanations, and active step content
- `handleGuidanceNavigation(action: GuidanceAction): void`
  - Sends guided-solver navigation events

## Control Bar
- `renderControls(model: ControlBarViewModel): UI`
  - Displays reset, mode, and support actions
- `handleControlAction(action: ControlAction): void`
  - Sends control-bar commands to the coordinator

## Status Banner
- `renderStatus(message: StatusMessage | null): UI`
  - Displays the current status or no banner when idle

## Puzzle Engine
- `getInitialState(): PuzzleState`
  - Returns the canonical starting puzzle state
- `evaluateMove(state: PuzzleState, action: MoveAction): MoveResult`
  - Evaluates a move request and returns the resulting state or rejection outcome
- `getAvailableMoves(state: PuzzleState): MoveOption[]`
  - Provides move options to support interaction guidance
- `getOutcome(state: PuzzleState): PuzzleOutcome`
  - Derives whether the state is in progress, solved, or failed

## Solver Engine
- `buildSolution(initialState: PuzzleState): SolverSequence`
  - Produces the canonical ordered solution for the puzzle
- `getGuidedStep(sequence: SolverSequence, index: number): SolverStep`
  - Returns a single explanation-ready step
- `getGuidedView(state: PuzzleState, sequence: SolverSequence, index: number): GuidanceViewModel`
  - Produces guided content aligned to the current solver position

## Persistence Gateway
- `saveSession(payload: PersistencePayload): void`
  - Persists progress and lightweight preferences to local storage
- `loadSession(): PersistencePayload | null`
  - Loads previously saved local state if present
- `clearSession(): void`
  - Clears the saved puzzle session when appropriate

## App State Coordinator
- `initializeApp(): AppViewModel`
  - Builds the initial app state, including restored session handling
- `dispatch(command: AppCommand): AppViewModel`
  - Applies a user command and returns updated derived state
- `resetApp(): AppViewModel`
  - Restores the app to the initial puzzle state and aligned UI mode
- `switchMode(mode: AppMode): AppViewModel`
  - Changes between manual play and guided solver modes
- `syncPersistence(state: AppState): void`
  - Saves relevant state after important transitions

## Type Notes
- `PuzzleState`, `MoveAction`, `MoveResult`, `PuzzleOutcome`, `SolverSequence`, `SolverStep`, `AppState`, and `AppViewModel` are conceptual types to be formalized during Functional Design and Code Planning.
- Detailed business rules for validation, solver logic, and failure detection are intentionally deferred to Functional Design.
