import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../AxiosApi/api'

const initialState = {
    loading : false ,
    dataApi : [] , 
    fromMe : [] ,
    error : ""
}

export const FetchData = createAsyncThunk('chat/fetch', async(q)=>{
    const res = await api.get(`/ask?q=${q}`)
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
    } ,
    reducers : {
        list_Me : (state , action) =>{

         state.fromMe.push(action.payload)

        }
    }
    

})
export const {list_Me} = chatAiSlice.actions
export default chatAiSlice.reducer