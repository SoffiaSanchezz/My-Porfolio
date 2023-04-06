import React from 'react'
import Section from "../../Common/Section";
import Html from "../../assets/Img/Html.png";
import Css from "../../assets/Img/Css.png";
import JavaS from "../../assets/Img/JavaScipt.png";
import ReactJs from "../../assets/Img/React.js.png";
import Tailwindcss from "../../assets/Img/Tailwind.png";
import SQL from "../../assets/Img/SQL.png";
import Mongo from "../../assets/Img/Mongo.png";
import Node from "../../assets/Img/Node.png";
import Figma from "../../assets/Img/Figma.png";


const Services = () => {

    //imagenes de las skills
    const Skills = [
        {
            id: 1,
            title: "Html",
            Image: Html,
        },
        {
            id: 2,
            title: "CSS",
            Image: Css,
        },
        {
            id: 3,
            title: "JavaScript",
            Image: JavaS,
        },
        {
            id: 4,
            title: "React.js",
            Image: ReactJs,
        },
        {
            id: 5,
            title: "Tailwind.css",
            Image: Tailwindcss,
        },
        {
            id: 6,
            title: "SQL",
            Image: SQL,
        },
        {
            id: 7,
            title: "MongoDb",
            Image: Mongo,
        },
        {
            id: 8,
            title: "Node.js",
            Image: Node,
        },
        {
            id: 9,
            title: "Figma",
            Image: Figma,
        }
    ]
    return (

        // se traen los estilos
        <Section title='Skills' subTitle="infooo">

        {/* se mapean las imagenes */}
            <div className='grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4'>
            {
                Skills.map(({ id, Image, title}) =>(
                    <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg shadow-moon dark:shadow-white rounded-xl duration-300 ease-in-out hover:scale-150'>
                    <h3 className=' font-Titan mb-5 text-base bg-Violet/50 text-Violet border-2 border-Violet dark:bg-blue/50 p-3 rounded-xl dark:text-white dark:border-white dark:font-Paytone'>{title}</h3>
                    <img src={Image} alt='' width={130}  />
                    </div>
                ))
            }
            </div>
        </Section>
    )
}

export default Services