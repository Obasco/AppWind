import Navbar from "./Navbar"
import HeroSection from "./HeroSection";
import AwardsSection from "./AwardsSection";
import FeatureHighlights from "./FeatureHighlights";
import AppDownloadSection from "./AppDownloadSection";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import BlogPreviewSection from "./BlogPreviewSection";
import ContactFormSection from "./ContactFormSection";
import Footer from "./Footer"
function App() {


  return (
    <>
     <Navbar />

     {/* Hero / Landing */}
      <HeroSection />

      {/* Awards / Achievements */}
      <AwardsSection />

      {/* Features */}
      <FeatureHighlights />

      {/* App Download */}
      <AppDownloadSection />

      {/* Pricing */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <FAQSection />

      {/* Blog Preview */}
      <BlogPreviewSection />

      {/* Contact Form */}
      <ContactFormSection />

      {/* Footer */}
      <Footer />
    
   
    </>
  )
}

export default App
