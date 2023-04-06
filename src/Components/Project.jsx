import React from 'react'
import Section from '../Common/Section'
import { BsGithub } from 'react-icons/bs'
import { BiDesktop } from 'react-icons/bi'
import Deezer from "../assets/Img/Dezzer.png";
import zShop from "../assets/Img/zShop.png";
import Semilla from "../assets/Img/Semilla.png";
import Tetris from "../assets/Img/Tetris.png";
import Calculadora from "../assets/Img/Calculadora.png";
import Many from "../assets/Img/Makups.png";
import ToDo from "../assets/Img/ToDo.png";
import Spy from "../assets/Img/Spy.png";
import Doom from "../assets/Img/Doom.png";
import Programate from "../assets/Img/Programate.png";


const Project = () => {

    // imagenes que se utilizaran 
    const Project = [
        {
            id: 1,
            title: "Pagina Tributo",
            Image: Spy,
            GitHub: "https://github.com/SoffiaSanchezz/Spy-X-Family",
            Demo: "https://spy-x-family-41l8.vercel.app/",
        },
        {
            id: 2,
            title: "Replica de Deezer",
            Image: Deezer,
            GitHub: "https://github.com/SoffiaSanchezz/Deezer-Replica",
            Demo: "https://deezer-replica.vercel.app/",
        },
        {
            id: 3,
            title: "zShop",
            Image: zShop,
            GitHub: "https://github.com/SoffiaSanchezz/proyecto-zShop",
            Demo: "https://proyecto-3-zs.vercel.app/",
        },
        {
            id: 4,
            title: "Semilla",
            Image: Semilla,
            GitHub: "https://github.com/H4r0l/Project-Semillas",
            Demo: "https://proyecto-semillas.netlify.app/",
        },
        {
            id: 5,
            title: "Calculadora",
            Image: Calculadora,
            GitHub: "https://github.com/SoffiaSanchezz/Proyect-Calculator",
            Demo: "https://proyect-calculadora-rho.vercel.app/",
        },
        {
            id: 6,
            title: "Tetris",
            Image: Tetris,
            GitHub: "https://github.com/SoffiaSanchezz/Proyecto-tetris",
            Demo: "https://proyecto-tetris.vercel.app/",
        },
        {
            id: 7,
            title: "Whell of Dom",
            Image: Doom,
            GitHub: "https://github.com/SoffiaSanchezz/Many_Makups-Shop",
            Demo: "https://many-makups-shop-lm4f.vercel.app/",
        },
        {
            id: 8,
            title: "Many Makups Shop",
            Image: Many,
            GitHub: "https://github.com/SoffiaSanchezz/Many_Makups-Shop",
            Demo: "https://many-makups-shop-lm4f.vercel.app/",
        },
        {
            id: 9,
            title: "To-Do List",
            Image: ToDo,
            GitHub: "https://github.com/lilajoha29/to-do-list",
            Demo: "https://to-do-list-lilajoha29.vercel.app/",
        },
        {
            id: 10,
            title: "Prgramate School",
            Image: Programate,
            GitHub: "https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT",
            Demo: "https://programate-school-front.vercel.app/",
        }
    ]


    return (
        <div>
            <Section title="Proyectos" subTitle="textpooooooo">
                <div className='grid grid-cols-2 gap-8 md:gap-14 md:grid-cols-3 mb-2 mx-24'>
                    {
                        Project.map(({ id, Image, title, GitHub, Demo }) =>
                            <div key={id} className='max-w-lg flex flex-col justify-center items-center shadow-lg shadow-moon rounded-2xl dark:shadow-blue'>
                                    <h2 className=' font-McLaren'>{title}</h2>
                                <img src={Image} alt='' width={400} className=' object-cover object-bottom' />
                                <div>
                                    <div className='flex justify-between'>
                                    <a href=''><BsGithub /></a>
                                    <a href=''><BiDesktop /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Section>
        </div>
    )
}

export default Project