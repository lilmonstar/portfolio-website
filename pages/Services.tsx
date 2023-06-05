'use client'
import React from 'react'

function Services() {
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto p-2 flex flex-col items-center justify-evenly' id='services'>
      <h2 className='mt-8 mb-4'>My Services</h2>
      <div className='grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
        <div className='col-span-1 mx-1 bg-fuchsia-500 rounded-lg w-[250px] h-[300px]'></div>
        <div className='col-span-1 mx-1 bg-fuchsia-500 rounded-lg w-[250px] h-[300px]'></div>
        <div className='col-span-1 mx-1 bg-fuchsia-500 rounded-lg w-[250px] h-[300px]'></div>
      </div>
    </div>
  )
}

export default Services