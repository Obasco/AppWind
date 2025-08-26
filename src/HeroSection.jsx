import React from 'react'
import hero from './assets/herophone.svg'

const HeroSection = () => {
  return (
    <section id='home' >
        <div className=' mt-20 min-h-screen rounded-[20px] py-10 mx-4 bg-gradient-to-r from-[#feeefe] to-[#e5f2fe] h-full'>

        <div className='flex flex-wrap items-center mx-4'>
          <div className='px-4 ms-5  max-w-[470px] text-7xl leading-tight'>
            <h1 className='font-semibold text-5xl '>Tailwind CSS <br /> Template for <span className='font-bold'>Apps <br /> and Software</span></h1>
          </div>

          <div>
              <img src={hero} alt="" />
          </div>
        </div>


        </div>
    </section>
  )
}

export default HeroSection