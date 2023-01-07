import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../AxiosApi/api'

const initialState = {
    loading : false ,
    dataApi : [] , 
    error : ""
}

export const FetchData = createAsyncThunk('chat/fetch', async()=>{
    const res = await api.get("/ask")
    return res.data

})
export const chatAiSlice = createSlice({
    initialState,
    name: "chat" ,
    extraReducers :  {
        [FetchData.pending] : (state) =>{
            state.loading = true
        } ,
        [FetchData.fulfilled] : (state , action) => {
            state.loading = false 
            state.dataApi.push(action.payload)
            state.error = ''

        } ,
        [FetchData.rejected] : (state , action) =>{
            state.loading = false 
            state.dataApi = []
            state.error =  action.error.message
        }
    }
    

})

export default chatAiSlice.reducer