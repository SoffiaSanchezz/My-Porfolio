import React, { useState } from "react"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/Home/NavBar"
import Hero from "./Components/Home/Hero";
import Services from "./Components/Home/Services";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {

  //funcion Modo Dia Noche
  const [darkMode, setDarkMode] = useState (false);

  return (
    <div className={darkMode && "dark"}>
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/> 

    <main className="bg-white dark:bg-moon text-moon dark:text-white">
    <Hero />
    <Services/>
    <Project />
    <Skills />
    <Contact />
    </main>
    </div>
  )
}

export default App
