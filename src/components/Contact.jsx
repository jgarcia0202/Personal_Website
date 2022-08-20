import React from 'react'
//bg-[#0a192f]
const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/10ff8116-f7d1-4ddf-b4a3-d617bf0e0c61' className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me and email - jmgarcia0202@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name="name"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder="Email" name="email"/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:text-black hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-8 mx-auto'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact