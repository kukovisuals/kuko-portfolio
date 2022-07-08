import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import rootReducer from "./reducers";

export interface CounterState {
    education: string;
    value: number;
    horizontal: number;
}

const initialState: CounterState = {
    education: '',
    value: 0,
    horizontal: 0
}

const move = 400;
const moveLeft = 550;

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        up(state:any){
            if(state.value >= 400){
                state.value = -550
            } else {
                state.value += moveLeft
            }
            console.log(state.value)
        },
        down(state:any){
            if(state.value <= -550 ){
                state.value = 400
            } else {
                state.value -= moveLeft
            }
            console.log(state.value)
        },
        left(state:any){
            if(state.horizontal === 0){
                state.horizontal = -1650
            } else {
                state.horizontal += moveLeft
            }
            console.log(state.horizontal)
        },
        right(state:any){
            if(state.horizontal <= -1650){
                state.horizontal = 0
            } else {
                state.horizontal -= moveLeft
            }
            console.log(state.horizontal)
        },
        amountAdded(state:any, action: PayloadAction<string>){
            state.education = action.payload
        },
    },
})


export const {down, up, left, right, amountAdded} = counterSlice.actions
export default counterSlice.reducer
