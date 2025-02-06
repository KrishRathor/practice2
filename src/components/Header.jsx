import React from 'react'
import { Link } from 'react-router-dom'
// import "./header.css"
const Header = () => {
  return (
    <div className=' mt-2 mr-2 ml-2 pl-1 bg-yellow-300 text-red-700 h-8 decoration-yellow-300 flex justify-between items-center font-medium'>
        <h1>Boomer</h1>
        <div className='flex gap-10 pr-1 mr-2'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/details'>Details</Link>
          <Link to='/personal_info'>Personal Info</Link>
          <Link to='/sign_in'>Sign In</Link>
        </div>
    </div>
  )
}

export default Header