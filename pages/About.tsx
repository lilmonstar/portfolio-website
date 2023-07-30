'use client'
import React from 'react'
import Image from 'next/image'
import profileImg from '../public/images/profile1.jpg'

function About() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 mt-10 mb-1'  id='about'>
      <h2>About Me</h2>
      <div className='flex flex-col items-center md:items-start justify-center gap-6 md:flex-row'>
        <Image src={profileImg} alt='profile' className='object-cover mx-4 max-w-[200px] h-[250px]'></Image>
        <div className='max-w-xs ms:max-w-md lg:max-w-lg mx-4 flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4'>
          <h4 className='text-xl text-slate-700 dark:text-slate-100 font-mono font-bold'>Who I Am</h4>
          <p className='text-gray-600 dark:text-gray-100'>Hi, my name is <span className='text-sky-400'>Michael Balderas.</span> I&apos;m a tech enthusiast with more than six years of experience in programming spanning from developing websites for all platforms, programming microcontroller devices, and programming in automation, machine learning and artificial intelligence with Python. I like playing games, watching movies and learning new things. </p>
        </div>
      </div>
    </div>
  )
}

export default About