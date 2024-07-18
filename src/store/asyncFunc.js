import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../helpers/const";
import axios from "axios";

export const addItem = createAsyncThunk(
  "todos/addItem",
  async (todo, { dispatch }) => {
    try {
      const newTodo = {
        title: todo,
      };
      await axios.post(API, newTodo);
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  }
);
export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const { data } = await axios(API);
  return data;
});
export const deleteItem = createAsyncThunk(
  "todos/deleteItem",
  async (id, { dispatch }) => {
    try {
      await axios.delete(`${API}/${id}`);
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  }
);
export const editItem = createAsyncThunk(
  "todos/editItem",
  async ({ id, newTitle }, { dispatch }) => {
    try {
      const newEditedTodo = {
        title: newTitle,
      };
      await axios.patch(`${API}/${id}`, newEditedTodo);
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  }
);
