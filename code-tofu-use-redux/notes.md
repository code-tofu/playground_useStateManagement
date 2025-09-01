destructuring typed props
typing react components
https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/
https://stackoverflow.com/questions/67961843/react-typescript-functional-components-that-are-not-arrow-functions



ChakraUI
https://chakra-ui.com/docs/components/concepts/overview
- Using Provider: https://github.com/chakra-ui/chakra-ui/blob/main/sandbox/vite-ts/src/main.tsx

https://redux.js.org/introduction/getting-started#legacy-example
https://redux.js.org/style-guide/#name-state-slices-based-on-the-stored-data
https://redux.js.org/style-guide/#model-actions-as-events-not-setters
https://www.typescriptlang.org/docs/handbook/enums.html
https://redux.js.org/tutorials/essentials/part-2-app-structure#redux-slices



https://redux-toolkit.js.org/api/createAction


https://redux-actions.js.org/api/createaction
https://redux-actions.js.org/api/handleaction

https://redux.js.org/usage/usage-with-



Option 1: Avoid as const
Instead of:
``` js
const myAction = { type: "INCREMENT" } as const;
```
Use string literal types explicitly:
``` js
const myAction: { type: "INCREMENT" } = { type: "INCREMENT" };
```
Or define your action creator like this:
``` js
function increment(): { type: "INCREMENT" } {
  return { type: "INCREMENT" };
}
```



const sagaMiddleware = createSagaMiddleware();
middleware: () => new Tuple(sagaMiddleware),


Selector unknown returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.