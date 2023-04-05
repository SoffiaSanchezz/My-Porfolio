import React from 'react'
import { RiMoonCloudyLine, RiSunCloudyLine } from 'react-icons/ri'

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <div className=' bg-white dark:bg-moon text-bluDark dark:text-white'>
      <nav className='flex justify-between items-center p-5'>
      {/* Este es mi Logo */}
        <div>
          <img src='src\assets\LogoS.png' alt='Logo' width={50}/>
        </div>

        <div onClick={() => setDarkMode(!darkMode)}>
        {
          darkMode ?
          <RiMoonCloudyLine className='text-2xl cursor-pointer' />
          :
          <RiSunCloudyLine  className='text-2xl cursor-pointer'/>
        }
        </div>
      </nav>
    </div>
  )
}

export default NavBar