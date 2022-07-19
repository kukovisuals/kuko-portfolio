import React from "react";
import "./App.scss";
import { ControllerButtons,ControllerArrow, CarouselGuide } from "./components";

function App() {
    return (
        <div className="App">
           <ControllerButtons/>
           <ControllerArrow />
           {/*<CarouselGuide />*/}
        </div>
    );
}


export default App;
