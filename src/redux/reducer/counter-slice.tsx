import { createSlice, PayloadAction} from '@reduxjs/toolkit';
// import rootReducer from "./reducers"; PayloadAction
import kuko from "../../data/gallery.json";

export interface CounterState {
    education: string;
    value: number;
    buttonMenu: number;
    carouselSize: number;
}

export interface controllerState {
    art: boolean;
    work: boolean;
    project: boolean;
    contact: boolean;
}

const initialState: CounterState = {
    education: '',
    value: 0,
    buttonMenu: 0,
    carouselSize: 12,
}

const moveLeft = 1;

const art = kuko.art["shaders"];
const work = kuko.work["shaders"];
const project = kuko.project["shaders"];
const contact = kuko.contact["shaders"];


const galleryChosen = (data: controllerState): number => {
    
    if(data.art){
        return art.length - 1

    } else if(data.work){
        return work.length - 1

    } else if(data.project){
        return project.length - 1

    } else if(data.contact){
        return contact.length - 1

    } else {
        return 0
    }

}

const numberButtons = 3

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCarouselSize(state,  actions: PayloadAction<controllerState> ){
            state.carouselSize = galleryChosen(actions.payload)
        },
        up(state:any){
            state.buttonMenu = (state.buttonMenu === 0) ? numberButtons : state.buttonMenu - 1
        },
        down(state:any){
            state.buttonMenu = (state.buttonMenu > 0) && (state.buttonMenu % numberButtons === 0) ? 0 : state.buttonMenu + 1
        },
        left(state:any){
            state.value = (state.value > 0) && (state.value % state.carouselSize === 0) ? 0 : state.value + moveLeft
        },
        right(state:any ){
            state.value = (state.value === 0) ? state.carouselSize : state.value - moveLeft
        },
        restart(state:any){
            state.value = 0
        }
    },
})


export const {down, up, left, right, restart, setCarouselSize} = counterSlice.actions
export default counterSlice.reducer

