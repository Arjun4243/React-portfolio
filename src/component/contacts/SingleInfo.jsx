  import React from 'react'

  export default function SingleInfo({text,Image}) {
    return (
      <div className='flex gap-4 items-center justify-start'>
        <Image className="text-3xl"></Image>
        <p>{text}</p>
      </div>
    )
  }
