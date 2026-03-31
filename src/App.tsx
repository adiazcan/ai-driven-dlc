import {
  createInitialPuzzleState,
  deriveOutcome,
  getAvailableMoves,
} from './domain/puzzle'
import './App.css'

function App() {
  const initialState = createInitialPuzzleState()
  const outcome = deriveOutcome(initialState)
  const availableMoves = getAvailableMoves(initialState)

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">River Crossing Puzzle</p>
        <h1>Foundation scaffold is ready</h1>
        <p className="lede">
          The first generated unit is the typed puzzle-domain core. It models
          the initial state, move evaluation, outcome derivation, reset
          behavior, and legal move discovery for the classic river crossing
          puzzle.
        </p>
      </section>

      <section className="status-grid" aria-label="Domain preview">
        <article className="card">
          <h2>Initial outcome</h2>
          <p>{outcome.outcome}</p>
        </article>
        <article className="card">
          <h2>Available moves</h2>
          <p>{availableMoves.length}</p>
        </article>
        <article className="card">
          <h2>Boat bank</h2>
          <p>{initialState.boatBank}</p>
        </article>
      </section>

      <section className="card">
        <h2>Initial entity positions</h2>
        <ul className="entity-list">
          {Object.entries(initialState.entityBanks).map(([entity, bank]) => (
            <li key={entity}>
              <span>{entity}</span>
              <code>{bank}</code>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
