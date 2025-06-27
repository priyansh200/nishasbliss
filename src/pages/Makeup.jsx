import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'
import ImageModal from '../components/ImageModal'

const makeupServices = [
  {
    title: 'Bridesmaid Makeup',
    description: 'Professional makeup services designed specifically for bridesmaids, ensuring they look stunning while complementing the bride\'s look.',
    images: [
      {
        url: '/images/makeUp/bridesmaid1.jpg',
        alt: 'Bridesmaid Makeup Look',
        placeholder: false
      },
      {
        url: '/images/makeUp/birdesmaid2.jpg',
        alt: 'Bridesmaid Makeup Look',
        placeholder: false
      }
    ],
    features: [
      'Long-lasting, photography-friendly makeup',
      'Coordinated looks for the entire bridal party',
      'Premium products for all skin types',
      'Complements bride\'s makeup style'
    ],
    galleryPath: '/makeup/bridesmaid-makeup'
  },
  {
    title: 'Party/Special Occasion Makeup',
    description: 'Stunning makeup looks tailored for your special events, from glamorous parties to formal occasions.',
    images: [
      {
        url: '/images/makeUp/party1.jpg',
        alt: 'Party Makeup Look',
        placeholder: false
      },
      {
        url: '/images/makeUp/party2.jpg',
        alt: 'Special Occasion Style',
        placeholder: false
      }
    ],
    features: [
      'Customized looks for any occasion',
      'High-definition makeup application',
      'Waterproof and long-lasting products',
      'Trending techniques and products'
    ],
    galleryPath: '/makeup/party-makeup'
  }
]

const Makeup = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState('')

  const handleBookNow = (style) => {
    setSelectedStyle(style)
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
              Makeup Services
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transform your look with our professional makeup services. Whether you're part of a wedding party or attending a special event, we'll create the perfect look for your occasion.
          </p>
        </motion.div>

        <div className="space-y-16">
          {makeupServices.map((service, index) => (
            <ServiceSection
              key={service.title}
              service={service}
              index={index}
              onImageClick={(image) => setSelectedImage(image)}
              onBookNow={() => handleBookNow(service.title)}
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
          <h2 className="text-2xl font-bold mb-4">Ready to Book Your Makeup Session?</h2>
          <p className="text-gray-600 mb-6">
            Choose your preferred service and let us create the perfect look for your special occasion.
          </p>
          <motion.button
            onClick={() => handleBookNow('Makeup Services')}
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
        service={`Makeup - ${selectedStyle}`}
      />
    </div>
  )
}

const ServiceSection = ({ service, index, onImageClick, onBookNow }) => {
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
            {service.title}
          </h2>
          <p className="text-gray-600">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <CheckIcon className="h-5 w-5 text-salon-500 mr-2" />
                {feature}
              </li>
            ))}
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
            <Link to={service.galleryPath}>
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
          {service.images.map((image, imageIndex) => (
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

export default Makeup 