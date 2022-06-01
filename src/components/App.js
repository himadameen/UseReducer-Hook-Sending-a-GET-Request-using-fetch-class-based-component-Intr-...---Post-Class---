import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import "../styles/App.css";
const App = () => {
  const initialValues = {
    count: 0
  };

  const [state, dispatch] = useReducer(counterReducer, initialValues);
  return (
    <div id="main">
      <span id="counter">{state.count}</span>
      <button id="increment-btn" onClick={() => dispatch({ type: "INCREASE" })}>
        Increase
      </button>
      <button id="decrement-btn" onClick={() => dispatch({ type: "DECREASE" })}>
        Decrease
      </button>
    </div>
  );
};

export default App;
