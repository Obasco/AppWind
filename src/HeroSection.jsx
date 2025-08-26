import React from 'react'
import hero from './assets/herophone.svg'

const HeroSection = () => {
  return (
    <section id='home' >
        <div className=' mt-20 min-h-screen rounded-[20px] py-10 mx-4 bg-gradient-to-r from-[#feeefe] to-[#e5f2fe] h-full'>

        <div className='flex flex-wrap items-center mx-4 gap-x-24'>
          <div className='px-4 ms-5  leading-tight gap-x-30 max-w-xl'>
            <h1 className='font-semibold text-5xl'>Tailwind CSS <br /> Template for <span className='font-bold'>Apps <br /> and Software</span></h1>
            <p className='text-[#9699a6] text-base pe-5 font-semibold font-2xl'>
              All in one Tailwind CSS site template for - App and Software sites. Comes with all essential components, clean design and everything you can expect from a complete app landing page.
            </p>
          </div>

          <div className='ms-16   '>
              <img src={hero} alt="" />
          </div>
        </div>


        </div>
    </section>
  )
}

export default HeroSection