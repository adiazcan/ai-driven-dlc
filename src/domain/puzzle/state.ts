import type { EntityBanks, PuzzleState } from './types'

const INITIAL_ENTITY_BANKS: EntityBanks = {
  farmer: 'origin',
  fox: 'origin',
  chicken: 'origin',
  grain: 'origin',
}

export function createInitialPuzzleState(): PuzzleState {
  return {
    boatBank: 'origin',
    entityBanks: { ...INITIAL_ENTITY_BANKS },
  }
}

export function resetPuzzleState(): PuzzleState {
  return createInitialPuzzleState()
}

export function clonePuzzleState(state: PuzzleState): PuzzleState {
  return {
    boatBank: state.boatBank,
    entityBanks: { ...state.entityBanks },
  }
}

export function isPuzzleStateConsistent(state: PuzzleState): boolean {
  return state.boatBank === state.entityBanks.farmer
}

export function getOppositeBank(bank: PuzzleState['boatBank']): PuzzleState['boatBank'] {
  return bank === 'origin' ? 'destination' : 'origin'
}
