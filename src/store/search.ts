import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {IUserType} from "../types";

export const fetchUserList = createAsyncThunk(
    'users/fetchUserList',
    async (inputVal: string, {rejectWithValue}) => {
        const response = await fetch(`https://api.github.com/search/users?q=${inputVal}`);
        if(!response.ok){
            return rejectWithValue('Server responses with error')
        }
        const data = await response.json();
        return data;
    }
)

interface UsersState {
    userList: {
        items: IUserType[]
    }
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    userList: {
        items: []
    },
    loading: 'idle',
} as UsersState

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserList.fulfilled, (state, action) => {
                state.userList = action.payload
            })
    },
})

export default usersSlice;