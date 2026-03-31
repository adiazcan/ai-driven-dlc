# Unit of Work Dependency Matrix

## Dependency Overview
The system remains a single frontend application, but implementation should respect dependency direction so domain behavior remains isolated from presentation concerns.

## Dependency Matrix

| Unit | Depends On | Dependency Reason | Priority |
|---|---|---|---|
| Unit 1: Puzzle Domain Core | None | Foundational domain behavior | Critical |
| Unit 2: Guided Solver Flow | Unit 1 | Guided steps need puzzle-state concepts and canonical move understanding | Critical |
| Unit 3: Application UI and Interaction Shell | Unit 1, Unit 2, Unit 4 | UI renders puzzle and solver state and triggers persistence-aware workflows | Critical |
| Unit 4: Persistence and Session Continuity | Unit 1 | Saved session payloads must align with puzzle-state structures | Important |
| Unit 5: Verification and Quality Safeguards | Units 1, 2, 3, 4 | Tests validate behavior implemented across the other units | Critical |

## Recommended Implementation Sequence
1. **Unit 1: Puzzle Domain Core**
   - Establishes the state model and move/outcome contract used elsewhere
2. **Unit 2: Guided Solver Flow**
   - Builds on domain concepts while staying isolated from UI
3. **Unit 4: Persistence and Session Continuity**
   - Depends on stable state structures and prepares session behavior for the UI shell
4. **Unit 3: Application UI and Interaction Shell**
   - Integrates domain, solver, and persistence behavior into user-facing flows
5. **Unit 5: Verification and Quality Safeguards**
   - Expands and finalizes automated confidence across the full app

## Coordination Notes
- Unit 3 is the integration-heavy unit and should not define domain rules itself
- Unit 4 should save normalized app state rather than UI-specific transient details
- Unit 5 begins early with domain testing but reaches full value once Units 1-4 are implemented

## Construction-Stage Implications
- **Functional Design** should begin with Units 1 and 2 because they contain the most important business behavior
- **NFR Requirements and NFR Design** should pay special attention to Units 3 and 4 because responsiveness and continuity are primarily expressed there
- **Code Planning** should follow the recommended sequence above to minimize rework
