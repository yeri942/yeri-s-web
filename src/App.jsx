import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import AboutMe from "./AboutMe";
import Stacks from "./Stacks";
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import "./App.css";
function App() {
    return (
        <div className="App">
            <Nav />
            <Main />
            <AboutMe />
            <Stacks />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;
