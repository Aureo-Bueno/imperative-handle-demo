# useImperativeHandle Examples in React

> Demonstration of different patterns using the `useImperativeHandle` hook with React, TypeScript, and Vite.

## About the project
This repository contains practical examples of how to use the `useImperativeHandle` hook to expose imperative methods in React components. Each example is in a separate directory under `src/components`.

## Examples

### 1. Controlled input with clear button
File: `src/components/first-example/index.tsx`
- Controlled input component that exposes a `clear()` method to clear the field via ref.
- Demonstrates ref forwarding and basic use of `useImperativeHandle`.

### 2. Audio player with imperative methods
File: `src/components/second-example/index.tsx`
- Custom audio player that exposes `play()`, `pause()`, and `reset()` methods for external control.
- Allows selecting a local audio/video file and controlling playback via buttons.

### 3. Imperatively controlled animation
File: `src/components/third-example/index.tsx`
- Animated component (a box that moves horizontally) with `start()`, `stop()`, and `reset()` methods.
- Demonstrates animation control via ref.

### 4. Search input with imperative methods
File: `src/components/four-example/index.tsx`
- Search input that exposes `search()`, `clear()`, and `getValue()` methods.
- Simulates async search and displays results.

### 5. Form with useActionState
File: `src/components/form-use-action-state/index.tsx`
- Example of a controlled form using `useActionState` to handle async submission, loading, response, and errors.
- Integrates with a fake API (jsonplaceholder).

## How to run the project

```bash
npm install
npm run dev
```

Go to [http://localhost:5173](http://localhost:5173) to view the examples.

## Structure

- `src/components/first-example/` — Controlled input
- `src/components/second-example/` — Audio player
- `src/components/third-example/` — Animation
- `src/components/four-example/` — Search
- `src/components/form-use-action-state/` — Form with useActionState

## Technologies
- React
- TypeScript
- Vite

---

Feel free to clone, test, and adapt the examples!
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
