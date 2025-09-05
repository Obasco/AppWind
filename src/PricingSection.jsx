import React from 'react'
import "./CSS/Pricing.css";
const PricingSection = () => {
  return (
    <section className='Pricing'>
    <div className='Pricing-text'>
         <h1  className=' Pricing-Sec'>Flexible Plans</h1>
         <h3>There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form.</h3>
    </div>
    <div className='card-bodyf'>

    
     <div class="card">
    <div class="card-header">
      <h3>Basic Plan</h3>
      
    </div>
    <div class="card-body">
      <div class="price">$35 <span>/month</span></div>
      <ul className='UL'>
        <li>Life time free updates!</li>
        <li>Unlimited transactions</li>
        <li>Free credit-card</li>
        <li>1 year premium support</li>
      </ul>
      <a href="#" class="btn">Choose Basic Plan</a>
    </div>
    
    
  </div>

    <div class="card2">
    <div class="card-header">
      <h3>Basic Plan</h3>
      
    </div>
    <div class="card-body">
      <div class="price">$35 <span>/month</span></div>
      <ul className='UL'>
        <li>Life time free updates!</li>
        <li>Unlimited transactions</li>
        <li>Free credit-card</li>
        <li>1 year premium support</li>
      </ul>
      <a href="#" class="btn">Choose Basic Plan</a>
    </div>
    
    
  </div>

    <div class="card">
    <div class="card-header">
      <h3>Basic Plan</h3>
      
    </div>
    <div class="card-body">
      <div class="price">$35 <span>/month</span></div>
      <ul className='UL'>
        <li>Life time free updates!</li>
        <li>Unlimited transactions</li>
        <li>Free credit-card</li>
        <li>1 year premium support</li>
      </ul>
      <a href="#" class="btn">Choose Basic Plan</a>
    </div>
    
    
  </div>
   </div>
    </section>
    
    
  )
}

export default PricingSection