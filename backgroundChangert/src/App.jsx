import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  function changeBgColor(col) {
    setColor(col);
  }

  return (
    <>
      <div
        className="flex justify-center items-end h-screen "
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-row gap-4 bg-white rounded-2xl px-5 py-2 mb-5">
          <button
            className="px-4 py-1 rounded-md bg-red-500"
            onClick={() => changeBgColor("red")}
          >
            Red
          </button>

          <button
            className="px-4 py-1 rounded-md bg-blue-500"
            onClick={() => changeBgColor("blue")}
          >
            Blue
          </button>

          <button
            className="px-4 py-1 rounded-md bg-green-500"
            onClick={() => changeBgColor("green")}
          >
            Green
          </button>

          <button
            className="px-4 py-1 rounded-md bg-orange-500"
            onClick={() => changeBgColor("orange")}
          >
            Orange
          </button>

          <button
            className="px-4 py-1 rounded-md bg-yellow-500"
            onClick={() => changeBgColor("yellow")}
          >
            Yellow
          </button>

          <button
            className="px-4 py-1 rounded-md bg-gray-500"
            onClick={() => changeBgColor("gray")}
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
