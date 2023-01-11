import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import InputForm from './components/InputForm'
import Ai from './components/Ai'
import Me from './components/Me'

const App = () => {
  const data = useSelector(state => state.chatAi)
  
  console.log(data);

  
  return (
    <div className='main'>
      <div className="page">
        <div className="conversation">
        <Me data={data.dataApi}/>
         <Ai data={data.dataApi} /> 
        </div>
        <InputForm/>
      </div>
      
     
      
      
    </div>
  )
}

export default App