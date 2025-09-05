import React from 'react'
import hero from './assets/herophone.svg'

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='mt-20 min-h-screen rounded-[20px] py-10 mx-4 bg-gradient-to-r from-[#feeefe] to-[#e5f2fe]'>
        
        <div className='flex flex-wrap items-center gap-x-16'>
          
         
          <div className='px-4 ms-9 max-w-xl'>
            <h1 className='font-semibold text-5xl mb-9 leading-[3.5rem]'>
              Tailwind CSS <br /> Template for <span className='font-bold'>Apps <br /> and Software</span>
            </h1>
            <p className='text-[#9699a6] leading-8 font-sans text-lg mb-9'>
              All in one Tailwind CSS site template for - App and Software sites. Comes with all essential components, clean design and everything you can expect from a complete app landing page.
            </p>

            <div>
              <button className='bg-violet-500 text-white px-12 rounded-2xl py-4'>Explore</button>





            </div>
          </div>

          {/* Hero - img */}
          <div className='flex ms-24 py-10 rounded-2xl '>
            <img src={hero} alt="Hero Illustration" className='max-w-sm' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
