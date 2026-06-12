import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name : 'search',
    initialState : {
        item : ''
    },
    reducers : {
        setSearchItem : (state, action)=>{
            state.item = action.payload 
            
        },
    }
})

export const {setSearchItem} = searchSlice.actions ;
export default searchSlice.reducer ;