import { clonePuzzleState, isPuzzleStateConsistent } from './state'
import type { OutcomeEvaluation, PuzzleState } from './types'

function isEntityPairUnattended(
  state: PuzzleState,
  first: 'fox' | 'chicken',
  second: 'chicken' | 'grain',
): boolean {
  const firstBank = state.entityBanks[first]
  const secondBank = state.entityBanks[second]
  const farmerBank = state.entityBanks.farmer

  return firstBank === secondBank && farmerBank !== firstBank
}

export function deriveOutcome(state: PuzzleState): OutcomeEvaluation {
  if (!isPuzzleStateConsistent(state)) {
    return {
      outcome: 'failed',
      reason: 'invalid-state',
    }
  }

  if (isEntityPairUnattended(state, 'fox', 'chicken')) {
    return {
      outcome: 'failed',
      reason: 'fox-with-chicken',
    }
  }

  if (isEntityPairUnattended(state, 'chicken', 'grain')) {
    return {
      outcome: 'failed',
      reason: 'chicken-with-grain',
    }
  }

  const everyoneAtDestination = Object.values(state.entityBanks).every(
    (bank) => bank === 'destination',
  )

  if (everyoneAtDestination) {
    return { outcome: 'solved' }
  }

  return { outcome: 'in-progress' }
}

export function deriveOutcomeState(state: PuzzleState): PuzzleState {
  return clonePuzzleState(state)
}
