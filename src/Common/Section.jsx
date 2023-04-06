import React from 'react'

const Section = ({title, subTitle, children}) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center'>
    <h3 className='py-3 text-3xl lg:text-5xl font-McLaren'>{title}</h3>
    <p className='max-w-xl font-light mb-10 text-sm md:text-base'>{subTitle}</p>
    {children}
    </section>
  )
}

export default Section