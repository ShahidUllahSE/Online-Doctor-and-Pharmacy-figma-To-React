import React from 'react'
import image19 from './image19.jpg'

const Body = () => {
  return (
    <div className='bodyParent'>
      <div className='text-container'>
        <h1 className='text-4xl font-bold text-black-500' id='heading1'>
          {' '}
          Virtual Health Care <br /> for You{' '}
        </h1>
        <div>
          <p className='text-black-500' id='para1'>
            {' '}
            Hospital provides progressive and affordable healthcare, accessible
            on Mobile and online for everyone Certainly! Welcome to
            HealthConnect,your trusted online platform for hassle-free doctor
            appointments.Whether you need a consultation,a follow-up,or just
            expert medical advice,we've got you covered.Our team of
            experienced healthcare professionals is dedicated to providing you
            with the best virtual healthcare experience.{' '}
          </p>
        </div>
      </div>
      <img src={image19} alt='doctors' id='img1' height={500} width={500} />

      <div>
        {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button> */}
      </div>
    </div>
  )
}

export default Body
