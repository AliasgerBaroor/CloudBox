import { configureStore } from "@reduxjs/toolkit";
import user from "./user_slice";

export const sotre = configureStore({
    reducer : {
         user : user,
    }
   
})