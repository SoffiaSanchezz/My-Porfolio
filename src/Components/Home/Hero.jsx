import React from 'react'
import { FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa'
import Perfil from '../../assets/Img/Perfil.png'
import DarkPerfil from '../../assets/Img/PerfilDark.png'
import { BsChevronDoubleDown } from 'react-icons/bs'

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
            <p className='max-w-xl font-Poppins '>
                Como desarrolladora full stack, tengo la capacidad de crear soluciones de software integrales desde el front-end hasta el back-end. Esto significa que puedo diseñar una interfaz de usuario intuitiva y atractiva que cumpla con los estándares de usabilidad y accesibilidad, así como también puedo crear una arquitectura sólida del back-end que garantice la seguridad y escalabilidad del sistema. Además, tengo la habilidad de trabajar en equipo y aplicar metodologías ágiles para cumplir con los objetivos del proyecto en tiempo y forma. Mi experiencia en diferentes tecnologías y plataformas me permite adaptarme rápidamente a cualquier desafío tecnológico que se presente.
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
                    <div className='mt-5'>
                        <img src={DarkPerfil} alt="Perfil"/>
                    </div>

                    <div>
                        <a href='/Sofia-Curriculum.pdf'
                            target='_blank'
                            className='flex items-center justify-center mt-10 py-2 border-2 border-pink rounded-xl font-McLaren text-3xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white dark:hover:text-blue dark:border-blue'> Resume </a>
                    </div>
                </div>
            </div>

            {/* animacion de la imagen */}
            <div className='mt-10'>
                <BsChevronDoubleDown className='text-2xl text-moon dark:text-Violet text-center animate-bounce'/>
            </div>
        </section>
    )
}

export default Hero