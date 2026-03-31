# Components

## 1. App Shell
**Purpose**: Hosts the overall page structure, top-level layout regions, mode switching, and shared status presentation.

**Responsibilities**:
- Render the primary application frame
- Coordinate manual play and guided solver views
- Surface status, completion, and failure messages
- Connect presentation components to orchestrating services

**Interfaces**:
- Accepts current application view model for rendering
- Emits user intents such as reset, toggle mode, and move selection

## 2. Puzzle Board
**Purpose**: Displays the current river crossing state and allows the user to understand entity locations and available interactions.

**Responsibilities**:
- Render river banks, boat position, and puzzle entities
- Present interaction affordances for valid move attempts
- Reflect visual state changes after each move
- Support responsive layouts for mobile and desktop

**Interfaces**:
- Accepts puzzle state and move availability indicators
- Emits move-attempt events for selected entity combinations

## 3. Guidance Panel
**Purpose**: Presents rules, solver explanations, and step-by-step guidance for learners and returning players.

**Responsibilities**:
- Display puzzle objective and contextual help
- Show guided solver steps and human-readable explanations
- Support stepping through solver recommendations
- Present supplemental feedback without crowding the board

**Interfaces**:
- Accepts current explanation state, active guided step, and mode
- Emits navigation events such as next-step and previous-step

## 4. Control Bar
**Purpose**: Exposes user actions that affect app flow rather than direct board interactions.

**Responsibilities**:
- Offer reset and mode-switch controls
- Provide entry to guided solver mode
- Expose resume/restart actions when relevant
- Keep controls discoverable on smaller screens

**Interfaces**:
- Accepts UI mode, reset availability, and guidance availability state
- Emits app-level commands such as reset and switch-mode

## 5. Status Banner
**Purpose**: Provides short-lived or persistent feedback about the current puzzle outcome.

**Responsibilities**:
- Show success, failure, and invalid-action feedback
- Keep messages consistent across manual and guided modes
- Represent status in a way that remains clear on mobile layouts

**Interfaces**:
- Accepts status message model and severity

## 6. Puzzle Engine
**Purpose**: Encapsulates core puzzle state representation and high-level rule evaluation entry points.

**Responsibilities**:
- Represent the current puzzle configuration
- Evaluate move requests at a high level
- Produce next-state transitions for valid moves
- Detect solved and failed states

**Interfaces**:
- Accepts current puzzle state and requested action
- Returns move results, updated state, and derived outcome flags

## 7. Solver Engine
**Purpose**: Produces the canonical solution path and explanation-ready step sequence.

**Responsibilities**:
- Calculate or expose the valid solution sequence
- Map solution steps to explanation-ready outputs
- Support sequential guided playback

**Interfaces**:
- Accepts initial or current puzzle state context
- Returns ordered solver steps and explanation metadata

## 8. Persistence Gateway
**Purpose**: Manages browser-local save/load behavior for progress and lightweight preferences.

**Responsibilities**:
- Save current puzzle progress and selected preferences
- Restore previously saved state
- Normalize persistence reads into application-friendly structures
- Handle absent or stale local storage data safely

**Interfaces**:
- Accepts persistence payloads from orchestration layer
- Returns restored state or empty-result outcomes

## 9. App State Coordinator
**Purpose**: Orchestrates interactions between UI events, puzzle engine, solver engine, and persistence.

**Responsibilities**:
- Translate user actions into state updates
- Maintain current mode, puzzle state, and derived feedback
- Coordinate reset, restore, and guided-navigation flows
- Keep the top-level application state consistent

**Interfaces**:
- Accepts user intents from UI components
- Calls puzzle, solver, and persistence components
- Returns view-ready state for presentation components
