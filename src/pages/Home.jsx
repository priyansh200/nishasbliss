import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const Home = () => {
  const contactRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToContact) {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
      // Clear the state after scrolling
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location.state, navigate])

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='w-full overflow-x-hidden'>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center w-full overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/gandr-collage.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px) brightness(0.7)',
            transform: 'scale(1.1)', // Prevents blur edges from showing
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-1"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom relative z-10 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Where Elegance Meets Art
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow"
          >
            Makeup, Mehndi & Hairstyling by Experts
          </motion.p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white/90 text-gray-900 px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_0_15px_rgba(255,102,153,0.5)]"
          >
            Book Now
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800">About Nisha's Bliss</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Nisha's Bliss, where beauty meets artistry. With over 5 years of experience in the beauty industry, 
                we specialize in creating stunning looks for all occasions - from weddings to festivals, and everything in between.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our expertise spans across traditional and modern beauty services, including intricate mehndi designs, 
                professional makeup application, and creative hairstyling. We take pride in understanding each client's unique style 
                and preferences to deliver personalized beauty solutions.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-salon-600 to-salon-500 text-white px-6 py-2 rounded-md font-medium hover:from-salon-500 hover:to-salon-400 transition-colors duration-300"
                >
                  Contact Us
                </motion.button>
                <motion.button
                  onClick={() => navigate('/about')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-salon-500 text-salon-600 px-6 py-2 rounded-md font-medium hover:bg-salon-50 transition-colors duration-300"
                >
                  View More
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-salon-50 to-lavender-50 p-8 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-salon-600 to-salon-500 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Professional Experience</h3>
                    <p className="text-gray-600">5+ years of industry expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-salon-600 to-salon-500 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Customized Services</h3>
                    <p className="text-gray-600">Tailored to your preferences</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-salon-600 to-salon-500 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium Products</h3>
                    <p className="text-gray-600">High-quality beauty products</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <ServicePreview
              title="Heena Art"
              description="Traditional and modern mehndi designs for all occasions."
              image="/images/mehndi/mehndiMain.jpg"
              link="/heena"
              delay={0.2}
            />

            <ServicePreview
              title="Hairstyling"
              description="From elegant updos to trendy cuts and styling."
              image="/images/hairstyle/hairstyleMain.jpg"
              link="/hairstyle"
              delay={0.4}
            />

            <ServicePreview
              title="Makeup"
              description="Professional makeup services for any occasion."
              image="/images/makeUp/makeupMain.jpg"
              link="/makeup"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact-section" className="py-16 bg-white">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

const ServicePreview = ({ title, description, image, link, delay }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden group"
    >
      <div className="h-[400px] relative overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = '/images/placeholder.svg'
            e.target.alt = 'Image Coming Soon'
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.button
          onClick={() => navigate(link)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-salon-600 to-salon-500 text-white px-6 py-2 rounded-md font-medium hover:from-salon-500 hover:to-salon-400 transition-colors duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Home 