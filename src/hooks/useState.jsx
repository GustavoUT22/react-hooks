import { useState } from "react";

function UsingUseState() {
  // const [state, setState] = useState({ count: 4, theme: "blue" });
  // const { count } = state;
  // const { theme } = state;
  const [count, setCount] = useState(5);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count - 1 };
    // });
    setCount((prevState) => prevState - 1);
    setTheme("red");
  }

  function incrementCount() {
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count + 1 };
    // });
    setCount((prevState) => prevState + 1);
    setTheme("green");
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
