import "./navbar.css"
import Logo from"./Logo"
import {useState, useEffect, Fragment } from "react"
import LanguageDropdown from "./LanguageDropdown";

const navbar = () => {
 
const [darkMode, setDarkMode] = useState(false)
 const [rotation, setRotation] = useState(0);
const handleClick = () => {
   setDarkMode(prev => !prev);
    setRotation(prev => prev + 360); 
  };

  useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}, [darkMode]);
  return (
    <Fragment>
        <nav className={`navigation ${darkMode ? 'dark' : 'light'}`}>
         <Logo></Logo>
           <LanguageDropdown></LanguageDropdown>

<div className="app-container">
          <button
            className="toggle-button"
            style={{ transform: `rotate(${rotation}deg)` }}
            onClick={handleClick}
          >
            <img src="src/assets/sun-line.svg" alt="toggle theme" />
          </button>
        </div>
        
        </nav>

    </Fragment>
  )
  
}

export default navbar