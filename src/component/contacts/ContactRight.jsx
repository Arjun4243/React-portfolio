import React from 'react'
import ContactInfo from './ContactInfo';
import  ContactSocial  from './ContactSocial';
import emailImage from '../../image/email-image.png';

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src={emailImage} alt="contact Me " className='max-w-[200px] sm:max-w-[250px] lg:auto'/>
        <ContactInfo/>
        <ContactSocial/>
    </div>
  )
}

export default ContactRight