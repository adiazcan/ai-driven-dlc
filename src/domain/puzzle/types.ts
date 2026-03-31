export const RIVER_BANKS = ['origin', 'destination'] as const

export const CARGO_ENTITIES = ['farmer', 'fox', 'chicken', 'grain'] as const

export const PASSENGER_ENTITIES = ['fox', 'chicken', 'grain'] as const

export const PUZZLE_OUTCOMES = ['in-progress', 'failed', 'solved'] as const

export const OUTCOME_REASONS = [
  'invalid-state',
  'invalid-passenger-location',
  'over-capacity',
  'fox-with-chicken',
  'chicken-with-grain',
] as const

export type RiverBank = (typeof RIVER_BANKS)[number]
export type CargoEntity = (typeof CARGO_ENTITIES)[number]
export type PassengerEntity = (typeof PASSENGER_ENTITIES)[number]
export type PuzzleOutcome = (typeof PUZZLE_OUTCOMES)[number]
export type OutcomeReason = (typeof OUTCOME_REASONS)[number]

export type EntityBanks = Record<CargoEntity, RiverBank>

export interface PuzzleState {
  boatBank: RiverBank
  entityBanks: EntityBanks
}

export interface MoveAction {
  passenger?: PassengerEntity | null
}

export interface MoveOption {
  passenger: PassengerEntity | null
  targetBank: RiverBank
}

export interface OutcomeEvaluation {
  outcome: PuzzleOutcome
  reason?: OutcomeReason
}

export interface AcceptedMoveResult extends OutcomeEvaluation {
  status: 'accepted'
  state: PuzzleState
  availableMoves: MoveOption[]
}

export interface RejectedMoveResult extends OutcomeEvaluation {
  status: 'rejected'
  state: PuzzleState
  availableMoves: MoveOption[]
  reason: OutcomeReason
}

export type MoveResult = AcceptedMoveResult | RejectedMoveResult

export function isPassengerEntity(
  entity: PassengerEntity | null | undefined | string,
): entity is PassengerEntity {
  return PASSENGER_ENTITIES.includes(entity as PassengerEntity)
}
