import { createSlice} from '@reduxjs/toolkit';
// import rootReducer from "./reducers"; PayloadAction

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

// const move = 400;
const moveLeft = 1;

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        up(state:any){
            if(state.value > 11){
                state.value = 0
            } else {
                state.value += moveLeft
            }
            console.log(state.value)
        },
        down(state:any){
            if(state.value === 0 ){
                state.value = 11
            } else {
                state.value -= moveLeft
            }
            console.log(state.value)
        },
        left(state:any){
            if(state.value >= 11){
                state.value = 0
            } else {
                state.value += moveLeft
            }
            console.log(state.value)
        },
        right(state:any){
            if(state.value === 0){
                state.value = 11
            } else {
                state.value -= moveLeft
            }
            console.log(state.value)
        },
    },
})


export const {down, up, left, right} = counterSlice.actions
export default counterSlice.reducer
