import React from "react";
import "./App.scss";
import { SideBarMenu } from "./components";
import { useAppSelector, useAppDispatch } from "./Hook/Hook";
import {
    artButton,
    workButton,
    projectButton,
    contactButton,
} from "./redux/reducer/controller-slice";
import { restart } from "./redux/reducer/counter-slice";
import kuko from "./data/gallery.json";

import { workLinks, projectLinks, contactLinks } from "./data/linksWork";

function App() {
    const [displaySelection, setDisplaySelection] = React.useState('Art')
    const [chooseButton, setChooseButton] = React.useState(['art', 'work','project', 'contact'])

    const carouselDirection = useAppSelector((state) => state.counter.value);
    const buttonIndex = useAppSelector((state) => state.counter.buttonMenu);

    const controllerArt = useAppSelector((state) => state.controller);

    const dispatch = useAppDispatch();

    const art = kuko.art["shaders"];
    const work = kuko.work["shaders"];
    const project = kuko.project["shaders"];
    const contact = kuko.contact["shaders"];

    const dispatchButtonAction = (data: any) =>{
        switch (data) {
            case "art":
                dispatch(artButton());
                dispatch(restart());
                setDisplaySelection('Art')
                break;
            case "work":
                dispatch(workButton());
                dispatch(restart());
                setDisplaySelection('Work')
                break;
            case "project":
                dispatch(projectButton());
                dispatch(restart());
                setDisplaySelection('Projects')
                break;
            case "contact":
                dispatch(contactButton());
                dispatch(restart());
                setDisplaySelection('Contact')
                break;
            default:
                throw new Error("Something went wrong");
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        const chosenDiv = event.currentTarget.id;
        dispatchButtonAction(chosenDiv)
    };

    React.useLayoutEffect(() =>{

        dispatchButtonAction(chooseButton[buttonIndex]);
    },[buttonIndex])

    
    // console.log(  buttonIndex);

    const DisplayArt = () => {
        return (
            <>
                {controllerArt.art && (
                    <ArtImage
                        key={art[carouselDirection]}
                        pagina={art[carouselDirection]}
                    />
                )}
                {controllerArt.work && (
                    <ArtImage
                        displayLink={workLinks[carouselDirection]}
                        key={work[carouselDirection]}
                        pagina={work[carouselDirection]}
                    />
                )}
                {controllerArt.project && (
                    <ArtImage
                        displayLink={projectLinks[carouselDirection]}
                        key={project[carouselDirection]}
                        pagina={project[carouselDirection]}
                    />
                )}
                {controllerArt.contact && (
                    <ArtImage
                        displayLink={contactLinks[carouselDirection]}
                        key={contact[carouselDirection]}
                        pagina={contact[carouselDirection]}
                    />
                )}
            </>
        );
    };

    const activeArt = controllerArt.art ? "active-art" : "";
    const activeWork = controllerArt.work ? "active-work" : "";
    const activeProject = controllerArt.project ? "active-project" : "";
    const activeContact = controllerArt.contact ? "active-contact" : "";

    // console.log(activeArt);
    return (
        <div className="App">
            <div
                className="controller-remote-buttons-item1"
                id="art"
                onClick={handleClick}
            >
                <div className={`controller-remote-buttons-img ${activeArt}`}>
                    <img
                        src="https://visualpharm.com/assets/30/Brush-595b40b85ba036ed117daf66.svg"
                        alt="art"
                    />
                </div>
            </div>
            <div
                className="controller-remote-buttons-item2"
                id="work"
                onClick={handleClick}
            >
                <div className={`controller-remote-buttons-img ${activeWork}`}>
                    <img
                        src="https://visualpharm.com/assets/879/Website-595b40b65ba036ed117d08d6.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div
                className="controller-remote-buttons-item3"
                id="project"
                onClick={handleClick}
            >
                <div
                    className={`controller-remote-buttons-img ${activeProject}`}
                >
                    <img
                        src="https://visualpharm.com/assets/110/Worker-595b40b85ba036ed117db970.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div
                className="controller-remote-buttons-item4"
                id="contact"
                onClick={handleClick}
            >
                <div
                    className={`controller-remote-buttons-img ${activeContact}`}
                >
                    <img
                        src="https://visualpharm.com/assets/981/Email-595b40b75ba036ed117d5da9.svg"
                        alt="up"
                    />
                </div>
            </div>

            <div className="controller-carusel-description">
                <div className="controller-carusel-description-container">
                    <span>{displaySelection}</span>
                </div>
            </div>
            <div className="controller-carusel">
                <DisplayArt />
            </div>

            <SideBarMenu />

            <div className="controller-hide"></div>
        </div>
    );
}

interface PageProp {
    pagina: string;
    displayLink?: string;
}

const ArtImage = (props: PageProp) => {
    // console.log(props.displayLink);
    return (
        <div className="controller-carusel-items">
            <div className="controller-carusel-image">
                <a href={props.displayLink}>
                    <img src={props.pagina} alt="kukoart" />
                </a>
            </div>
        </div>
    );
};
export default App;
