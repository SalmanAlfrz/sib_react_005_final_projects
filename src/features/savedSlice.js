import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        savedAdded: {
            reducer(state, action){
             state.data.push(action.payload)
            },
        },  
        savedDelete: {
            reducer(state, action){
                // state.data.splice(action.payload, 1)
                state.data = state.data.filter((data) => data.title !== action.payload)
            }
        }
    }
})

export const {savedAdded, savedDelete} = savedSlice.actions

export default savedSlice.reducer