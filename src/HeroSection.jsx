import React from 'react'
import hero from './assets/herophone.svg'

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='mt-20 min-h-screen rounded-[20px] py-10 mx-4 bg-gradient-to-r from-[#feeefe] to-[#e5f2fe]'>
        
        <div className='flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16'>
          
          {/* Text Section */}
          <div className='px-4 md:ms-9 max-w-xl text-center md:text-left mt-14'>
            <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-9 leading-tight md:leading-[3.5rem]'>
              Tailwind CSS <br /> Template for <span className='font-bold'>Apps <br /> and Software</span>
            </h1>
            <p className='text-[#9699a6] leading-7 md:leading-8 font-sans text-base sm:text-lg mb-6 md:mb-9'>
              All in one Tailwind CSS site template for - App and Software sites. Comes with all essential components, clean design and everything you can expect from a complete app landing page.
            </p>

            <div>
              <button className='bg-violet-500 hover:bg-violet-600 transition text-white px-8 sm:px-12 rounded-2xl py-3 sm:py-4'>
                Explore
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className='flex justify-center md:justify-end py-3 md:py-10'>
            <img src={hero} alt="Hero Illustration" className='lg:ps-[8rem]'/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
