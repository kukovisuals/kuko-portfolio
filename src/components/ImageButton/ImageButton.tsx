// import React from 'react';
import './ImageButton.scss';
   
interface ImageProps{
    classItem:string;
    buttonElement: string;
    title?: string;
    title2?: string;
    title3?: string;
}
function ImageButton(props:ImageProps ) {

    return( 

        <div className={props.classItem}>
            <div className="button-container">
                <div className="button-wrapper">
                    <div className={props.buttonElement}>
                        <span className="title-span">{props.title}</span>
                        <span className="title-span">{props.title2}</span>
                        <span className="title-span">{props.title3}</span>
                    </div>
                </div>
            </div>
        </div>   
       

    );
}

export default ImageButton;