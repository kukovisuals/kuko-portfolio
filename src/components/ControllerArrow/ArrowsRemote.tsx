import React from "react";
import moveCarousel from "../../redux/actions/arrowsController";
import ArrowsIcon from './ArrowsIcon';

const ArrowsRemote = () => {

    const handleClick = (event: React.MouseEvent<HTMLImageElement>): any => {
        event.stopPropagation();
        moveCarousel(event.currentTarget.id);
    };


    React.useEffect(() => {
        const keyDownFucntion = (ev: KeyboardEvent) => {
            moveCarousel(ev.keyCode);
        };

        document.addEventListener("keydown", keyDownFucntion);

        return () => document.removeEventListener("keydown", keyDownFucntion);
    }, [moveCarousel]);


    return (
        <div className="controller-remote-grid">
            
            <ArrowsIcon
                classNum="1"
                idLabel="up"
                handleClick={handleClick}
                arrowLink="https://visualpharm.com/assets/932/Collapse%20Arrow-595b40b75ba036ed117d6f0b.svg"
                altName="up"
            />
   
            <ArrowsIcon
                classNum="2"
                idLabel="left"
                handleClick={handleClick}
                arrowLink="https://visualpharm.com/assets/107/Back-595b40b65ba036ed117d1766.svg"
                altName="left"
            />
            <ArrowsIcon
                classNum="4"
                idLabel="right"
                handleClick={handleClick}
                arrowLink="https://visualpharm.com/assets/746/Forward-595b40b65ba036ed117d1767.svg"
                altName="right"
            />
   
            <ArrowsIcon
                classNum="5"
                idLabel="down"
                handleClick={handleClick}
                arrowLink="https://visualpharm.com/assets/409/Expand%20Arrow-595b40b75ba036ed117d74ae.svg"
                altName="down"
            />
            
        </div>
    );
};




export default ArrowsRemote;