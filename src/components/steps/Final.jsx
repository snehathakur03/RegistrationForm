import React from 'react'

const Final = () => {
  return (
    <>
    <div className='container mt-10'>
      <div className='flex flex-col items-center'>
      <div className='bg-teal-400 rounded-full p-3'>
          {/* Checkmark SVG */}
          <svg className='w-12 h-12' fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <div className='mt-6 text-2xl font-semibold uppercase text-teal-400'>Congratulation!</div>
        <div className='text-lg mt-3 font-normal text-gray-300'>Your Account has been created.</div>
        <a className="mt-8" href="/">
          <button type="button"
          className="text-gray-900 bg-blue-300 py-3 px-7 rounded-xl font-medium text-lg cursor-pointer hover:bg-blue-400">    
          Close 
          </button>   
        </a>
      </div>
    </div>

    </>
  )
}

export default Final
