import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page: 1
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        nextPage: state => {
            state.page++
        },

        reset: () => initialState
    }
})


export const { nextPage, reset } = paginationSlice.actions
export default paginationSlice