import React from 'react';
import image20 from './image20.jpg';

const HealthCare = () => {
  return (
    <div className="healthCareContainer">
      <img className='healthCare' src={image20} alt='healthCare' height={300} width={300} />
      <div className="text-container">
        <h1 className='text-4xl font-bold text-black-500' id='healthcare'>Leading healthcare providers</h1>
        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver</p>
      </div>

      {/* <div>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn more</button>
      </div> */}


    </div>
  );
}

export default HealthCare;
