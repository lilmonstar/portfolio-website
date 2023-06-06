'use client'
import Image from 'next/image'
import React from 'react'

import quizAppImg from '../public/images/quiz-app.png'
import faceRecogImg from '../public/images/face-recognition-1.jpg'
import messengerCloneImg from '../public/images/messenger-clone.png'
import paymentGatewayImg from '../public/images/payment-gateway.jpg'
import qrCodeImg from '../public/images/qr-code.jpg'
import microcontrollerImg from '../public/images/microcontroller.jpg'

function Projects() {
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto p-2 flex flex-col items-center justify-evenly' id='projects'>
      <h2 className='mt-10 mb-4'>My Projects</h2>
      <div className='grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
        <div className='col-span-1 mx-1 bg-gradient-to-br from-fuchsia-50 to-fuchsia-800 rounded-lg overflow-hidden shadow-md shadow-gray-500 w-[300px] h-[250px]'>
          <Image src={quizAppImg} alt='project-1' className='w-full h-full object-cover'/>
        </div>
        <div className='col-span-1 mx-1 bg-gradient-to-br from-fuchsia-50 to-fuchsia-800 rounded-lg overflow-hidden shadow-md shadow-gray-500 w-[300px] h-[250px]'>
        <Image src={faceRecogImg} alt='project-2' className='w-full h-full object-cover'/>
        </div>
        <div className='col-span-1 mx-1 bg-gradient-to-br from-fuchsia-50 to-fuchsia-800 rounded-lg overflow-hidden shadow-md shadow-gray-500 w-[300px] h-[250px]'>
        <Image src={messengerCloneImg} alt='project-3' className='w-full h-full object-cover'/>
        </div>
        <div className='col-span-1 mx-1 bg-gradient-to-br from-fuchsia-50 to-fuchsia-800 rounded-lg overflow-hidden shadow-md shadow-gray-500 w-[300px] h-[250px]'>
        <Image src={paymentGatewayImg} alt='project-4' className='w-full h-full object-right'/>
        </div>
        <div className='col-span-1 mx-1 bg-gradient-to-br from-fuchsia-50 to-fuchsia-800 rounded-lg overflow-hidden shadow-md shadow-gray-500 w-[300px] h-[250px]'>
        <Image src={qrCodeImg} alt='project-5' className='w-full h-full object-cover'/>
        </div>
        <div className='col-span-1 mx-1 bg-gradient-to-br from-fuchsia-50 to-fuchsia-800 rounded-lg overflow-hidden shadow-md shadow-gray-500 w-[300px] h-[250px]'>
        <Image src={microcontrollerImg} alt='project-6' className='w-full h-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Projects