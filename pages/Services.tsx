'use client'
import React from 'react'

import { FaCode } from 'react-icons/fa'
import { VscSmiley } from 'react-icons/vsc'
import { TbSettingsAutomation } from 'react-icons/tb'

function Services() {
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto p-2 flex flex-col items-center justify-evenly' id='services'>
      <h2 className='mt-10 mb-8'>My Services</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        <div className='col-span-1 mx-1 flex flex-col items-center justify-center text-white gap-4 bg-[#262626] rounded-lg shadow-md shadow-gray-500 w-[300px] h-[340px] hover:-translate-y-4 hover:bg-[#ff004f] ease-in duration-500'>
          <FaCode size={40}/>
          <h3 className='font-bold'>Web Design</h3>
          <p className='max-w-[70%]'>With more than five years of experience of building websites. Making use of modern ways to build websites.</p>
        </div>
        <div className='col-span-1 mx-1 flex flex-col items-center justify-center text-white gap-4 bg-[#262626] rounded-lg shadow-md shadow-gray-500 w-[300px] h-[340px] hover:-translate-y-4 hover:bg-[#ff004f] ease-in duration-500'>
          <VscSmiley size={40}/>
          <h3 className='font-bold'>UI/UX Design</h3>
          <p className='max-w-[70%]'>I can easily render any project design or copy the UI of currently working websites on the web. I do responsive design so the app looks good on all platforms.</p>
        </div>
        <div className='col-span-1 mx-1 flex flex-col items-center justify-center text-white gap-4 bg-[#262626] rounded-lg shadow-md shadow-gray-500 w-[300px] h-[340px] hover:-translate-y-4 hover:bg-[#ff004f] ease-in duration-500'>
          <TbSettingsAutomation size={40}/>
          <h3 className='font-bold'>Automation</h3>
          <p className='max-w-[70%]'>I can do automation programming both software and hardware to ease manual task. I can integrate machine learning and artificial intelligence to my code to automate certain tasks.</p>
        </div>
      </div>
    </div>
  )
}

export default Services