import React from 'react'
import Section from '../Common/Section'

const Contact = () => {
    return (
        <Section>
            <h3 className='flex flex-row justify-center items-center font-DynaPuff font-semibold text-3xl md:text-6xl'>Contactame</h3>
            <br />
            <p className='text-xl font-Quicksand font-bold text-center'>Si necesitas saber mas información contactame 😁</p>
            <br />

            {/* ---bottom form------- */}
            <div className='flex justify-center items-center'>

                <div className=' p-8 text-left'>

                    <form action="" method='POST'>
                        <div className='w-full'>
                            <div className='flex flex-col'>
                                <label className='capitalize text-xl py-2 font-bold font-Gochi text-pink'>
                                    Nombre
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2  font-bold font-Gochi text-pink'>
                                    Telefono
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 font-bold font-Gochi text-pink'>
                                    Correo
                                </label>
                                <input type='text' name='name' className='border-2 border-pink rounded-xl p-3 flex focus: outline-none' />
                            </div>

                            <div className='flex flex-col my-2'>
                                <label className='capitalize text-xl py-2 font-bold font-Gochi text-pink'>
                                    Mensaje
                                </label>
                                <textarea
                                    name='mensaje'
                                    rows="7"
                                    className='border-2 rounded-xl p-3 flex focus:outline-none border-pink resize-none'
                                ></textarea>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mt-8 mx-10 text-xs font-Gochi font-bold md:text-xl lg:text-2xl'>
                            <button className="relative px-6 py-3 font-bold text-black group h-12">
                                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
                                <span class="relative">Enviar Mensaje</span></button>
                        </div>
                    </form>
                </div>

                {/*------ Animacion---- */}

            </div>
        </Section>
        )
}

export default Contact