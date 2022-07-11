import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './redux/reducer/counter-slice';
import controllerReducer from './redux/reducer/controller-slice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        controller: controllerReducer
    },
    middleware: []
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;