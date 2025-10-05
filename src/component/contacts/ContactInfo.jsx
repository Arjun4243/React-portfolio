import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from "react-icons/fa6";
import  {FaLocationDot}  from "react-icons/fa6";
import SingleInfo from './SingleInfo';

export default function ContactInfo() {
    return (
        <div className='flex flex-col gap-4 text-white'>
            <SingleInfo text="arjunsinghay" Image={MdOutlineEmail} />
            <SingleInfo text="123-456-7890" Image={FaPhone} />
            <SingleInfo text="India Delhi" Image={FaLocationDot} />
        </div>
    )
}
