import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './redux/reducer/counter-slice';

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: []
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;