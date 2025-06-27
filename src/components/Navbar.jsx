import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection && location.pathname === '/') {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } })
    }
  }

  const buttonHoverAnimation = {
    whileHover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.98 }
  }

  const menuAnimation = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]' 
          : 'bg-white/60 backdrop-blur-sm'
       }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.span 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-salon-600 to-salon-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nisha's Bliss
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
            <NavLink to="/heena" currentPath={location.pathname}>Heena</NavLink>
            <NavLink to="/hairstyle" currentPath={location.pathname}>Hairstyle</NavLink>
            <NavLink to="/makeup" currentPath={location.pathname}>Makeup</NavLink>
            <motion.button
              onClick={scrollToContact}
              {...buttonHoverAnimation}
              className="px-6 py-2.5 bg-gradient-to-r from-salon-600 to-salon-500 hover:from-salon-500 hover:to-salon-400 text-white rounded-full font-medium text-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_0_15px_rgba(255,102,153,0.5)] transition-all duration-300"
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-salon-50 text-salon-600 hover:bg-salon-100 focus:outline-none transition-colors duration-300"
            {...buttonHoverAnimation}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuAnimation}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden absolute left-0 right-0 top-full bg-white/80 backdrop-blur-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
                <MobileNavLink to="/" currentPath={location.pathname} onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                <MobileNavLink to="/heena" currentPath={location.pathname} onClick={() => setIsOpen(false)}>Heena</MobileNavLink>
                <MobileNavLink to="/hairstyle" currentPath={location.pathname} onClick={() => setIsOpen(false)}>Hairstyle</MobileNavLink>
                <MobileNavLink to="/makeup" currentPath={location.pathname} onClick={() => setIsOpen(false)}>Makeup</MobileNavLink>
                <motion.button 
                  onClick={() => {
                    setIsOpen(false)
                    scrollToContact()
                  }}
                  {...buttonHoverAnimation}
                  className="w-full px-6 py-3 bg-gradient-to-r from-salon-600 to-salon-500 hover:from-salon-500 hover:to-salon-400 text-white rounded-full font-medium text-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_0_15px_rgba(255,102,153,0.5)] transition-all duration-300 mt-4"
                >
                  Contact
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

const NavLink = ({ to, children, currentPath }) => {
  const isActive = currentPath === to
  
  return (
    <Link to={to}>
      <motion.span
        className={`relative text-lg font-medium ${
          isActive ? 'text-salon-600' : 'text-gray-600 hover:text-salon-500'
        }`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-salon-600 to-salon-400"
            initial={false}
          />
        )}
      </motion.span>
    </Link>
  )
}

const MobileNavLink = ({ to, children, currentPath, onClick }) => {
  const isActive = currentPath === to
  
  return (
    <Link to={to} onClick={onClick}>
      <motion.div
        whileHover={{ x: 5 }}
        className={`px-4 py-2 rounded-lg ${
          isActive 
            ? 'bg-gradient-to-r from-salon-600 to-salon-500 text-white' 
            : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        {children}
      </motion.div>
    </Link>
  )
}

export default Navbar