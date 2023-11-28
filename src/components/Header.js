import React from 'react'
import logo3 from './logo3.png'

const Header = () => {
  return (
    <div className='parent'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src={logo3} alt='logo' height={50} width={50} className='bg-blue-200'/>
      {/* <span className="ml-3 text-xl">Figma</span> */}
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" id='navbar'>
      <a className="mr-5 hover:text-gray-900 hover cursor-pointer " id='home'>Home</a>
      <a className="mr-5 hover:text-gray-900 " id='doctor'>Find Dcotor</a>
      <a className="mr-5 hover:text-gray-900" id='apps'>Apps</a>
      <a className="mr-5 hover:text-gray-900" id='test'>Testimonials</a>
      <a className="mr-5 hover:text-gray-900" id='about'>Abous us</a>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header
