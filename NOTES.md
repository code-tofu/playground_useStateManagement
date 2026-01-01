# Base
Destructuring typed props/typing react components
- https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/
- https://stackoverflow.com/questions/67961843/react-typescript-functional-components-that-are-not-arrow-functions

Using ChakraUI
- https://chakra-ui.com/docs/components/concepts/overview
- Using Provider:
  - https://github.com/chakra-ui/chakra-ui/blob/main/sandbox/vite-ts/src/main.tsx
  - https://chakra-ui.com/docs/theming/customization/overview
  - https://github.com/chakra-ui/chakra-ui/blob/main/sandbox/vite-ts/src/main.tsx

Enums in Typescript
- https://www.typescriptlang.org/docs/handbook/enums.html

https://stackoverflow.com/questions/66020820/npm-when-to-use-force-and-legacy-peer-deps

destructuring : is used to rename a property, not to define its type.

https://github.com/axios/axios?tab=readme-ov-file#handling-errors


# Legacy-Redux
createStore(reducer, preloadedState?, enhancer?)
https://redux.js.org/api/createstore

- create actions
- create reducer
- create store from reducer

https://redux.js.org/tutorials/fundamentals/part-4-store#configuring-the-store
**useSelector expects the ROOT STATE type, not the reducer’s state type.**

[...state.posts, ...payload]

# Redux-Logger
https://www.npmjs.com/package/redux-logger
https://www.npmjs.com/package/@types/redux-logger

# Redux-Thunks
https://redux.js.org/usage/writing-logic-thunks#writing-thunks
https://react-redux.js.org/using-react-redux/usage-with-typescript#define-root-state-and-dispatch-types

# Redux RTK-Thunk
https://redux.js.org/style-guide/
https://redux-toolkit.js.org/usage/usage-with-typescript
https://redux-toolkit.js.org/usage/migrating-to-modern-redux

https://redux-toolkit.js.org/usage/migrating-to-modern-redux
- create initial state
- create slice and reducers in slice
- create thunks
- export reducers, actions, thunks
- create store from reducer
- you can return the state directly or mutuate the state directly which will be handled by immer

https://redux-toolkit.js.org/api/configureStore
https://redux-toolkit.js.org/api/createAsyncThunk#type