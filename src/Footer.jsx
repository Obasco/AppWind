import React from 'react'
import "./CSS/Footer.css"
const Footer = () => {
  return (
    
  <footer>
    <div className='Footer'>
       
     
    <div class="footer-brand">
      <img src="./src/assets/logo.svg" alt="" />
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat et sem at Etiam in lobortis dui. Praesent.</h3>
      <div class="socials">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>

     
    <div class="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Our Blog</a></li>
        <li><a href="#">Check Pricing</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Help & Support</a></li>
      </ul>
    </div>

     
    <div class="footer-links2">
      <h3>App Information</h3>
      <ul>
        <li><a href="#">Style Guideline</a></li>
        <li><a href="#">Getting Started</a></li>
        <li><a href="#">Changelog</a></li>
        <li><a href="#">Update Details</a></li>
      </ul>
    </div>

  
    <div class="newsletter">
      <h3>Join Our Newsletter</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla feugiat</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter your email"/>
        <button type="submit"><i class="fas fa-angle-right"></i></button>
      </form>
    </div>
    </div>
  </footer>
  )
}

export default Footer