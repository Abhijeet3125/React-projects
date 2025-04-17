import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  updateInput,
  setIsEditing,
  updateTodo,
} from "../features/todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  let input = useSelector((state) => state.input);
  let isEditing = useSelector((state) => state.isEditing);
  let editingTodoId = useSelector((state) => state.editingTodoId);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (isEditing || !input.trim()) {
      return;
    }
    dispatch(addTodo(input));
    dispatch(updateInput(""));
  };

  const changeInput = (e) => {
    dispatch(updateInput(e.target.value));
  };

  const handleUpdate = () => {
    if (!editingTodoId) {
      return;
    }
    let id = editingTodoId;
    let text = input;
    dispatch(updateTodo({ id, text }));
    dispatch(updateInput(""));
    dispatch(setIsEditing(false));
    dispatch(setEditingTodoId(null));
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={changeInput}
      />
      {isEditing ? (
        <button
          type="button"
          onClick={handleUpdate}
          className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Edit Todo
        </button>
      ) : (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      )}
    </form>
  );
};

export default AddTodo;
