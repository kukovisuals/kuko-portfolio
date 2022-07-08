import React from 'react';
import './ButtonMain.scss';
   
function ButtonMain() {
    const [active, setActive] = React.useState<boolean>(true);
    const [classButton, setClassButton] = React.useState<string>('')

    React.useLayoutEffect(() => {
        let name = ''
        if(active){
            name = 'button-element'
        } else {
            name = 'button-element-active'
        }
        setClassButton(name)
    },[active])

    return( 
        <div className="something-container">
            <div className="button-container">
                <div className="button-wrapper">
                    <button onClick={() => setActive(!active)} className={classButton}></button>
                </div>
            </div>
        </div>  
    );
}

export default ButtonMain;