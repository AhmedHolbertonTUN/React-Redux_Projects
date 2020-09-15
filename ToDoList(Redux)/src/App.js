import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTaskForm from "./components/todoform";
import TodoList from "./components/todolist";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTaskForm />
        <TodoList />
      </div>
    </Provider>
  );
}
