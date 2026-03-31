import { getAvailableMoves } from './options'
import { deriveOutcome } from './outcomes'
import { clonePuzzleState, getOppositeBank, isPuzzleStateConsistent } from './state'
import { isPassengerEntity, type MoveAction, type MoveResult, type PuzzleState } from './types'

function matchesRequestedPassenger(
  requestedPassenger: MoveAction['passenger'],
  availablePassenger: MoveAction['passenger'],
): boolean {
  return (requestedPassenger ?? null) === (availablePassenger ?? null)
}

export function evaluateMove(state: PuzzleState, action: MoveAction): MoveResult {
  if (!isPuzzleStateConsistent(state)) {
    return {
      status: 'rejected',
      state,
      outcome: 'failed',
      reason: 'invalid-state',
      availableMoves: [],
    }
  }

  const requestedPassenger = action.passenger ?? null

  if (requestedPassenger !== null && !isPassengerEntity(requestedPassenger)) {
    return {
      status: 'rejected',
      state,
      outcome: deriveOutcome(state).outcome,
      reason: 'invalid-passenger-location',
      availableMoves: getAvailableMoves(state),
    }
  }

  const availableMoves = getAvailableMoves(state)
  const selectedMove = availableMoves.find((move) =>
    matchesRequestedPassenger(requestedPassenger, move.passenger),
  )

  if (!selectedMove) {
    return {
      status: 'rejected',
      state,
      outcome: deriveOutcome(state).outcome,
      reason: 'invalid-passenger-location',
      availableMoves,
    }
  }

  const nextState = clonePuzzleState(state)
  const targetBank = getOppositeBank(state.boatBank)

  nextState.boatBank = targetBank
  nextState.entityBanks.farmer = targetBank

  if (selectedMove.passenger) {
    nextState.entityBanks[selectedMove.passenger] = targetBank
  }

  const outcome = deriveOutcome(nextState)

  return {
    status: 'accepted',
    state: nextState,
    outcome: outcome.outcome,
    reason: outcome.reason,
    availableMoves:
      outcome.outcome === 'in-progress' ? getAvailableMoves(nextState) : [],
  }
}
