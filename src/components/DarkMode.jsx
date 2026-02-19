import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:scale-105 transition"

        >
            {darkMode ? <FaSun /> : <FaMoon/>}
        </button>

    )
}
