import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Icons'

function Navbar(props) {
    const {activeTab}=props
  return (
    <>
        <div className="z-10 flex flex-row items-center justify-between w-full p-3 bg-[#531616] fixed top-0 left-0 ">
        <div><Link to="/" className='flex flex-row items-center gap-2 font-serif font-bold text-[20px] text-white'><Logo color="white"/>MovieApp</Link></div>
        <div className='flex flex-row justify-between w-1/4 '>
            <div className={`flex flex-row p-1 ${activeTab==="movies"?"text-white font-semibold":"text-gray-400"} hover:text-gray-100`}><Link to="/movies">Movies</Link> </div>
            {/* <div className={`flex flex-row p-1 ${activeTab==="about"?"text-white font-semibold":"text-gray-400" } hover:text-gray-100`}><Link to="/about">About Us</Link></div> */}
            {/* <div className={`flex flex-row p-1 ${activeTab==="contact"?"text-white font-semibold":"text-gray-400" } hover:text-gray-100`}><Link to="/contact">Contact Us</Link></div> */}
        </div>
    </div>
    </>
  )
}

export default Navbar