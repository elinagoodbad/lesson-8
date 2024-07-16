import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const AddItem = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTodo(todoTitle));
  };
  return (
    <div>
      <div className="container">
        <h1>Todo Add</h1>
        <div className="input-field">
          <input type="text" onChange={(e) => setTodoTitle(e.target.value)} />
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
