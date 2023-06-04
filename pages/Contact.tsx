'use client'
import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsGithub } from 'react-icons/bs'

type FormValues = {
  name:string
  email:string
  subject:string
  message:string 
}

function Contact() {
  const [successMessage, setSuccessMessage] = useState('')
  const formRef = useRef()
  const form = useForm<FormValues>()
  const { register, handleSubmit, formState:{errors}, reset } = form

  // const onSubmit = (data:FormValues) => {

  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage('')
    }, 5000);
    return () => {
      clearTimeout(timer)
    }
  }, [successMessage]);

  const onSubmit = (data:FormValues) => {
    emailjs.sendForm('service_7wg06vm', 'template_n1p5iip', formRef.current, '9a58jTmDYXbEkD7-Z')
      .then((result: any) => {
          // console.log(result.text);
          reset()
          setSuccessMessage("Your message has been sent. We'll get back to you soon :)")
      }, (error: any) => {
          reset()
          // console.log(error.text);
          setSuccessMessage("An unexpected error occured. Please try again later.")
      });
  }

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
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate className='flex flex-col gap-2 md:gap-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' {...register('name', {
                  required:{
                    value: true,
                    message: "*Name is required."
                  }
                })}/>
                 <p className='text-rose-400'>{errors.name?.message}</p>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' {...register('email', {
                  required:{
                    value: true,
                    message: "Email is required"
                  },
                  pattern:{
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"*Invalid email format."
                  }
                })}/>
                <p className='text-rose-400'>{errors.email?.message}</p>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="subject">Subject</label>
                <input type="text" id='subject' {...register('subject',{
                  required:{
                    value: true,
                    message: "*Subject is required."
                  }
                })}/>
                <p className='text-rose-400'>{errors.subject?.message}</p>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="message">Message</label>
                <textarea rows={3} id='message' {...register('message',{
                  required:{
                    value: true,
                    message: "*Message is required."
                  }
                })}/>
                <p className='text-rose-400'>{errors.message?.message}</p>
              </div>
              <p>{successMessage}</p>
              <button type='submit' className='p-3 mt-1 md:mt-2 border-2 border-sky-400 shadow-lg rounded-lg hover:bg-sky-400 hover:text-white ease-in duration-300'>Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact