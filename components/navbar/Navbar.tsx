'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineLightMode, MdOutlineMenu } from 'react-icons/md'

interface NavbarProps{
    onClick: () => void
}

const Navbar:React.FC<NavbarProps> = ({onClick}) => {
    const [darkMode, setDarkMode] = useState(false)

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

  return (
    <header className='fixed shadow-xl z-[50] bg-gray-50 px-2 md:px-4 py-2 md:py-4 text-sky-400 text-xs sm:text-base md:text-xl lg:text-2xl w-full dark:text-white dark:bg-slate-900'>
        <nav className='flex justify-between w-full items-center'>
        <div className='flex items-center gap-2'>
        <Link href="#home" className="p-1 border-2 border-slate-900 rounded-full dark:border-sky-400 hover:scale-110 ease-in duration-200">  
            <div>MB</div>
        </Link>
        <span className='hidden lg:flex'>Michael Balderas</span>
        </div>
        <div className='hidden justify-evenly sm:flex gap-2 md:gap-4 lg:gap-6'>
            <Link href="#about" className='hover:underline truncate'>About</Link>
            <Link href="#services" className='hover:underline truncate'>Services</Link>
            <Link href="#projects" className='hover:underline truncate'>Projects</Link>
            <Link href="#contact" className='hover:underline truncate'>Contact</Link>
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
        <button onClick={onClick} className='flex sm:hidden text-xl hover:scale-110 ease duration-200'><MdOutlineMenu/></button>
        </div>
        </nav>
    </header>
  )
}

export default Navbar
