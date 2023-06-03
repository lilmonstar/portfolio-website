'use client'
import React from 'react'
import Image from 'next/image'
import profileImg from '../public/images/blank_profile.jpg'

function About() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-evenly'  id='about'>
      <h2>About Me</h2>
      <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
        <Image src={profileImg} alt='profile' className='object-cover mx-4 max-w-[200px] h-[250px]'></Image>
        <div>
          <p className='max-w-xs'>Work in progress... Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate quod laborum dolor magni vero quisquam exercitationem explicabo consequatur expedita illum reprehenderit, a eum. </p>
        </div>
      </div>
    </div>
  )
}

export default About