import React from 'react'
import "./CSS/BlogPreviewSection.css"
const BlogPreviewSection = () => {
  return (
     <section className='BlogPreview'>
      <div className='BlogPreviewSection'>
        <h1 className=' '>Recent Articles</h1>
        <h3>There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form.</h3>
         </div>

         <div className='BlogPreview-move'>
    <div className='BlogPreview-move1'>
        <div class="card-blog">
    <img src="./src/assets/blog-1.jpg" alt="" />
    <div class="card-content">
      <h2>Want to use Growup in your <br />organization?</h2>
      <p>Continue reading... <span class="arrow">→</span></p>
    </div>
  </div>

   <div class="card-blog2">
    <img src="./src/assets/blog-2.jpg" alt="" />
    <div class="card-content2">
      <h2>Interested in selling your own Apps on <br /> marketplace?
</h2>
      <p>Continue reading... <span class="arrow">→</span></p>
    </div>
    </div>
           
    <div className='BlogPreview-move2'>
     <div class="card-blog3">
    <img src="./src/assets/blog-3.jpg" alt="" />
    <div class="card-content3">
      <h2>Interested in selling your own Apps on <br /> marketplace?
</h2>
      <p>Continue reading... <span class="arrow3">→</span></p>
    </div>
    </div>
    </div>
    </div>
         </div>

  <div class="logo-strip">
   
    <a href="https://uideck.com" target="_blank" class="logo">
      <img src=" uideck.svg" alt="uideck"/>
    </a>

    <a href="https://tailgrids.com" target="_blank" class="logo">
      <img src=" tailgrids.svg" alt="tailgrids"/>
    </a>

    <a href="https://lineicons.com" target="_blank" class="logo">
      <img src=" lineicons.svg" alt="lineicons"/>
    </a>

    <a href="https://ayroui.com" target="_blank" class="logo">
      <img src="ayroui.svg" alt="ayro ui"/>
    </a>

    <a href="https://plainadmin.com" target="_blank" class="logo">
      <img src=" plainadmin.svg" alt="plainadmin"/>
    </a>
  </div>
      
    </section>
  )
}

export default BlogPreviewSection