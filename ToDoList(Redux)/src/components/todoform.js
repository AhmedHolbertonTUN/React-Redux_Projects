import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addTask } from "../redux/Actions";

function AddTaskForm() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    if (todo.trim() !== "") {
      dispatch(addTask(todo));
      setTodo("");
    }
    e.preventDefault();
  }
  return (
    <div className="head">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          onChange={handleChange}
          value={todo}
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default connect()(AddTaskForm);
