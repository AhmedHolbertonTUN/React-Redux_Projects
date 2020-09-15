import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { DeleteTask, CheckTask } from "../redux/Actions";
import Edit from "./EditModal";

function TodoList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const arr = tasks;
  const listItems = arr.map((el) => (
    <li key={el.id}>
      <div>
        <input
          onClick={() => dispatch(CheckTask(el.id, !el.done))}
          type="checkbox"
        />
      </div>
      <div style={el.done ? { textDecoration: "line-through" } : {}}>
        {el.text}
      </div>
      <div style={{ display: "flex" }}>
        <button className="button" onClick={() => dispatch(DeleteTask(el.id))}>
          Delete
        </button>
        <Edit buttonLabel="Edit" task={el} />
      </div>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default connect()(TodoList);
