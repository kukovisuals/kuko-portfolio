

type ArrowProp = {
    classSvg?: any;
}

export const ArrowUp = (props: ArrowProp) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-container">
                <path 
                    className="path-base"  
                    d="M 10,50 50,10 90,50 
                        80,50 50,20 20,50 z"
                />
            </g>
            <path 
                className={props.classSvg}
                d="M 10,50 50,10 90,50 
                    80,50 50,20 20,50 z"
            />
            <path 
                className={`${props.classSvg} active`}
                d="M 10,50 50,10 90,50 
                    80,50 50,20 20,50 z"
            />
    </svg>
)

export const ArrowDown = (props: ArrowProp) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-container">
                <path 
                    className="path-base"  
                    d="M 10,50 50,90 90,50 
                        80,50 50,80 20,50"
                />
            </g>

            <path 
                className={props.classSvg}
                d="M 10,50 50,90 90,50 
                    80,50 50,80 20,50"
            />
            <path 
                className={`${props.classSvg} active`}
                d="M 10,50 50,90 90,50 
                    80,50 50,80 20,50"
            />
    </svg>
)

export const ArrowLeft = (props: ArrowProp) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-container">
                <path 
                    className="path-base"  
                    d="M 50,90 10,50 50,10 
                    50,20 20,50 50,80"
                />
            </g>
            <path 
                className={props.classSvg}
                d="M 50,90 10,50 50,10 
                50,20 20,50 50,80"

            />
    </svg>
)

export const ArrowRight = (props: ArrowProp) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-container">
                <path 
                    className="path-base"  
                d="M 50,90 90,50 50,10 
                   50,20 80,50 50,80"
                />
            </g>
            <path 
                className={props.classSvg}
                d="M 50,90 90,50 50,10 
                   50,20 80,50 50,80"
            />
    </svg>
)
