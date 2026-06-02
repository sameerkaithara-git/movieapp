// import {
//   useEffect,
//   useState
// } from "react";

// export default function useDebounce(
//   value,
//   delay
// ) {

//   const [debounced,
//         setDebounced] =
//         useState(value);

//   useEffect(() => {

//     const timer =
//       setTimeout(() => {

//         setDebounced(value);

//       }, delay);

//     return () =>
//       clearTimeout(timer);

//   }, [value, delay]);

//   return debounced;
// }

import {
  useState,
  useEffect
} from "react";

export default function useDebounce(
  value,
  delay
) {

  const [
    debouncedValue,
    setDebouncedValue
  ] = useState(value);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setDebouncedValue(value);

      }, delay);

    return () =>
      clearTimeout(timer);

  }, [value, delay]);

  return debouncedValue;
}