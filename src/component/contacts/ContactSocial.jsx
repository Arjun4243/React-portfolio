import React from 'react'
import  SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function ContactSocial() {
    return (
        <div className='flex gap-4'>
            <SingleContactSocial link="#" icon={<FaGithub />} />
            <SingleContactSocial link="#" icon={<FaLinkedin />} />
            <SingleContactSocial link="#" icon={<FaInstagram />} />
        </div>      
    )
}
