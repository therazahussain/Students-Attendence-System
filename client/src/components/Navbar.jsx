import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/dashboard" },
        { name: "View Attendance", link: "/attendance" },
        { name: "Take Attendance", link: "/add-student" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-purple-400 py-4 md:px-10 px-7'>
                <Link to="/">
                    <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                        <img className='h-10' src="./images/logo.png" alt="" />
                        <span className=" text-2xl pl-3">SAS</span>
                    </div>
                </Link>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-6 top-1 cursor-pointer md:hidden'>
                    <button name={open ? 'close' : 'menu'}>
                        <svg width="64px" height="64px" viewBox="-7.2 -7.2 38.40 38.40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#fffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#fffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
                    </button>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-purple-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-480px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                                <Link to={link.link} className='font-bold text-white p-1 hover:text-purple-800 hover:shadow-md hover:shadow-white hover:bg-white duration-500 rounded overflow-hidden' onClick={() => setOpen(!open)}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar