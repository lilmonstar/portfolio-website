'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import quizAppImg from '../public/images/quiz-app.png'
import faceRecogImg from '../public/images/face-recognition-1.jpg'
import messengerCloneImg from '../public/images/messenger-clone.png'
import paymentGatewayImg from '../public/images/payment-gateway.jpg'
import qrCodeImg from '../public/images/qr-code.jpg'
import microcontrollerImg from '../public/images/microcontroller.jpg'

function Projects() {
  const [seeMore, setSeeMore] = useState(false)
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto p-2 flex flex-col items-center justify-evenly' id='projects'>
      <h2 className='mt-10 mb-4'>My Projects</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
        <div className='relative col-span-1 mx-1 rounded-lg overflow-hidden shadow-md shadow-gray-500 max-w-[300px] max-h-[250px] group'>
          <Image src={quizAppImg} alt='project-1' className='w-full h-full object-cover group-hover:scale-110 ease-in duration-500'/>
          <div className='absolute bottom-0 left-0 w-full h-[0] bg-gradient-to-b from-[#ff004f]/30 to-[#ff004f] group-hover:h-full ease-in duration-500 text-white text-center'>
            <h4 className='pt-[30px] font-bold'>Quiz App</h4>
            <p className='px-[20px] pt-[15px]'>An app that gives you a question with 4 options to answer. Checks whether your answer is correct or not. At the end shows you your total score.</p>
          </div>
        </div>
        <div className='relative col-span-1 mx-1 rounded-lg overflow-hidden shadow-md shadow-gray-500 max-w-[300px] max-h-[250px] group'>
        <Image src={faceRecogImg} alt='project-2' className='w-full h-full object-cover group-hover:scale-110 ease-in duration-500'/>
          <div className='absolute bottom-0 left-0 w-full h-[0] bg-gradient-to-b from-[#ff004f]/30 to-[#ff004f] group-hover:h-full ease-in duration-500 text-white text-center'>
            <h4 className='pt-[35px] font-bold'>Face Recognition App</h4>
            <p className='px-[20px] pt-[15px]'>An app that is made using python library called OpenCV. It can recognize faces that is collected in its sample data.</p>
          </div>
        </div>
        <div className='relative col-span-1 mx-1 rounded-lg overflow-hidden shadow-md shadow-gray-500 max-w-[300px] max-h-[250px] group'>
          <Image src={messengerCloneImg} alt='project-3' className='w-full h-full object-cover group-hover:scale-110 ease-in duration-500'/>
          <div className='absolute bottom-0 left-0 w-full h-[0] bg-gradient-to-b from-[#ff004f]/30 to-[#ff004f] group-hover:h-full ease-in duration-500 text-white text-center'>
              <h4 className='pt-[45px] font-bold'>Messenger Clone App</h4>
              <p className='px-[20px] pt-[15px]'>A messenger clone app that resembles the basic features of modern facebook messenger app.</p>
          </div>
        </div>
        <div className={seeMore? 'relative col-span-1 mx-1 rounded-lg overflow-hidden shadow-md shadow-gray-500 max-w-[300px] max-h-[250px] group' : 'hidden'}>
          <Image src={paymentGatewayImg} alt='project-4' className='w-full h-full object-right group-hover:scale-110 ease-in duration-500'/>
          <div className='absolute bottom-0 left-0 w-full h-[0] bg-gradient-to-b from-[#ff004f]/30 to-[#ff004f] group-hover:h-full ease-in duration-500 text-white text-center'>
              <h4 className='pt-[25px] font-bold lg:pt-[20px]'>Payment Gateway Integration</h4>
              <p className='px-[20px] pt-[10px]'>A payment gateway integration system using paymongo with features of gcash, maya, coins.ph and credit card payments.</p>
          </div>
        </div>
        <div className={seeMore? 'relative col-span-1 mx-1 rounded-lg overflow-hidden shadow-md shadow-gray-500 max-w-[300px] max-h-[250px] group' : 'hidden'}>
          <Image src={qrCodeImg} alt='project-5' className='w-full h-full object-cover group-hover:scale-110 ease-in duration-500'/>
          <div className='absolute bottom-0 left-0 w-full h-[0] bg-gradient-to-b from-[#ff004f]/30 to-[#ff004f] group-hover:h-full ease-in duration-500 text-white text-center'>
              <h4 className='pt-[25px] font-bold'>QR Code Payment Integration</h4>
              <p className='px-[20px] pt-[15px]'>A payment integration using qr code to scan the image to proceed to payment.</p>
          </div>
        </div>
        <div className={seeMore? 'relative col-span-1 mx-1 rounded-lg overflow-hidden shadow-md shadow-gray-500 max-w-[300px] max-h-[250px] group' : 'hidden'}>
          <Image src={microcontrollerImg} alt='project-6' className='w-full h-full object-cover group-hover:scale-110 ease-in duration-500'/>
          <div className='absolute bottom-0 left-0 w-full h-[0] bg-gradient-to-b from-[#ff004f]/30 to-[#ff004f] group-hover:h-full ease-in duration-500 text-white text-center'>
              <h4 className='pt-[35px] font-bold'>Microcontroller Projects</h4>
              <p className='px-[20px] pt-[15px]'>Several microcontroller projects including automation, sensors and robotics.</p>
          </div>
        </div>
      </div>
      <button onClick={()=>setSeeMore(!seeMore)} className='my-[50px] px-[50px] py-[14px] rounded-md border-2 border-[#ff004f] hover:bg-[#ff004f] ease-in duration-300 hover:text-white'>{seeMore? <p>See less</p> : <p>See more</p>}</button>
    </div>
  )
}

export default Projects