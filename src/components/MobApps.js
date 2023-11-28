import React from 'react'
import image10 from './image10.png'

const MobApps = () => {
  return (
    <div className='bodyParent flex flex-col lg:flex-row items-center lg:items-stretch'>
      <div className='lg:w-1/2 p-4'>
        {/* Content */}
        <div className='text-container'>
          <h1 className='text-4xl font-bold text-black-500' id='heading1'>Download our mobile apps</h1>
          <div>
            <p className='text-black-500' id='para1'>
              Welcome to our cutting-edge patient engagement ecosystem, where information is at your fingertips without the inconvenience of lengthy forms, time-consuming calls,
              or administrative hurdles. Our intuitive app and web portal redefine healthcare accessibility, offering instant and secure access to crucial details. Say
              farewell to paperwork hassles and embrace a streamlined, user-centric approach to managing your health information effortlessly.
            </p>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 p-4'>
        {/* Image */}
        <img
          src={image10}
          alt='doctors'
          id='img1'
          className='w-full h-auto rounded-lg' />
        {/* Button */}
        <div className='mt-4'>
          <button type='button' id='mobbtn1' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
            Download App
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobApps
