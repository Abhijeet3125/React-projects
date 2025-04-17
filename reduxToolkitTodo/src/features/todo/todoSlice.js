import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  isEditing: false,
  editingTodoId: null,
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

//how to make a reducer
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateInput: (state, action) => {
      state.input = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    updateTodo: (state, action) => {
      const id = action.payload.id;
      const text = action.payload.text;

      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
    setEditingTodoId: (state, action) => {
      state.editingTodoId = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateInput, setIsEditing, updateTodo ,setEditingTodoId } =
  todoSlice.actions;

export default todoSlice.reducer;
