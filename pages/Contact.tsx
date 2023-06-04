'use client'
import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsGithub } from 'react-icons/bs'


function Contact() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-evenly' id='contact'>
        <h2>Contact Me</h2>
        <div className='flex flex-col-reverse md:grid md:grid-cols-3 gap-4 md:gap-4 lg:gap-6 mx-2'>
          <div className='flex flex-col gap-2 sm:gap-2 md:gap-3 lg:gap-4 md:col-span-1 p-2 border-2 rounded-lg shadow-lg'>
            <p className='tracking-widest mb-2'>LET&apos;S CONNECT</p>
            <div className='flex items-center justify-start gap-2 group'>
              <AiOutlineMail size={20} className='group-hover:scale-110'/>
              <p className='break-all group-hover:underline'>michaelbalderas07121993@gmail.com</p>
            </div>
            <div>
              <Link href="https://github.com/lilmonstar" className='flex items-center justify-start gap-2 group'>
                <BsGithub size={20} className='group-hover:scale-110'/>
                <p className='group-hover:underline'>Github</p>
              </Link>
            </div>
            <div>
              <Link href="https://www.facebook.com/mike.1stblood" className='flex items-center justify-start gap-2 group'>
                <BsFacebook size={20} className='group-hover:scale-110'/>
                <p className='group-hover:underline'>Facebook</p>
              </Link>
            </div>
          </div>
          <div className='md:col-span-2 p-2 border-2 rounded-lg shadow-lg'>
            <form className='flex flex-col gap-2 md:gap-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name'/>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email'/>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="subject">Subject</label>
                <input type="text" id='subject' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="message">Message</label>
                <input type="text" id='message'/>
              </div>
              <button className='p-3 mt-1 md:mt-2 border-2 border-sky-400 shadow-lg rounded-lg hover:bg-sky-400 hover:text-white ease-in duration-300'>Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact