'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineLightMode, MdOutlineMenu } from 'react-icons/md'

import {AiOutlineHome, AiOutlineClose, AiOutlineMail, AiOutlineProject} from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [sideBar, setSideBar] = useState(false)

    useEffect(()=>{
        if(darkMode){
            window.document.documentElement.classList.add("dark")
        }else{
            window.document.documentElement.classList.remove("dark")
        }
    },[darkMode])

    const handleClick = () => {
        setDarkMode(!darkMode)
    }
    
    const handleSideBar = () => {
        setSideBar(!sideBar)
    }

  return (
    <header className='relative'>
    <div className='fixed shadow-sm shadow-gray-600 z-[800] px-2 md:px-4 py-2 md:py-4 text-xs sm:text-base md:text-xl lg:text-2xl w-full text-sky-400 dark:text-white dark:bg-slate-900 bg-gray-50'>
        <nav className='flex justify-between w-full items-center'>
        <div className='flex items-center gap-2'>
        <Link href="/" className="p-1 border-2 border-slate-900 rounded-full dark:border-sky-400 hover:scale-110 ease-in duration-200">  
            <div>MB</div>
        </Link>
        <span className='hidden lg:flex'>Michael Balderas</span>
        </div>
        <div className='hidden justify-evenly sm:flex gap-2 md:gap-4 lg:gap-6'>
            <Link href="/#about" className='hover:underline truncate'>About</Link>
            <Link href="/#services" className='hover:underline truncate'>Services</Link>
            <Link href="/#projects" className='hover:underline truncate'>Projects</Link>
            <Link href="/#contact" className='hover:underline truncate'>Contact</Link>
            {darkMode?
            <button onClick={handleClick} className='dark:text-sky-400'><MdOutlineLightMode/></button>
            :<button onClick={handleClick} className='text-slate-900'><MdDarkMode/></button>
            }
        </div>
        <div className='flex gap-2 text-xl sm:hidden'>
        {darkMode?
            <button onClick={handleClick} className='dark:text-sky-400'><MdOutlineLightMode/></button>
            :<button onClick={handleClick} className='text-slate-900'><MdDarkMode/></button>
            }
        <button onClick={handleSideBar} className='flex sm:hidden text-xl hover:scale-110 ease duration-200'><MdOutlineMenu/></button>
        </div>
        </nav>
        <div className={sideBar?'fixed w-full h-screen top-0 right-0 bg-gray-100/70 dark:white/70 z-[900]':''}>
        <div className={sideBar?'fixed w-[75%] sm:w-[60%] md:w-[45%] lg:w-[40%] h-screen bg-gradient-to-b from-sky-50 to-sky-500 flex flex-col justify-center items-center z-[1000] dark:from-slate-400 dark:to-slate-900 top-0 right-0 text-slate-900 dark:text-white ease-in duration-300':'fixed w-[75%] h-screen bg-gradient-to-b from-sky-50 to-sky-500 flex flex-col justify-center items-center z-[1000] dark:from-slate-400 dark:to-slate-900 top-0 right-[-100%] text-slate-900 dark:text-white ease-in duration-300'}>
            <div onClick={handleSideBar} className='absolute top-2 right-2 z-[1100] hover:scale-110 ease-in duration-200 dark:text-white'>
                <AiOutlineClose size={20}/>
            </div>
            <div className='flex flex-col w-full h-full items-center justify-evenly'>
                <div className='flex flex-col gap-10 sm:gap-12'>
                    <h3 className='font-semibold text-gray-800 dark:text-white'>Michael Balderas</h3>
                    <div className='flex flex-col items-center justify-center gap-2 italic text-base md:flex-row md:text-lg'>
                        <p>Learning</p>
                        <p>!==</p>
                        <p>stops</p>
                    </div>
                </div>
            <div className='flex flex-col w-full items-center justify-center gap-2 mb-12'>
            <Link onClick={handleSideBar} href='/' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gradient-to-b from-gray-50 to-gray-400 shadow-gray-600 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-800 dark:shadow-gray-100 dark:shadow-md'>
                <AiOutlineHome size={20}/>
                <span>Home</span>
            </Link>
            <Link onClick={handleSideBar} href='/#about' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gradient-to-r from-gray-50 to-gray-400 shadow-gray-500 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-800 dark:shadow-gray-100 dark:shadow-md'>
                <BsPerson size={20}/>
                <span>About</span>
            </Link>
            <Link onClick={handleSideBar} href='/#services' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gradient-to-r from-gray-50 to-gray-400 shadow-gray-500 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-800 dark:shadow-gray-100 dark:shadow-md'>
                <MdWorkOutline size={20}/>
                <span>Services</span>
            </Link>
            <Link onClick={handleSideBar} href='/#projects' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gradient-to-r from-gray-50 to-gray-400 shadow-gray-500 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-800 dark:shadow-gray-100 dark:shadow-md'>
                <AiOutlineProject size={20}/>
                <span>Projects</span>
            </Link>
            <Link onClick={handleSideBar} href='/#contact' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gradient-to-r from-gray-50 to-gray-300 shadow-gray-500 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-800 dark:shadow-gray-100 dark:shadow-md'>
                <AiOutlineMail size={20}/>
                <span>Contact</span>
            </Link>
        </div>
        </div>
        </div>
    </div>
    </div>
    </header>
  )
}

export default Navbar