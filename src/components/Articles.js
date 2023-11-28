import React from 'react'
import image14 from './image14.jpg'
import image15 from './image15.jpg'
import image16 from './image16.jpeg'

const Articles = () => {
  return (
    <div>
      <section className="text-gray-600 body-font" >
  <div className="container px-5 py-24 mx-auto" id='articles'>
    <div className="flex flex-col">
     
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12" id='artheading'>
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-4xl font-bold mb-2 sm:mb-0" id='headingart' >Space The Final Frontier</h1>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={image14}/>
        </div>
        <h2 className="text-xl font-medium title-font text-white-900 mt-5">Disease detection, check 
up in the laboratory</h2>
        <p className="text-base leading-relaxed mt-2">In this case, the role of the health laboratory is very important to do
a disease detection...</p>
        <a className="text-white-500 inline-flex items-center mt-3 cursor-pointer hover">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6" id='content' >
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={image15}/>
        </div>
        <h2 className="text-xl font-medium title-font text-white-900 mt-5">Herbal medicines that are 
safe for consumption</h2>
        <p className="text-base leading-relaxed mt-2">Herbal medicine is very widely used at this time because of its very good for your health...</p>
        <a className="text-White-500 inline-flex items-center mt-3 cursor-pointer hover">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={image16}/>
        </div>
        <h2 className="text-xl font-medium title-font text-white-900 mt-5">Natural care for healthy 
facial skin</h2>
        <p className="text-base leading-relaxed mt-2">A healthy lifestyle should start from now and also for your skin health.
There are some...</p>
        <a className="text-white-500 inline-flex items-center mt-3 cursor-pointer hover">Read More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Articles
