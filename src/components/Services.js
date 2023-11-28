import React from 'react'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.jpeg'
import image6 from './image6.png'
import image7 from './image7.png'
import image8 from './image8.png'


const Services = () => {
  return (
    <div className='serviceParent'>
      <section className='text-gray-600 body-font'>

        <div id='servicesHeading'>
        <h1 className='text-4xl font-bold text-black-500'  >
          {' '}
          Our Services{' '}
        </h1>
        <p>
          {' '}
          we provide to you. Adjust it to your health needs and make sure your
          undergo treatment <br /> with our higly qualified doctors you can
          consult with us which type of service is suitable for your health
        </p>
        </div >
        <div className='container px-5 py-24 mx-auto' id='services'>
          <div className='flex flex-wrap -m-4'>
            <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
              <div className='h-full text-center'>
                <img
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src={image3}
                />
                <h1 className='text-2xl font-bold text-black-500'>
                  Search doctor
                </h1>
                <p className='leading-relaxed'>
                Choose your doctor from thousands of specialist, general, and trusted hospitals
                </p>
             
            
              </div>
            </div>
            <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
              <div className='h-full text-center'>
                  
              
                <img
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src={image4}
                />
              <h1 className='text-2xl font-bold'>Online Pharmacy</h1>
                <p className='leading-relaxed'>
                Buy  your medicines with our mobile application with a simple delivery system
                </p>
              
              
              </div>
            </div>
            <div className='lg:w-1/3 lg:mb-0 p-4'>
              <div className='h-full text-center'>
                <img
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src={image5}
                />
                <h1 className='text-2xl font-bold'>consultation</h1>
                <p className='leading-relaxed'>
                Free consultation with our trusted doctors and get the best recomendations
                </p>
                
             
              </div>
            </div>



            <div className='lg:w-1/3 lg:mb-0 p-4'>
              <div className='h-full text-center'>
                <img
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src={image6}
                />
                <h1 className='text-2xl font-bold'>Details Info</h1>
                <p className='leading-relaxed'>
                Free consultation with our trusted doctors and get the best recomendations
                </p>
           
              </div>
            </div>


            <div className='lg:w-1/3 lg:mb-0 p-4'>
              <div className='h-full text-center'>
                <img
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src={image7}
                />
                <h1 className='text-2xl font-bold'>Emergency care</h1>
                <p className='leading-relaxed'>
                You can get 24/7 urgent care for yourself or your children and your
lovely family
                </p>
                
               
              </div>
            </div>


            <div className='lg:w-1/3 lg:mb-0 p-4'>
              <div className='h-full text-center'>
                <img
                  alt='testimonial'
                  className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
                  src={image8}
                />
                <h1 className='text-2xl font-bold'>tracking</h1>
                <p className='leading-relaxed'>
                Track and save your medical history and health data 
                </p>
               
               
              </div>
            </div>



          </div>
        </div>
        

        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn more</button>

        


      </section>
    </div>
  )
}

export default Services
