import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection && location.pathname === '/') {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-salon-50 via-white to-lavender-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-salon-300 via-lavender-400 to-gold-300"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-salon-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender-100 rounded-full filter blur-3xl opacity-20 translate-y-1/2"></div>
      
      <div className="container-custom py-16 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="block group">
              <h3 className="text-3xl font-display font-bold">
                <span className="bg-gradient-to-r from-salon-600 to-salon-500 bg-clip-text text-transparent group-hover:from-salon-500 group-hover:to-salon-400 transition-all duration-300">
                  Nisha's Bliss
                </span>
              </h3>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Transforming moments into memories with our expert beauty services. Your beauty journey begins here.
            </p>
            <div className="flex space-x-4 pt-4">
              <SocialIcon href="https://instagram.com" icon="instagram" />
              <SocialIcon href="https://wa.me/your-number" icon="whatsapp" />
              <SocialIcon href="mailto:info@nishasbliss.com" icon="email" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-display font-semibold text-salon-700">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterButton onClick={scrollToContact}>Contact</FooterButton>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-display font-semibold text-salon-700">Our Services</h4>
            <ul className="space-y-3">
              <FooterLink to="/heena">Heena Art</FooterLink>
              <FooterLink to="/hairstyle">Hairstyling</FooterLink>
              <FooterLink to="/makeup">Makeup</FooterLink>
             
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-display font-semibold text-salon-700">Get in Touch</h4>
            <div className="space-y-4">
              <ContactInfo
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                text="info@nishasbliss.com"
              />
              <ContactInfo
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                text="+1 (234) 567-8900"
              />
              <ContactInfo
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                text="Mumbai, Maharashtra"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500">
              © {currentYear} Nisha's Bliss. All rights reserved.
            </p>
            
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to}
      className="text-gray-600 hover:text-salon-500 transition-colors duration-300 flex items-center group"
    >
      <span className="w-0 group-hover:w-2 h-0.5 bg-salon-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
      {children}
    </Link>
  </li>
)

const FooterButton = ({ onClick, children }) => (
  <li>
    <button
      onClick={onClick}
      className="text-gray-600 hover:text-salon-500 transition-colors duration-300 flex items-center group"
    >
      <span className="w-0 group-hover:w-2 h-0.5 bg-salon-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
      {children}
    </button>
  </li>
)

const SocialIcon = ({ href, icon }) => {
  const icons = {
    instagram: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    whatsapp: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
    email: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    )
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex items-center justify-center text-salon-600 hover:text-salon-500 hover:shadow-[0_0_15px_rgba(255,102,153,0.5)] transition-all duration-300"
    >
      {icons[icon]}
    </motion.a>
  )
}

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-3 text-gray-600">
    <div className="w-10 h-10 rounded-full bg-salon-50 flex items-center justify-center text-salon-600">
      {icon}
    </div>
    <span>{text}</span>
  </div>
)

export default Footer 