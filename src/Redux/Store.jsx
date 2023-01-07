import { configureStore } from "@reduxjs/toolkit";
import { chatAiSlice } from "./ApiSlice";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE
export const store = configureStore({
    reducer : {chatAi : chatAiSlice.reducer}
})