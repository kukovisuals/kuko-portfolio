import React from "react";
import "./SideBarMenu.scss";
// import { sideBar } from "../../data/sideBar";
// import { Link } from "react-router-dom";
// import { ListProps } from "../utilities/_namesAndStuff";
import { useAppDispatch, useAppSelector } from "../../Hook/Hook";
import { down, up,left, right, amountAdded } from "../../redux/reducer/counter-slice";


function SideBarMenu() {


    return (
        <nav className="controller-dark-theme">
            <div className="controller-remote">
                <ArrowsRemote/>
                <SeatchRemote/>
                <ButtonsRemote/>
                <ContactRemote/>
            </div>
            
        </nav>
    );
}

const ArrowsRemote = () => {

    const dispatch = useAppDispatch();

   const handleClick = (event: React.MouseEvent<HTMLImageElement>): any => {
        event.stopPropagation();
       // console.log(event.currentTarget.id)
       useMove(event.currentTarget.id)

   }
    const useMove = (name:string | number):void => {

        switch(name){
           case 'up':  
           case 38:
               dispatch(up());
           break
           case 'down':
           case 40:  
               dispatch(down());
           break
           case 'left':  
           case 37:
               dispatch(left());
           break
           case 'right':  
           case 39:
               dispatch(right());
           break
           default: throw new Error('Something went wrong')
       }
    }   


    React.useEffect(() => {
        window.onkeydown = (ev: KeyboardEvent): any => {
             // console.log(ev.keyCode)
             useMove(ev.keyCode)
        }
        return () => {}
    },[])
    
    return(

        <div className="controller-remote-grid">
            <div className="controller-item1" id="up"  onClick={handleClick} >
                <div>
                    <img
                        src="https://visualpharm.com/assets/932/Collapse%20Arrow-595b40b75ba036ed117d6f0b.svg"
                        alt="up"
                    />
                </div>
            </div>
            <div className="controller-item2" id="left" onClick={() => dispatch(left()) }>
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
            <div className="controller-item4" id="right" onClick={() => dispatch(right()) }>
                <div>
                    {" "}
                    <img
                        src="https://visualpharm.com/assets/746/Forward-595b40b65ba036ed117d1767.svg"
                        alt="up"
                    />{" "}
                </div>
            </div>
            <div className="controller-item5" id="down"  onClick={() => dispatch(down())}>
                <div>
                    {" "}
                    <img
                        src="https://visualpharm.com/assets/409/Expand%20Arrow-595b40b75ba036ed117d74ae.svg"
                        alt="up"
                    />{" "}
                </div>
            </div>
        </div>
    )
}

const SeatchRemote = () => (
    <div className="controller-remote-search">
        <div className="controller-remote-input">
            <input type="text"/>
        </div>
    </div>
)

const ButtonsRemote = () => (
    <div className="controller-remote-buttons">
        <div className="controller-remote-buttons-grid">
            <div className="controller-remote-buttons-item1">
                <div className="controller-remote-buttons-img">

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
            <div className="controller-remote-buttons-item5">
                <div className="controller-remote-buttons-img">

                <img
                    src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                    alt="up"
                />
                </div>
            </div>
            <div className="controller-remote-buttons-item6">
                <div className="controller-remote-buttons-img">

                <img
                    src="https://visualpharm.com/assets/643/YouTube%202-595b40b85ba036ed117dae8f.svg"
                    alt="up"
                />
                </div>
            </div>
            <div className="controller-remote-buttons-item7">
                <div className="controller-remote-buttons-img">

                <img
                    src="https://visualpharm.com/assets/238/Globe%20Earth-595b40b65ba036ed117d13f8.svg"
                    alt="up"
                />
                </div>
            </div>
        </div>
    </div>
)

const ContactRemote = () => (
    <div className="controller-remote-contact">
        <div className="controller-remote-contact-container">
            <button>Contact </button>
        </div>
    </div>
)

export default SideBarMenu;
