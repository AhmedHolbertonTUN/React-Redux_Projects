import React from "react";
import "./styles.css";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter with redux</h1>
        <Counter />
      </div>
    </Provider>
  );
}
