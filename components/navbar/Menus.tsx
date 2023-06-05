import Link from 'next/link'
import React from 'react'
import {AiOutlineHome, AiOutlineClose, AiOutlineMail, AiOutlineProject} from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'

interface MenusProps {
    onClick: () => void
}

const Menus: React.FC<MenusProps> = ({onClick}) => {
  return (
    <div>
        <div className='abolute w-full h-screen bg-slate-100 flex flex-col justify-center items-center z-[150] dark:bg-slate-900 top-0 left-0'>
            <div onClick={onClick} className='absolute top-2 right-4 z-[200] hover:scale-110 ease-in duration-200 dark:text-white'>
                <AiOutlineClose size={20}/>
            </div>
            <Link onClick={onClick} href='/' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-slate-700 dark:shadow-gray-100 dark:shadow-md'>
                <AiOutlineHome size={20}/>
                <span>Home</span>
            </Link>
            <Link onClick={onClick} href='#about' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-slate-700 dark:shadow-gray-100 dark:shadow-md'>
                <BsPerson size={20}/>
                <span>About</span>
            </Link>
            <Link onClick={onClick} href='#services' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-slate-700 dark:shadow-gray-100 dark:shadow-md'>
                <MdWorkOutline size={20}/>
                <span>Services</span>
            </Link>
            <Link onClick={onClick} href='#projects' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-slate-700 dark:shadow-gray-100 dark:shadow-md'>
                <AiOutlineProject size={20}/>
                <span>Projects</span>
            </Link>
            <Link onClick={onClick} href='#contact' className='w-[75%] flex justify-center gap-2 items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200 dark:bg-slate-700 dark:shadow-gray-100 dark:shadow-md'>
                <AiOutlineMail size={20}/>
                <span>Contact</span>
            </Link>
            
        </div>
    </div>
  )
}

export default Menus
