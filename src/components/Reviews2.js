import React from 'react';
import image11 from './image11.jpeg'
const Reviews2 = () => {
  const rectangleStyle = {
    width: '700px',
    height: '325px',
    position: 'absolute',
    
    // top: '3724px',
    left: '242px',
    borderRadius: '25px',
    backgroundColor: 'rgb(76, 74, 192)', // Adjust the background color as needed
    
    // Add any additional styles you may need
  };

  return <div className='rectangle' style={rectangleStyle}>

    <h1 className='text-4xl font-bold' id='rectangleHeading'>What our customer are saying</h1>
    <p>“Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”</p>
<div id='patientimg'>

<img src={image11} height={90} width={100} alt='patient' />


</div>
  </div>;
};

export default Reviews2;
