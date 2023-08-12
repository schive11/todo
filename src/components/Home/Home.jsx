import React, { useEffect } from "react";
import './Home.css';
import lmLOGO from '../../images/icon-moon.svg';
import { useState } from "react";
import dmLOGO from '../../images/icon-sun.svg';
import List from "../Todo/List";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

  const toggleTheme = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    localStorage.setItem("theme",theme);
    document.body.className = theme;
  })

    return (
        <>
        <div className="home">
            <div className={`header-container-${theme}`}>
                <div className="header">
                    <h1>TODO</h1>
                    <button className={"theme-button"} onClick={toggleTheme}>
                        <img src={theme === 'dark' ? dmLOGO : lmLOGO}></img>
                    </button>
                </div>
            </div>
            <List theme={theme} />
        </div>
        </>
    )
}

export default Home;