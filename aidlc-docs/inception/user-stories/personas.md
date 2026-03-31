# River Crossing Web Application Personas

## Persona 1: Curious First-Time Solver
- **Summary**: A user who knows the river crossing puzzle by name or concept but has not fully learned the rules or the solution.
- **Goals**:
  - Understand the puzzle setup quickly
  - Try solving it manually without feeling lost
  - Get understandable guidance when stuck
- **Needs**:
  - Clear visual representation of banks, boat position, and puzzle entities
  - Helpful feedback when a move is invalid or creates a failure state
  - Step-by-step solver explanations in plain language
- **Frustrations**:
  - Confusing rule enforcement
  - Hidden reasons for losing
  - Solver output that feels too abstract or too fast
- **Relevant Story Focus**:
  - Learning the puzzle state
  - Understanding move results
  - Using guided solving as an educational feature

## Persona 2: Returning Puzzle Player
- **Summary**: A user who already understands the puzzle and wants a smooth, efficient way to replay, retry, and compare their solution against the optimal path.
- **Goals**:
  - Interact quickly with the puzzle
  - Reset and retry without friction
  - Resume where they left off when revisiting the app
- **Needs**:
  - Fast, responsive controls
  - Immediate status updates after each move
  - Saved progress or preferences in local storage
- **Frustrations**:
  - Slow or cluttered interactions
  - Having to restart from scratch after leaving the app
  - Excessive explanation when the user already understands the rules
- **Relevant Story Focus**:
  - Manual play efficiency
  - Reset and resume behavior
  - Access to guided solving when comparing approaches

## Persona Mapping Summary
- **Curious First-Time Solver** aligns most strongly with stories about onboarding clarity, move feedback, failure explanations, and step-by-step guided solving.
- **Returning Puzzle Player** aligns most strongly with stories about efficient control flow, reset/retry behavior, and persistence of local state.
- Both personas benefit from responsive layout, clear puzzle state visualization, and reliable rule enforcement.
