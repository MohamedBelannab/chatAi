import React from 'react'

const Ai = ({data}) => {
  return (
   <>{
    data.map((ele)=>{
      return ( <div className='conv ai'>
                  <div className='chat'>
                      <span><i class="fa-sharp fa-solid fa-robot"></i></span> &nbsp; &nbsp;&nbsp;  <p>{ele.answers}</p>
                  </div>

                </div>)
    })
   }
   </>
  )
}

export default Ai