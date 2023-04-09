import React from 'react'
import Section from '../Common/Section'
import Gatito from '../assets/Img/Gatico.gif'

const Contact = () => {
    return (
        <div name="Contacto">
        <Section>
            <h3 className='flex flex-row justify-center items-center font-McLaren font-semibold text-3xl md:text-6xl'>Contactame</h3>
            <br />
            <p className='text-xl font-Poppins text-center'>Si necesitas saber mas información contactame</p>
            {/*------ Animacion---- */}

            <div>
                <img src={Gatito} alt='Animacion' width={80} />
            </div>
            <br />

            {/* ---bottom form------- */}
            <div className='flex justify-center items-center'>

                <div className='form p-8 text-left border-2 border-Violet px-20 rounded-xl dark:border-pink dark:bg-pink/20 bg-Violet/20'>

                    <form action="https://getform.io/f/ea42105b-d485-46f0-8af0-90fc854500b8" method='POST'>
                        <div className='w-full'>
                            <div className='flex flex-col'>
                                <label className='capitalize text-xl py-2 font-bold font-McLaren text-Violet dark:text-pink'>
                                    Nombre
                                </label>
                                <input type='text' name='name' className='border-2 border-Violet dark:border-pink rounded-xl p-2 md:px-32 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2  font-bold font-McLaren text-Violet dark:text-pink'>
                                    Telefono
                                </label>
                                <input type='text' name='name' className='border-2 border-Violet dark:border-pink rounded-xl p-2 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 font-bold font-McLaren text-Violet  dark:text-pink'>
                                    Correo
                                </label>
                                <input type='text' name='name' className='border-2 border-Violet dark:border-pink rounded-xl p-2 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 font-bold font-McLaren text-Violet  dark:text-pink'>
                                    Mensaje
                                </label>
                                <textarea
                                    name='mensaje'
                                    rows="7"
                                    className='border-2 rounded-xl p-3 flex focus:outline-none text-Violet  dark:text-pink border-Violet dark:border-pink resize-none'
                                ></textarea>
                            </div>
                        </div>
                        <div className='button '>
                            <button className=' font-McLaren'>Enviar</button>
                        </div>
                    </form>
                </div>

            </div>
        </Section>
        </div>
        )
}

export default Contact