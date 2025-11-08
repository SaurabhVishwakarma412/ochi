import React from 'react'

const Cards = () => {
  return (
    <div className='cardcontainer flex items-center h-screen px-24 w-full gap-5 bg-zinc-900'>
      <div className='relative w-1/2 h-[50vh] bg-[#004d43] rounded-xl flex items-center justify-center '>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="ochi" />
        <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5'>&copy; 2019-2025</button>
      </div>
      <div className='w-1/2 flex gap-5 h-[50vh]  rounded-xl'>
        <div className='w-1/2 relative flex items-center justify-center h-[50vh] bg-zinc-950 rounded-xl'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5 uppercase'>Rating 5.0 on cluch</button>

        </div>
        <div className='w-1/2 relative flex items-center justify-center h-[50vh] bg-zinc-800 rounded-xl'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5 uppercase'>Business bootcamp alumni</button>
        </div>
        
      </div>
    </div>
  )
}

export default Cards
