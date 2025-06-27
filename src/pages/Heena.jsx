import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'
import ImageModal from '../components/ImageModal'

const categories = [
  {
    title: 'Non-Bridal Mehndi',
    description: 'Explore our diverse range of non-bridal mehndi styles including Floral, Modern, Minimal, Traditional Bharwa, Traditional + Modern, and Arabic/Afghani designs.',
    images: [
      {
        url: '/images/mehndi/nonbridal1.jpg',
        alt: 'Non-Bridal Mehndi Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/nonbridal2.jpg',
        alt: ' Non-Bridal Styles',
        placeholder: false
      }
    ]
  },
  {
    title: 'Bridal Mehndi',
    description: 'Exquisite and intricate bridal mehndi designs that tell your unique love story. Perfect for your special day.',
    images: [
      {
        url: '/images/mehndi/bridal1.jpg',
        alt: 'Bridal Mehndi Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/bridal2.jpg',
        alt: 'Bridal Mehndi Design',
        placeholder: false
      }
    ]
  },
  {
    title: 'Leg Bloom Henna',
    description: 'Beautiful and detailed leg mehndi designs, perfect for brides and special occasions. Featuring intricate patterns and unique motifs.',
    images: [
      {
        url: '/images/mehndi/leg1.jpg',
        alt: 'Leg Mehndi Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/leg2.jpg',
        alt: 'Leg Mehndi Design',
        placeholder: false
      }
    ]
  }
]

const Heena = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleBookNow = (service) => {
    setSelectedService(service)
    setIsBookingOpen(true)
  }

  return (
    <div className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-salon-600 to-salon-400">
              Heena Art Services
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the beauty of traditional and modern mehndi designs, crafted with precision and care.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <CategorySection
              key={category.title}
              category={category}
              index={index}
              onImageClick={(image) => setSelectedImage(image)}
              onBookNow={() => handleBookNow(category.title)}
            />
          ))}
        </div>

        {/* Booking Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to schedule your mehndi appointment or for any inquiries about our services.
          </p>
          <motion.button
            onClick={() => handleBookNow('Heena Art Service')}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-salon-600 to-salon-500 text-white px-8 py-3 rounded-full font-medium hover:from-salon-500 hover:to-salon-400 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url}
        altText={selectedImage?.alt}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={selectedService}
      />
    </div>
  )
}

const CategorySection = ({ category, index, onImageClick, onBookNow }) => {
  const getCategoryPath = (title) => {
    switch (title) {
      case 'Non-Bridal Mehndi':
        return '/non-bridal-mehndi';
      case 'Bridal Mehndi':
        return '/bridal-mehndi';
      case 'Leg Bloom Henna':
        return '/leg-bloom-henna';
      default:
        return '/';
    }
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden group hover:shadow-lg transition-shadow duration-300"
    >
      <div className={`grid md:grid-cols-2 gap-8 p-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-salon-600 to-salon-400">
            {category.title}
          </h2>
          <p className="text-gray-600">{category.description}</p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <CheckIcon className="h-5 w-5 text-salon-500 mr-2" />
              Natural henna ingredients
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="h-5 w-5 text-salon-500 mr-2" />
              Long-lasting designs
            </li>
            <li className="flex items-center text-gray-600">
              <CheckIcon className="h-5 w-5 text-salon-500 mr-2" />
              Customized patterns
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-6">
            <motion.button
              onClick={onBookNow}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-salon-600 to-salon-500 text-white px-6 py-2.5 rounded-full font-medium hover:from-salon-500 hover:to-salon-400 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span>Book Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.button>
            <Link to={getCategoryPath(category.title)}>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-salon-600 to-salon-500 group-hover:shadow-lg"
              >
                <span className="absolute inset-0 rounded-full bg-white"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-salon-600 to-salon-500 hover:from-salon-500 hover:to-salon-400">
                  View Gallery
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {category.images.map((image, imageIndex) => (
            <motion.div
              key={imageIndex}
              whileHover={{ y: -5 }}
              className="cursor-pointer relative group rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white"
              onClick={() => onImageClick(image)}
            >
              {image.placeholder ? (
                <div className="w-full aspect-square bg-gradient-to-br from-salon-100 to-rose-100 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:from-salon-200 group-hover:to-rose-200">
                  <svg className="w-12 h-12 text-salon-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-salon-600 font-medium">Image Coming Soon</span>
                </div>
              ) : (
                <>
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)

export default Heena 