import React from 'react'
import hero from './assets/herophone.svg'

const HeroSection = () => {
  return (
    <section id='home' >
        <div className=' mt-20 min-h-screen rounded-[20px] py-10 mx-4 bg-gradient-to-r from-[#feeefe] to-[#e5f2fe] h-full'>

        <div className='flex flex-wrap items-center  gap-x-24'>
          <div className='flex px-4 ms-5  mx-auto leading-tight l max-w-xl'>
            <h1 className='font-semibold text-5xl mb-9  leading-14'>Tailwind CSS <br /> Template for <span className='font-bold'>Apps <br /> and Software</span></h1>
            <p className='text-[#9699a6] leading-8 font-sans font-normal px-4 font-4xl text-lg'>
              All in one Tailwind CSS site template for - App and Software sites. Comes with all essential components, clean design and everything you can expect from a complete app landing page.
            </p>


            <div className='justify content-center'>
              <img src={hero} alt="" />
          </div>
          </div>

          
        </div>


        </div>
    </section>
  )
}

export default HeroSection