import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, editItem } from "../store/asyncFunc";

const TodoItem = ({ id, title }) => {
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();
  const handleSave = () => {
    // dispatch(editTodo({ id, newTitle }));
    dispatch(editItem({ id, newTitle }));
    setEditId(null);
  };
  return (
    <div>
      {editId == id ? (
        <div>
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            value={newTitle}
          />
        </div>
      ) : (
        <p style={{ marginLeft: "250px" }}>{title}</p>
      )}
      {editId == id ? (
        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <button
            // onClick={() => dispatch(deleteTodo(id))}
            onClick={() => dispatch(deleteItem(id))}
            style={{ marginLeft: "250px" }}
          >
            Delete
          </button>
          <button onClick={() => setEditId(id)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
