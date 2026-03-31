import { getOppositeBank, isPuzzleStateConsistent } from './state'
import {
  PASSENGER_ENTITIES,
  type MoveOption,
  type PassengerEntity,
  type PuzzleState,
} from './types'

function getPassengersOnBoatBank(state: PuzzleState): PassengerEntity[] {
  return PASSENGER_ENTITIES.filter(
    (entity) => state.entityBanks[entity] === state.boatBank,
  )
}

export function getAvailableMoves(state: PuzzleState): MoveOption[] {
  if (!isPuzzleStateConsistent(state)) {
    return []
  }

  const targetBank = getOppositeBank(state.boatBank)
  const passengers = getPassengersOnBoatBank(state)

  return [{ passenger: null, targetBank }, ...passengers.map((passenger) => ({
    passenger,
    targetBank,
  }))]
}
