import React, { useState } from "react";

import { addItem } from "../store/asyncFunc";
import { useDispatch } from "react-redux";

const AddItem = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(addTodo(todoTitle));
    dispatch(addItem(todoTitle));
    setTodoTitle("");
  };
  return (
    <div>
      <div className="container">
        <h1>Todo Add</h1>
        <div className="input-field">
          <input
            value={todoTitle}
            type="text"
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
