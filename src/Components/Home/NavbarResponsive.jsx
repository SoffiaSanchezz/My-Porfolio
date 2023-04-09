import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


const NavbarResponsive = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        // fixed w - full h - [80px] flex justify - between items - center px - 4 ml - [35 %]
        <div className='flex justify-center items-center container '>

            {/* Menu */}
            <ul className='hidden md:flex gap-6 font-Poppins'>
                <li className='dark:bg-pink/20 bg-Violet/20 p-3 rounded-xl border-2 dark:border-pink border-Violet cursor-pointer font-semibold hover:bg-blue/20 hover:border-blue dark:hover:bg-bluDark/20 dark:hover:border-bluDark'>
                    <Link to="Home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='dark:bg-pink/20 bg-Violet/20 p-3 rounded-xl border-2 dark:border-pink border-Violet cursor-pointer font-semibold hover:bg-blue/20 hover:border-blue dark:hover:bg-bluDark/20 dark:hover:border-bluDark'>
                    <Link to="Skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='dark:bg-pink/20 bg-Violet/20 p-3 rounded-xl border-2 dark:border-pink border-Violet cursor-pointer font-semibold hover:bg-blue/20 hover:border-blue dark:hover:bg-bluDark/20 dark:hover:border-bluDark'>
                    <Link to="Proyectos" smooth={true} duration={500}>
                        Proyectos
                    </Link>
                </li>
                <li className='dark:bg-pink/20 bg-Violet/20 p-3 rounded-xl border-2 dark:border-pink border-Violet cursor-pointer font-semibold hover:bg-blue/20 hover:border-blue dark:hover:bg-bluDark/20 dark:hover:border-bluDark'>
                    <Link to="Contacto" smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
            </ul>


            {/* Hamburguer */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='text-2xl' /> : <FaTimes className=' text-2xl' />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center bg-pink/90 border-2 border-pink font-McLaren font-semibold text-Violet'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="Proyectos" smooth={true} duration={500}>
                        Proyectos
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="Contacto" smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarResponsive