import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p style={{ marginLeft: "250px" }}>{title}</p>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        style={{ marginLeft: "250px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
