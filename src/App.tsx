import React from "react";import "./App.scss";
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

function App() {
    const carouselDirection = useAppSelector((state) => state.counter.value);
 
    const controllerArt = useAppSelector((state) => state.controller);

    const dispatch = useAppDispatch();

    const art = kuko.art["shaders"];
    const work = kuko.work["shaders"];
    const project = kuko.project["shaders"];
    const contact = kuko.contact["shaders"];

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        const chosenDiv = event.currentTarget.id;
        switch (chosenDiv) {
            case "art":
                dispatch(artButton());
                dispatch(restart());
                break;
            case "work":
                dispatch(workButton());
                dispatch(restart());
                break;
            case "project":
                dispatch(projectButton());
                dispatch(restart());
                break;
            case "contact":
                dispatch(contactButton());
                dispatch(restart());
                break;
            default:
                throw new Error("Something went wrong");
        }
    };
    // console.log( project, contact);

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
                        key={work[carouselDirection]}
                        pagina={work[carouselDirection]}
                    />
                )}
                {controllerArt.project && (
                    <ArtImage
                        key={project[carouselDirection]}
                        pagina={project[carouselDirection]}
                    />
                )}
                {controllerArt.contact && (
                    <ArtImage
                        key={contact[carouselDirection]}
                        pagina={contact[carouselDirection]}
                    />
                )}

            </>
        );
    };


    const activeArt = controllerArt.art ? 'active' : ''
    const activeWork = controllerArt.work ? 'active' : ''
    const activeProject = controllerArt.project ? 'active' : ''
    const activeContact = controllerArt.contact ? 'active' : ''

    console.log(activeArt)
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
                <div className={`controller-remote-buttons-img ${activeProject}`}>
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
                <div className={`controller-remote-buttons-img ${activeContact}`}>
                    <img
                        src="https://visualpharm.com/assets/981/Email-595b40b75ba036ed117d5da9.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div className="controller-carusel" >
                <DisplayArt/>
            </div>

            <SideBarMenu />

            <div className="controller-hide"></div>
        </div>
    );
}

interface PageProp {
    pagina: string;
}

const ArtImage = (props: PageProp) => {
     console.log(props.pagina)
     return(
        <div className="controller-carusel-items">
            <div className="controller-carusel-image">
                <img src={props.pagina} alt="kukoart" />
            </div>
        </div>
    )
};
export default App;
