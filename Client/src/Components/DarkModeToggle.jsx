import React, { useEffect, useState } from 'react'

const DarkModeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
     document.body.setAttribute('data-theme', theme);
     localStorage.setItem('theme', theme);
    }, [theme])
    
    const toggleButton = () =>{
        setTheme((prevTheme) => (prevTheme == 'light' ? 'dark' : 'light'));
    };

  return (
    <>
        <button onClick={toggleButton} type="button" class="btn btn-info">
        {theme == 'light' ? "Switch to Dark Mode": "Switch to light Mode"}
        </button>

    </>
  )
}

export default DarkModeToggle