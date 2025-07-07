import { React, useContext } from "react";
import { themeContext } from "./App";
const Theme = () => {
    const { theme, setTheme } = useContext(themeContext);
    return (
        <div
        className={`${theme === "dark" ? "dark-theme" : "light-theme"} h-[0px]`}
        >
        <button
            className="btn-theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? "☀️" : "🌙"}
        </button>
        </div>
    );
};

export default Theme;
