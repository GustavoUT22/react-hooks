import { useState } from "react";

function UsingUseState() {
  const [count, setCount] = useState(5);
  const [theme, setTheme] = useState("blue");
  // const [state, setState] = useState({ count: 4, theme: "blue" });
  // const { count } = state;
  // const { theme } = state;

  function decrementCount() {
    setCount((prevState) => prevState - 1);
    setTheme("red");
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count - 1 };
    // });
  }

  function incrementCount() {
    setCount((prevState) => prevState + 1);
    setTheme("green");
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count + 1 };
    // });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default UsingUseState;
