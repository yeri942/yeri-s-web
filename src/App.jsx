import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import AboutMe from "./AboutMe";
import Stacks from "./Stacks";
import "./App.css";
function App() {
    return (
        <div className="App">
            <Nav />
            <Main />
            <AboutMe />
            <Stacks />
        </div>
    );
}

export default App;
