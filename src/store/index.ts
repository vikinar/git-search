import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import {userApi} from "../api/user";
import usersSlice from "./search"
import {useDispatch} from "react-redux";
import paginationSlice from "./pagination";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        userList: usersSlice.reducer,
        pagination: paginationSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();