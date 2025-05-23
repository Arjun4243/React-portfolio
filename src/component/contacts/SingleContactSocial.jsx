import React from 'react'

const SingleContactSocial = ({ link, icon }) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex item-center justify-between'>
        <a href={link} className='cursor-pointer'>
            {icon}
        </a>
    </div>
  )
}

export default SingleContactSocial