import React from 'react'
import "./CSS/ContactFormSection.css"
const ContactFormSection = () => {
  return (
       <section className='ContactForm'>
      <div className='ContactFormSection'>
        <h1 className=' '>Need Any Help?</h1>
        <h3>There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form.</h3>
         </div>

           <form class="contact-form">
    <div class="form-row">
      <div class="form-group">
        <label for="first">First Name</label>
        <input type="text" id="first" placeholder="Enter your first name"/>
      </div>
      <div class="form-group">
        <label for="last">Last Name</label>
        <input type="text" id="last" placeholder="Enter your last name"/>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="email">Business email</label>
        <input type="email" id="email" placeholder="Enter your email"/>
      </div>
      <div class="form-group">
        <label for="phone">Phone number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number"/>
      </div>
    </div>

    <div class="form-group">
      <label for="message">What are you looking for?</label>
      <textarea id="message" placeholder="Enter your message"></textarea>
    </div>

    <div class="form-submit">
      <button type="submit">Submit Message</button>
    </div>
  </form>
        </section>
       
         
      
    
  )
}

export default ContactFormSection