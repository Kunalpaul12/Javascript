# Hooks introduce in React 16.8 to use React feature in function component in react native it was introduce in 0.59

## Why Hooks

We already have a class that works well then why hooks ....?

- React does not offer a way to attached reusable logic to component thus for this purpose we use pattern such as render props and HOC (higher order component)

- Class does not minify very well and thus they make hot reloading flaky and unreliable

- For most of the newer developer the concept of classes such as bind and this is very hard to understand

## Types of Hooks

### Basic

- useState

- useEffect

- useContex

#### Additional

- useReducer

- useRef

- useMemo

- useCallback

- useLayoutEffect

- useDebugValue

- useImperativeHandle

## Rules of hooks

- Don't call hooks form java script file call it in react functional component

- Don't ever break the order in which hooks are called (if you want it conditional then use the second arugement for that )

  example // 🔴 We're breaking the first rule by using a Hook in a condition
  if (name !== '') {
  useEffect(function persistForm() {
  localStorage.setItem('formData', name);
  });
  }

  useEffect(function persistForm() {
  // 👍 We're not breaking the first rule anymore
  if (name !== '') {
  localStorage.setItem('formData', name);
  }
  })
