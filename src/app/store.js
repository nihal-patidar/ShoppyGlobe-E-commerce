import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import searchReducer from "../redux/searchSlice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        search : searchReducer 
    }
});


// console.log("store", store)

export default store ; 