import React from 'react'
import ContactForm from './ContactForm'

const ContectLeft = () => {
  return (
    <div className="min-w-[500px]">
        <div className='flex flex-col  text-white '>
            <h2 className='text-orange text-3xl mb-4  '>Get In Touch</h2>
            <p className='text-white'>Feel Free to reach out if you'd like to collaborate</p>
            <br/>
            <p className='text-white mb-3'>You are just a few click away!</p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContectLeft