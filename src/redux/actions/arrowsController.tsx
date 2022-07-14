import { useAppDispatch, useAppSelector } from "../../Hook/Hook";
import { down, up, left, right } from "../../redux/reducer/counter-slice";

const moveCarousel = (name: string | number): void => {

    const carouselDirection = useAppSelector((state) => state.controller);
    const dispatch = useAppDispatch();

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

export default moveCarousel;