import React from "react";
import "./SideBarMenu.scss";
// import { sideBar } from "../../data/sideBar";
// import { Link } from "react-router-dom";
// import { ListProps } from "../utilities/_namesAndStuff";
import { useAppDispatch, useAppSelector } from "../../Hook/Hook";
import { down, up, left, right } from "../../redux/reducer/counter-slice";

function SideBarMenu() {
    return (
        <nav className="controller-dark-theme">
            <ArrowsRemote />
        </nav>
    );
}

const ArrowsRemote = () => {
    const carouselDirection = useAppSelector((state) => state.controller);
    const dispatch = useAppDispatch();

    const handleClick = (event: React.MouseEvent<HTMLImageElement>): any => {
        event.stopPropagation();
        moveCarousel(event.currentTarget.id);
    };

    const moveCarousel = (name: string | number): void => {
        switch (name) {
            case "up":
            case 38:
                dispatch(up());
                break;
            case "down":
            case 40:
                dispatch(down());
                break;
            case "left":
            case 37:
                dispatch(left(carouselDirection));
                break;
            case "right":
            case 39:
                dispatch(right(carouselDirection));
                break;
            default:
                throw new Error("Something went wrong");
        }
    };

    React.useEffect(() => {
        const keyDownFucntion = (ev: KeyboardEvent) => {
            moveCarousel(ev.keyCode);
        };

        document.addEventListener("keydown", keyDownFucntion);

        return () => document.removeEventListener("keydown", keyDownFucntion);
    }, [moveCarousel]);

    console.log(carouselDirection)
    return (
        <div className="controller-remote-grid">
            <div className="controller-item1" id="up" onClick={handleClick}>
                <div>
                    <img
                        src="https://visualpharm.com/assets/932/Collapse%20Arrow-595b40b75ba036ed117d6f0b.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div className="controller-item2" id="left" onClick={handleClick}>
                <div>
                    {" "}
                    <img
                        src="https://visualpharm.com/assets/107/Back-595b40b65ba036ed117d1766.svg"
                        alt="up"
                    />{" "}
                </div>
            </div>
            <div className="controller-item3">
                <div></div>
            </div>
            <div className="controller-item4" id="right" onClick={handleClick}>
                <div>
                    {" "}
                    <img
                        src="https://visualpharm.com/assets/746/Forward-595b40b65ba036ed117d1767.svg"
                        alt="up"
                    />{" "}
                </div>
            </div>
            <div className="controller-item5" id="down" onClick={handleClick}>
                <div>
                    {" "}
                    <img
                        src="https://visualpharm.com/assets/409/Expand%20Arrow-595b40b75ba036ed117d74ae.svg"
                        alt="up"
                    />{" "}
                </div>
            </div>
        </div>
    );
};


export default SideBarMenu;
