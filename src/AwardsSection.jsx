import React from 'react'

const AwardsSection = () => {
  return (
    <section className='py-10'>
        <div className='text-center mx-auto max-w-[510px]'>
          <h1 className='text-4xl font-bold mb-3'>Our Recent Awards</h1>
          <p className='text-[#9699a6]  font-[1rem]'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>


        <div className='flex flex-row gap-5 justify-center mt-11'>
          <div className=' bg-white shadow-xl rounded-xl py-4 px-4 h-[19rem] w-[21rem]'>
            <div className='flex gap-4'>
              <span className="inline-flex items-center justify-center h-8 w-8 bg-violet-600 rounded-full">

            <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"></path></g></svg>

    </span>



              <span>
                <h1 className='font-bold '>4.9 Rating</h1>
              </span>
            </div>
          </div>
          <div className=' bg-white shadow-xl rounded-xl py-4 px-4 h-[19rem] w-[21rem]'>02</div>
          <div className=' bg-white shadow-xl rounded-xl py-4 px-4 h-[19rem] w-[21rem]'>02</div>

        </div>
    </section>
  )
}

export default AwardsSection