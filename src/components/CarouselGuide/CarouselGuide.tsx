import React from "react";
import './CarouselGuide.scss'
import { useAppSelector, useAppDispatch } from "../../Hook/Hook";

const CarouselGuide = () => {
    const carouselSize = useAppSelector((state) => state.counter.carouselSize);

        // console.log(carouselSize)


    return (
        <div className="CarouselGuide">
           <div className="CarouselGuide-container">
               <div className="CarouselGuide-list">
                   o
               </div>
           </div>
        </div>
    );
};




export default CarouselGuide;