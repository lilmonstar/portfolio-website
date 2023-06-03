'use client'
import React from 'react'
import Image from 'next/image'
import myImg from '../public/images/neom-unsplash.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='relative' id='home'>
    <div className='w-full h-screen'>
        <Image src={myImg} alt='image' className='w-full h-screen object-cover object-right'></Image>
    </div>
    <div className='absolute w-full h-screen top-0 left-0 bg-white/50 flex flex-col justify-center items-center gap-6 md:gap-7 lg:gap-y-8'>
        <h1 className='text-slate-900 dark:text-white'>I&apos;m Michael Balderas</h1>
        <h3 className='text-slate-700 dark:text-slate-200'>I&apos;m 
        <TypeAnimation
      sequence={[
        'a Web Developer',
        2000,
        'an UI/UX Designer',
        2000,
        'a Tech Enthusiast',
        2000,
        'an Embedded Developer',
        2000,
        'a Coder',
        2000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
    />
        </h3>
      <div className='flex items-center gap-4 sm:gap-5 md:gap-6'>
        <Link href="https://github.com/lilmonstar">
            <FaGithub className='text-2xl sm:text-3xl text-sky-400 cursor-pointer hover:text-sky-500 hover:scale-110 dark:bg-sky-400 dark:text-slate-200 dark:rounded-full hover:dark:bg-sky-500'/>
        </Link>
        <Link href="https://www.facebook.com/mike.1stblood">
            <FaFacebook className='text-2xl sm:text-3xl text-sky-400 cursor-pointer hover:text-sky-500 hover:scale-110 dark:bg-sky-400 dark:text-slate-200 dark:rounded-full hover:dark:bg-sky-500'/>
        </Link>
      </div>
    </div>
    </div>
  )
}