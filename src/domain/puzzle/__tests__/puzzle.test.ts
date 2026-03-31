import { describe, expect, it } from 'vitest'

import {
  createInitialPuzzleState,
  deriveOutcome,
  evaluateMove,
  getAvailableMoves,
  resetPuzzleState,
} from '../index'

describe('puzzle domain core', () => {
  it('creates the canonical initial state', () => {
    const state = createInitialPuzzleState()

    expect(state.boatBank).toBe('origin')
    expect(state.entityBanks).toEqual({
      farmer: 'origin',
      fox: 'origin',
      chicken: 'origin',
      grain: 'origin',
    })
  })

  it('resets to the canonical initial state', () => {
    const resetState = resetPuzzleState()

    expect(resetState).toEqual(createInitialPuzzleState())
  })

  it('accepts a valid move and updates the state', () => {
    const result = evaluateMove(createInitialPuzzleState(), {
      passenger: 'chicken',
    })

    expect(result.status).toBe('accepted')
    expect(result.state.boatBank).toBe('destination')
    expect(result.state.entityBanks.farmer).toBe('destination')
    expect(result.state.entityBanks.chicken).toBe('destination')
    expect(result.outcome).toBe('in-progress')
  })

  it('rejects an invalid passenger selection without mutating state', () => {
    const state = createInitialPuzzleState()
    const firstMove = evaluateMove(state, { passenger: 'chicken' })

    expect(firstMove.status).toBe('accepted')

    const invalidMove = evaluateMove(firstMove.state, { passenger: 'fox' })

    expect(invalidMove.status).toBe('rejected')
    expect(invalidMove.reason).toBe('invalid-passenger-location')
    expect(invalidMove.state).toEqual(firstMove.state)
    expect(firstMove.state.entityBanks.fox).toBe('origin')
  })

  it('flags failure states immediately after accepted losing moves', () => {
    const result = evaluateMove(createInitialPuzzleState(), {
      passenger: 'grain',
    })

    expect(result.status).toBe('accepted')
    expect(result.outcome).toBe('failed')
    expect(result.reason).toBe('fox-with-chicken')
  })

  it('derives the solved state when everyone reaches the destination bank', () => {
    const solvedState = {
      boatBank: 'destination' as const,
      entityBanks: {
        farmer: 'destination' as const,
        fox: 'destination' as const,
        chicken: 'destination' as const,
        grain: 'destination' as const,
      },
    }

    expect(deriveOutcome(solvedState)).toEqual({ outcome: 'solved' })
  })

  it('derives legal available moves from the current bank only', () => {
    const initialMoves = getAvailableMoves(createInitialPuzzleState())

    expect(initialMoves).toEqual([
      { passenger: null, targetBank: 'destination' },
      { passenger: 'fox', targetBank: 'destination' },
      { passenger: 'chicken', targetBank: 'destination' },
      { passenger: 'grain', targetBank: 'destination' },
    ])

    const nextState = evaluateMove(createInitialPuzzleState(), {
      passenger: 'chicken',
    })

    expect(nextState.status).toBe('accepted')
    expect(nextState.availableMoves).toEqual([
      { passenger: null, targetBank: 'origin' },
      { passenger: 'chicken', targetBank: 'origin' },
    ])
  })

  it('produces deterministic results for the same input', () => {
    const state = createInitialPuzzleState()
    const firstResult = evaluateMove(state, { passenger: 'chicken' })
    const secondResult = evaluateMove(state, { passenger: 'chicken' })

    expect(secondResult).toEqual(firstResult)
  })
})
