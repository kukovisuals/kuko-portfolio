import { createSlice } from '@reduxjs/toolkit';
// import rootReducer from "./reducers";
// PayloadAction
export interface controllerState {
    art: boolean;
    work: boolean;
    project: boolean;
    contact: boolean;
}

const initialState: controllerState = {
    art: true,
    work: false,
    project: false,
    contact: false
}


export const controllerSlice = createSlice({
    name: 'controller',
    initialState,
    reducers: {
        artButton(state:any){
            state.art = true
            state.work = false
            state.project = false
            state.contact = false
        },
        workButton(state:any){
            state.work = true
            state.art = false
            state.project = false
            state.contact = false
        },
        projectButton(state:any){
            state.project = true
            state.work = false
            state.art = false
            state.contact = false
        },
        contactButton(state:any){
            state.contact = true
            state.work = false
            state.project = false
            state.art = false

        }
    },
})


export const {artButton, workButton, projectButton, contactButton} = controllerSlice.actions
export default controllerSlice.reducer
