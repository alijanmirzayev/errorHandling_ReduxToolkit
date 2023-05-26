import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./slice/CustomerSlice";


export const store = configureStore({
    reducer: {
        CustomerSlice: CustomerSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>