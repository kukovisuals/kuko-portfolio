import React from "react";
import "./App.scss";
import { ControllerButtons,ControllerArrow } from "./components";

function App() {
    return (
        <div className="App">
           <ControllerButtons/>
           <ControllerArrow />
        </div>
    );
}


export default App;
