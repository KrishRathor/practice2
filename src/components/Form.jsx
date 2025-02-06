import React, { useState } from 'react'

const Form = () => {
    const [Name, setName] = useState("Inshal")
    const names=["Shweta","Mahi","Inshal"]
    const [Naam, setNaam] = useState('')
    const changeName=()=>{
      setName(names[Math.floor(Math.random()*3)]);
    }
  
    const submitHandler=(e)=>{
      e.preventDefault()
      alert(`Hello ${Naam}`);
      setNaam('')
    }
  return (
    <>
        <h1 className='text-white text-3xl font-bold ml-2'>Username is {Name}</h1>
        <button onClick={changeName} className='p-1.5 bg-blue-500 font-medium m-2 rounded-xl'>Change Name</button>
        <form className='text-white m-2'>
            <input 
            className='bg-white text-black pl-2 pt-1 pb-1 rounded-xl'
            value={Naam}
            onChange={(e)=>{
            setNaam(e.target.value);
            }}
            placeholder='Enter your name' 
            type='text' 
            />
            <button 
            className='ml-2 p-1 bg-blue-600 text-black font-medium rounded-xl'
            onClick={(e)=>{
            submitHandler(e);
            }}>Submit</button>
        </form>
    </>
  )
}

export default Form