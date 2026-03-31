# Component Dependency and Communication Design

## Dependency Matrix

| From | Depends On | Relationship |
|---|---|---|
| App Shell | App State Coordinator, View Model Mapping Service | Reads derived app state and routes top-level commands |
| Puzzle Board | App Shell, App State Coordinator | Receives view state and emits move intents |
| Guidance Panel | App Shell, App State Coordinator, Guided Solver Service | Receives guidance content and emits navigation intents |
| Control Bar | App Shell, App State Coordinator | Emits reset and mode-switch commands |
| Status Banner | App Shell | Renders derived status only |
| App State Coordinator | Game Orchestration Service, Guided Solver Service, Session Restore Service, View Model Mapping Service | Central coordination point |
| Game Orchestration Service | Puzzle Engine, Persistence Gateway | Processes gameplay transitions |
| Guided Solver Service | Solver Engine | Produces guided sequence and explanation steps |
| Session Restore Service | Persistence Gateway, Puzzle Engine | Restores or defaults startup state |
| View Model Mapping Service | App State Coordinator state | Converts state to UI models |

## Communication Patterns
- **Presentation to Coordination**: Event-driven UI callbacks send typed commands to the App State Coordinator
- **Coordination to Domain**: Coordinator invokes orchestration services synchronously for user-driven state changes
- **Domain to Persistence**: Persistence updates happen after state transitions and mode changes that affect saved session data
- **Coordination to Presentation**: Derived view models flow downward into display components

## High-Level Data Flow
1. The app initializes through the App State Coordinator.
2. Session Restore Service checks local storage and provides either restored or default state.
3. View Model Mapping Service converts state into UI-facing models.
4. The user triggers a move, reset, or guided-solver navigation action.
5. The App State Coordinator routes the request to Game Orchestration Service or Guided Solver Service.
6. Domain components compute updated state or guidance content.
7. Persistence Gateway saves relevant data.
8. Updated view models are rendered back into the App Shell and child components.

## Dependency Principles
- Presentation components do not call domain engines directly.
- Puzzle Engine and Solver Engine remain independent of React or UI concerns.
- Persistence logic stays isolated behind the Persistence Gateway.
- The App State Coordinator is the single integration point for UI-driven workflows.
