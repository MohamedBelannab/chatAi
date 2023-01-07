import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from './Redux/ApiSlice'

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.chatAi)
  useEffect(()=>{
    dispatch(FetchData())
   
  } , [])
  console.log(data);

  
  return (
    <div>{data.dataApi && data.dataApi.map((e)=> <h1>{e.answers}</h1>)}</div>
  )
}

export default App