import { useEffect, useRef } from "react";

// listenCapturing is for listening in the capturing (down the DOM) phase
export function useOutsideClick(handler, listenCapturing = true) {
  // Manually select the element using a ref
  // The useRef Hook allows you to persist values between renders.
  // It can be used to store a mutable value that does not cause a re-render when updated.
  // It can be used to access a DOM element directly.
  const ref = useRef();
  // Also:
  // Passing a ref prop to a styled component will give you one of two things depending on the styled target:
  // - The underlying DOM node (if targeting a basic element, e.g. styled.div)
  // - A React component instance (if targeting a custom component e.g. extended from React.Component)

  useEffect(
    function () {
      function handleClick(e) {
        // e.target is where the click happened
        // ref.current is the modal window area itself
        if (ref.current && !ref.current.contains(e.target)) {
          handler(); // Close the modal
        }
      }

      // Only listen for this event as it moves down the DOM tree (capturing phase)
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        // Should be ignored when it is bubbling up back to the root element
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
