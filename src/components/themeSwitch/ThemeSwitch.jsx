import React, { useEffect, useState } from "react"
import DarkModeToggle from "react-dark-mode-toggle"

import './style.css'

const DARK_CLASS = "dark"
const LIGHT_CLASS = "light"


const isDarkMode = () => {
    const matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    return matchDarkMode && matchDarkMode.matches
}

export const ThemeSwitch = () => {
    const [isDark, setIsDark] = useState(isDarkMode())
    const [isFirstLoad, setIsFirstLoad] = useState(true)

    useEffect(() => {
        const themeStorage = localStorage.getItem('theme')

        if (isFirstLoad) {
            if(!themeStorage) {

            } else if (themeStorage === 'dark') {
                setIsDark(true)
            } else {
                setIsDark(false)
            }

            return setIsFirstLoad(false)
        }
    }, [isFirstLoad])

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(DARK_CLASS)
            localStorage.setItem('theme', DARK_CLASS)
        } else {
            document.documentElement.classList.remove(DARK_CLASS)
            localStorage.setItem('theme', LIGHT_CLASS)
        }
    }, [isDark])



    return (
        <div className="theme-switch-wrapper">
            <DarkModeToggle
                onChange={setIsDark}
                checked={isDark}
                size={80}
            />
        </div>
    )
}


