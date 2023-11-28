import React from 'react'
import image10 from './image10.png'
const MobApps = () => {
  return (
    <div className='bodyParent'>
    <div className='text-container'>
      <h1 className='text-4xl font-bold text-black-500' id='heading1'>
        {' '}
        Download our 
mobile apps {' '}
      </h1>
      <div>
        <p className='text-black-500' id='para1'>
          {' '}
          Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely{' '}
        </p>
      </div>
    </div>
    <img src={image10} alt='doctors' id='img1' height={450} width={450} />

    <div>
      {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button> */}
    </div>
  </div>
  )
}

export default MobApps
