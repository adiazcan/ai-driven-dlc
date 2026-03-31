# River Crossing Web Application

This repository contains an AI-DLC-driven React + TypeScript + Vite application for the classic river crossing puzzle.

## Current Implementation Status

The first generated construction unit is the `puzzle-domain-core`, which includes:

- typed puzzle-state contracts
- canonical initialization and reset helpers
- fail-closed move evaluation
- solved and failed outcome derivation
- legal move discovery for downstream UI guidance
- automated domain tests with `vitest`

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - type-check and build the app
- `npm run test` - run domain tests
- `npm run lint` - run ESLint

## Project Structure

- `src/domain/puzzle/` - puzzle-domain core logic and tests
- `src/` - application shell and future UI work
- `aidlc-docs/` - AI-DLC artifacts, plans, and stage outputs

## AI-DLC Documentation

Key generated documentation lives under:

- `aidlc-docs/inception/`
- `aidlc-docs/construction/`

The active code-generation summary for the current unit is:

- `aidlc-docs/construction/puzzle-domain-core/code/code-summary.md`
