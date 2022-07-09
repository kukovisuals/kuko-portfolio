import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import "./App.scss";
import { SideBarMenu } from "./components";
import { useAppSelector } from "./Hook/Hook";
import kuko from './data/gallery.json';

function App() {
    const carouselDirection = useAppSelector((state) => state.counter.value);
    const carouselHorizontal = useAppSelector(
        (state) => state.counter.horizontal
    );
    const art = kuko.art['shaders']

    console.log(carouselDirection);
    const moveCarousel = {};

    return (
        <div className="App">
            <div className="controller-remote-buttons-item1">
                <div className="controller-remote-buttons-img active">
                    <img
                        src="https://visualpharm.com/assets/400/Modern%20Art-595b40b75ba036ed117d867c.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div className="controller-remote-buttons-item2">
                <div className="controller-remote-buttons-img">
                    <img
                        src="https://visualpharm.com/assets/951/Web%20Design-595b40b75ba036ed117d6dd6.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div className="controller-remote-buttons-item3">
                <div className="controller-remote-buttons-img">
                    <img
                        src="https://visualpharm.com/assets/818/List%202-595b40b65ba036ed117d2f25.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div className="controller-remote-buttons-item4">
                <div className="controller-remote-buttons-img">
                    <img
                        src="https://visualpharm.com/assets/787/Github-595b40b75ba036ed117d609e.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div className="controller-carusel" style={moveCarousel}>
                <ArtImage key={art[carouselDirection]} pagina={art[carouselDirection]} />
            </div>

            <SideBarMenu />

            <div className="controller-hide"></div>
        </div>
    );
}

interface PageProp {
    pagina: string;
}

const ArtImage = (props: PageProp) => (
    <div className="controller-carusel-items">
        <div className="controller-carusel-image">
            <img src={props.pagina} alt="kukoart" />
        </div>
    </div>
);
export default App;
