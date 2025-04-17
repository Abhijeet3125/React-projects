import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen bg-gray-600 text-white ">
        <h1 className="pt-6">Redux tool kit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
