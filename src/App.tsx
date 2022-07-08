// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import "./App.scss";
import { SideBarMenu } from "./components";
import { useAppDispatch, useAppSelector } from "./Hook/Hook";

function App() {
    // const [direction, setDirection] = React.useState(0)
    const carouselDirection = useAppSelector((state) => state.counter.value);
    const carouselHorizontal = useAppSelector((state) => state.counter.horizontal);
    const moveCarousel = {
        transform: `translate(${carouselHorizontal}px ,${-300 + carouselDirection}px)`
    };

    // console.log(carouselDirection)
    return (
        <div className="App">

            <SideBarMenu />
            <div className="controller-carusel" style={moveCarousel}>
                <div className="controller-carusel-grid">
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko-000067.png" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko08-1169.jpg" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko08-1325.jpg" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko09-1631.jpg" />

                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko10-1698.jpg" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko10-2885.jpg" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko4-00320.jpg" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko5-00249.png" />

                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko6-00174.png" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko7-0231.jpg" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/voronoi-00044.jpg" />
                    <ArtImage pagina="https://kukoart.s3.amazonaws.com/kuko10-1698.jpg" />
                </div>
            </div>


            <div className="controller-hide">
            </div>
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
