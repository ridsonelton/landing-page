'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null)
  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const messageref = useRef<HTMLTextAreaElement>(null)

  const sendEmail = (e: any) => {
    let message = []
    if (name.current?.value === '' || name.current?.value === null) {
      message.push('Name is required')
      alert('name is required!')
    }
    if (email.current?.value === '' || name.current?.value === null) {
      message.push('Name is required')
      alert('email is required!')
    }
    if (messageref.current?.value === '' || name.current?.value === null) {
      message.push('Name is required')
      alert('message is required!')
    }
    if (message.length == 0) {
      e.preventDefault()
      emailjs.sendForm('service_p2oi454', 'template_mksi9ci', form.current!, 'cpDrtPw4QY1DMokN-').then(
        (result) => {
          console.log(result.text)
          console.log(message.length)
          alert('Email sent successfully!')
          window.scrollTo(0, 0)
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
    }
  }
  return (
    <div className="container mx-auto">
      <div className="">
        <h1 className="text-center text-4xl font-bold">Contact Us</h1>
      </div>
      <div className="flex justify-center">
        <form ref={form} action="" className="flex flex-col mt-3 md:w-[50vw] w-[80vw]">
          <label htmlFor="user_name" className="font-semibold text-lg">
            Nama
          </label>
          <input ref={name} className="rounded-md px-3 mb-3" type="text" name="user_name" placeholder="your name" />
          <label htmlFor="user_email" className="font-semibold text-lg">
            Email
          </label>
          <input ref={email} className="rounded-md px-3 mb-3" type="email" name="user_email" placeholder="your email" />
          <label htmlFor="message" className="font-semibold text-lg">
            Message
          </label>
          <textarea ref={messageref} className="rounded-md mb-3" name="message" cols={50} rows={10} />
          <button className="cursor-pointer rounded-lg bg bg-red-400 w-36 text-center mx-auto my-6" onClick={sendEmail} value="Send">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
