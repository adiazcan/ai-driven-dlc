# River Crossing Web Application User Stories

## Story Organization Approach
These stories use a hybrid structure:
- **User journey-based** to reflect how people learn, play, get stuck, recover, and solve the puzzle
- **Feature-based** grouping within each journey to keep implementation boundaries clear

## Epic 1: Understand and Start the Puzzle

### Story US-01: View the puzzle state clearly
**Persona**: Curious First-Time Solver, Returning Puzzle Player

**Story**:  
As a puzzle player, I want to see the river banks, boat, and all puzzle entities clearly, so that I can understand the current state before making a move.

**Acceptance Criteria**:
- The interface shows all required puzzle entities and their current bank positions
- The interface indicates where the boat is currently located
- The current puzzle state remains understandable on both desktop and mobile layouts
- Visual changes after moves are easy to recognize

### Story US-02: Understand the rules and available actions
**Persona**: Curious First-Time Solver

**Story**:  
As a first-time solver, I want the app to make the rules and available moves understandable, so that I can attempt the puzzle with confidence.

**Acceptance Criteria**:
- The app communicates the puzzle goal clearly
- The app makes it understandable which moves are allowed at a given moment
- The app explains invalid actions in plain language when the user attempts one
- The app avoids requiring external knowledge to begin interacting with the puzzle

## Epic 2: Play the Puzzle Manually

### Story US-03: Make valid moves manually
**Persona**: Curious First-Time Solver, Returning Puzzle Player

**Story**:  
As a puzzle player, I want to move valid puzzle entities across the river manually, so that I can try solving the puzzle myself.

**Acceptance Criteria**:
- The user can select and perform a valid move using the interface
- After a valid move, the puzzle state updates immediately
- The app prevents moves that violate the puzzle rules from being completed
- The app provides confirmation or feedback after a successful move

### Story US-04: Understand failure states
**Persona**: Curious First-Time Solver

**Story**:  
As a first-time solver, I want the app to explain when I have caused a failure state, so that I can understand what went wrong and try again.

**Acceptance Criteria**:
- The app detects when the puzzle enters a losing state
- The app communicates the reason for the failure clearly
- The user can recover by resetting or replaying the puzzle
- Failure feedback is understandable without technical language

### Story US-05: Know when the puzzle is solved
**Persona**: Curious First-Time Solver, Returning Puzzle Player

**Story**:  
As a puzzle player, I want the app to clearly indicate when I have solved the puzzle, so that I know I completed the challenge successfully.

**Acceptance Criteria**:
- The app detects the solved state correctly
- The app presents a clear success message when the puzzle is completed
- The success state is visible on both desktop and mobile layouts
- The solved state does not conflict with previously displayed error or status messaging

## Epic 3: Use Guided Solver Support

### Story US-06: Access a guided solution journey
**Persona**: Curious First-Time Solver, Returning Puzzle Player

**Story**:  
As a puzzle player, I want access to a guided solver mode, so that I can learn or confirm the correct sequence of moves.

**Acceptance Criteria**:
- The app provides a clear way to enter guided solver mode
- Guided solver mode is available without requiring a backend or account
- The guided solver experience remains usable on both desktop and mobile layouts
- The user can access solver guidance whether or not they have already made manual moves

### Story US-07: Step through the recommended solution
**Persona**: Curious First-Time Solver

**Story**:  
As a learner, I want to step through the recommended solution one move at a time, so that I can understand the logic behind the correct answer.

**Acceptance Criteria**:
- The app presents the recommended solution as a sequence of steps
- The user can move through the solution one step at a time
- Each step includes enough explanation to make the move understandable
- The explanation remains aligned with the currently displayed puzzle state

## Epic 4: Retry and Resume Smoothly

### Story US-08: Reset the puzzle quickly
**Persona**: Returning Puzzle Player, Curious First-Time Solver

**Story**:  
As a puzzle player, I want to reset the puzzle to its starting state, so that I can retry after failing or experiment with a new approach.

**Acceptance Criteria**:
- The app provides a clear reset action
- Reset returns the puzzle to its original starting state
- Reset clears active success or failure state messaging that no longer applies
- Reset works consistently during manual play and after viewing solver guidance

### Story US-09: Resume saved progress and preferences
**Persona**: Returning Puzzle Player

**Story**:  
As a returning player, I want the app to restore my saved progress and lightweight preferences, so that I can continue from where I left off.

**Acceptance Criteria**:
- The app stores active puzzle progress in browser local storage
- The app stores lightweight preferences in browser local storage
- On return, the app restores saved state in a predictable way
- The app handles missing or cleared local storage without breaking core functionality

## Epic 5: Use the App Comfortably Across Devices

### Story US-10: Use the app on desktop and mobile
**Persona**: Curious First-Time Solver, Returning Puzzle Player

**Story**:  
As a web user, I want the puzzle interface to work comfortably on desktop and mobile browsers, so that I can use the app on the device I have available.

**Acceptance Criteria**:
- The layout adapts to common desktop and mobile viewport sizes
- Controls remain accessible and understandable on smaller screens
- Core gameplay, reset, and guided solver features remain usable across supported layouts
- Important status messages and puzzle state are not obscured by responsive layout changes

## INVEST Summary
- **Independent**: Stories are separated by user goal and journey stage
- **Negotiable**: UI details remain flexible while user outcomes stay fixed
- **Valuable**: Each story provides direct user value
- **Estimable**: Stories are scoped around visible behaviors and puzzle interactions
- **Small**: Stories avoid bundling unrelated technical tasks
- **Testable**: Each story includes concrete acceptance criteria
