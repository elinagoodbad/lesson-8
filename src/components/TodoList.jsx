import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  //   console.log(todos);
  return (
    <div>
      {todos.map((elem) => (
        <TodoItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default TodoList;
