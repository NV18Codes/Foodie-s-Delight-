import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themeslice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});
