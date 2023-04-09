import React, { useState } from 'react'
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

    //al darle click me salga la imformacion del proyecto 
    const [openModal, setOpenModal] = useState(false)

    // imagenes que se utilizaran 
    const Project = [
        {
            id: 1,
            title: "Pagina Tributo",
            Image: Spy,
            GitHub: "https://github.com/SoffiaSanchezz/Spy-X-Family",
            Demo: "https://spy-x-family-41l8.vercel.app/",
            descripton: "La página tributo está dedicada al anime Spy x Family y presenta información sobre los personajes principales de la serie, incluyendo detalles sobre sus roles y actividades en la trama."
        },
        {
            id: 2,
            title: "Replica de Deezer",
            Image: Deezer,
            GitHub: "https://github.com/SoffiaSanchezz/Deezer-Replica",
            Demo: "https://deezer-replica.vercel.app/",
            descripton: "Se ha creado una página que muestra cómo replicar una página ya existente, detallando paso a paso las habilidades necesarias para hacerlo.En ella, se proporciona información detallada sobre cómo crear una página web desde cero."
        },
        {
            id: 3,
            title: "zShop",
            Image: zShop,
            GitHub: "https://github.com/SoffiaSanchezz/proyecto-zShop",
            Demo: "https://proyecto-3-zs.vercel.app/",
            descripton: "zShop es una página web en la que se trabajó a petición del cliente para mejorar su estilo.La estructura de la página ya había sido diseñada previamente, por lo que sólo era necesario aplicar el estilo correspondiente."
        },
        {
            id: 4,
            title: "Semilla",
            Image: Semilla,
            GitHub: "https://github.com/H4r0l/Project-Semillas",
            Demo: "https://proyecto-semillas.netlify.app/",
            descripton: "Página educativa con vista de administrador para monitorear estudiantes individualmente, desarrollada en colaboración con usuarios finales para crear una interfaz fácil de usar con HTML y CSS bien recibida por su funcionalidad y diseño intuitivo"
        },
        {
            id: 5,
            title: "Calculadora",
            Image: Calculadora,
            GitHub: "https://github.com/SoffiaSanchezz/Proyect-Calculator",
            Demo: "https://proyect-calculadora-rho.vercel.app/",
            descripton: "Se desarrolló una calculadora capaz de realizar operaciones básicas. La interfaz es intuitiva y fácil de usar, permitiendo al usuario ingresar y obtener resultados rápidamente. El proyecto fue un éxito en términos de funcionalidad y accesibilidad."
        },
        {
            id: 6,
            title: "Tetris",
            Image: Tetris,
            GitHub: "https://github.com/SoffiaSanchezz/Proyecto-tetris",
            Demo: "https://proyecto-tetris.vercel.app/",
            descripton: "Se desarrolló una página web de Tetris que muestra las figuras y el puntaje del jugador. La página cuenta con una interfaz intuitiva y fácil de usar, y ofrece una experiencia de juego divertida y desafiante."
        },
        {
            id: 7,
            title: "Whell of Dom",
            Image: Doom,
            GitHub: "https://github.com/SoffiaSanchezz/Many_Makups-Shop",
            Demo: "https://many-makups-shop-lm4f.vercel.app/",
            descripton: "Desarrollo de una aplicación grupal para mejorar el ambiente en la oficina. La aplicación, una ruleta que selecciona aleatoriamente a un (coder) a sacrificar, debe ser creativa, interactiva y entretenida, con animaciones, efectos de sonido y diseño atractivo. Se utilizarán HTML, CSS, Javascript y metodologías ágiles como SCRUM y GitFlow."
        },
        {
            id: 8,
            title: "Many Makups Shop",
            Image: Many,
            GitHub: "https://github.com/SoffiaSanchezz/Many_Makups-Shop",
            Demo: "https://many-makups-shop-lm4f.vercel.app/",
            descripton: "Se creó un sitio web de compras en línea con carrito y categorías. Los pedidos se envían a WhatsApp para su procesamiento.",
        },
        {
            id: 9,
            title: "To-Do List",
            Image: ToDo,
            GitHub: "https://github.com/lilajoha29/to-do-list",
            Demo: "https://to-do-list-lilajoha29.vercel.app/",
            descripton: "To-do list con CRUD, buscador y base de datos MongoDB."
        },
        {
            id: 10,
            title: "Programate School",
            Image: Programate,
            GitHub: "https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT",
            Demo: "https://programate-school-front.vercel.app/",
            descripton: "Desarrollo de una aplicación web para la selección de jóvenes de colegios colombianos para Programate Academy, con requisitos de UX/UI, ciberseguridad, accesibilidad y arquitectura Modelo Vista Controlador. Incluye autenticación, formularios, módulos de registro y notificaciones por correo electrónico. Metodología SCRUM y evaluación por sustentación con formadores y jurado externo."
        }
    ]


    return (
        <div name="Proyectos">
            <Section title="Proyectos" subTitle="Aquí te presento una lista de los proyectos que he desarrollado.">
                <div className='grid grid-cols-2 gap-8 md:gap-14 md:grid-cols-3 mb-2 md:mx-24'>
                    {
                        Project.map(({ id, Image, title, GitHub, Demo, descripton }) =>
                            <div key={id} className='max-w-lg flex flex-col justify-center items-center shadow-lg shadow-moon rounded-2xl dark:shadow-blue hover:scale-90'>

                                <div onClick={() => setOpenModal(!openModal)}>
                                    <h2 className=' font-McLaren text-xl font-semibold'>{title}</h2>
                                    <img src={Image} alt='' width={400} />
                                </div>

                                {/* aca es la infomacion que se despliega */}
                                {openModal && (
                                    <div className=''>
                                        <div className='flex justify-center gap-20 md:gap-32'>
                                            <a href={GitHub} target='_blank'><BsGithub className='mb-4 text-2xl' /></a>
                                            <a href={Demo} target='_blank'><BiDesktop className='mb-4 text-2xl' /></a>
                                        </div>
                                        <p className='px-4 font-Poppins mb-4 text-xs md:text-xl'>{descripton}</p>
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div>
            </Section>
        </div>
    )
}

export default Project