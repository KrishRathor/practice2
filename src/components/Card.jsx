import React from 'react'

const Card = (e) => {
    // console.log(e);
  return (
    <div className='bg-gray-950 m-2 h-120 w-80  pt-4 inline-block text-white border-1 border-amber-500'>
        <img src={e.photo} alt="" className='h-60 w-60 pl-4 border-pink-900 mb-4'/>
        <h1 className='text-2xl font-bold ml-5 mb-2'>{e.name}</h1>
        <h2 className='text-xl mb-2 font-semibold ml-5 text-blue-600'>{e.city}</h2>
        <h2 className='text-xl font-semibold ml-5 mb-2'>{e.profession}</h2>
        <h2 className='text-xl font-semibold ml-5 mb-2'>{e.age}</h2>
        <button className='bg-green-900 ml-5 mt- mb-2 p-1.5 rounded-xl font-bold text-amber-300 active:scale-110'>ADD FRIEND</button>
    </div>
  )
}

export default Card