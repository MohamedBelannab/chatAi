import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from './Redux/ApiSlice'

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.chatAi)
  useEffect(()=>{
    dispatch(FetchData())
   
  } , [])

  
  return (
    <div>App</div>
  )
}

export default App