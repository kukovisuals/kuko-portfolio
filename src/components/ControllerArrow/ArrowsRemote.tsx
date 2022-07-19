import React from "react";
// import MoverCarousel from "../../redux/actions/MoverCarousel";
import { useAppDispatch, useAppSelector } from "../../Hook/Hook";
import { down, up, left, right, setCarouselSize } from "../../redux/reducer/counter-slice";
import {ArrowUp, ArrowDown, ArrowLeft, ArrowRight} from './ArrowDirection';
import ArrowsIcon from './ArrowsIcon';


const ArrowsRemote = () => {
    const [arrowColor, setArrowColor] = React.useState('active-art')

    const carouselDirection = useAppSelector((state) => state.controller);
    const dispatch = useAppDispatch();

    
    const handleClick = (event: React.MouseEvent<HTMLImageElement>): any => {
        event.stopPropagation();
        moveCarousel(event.currentTarget.id);
    };

    const menuOption = (data: any) => {
        const values = Object.entries(data)
        let optionArrowColor = ''
        let active = ''

        for(const [k, v] of values){
            // check if the button is true 
            if(v){
                active = k
                break;
            }
        }
        
        switch(active){
            case 'art': 
                optionArrowColor = 'active-art'
                break;
            case 'work': 
                optionArrowColor = 'active-work'
                break;
            case 'project': 
                optionArrowColor = 'active-project'
                break;
            case 'contact': 
                optionArrowColor = 'active-contact'
                break;
            default: 
                throw new Error('Active colors went wrong')
                break
        }
        setArrowColor(optionArrowColor)
    }

    const moveCarousel = (name: string | number): void => {
        

        switch (name) {
            case "up":
            case 38:
                dispatch(up());
                dispatch(setCarouselSize(carouselDirection))
                break;
            case "down":
            case 40:
                dispatch(down());
                dispatch(setCarouselSize(carouselDirection))
                break;
            case "left":
            case 37:
                dispatch(setCarouselSize(carouselDirection))
                dispatch(left());
                break;
            case "right":
            case 39:
                dispatch(setCarouselSize(carouselDirection))
                dispatch(right());
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

        menuOption(carouselDirection);

        return () => document.removeEventListener("keydown", keyDownFucntion);
    }, [carouselDirection]);
    

    // console.log(carouselDirection)
    return (
        <div className="controller-remote-grid">
            
            <ArrowsIcon
                classNum="1"
                idLabel="up"
                handleClick={handleClick}
                arrowLink={<ArrowUp classSvg={arrowColor}/>}
                altName="up"
            />
   
            <ArrowsIcon
                classNum="2"
                idLabel="left"
                handleClick={handleClick}
                arrowLink={<ArrowLeft classSvg={'sides'}/>}
                altName="left"
            />
            <ArrowsIcon
                classNum="4"
                idLabel="right"
                handleClick={handleClick}
                arrowLink={<ArrowRight classSvg={'sides'}/>}
                altName="right"
            />
   
            <ArrowsIcon
                classNum="5"
                idLabel="down"
                handleClick={handleClick}
                arrowLink={<ArrowDown classSvg={arrowColor}/>}
                altName="down"
            />
        </div>
    );
};




export default ArrowsRemote;