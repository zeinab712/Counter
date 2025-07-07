import { React, useReducer, useState, createContext, useEffect } from "react";
import "./App.css";
import Theme from "./theme";

const initialState = 0;
export const themeContext = createContext();

function reducer(state, action) {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] border border-orange-500 p-6 rounded-xl  text-center ">
          <h1 className="text-3xl font-bold">My Counter</h1>
          <h2 className="m-10 text-3xl">Count : {count}</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 justify-center items-center">
            <button onClick={() => dispatch("dec")}>Decrement</button>
            <button onClick={() => dispatch("inc")}>Increment</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
          </div>
        </div>
        <div className="absolute top-4 right-4 z-50">
          <Theme />
        </div>
        <div className="absolute bottom-10 text-center">
          Made With <span className="text-red-600">&hearts;</span> by
          <br />
          <span className="text-xl">Zeinab Hassan</span>{" "}
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
