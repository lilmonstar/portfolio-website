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
        <div className='col-span-1 mx-1 flex flex-col items-center justify-center text-white gap-4 bg-[#262626] rounded-lg shadow-md shadow-gray-500 w-[300px] h-[300px] hover:-translate-y-4 hover:bg-[#ff004f] ease-in duration-500'>
          <FaCode size={40}/>
          <h3 className='font-bold'>Web Design</h3>
          <p className='max-w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consectetur.</p>
        </div>
        <div className='col-span-1 mx-1 flex flex-col items-center justify-center text-white gap-4 bg-[#262626] rounded-lg shadow-md shadow-gray-500 w-[300px] h-[300px] hover:-translate-y-4 hover:bg-[#ff004f] ease-in duration-500'>
          <VscSmiley size={40}/>
          <h3 className='font-bold'>UI/UX Design</h3>
          <p className='max-w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, officia.</p>
        </div>
        <div className='col-span-1 mx-1 flex flex-col items-center justify-center text-white gap-4 bg-[#262626] rounded-lg shadow-md shadow-gray-500 w-[300px] h-[300px] hover:-translate-y-4 hover:bg-[#ff004f] ease-in duration-500'>
          <TbSettingsAutomation size={40}/>
          <h3 className='font-bold'>Automation</h3>
          <p className='max-w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, a numquam harum rem soluta molestiae optio.</p>
        </div>
      </div>
    </div>
  )
}

export default Services