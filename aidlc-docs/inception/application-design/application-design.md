# Application Design Summary

## Overview
The River Crossing Web Application will be implemented as a client-side React SPA organized around a clear separation between presentation, orchestration, domain logic, and persistence.

## Design Structure
- **Presentation layer**: App Shell, Puzzle Board, Guidance Panel, Control Bar, Status Banner
- **Coordination layer**: App State Coordinator
- **Domain layer**: Puzzle Engine, Solver Engine
- **Support layer**: Persistence Gateway and mapping/orchestration services

## Key Design Decisions
- Keep puzzle rules and solver logic outside the UI so they can be tested independently
- Use a central coordinator to translate user commands into state transitions
- Treat guided solving as a first-class capability with its own service flow
- Isolate browser persistence behind a gateway so save/load behavior remains replaceable
- Shape UI through derived view models rather than exposing raw domain state directly

## Artifacts
- `components.md`: High-level components and responsibilities
- `component-methods.md`: Method signatures and conceptual types
- `services.md`: Service responsibilities and orchestration model
- `component-dependency.md`: Dependency relationships and communication patterns

## Readiness for Next Stage
This design is ready to be decomposed into implementation units and then refined through functional and non-functional design stages.
