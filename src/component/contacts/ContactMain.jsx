import React from 'react'
import ContactLeft from './ContectLeft'
import ContactRight from './ContactRight'

function ContactMain() {
    return (
        <div id='contact' className='~ mx-auto items-center justify-center mt-[100px] px-4'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl text-cyan mb-5 text-center '>
                Contact
            </h2>

            <div className='flex flex-col justify-between gap-12 bg-brown p-8 rounded-2xl lg:flex-row lg:gap-24'>
                <ContactLeft />
                <ContactRight />
            </div>
        </div>
    )
}

export default ContactMain