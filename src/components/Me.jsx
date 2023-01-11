import React from 'react'

const Me = ({data}) => {
  return (
    <>
    {
      data.map((ele)=>{
        return(<div className='conv'>
        <div className='chat'>
            <span><i class="fa-solid fa-user"></i></span> &nbsp; &nbsp; &nbsp;  <p>{ele.q}</p>
        </div>

    </div>)
      })
    }
    </>
  )
}

export default Me