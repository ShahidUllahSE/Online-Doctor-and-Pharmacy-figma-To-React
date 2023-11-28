import React from 'react'

const Header = () => {
  return (
    <div className='parent'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Figma</span>
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
