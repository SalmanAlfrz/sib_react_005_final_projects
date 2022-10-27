import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    search: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchAdded: {
            reducer(state, action) {
                state.search = action.payload
            }
        }
    }
})

export const { searchAdded } = searchSlice.actions
export default searchSlice.reducer