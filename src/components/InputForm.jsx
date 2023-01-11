import React, { useEffect, useState } from 'react'
import { FetchData } from '../Redux/ApiSlice'
import { useDispatch } from 'react-redux'
import { list_Me } from '../Redux/ApiSlice'

const InputForm = () => {
    const [input , setinputValue] = useState()
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        setinputValue(e.target.elements.question.value)
    }
    useEffect(()=>{
      if(input!==undefined){
        dispatch(FetchData(input))
        dispatch(list_Me(input))

      }
        
      } , [input])

  return (
        <div className='ask'>
          <form onSubmit={handleSubmit} action="">
            <div className='ask-row'><input type="text" name='question' /></div>
          </form>
        </div>
  )
}

export default InputForm