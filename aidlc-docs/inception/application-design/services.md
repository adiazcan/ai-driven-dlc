# Services

## 1. Game Orchestration Service
**Purpose**: Coordinate primary gameplay actions across the app state coordinator and puzzle engine.

**Responsibilities**:
- Initialize the gameplay session
- Process manual move requests
- Update derived outcome and status information
- Trigger persistence updates after meaningful state changes

**Interactions**:
- Receives commands from the App State Coordinator
- Calls the Puzzle Engine for state transitions
- Calls the Persistence Gateway when saved state should change

## 2. Guided Solver Service
**Purpose**: Manage guided-solver sequencing and explanation delivery.

**Responsibilities**:
- Create or retrieve the solver sequence
- Step forward and backward through the guided path
- Align the current guided step with rendered explanatory content
- Support entry into solver mode from manual play

**Interactions**:
- Receives mode and navigation requests from the App State Coordinator
- Calls the Solver Engine for sequence and step data
- Returns guidance view models to presentation components

## 3. Session Restore Service
**Purpose**: Manage startup restoration and safe fallback behavior for local persistence.

**Responsibilities**:
- Load saved progress and preferences during startup
- Validate whether persisted state can be restored
- Fallback to initial-state defaults when no valid save exists

**Interactions**:
- Calls the Persistence Gateway at initialization time
- Returns normalized session data to the App State Coordinator

## 4. View Model Mapping Service
**Purpose**: Convert internal application state into presentation-friendly structures.

**Responsibilities**:
- Create board, control, status, and guidance view models
- Keep display concerns separated from puzzle-domain concerns
- Support responsive-friendly data shaping for the UI layer

**Interactions**:
- Reads normalized app state from the App State Coordinator
- Returns specialized view models to presentation components

## Orchestration Pattern
- UI components emit intents
- The App State Coordinator dispatches intents to the appropriate service
- Services call domain components such as the Puzzle Engine, Solver Engine, and Persistence Gateway
- Updated app state is converted into view models and rendered back through presentation components
