import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("copy");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) {
      str += "0123456789";
    }

    if (charactersAllowed) {
      str += "[{}]@#$&%~";
    }

    for (let i = 1; i <= length; i++) {
      let charInd = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charInd);
    }

    setPassword(pass);
  }, [length, numbersAllowed, charactersAllowed, setPassword]);




  const copyPassToClip = useCallback(() => {
    setCopy("copied");
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    setCopy("copy");
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  //useRef hook
  const passwordRef = useRef(null);
  return (
    <>
      <div className="bg-black flex justify-center items-center h-screen">
        <div className="bg-green-300 h-70 w-150 rounded-2xl flex flex-col p-[1rem]">
          <div className="text-4xl font-bold flex items-center justify-center pt-[1.5rem]">
            Password Generator
          </div>
          <div className="flex flex-row h-[45%] w-full justify-center items-center overflow-hidden">
            <input
              type="text"
              className="w-[80%] bg-white rounded-l-2xl h-[40%] p-2"
              value={password}
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-blue-500 h-[40%] w-[15%] rounded-r-2xl text-white shrink-0 hover:bg-green-700 cursor-grab"
              onClick={copyPassToClip}
            >
              {copy}
            </button>
          </div>
          <div className="flex flex-row p-4 gap-x-5 w-[90%] justify-center items-center h-[27%]">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointor size-x-40"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="font-semibold">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={numbersAllowed}
                id="numberInput"
                className="cursor-pointer size-5"
                onChange={() => setNumbersAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" className="font-semibold">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={charactersAllowed}
                id="characterInput"
                className="cursor-pointer size-5"
                onChange={() => setCharactersAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput" className="font-semibold">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
