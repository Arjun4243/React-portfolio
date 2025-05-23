import React from 'react'

const ContactForm = () => {


  return (
    <div>
      <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-5 max-w-[800px]'>

            <input type="hidden" name="access_key" value="d12c3240-3406-43e8-8965-090f1b619787"></input>
      
        <input type='text' name='text' placeholder='Your Name' required className='h-12 rounded-lg bg-lighBrown px-2  '/>
        <input type='email' name='email' placeholder='Your Email' required className='h-12 rounded-lg bg-lighBrown px-2  '/>
        <textarea name='message' placeholder='Your Message' row='40' col='50' className='rounded-lg bg-lighBrown px-2 h-52'></textarea>
        <button type='submit' className='w-full rounded-lg border bordeer-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>Send</button>
      </form>
      
    </div>
  )
}

export default ContactForm    