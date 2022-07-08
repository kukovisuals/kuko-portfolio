// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import './App.scss';
import {ImageButton} from './components';
   
function App() {

    return( 
        <div className="App">

            <div className="grid-road">
                <ImageButton title="Freddy" buttonElement="button-element" classItem="grid-item-cell-1"/>
                <ImageButton title="2022" buttonElement="button-element" classItem="grid-item-cell-2"/>
                <ImageButton buttonElement="button-element-hide" classItem="grid-item-cell-3"/>
                <ImageButton title="Software Engineer" title2="@" title3="Hall of Fame" buttonElement="button-element" classItem="grid-item-cell-4"/>
                <ImageButton title="px" buttonElement="button-element" classItem="grid-item-cell-5"/>
                <ImageButton title="Projects" buttonElement="button-element" classItem="grid-item-cell-6"/>
                <ImageButton title="Freddy" buttonElement="button-element" classItem="grid-item-cell-7"/>
            </div> 

            <svg className="svg-element" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M 44,-2
                        C 76 40, 76 85, 37 90,
                        -7 100, -7 160, 37 160,
                        63 158, 67 150, 68 125,
                        70 100, 80 90, 100 90,
                        132 90, 132 115, 132 125 "
                   fill="none"/>

                {/*<circle cx="67" cy="52" r="1"/>
                <circle cx="37" cy="90" r="1"/>
                
                <circle cx="5" cy="125" r="1"/>  
                <circle cx="37" cy="160" r="1"/> 
                
                <circle cx="68" cy="125" r="1"/>   
                <circle cx="60" cy="153" r="1"/>

                <circle cx="100" cy="90" r="1"/>   
                <circle cx="132" cy="125" r="1"/>  */} 
            </svg>
        </div>    

    );
}

export default App;