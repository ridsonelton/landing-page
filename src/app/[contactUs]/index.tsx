'use client'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs.sendForm('service_p2oi454', 'template_mksi9ci', form.current!, 'cpDrtPw4QY1DMokN-').then(
      (result) => {
        console.log(result.text)
        e.target.reset()
        alert('Email sent successfully!')
        window.scrollTo(0, 0)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }
  return (
    <div className="container mx-auto">
      <div className="w">
        <h1 className="text-center text-4xl font-bold">Contact Us</h1>
      </div>
      <div className="flex justify-center">
        <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col mt-3 md:w-[50vw] sm:w-full">
          <label htmlFor="user_name" className="font-semibold text-lg">
            Nama
          </label>
          <input className="rounded-md px-3 mb-3" type="text" name="user_name" placeholder="your name" />
          <label htmlFor="user_email" className="font-semibold text-lg">
            Email
          </label>
          <input className="rounded-md px-3 mb-3" type="email" name="user_email" placeholder="your email" />
          <label htmlFor="message" className="font-semibold text-lg">
            Message
          </label>
          <textarea className="rounded-md mb-3" name="message" cols={50} rows={10} />
          <input className="cursor-pointer rounded-lg bg bg-red-400 w-36 text-center mx-auto my-6" type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}
