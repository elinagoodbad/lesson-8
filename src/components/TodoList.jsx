import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodos } from "../store/asyncFunc";

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
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
