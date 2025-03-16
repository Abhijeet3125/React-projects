import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1); //when we use a callback function inside , it does not execute in batch , it executes one by one by taking the previous count value
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={handleInc}>count {count}</button>
      <br />
      <br />
      <button onClick={handleDec}>count {count}</button>
    </>
  );
}

export default App;
