interface ArrowsProp {
    handleClick(event: React.MouseEvent<HTMLImageElement>): () => {};
    altName:string;
    arrowLink: string;
    classNum: string;
    idLabel: string;
}

const ArrowsIcon = (props: ArrowsProp) => {
    return (
        <div className={`controller-item${props.classNum}`} id={props.idLabel} onClick={props.handleClick}>
            <div>
                <img
                    src={props.arrowLink}
                    alt={props.altName}
                />
            </div>
        </div>
    )
}

export default ArrowsIcon