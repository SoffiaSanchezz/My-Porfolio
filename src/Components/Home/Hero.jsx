import React from 'react'
import { FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa'
import Perfil from '../../assets/Img/Perfil.png'

const Hero = () => {

    // Llamamos el link de las redes sociales
    const Social = [
        {
            id: 1,
            link: "https://github.com/SoffiaSanchezz",
            icon: <FaGithub />
        },
        {
            id: 2,
            link: "https://www.linkedin.com/in/sofia-sanchez-vargas/",
            icon: <FaLinkedinIn />
        },
        {
            id: 3,
            link: "https://wa.link/o5x1ij",
            icon: <FaWhatsapp />
        }
    ]

    return (
        <section className=' min-h-screen flex flex-col justify-start items-center p-5  text-center'>
            <h2 className='text-5xl font-Titan text-Violet dark:text-pink'> Sofia Sanchez</h2>
            <h3 className='py-3 text-2xl font-McLaren font-bold'>Full Stack</h3>
            <p className='max-w-xl font-Poppins'>
                En prosesoo TERMINARLOOOOOOOO
            </p>

            <div className='md:flex md:flex-row-reverse gap-12'>
                {/* Redes Sociale */}
                <div className='flex justify-evenly py-8 md:w-1/3 md:flex md:flex-col gap-8 lg:py-16 text-3xl w-full'>
                    {Social.map(({ id, link, icon }) => (
                        <a href={link} key={id} target='_blank'
                            className='cursor-pointer w-16 h-16 duration-300 hover:text-Violet social-icons text-moon'
                        >{icon}</a>
                    ))}
                </div>

                {/* se pone la imagen de Perfil */}
                <div>
                    <img src={Perfil} alt='' />
                </div>
            </div>
        </section>
    )
}

export default Hero