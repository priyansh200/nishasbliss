import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import ImageModal from '../components/ImageModal';

// This will be your full gallery of bridal mehndi images
const bridalGallery = [
  {
    url: '/images/mehndi/b1.jpg',
    alt: 'Intricate bridal mehndi design 1',
    placeholder: false
  },
  {
    url: '/images/mehndi/b2.jpg',
    alt: 'Intricate bridal mehndi design 2',
    placeholder: false
  },
  {
    url: '/images/mehndi/b3.jpg',
    alt: 'Intricate bridal mehndi design 3',
    placeholder: false
  },
  {
    url: '/images/mehndi/b4.jpg',
    alt: 'Intricate bridal mehndi design 4',
    placeholder: false
  },
  {
    url: '/images/mehndi/b5.jpg',
    alt: 'Intricate bridal mehndi design 5',
    placeholder: false
  },
  {
    url: '/images/mehndi/b6.jpg',
    alt: 'Intricate bridal mehndi design 6',
    placeholder: false
  },
  {
    url: '/images/mehndi/b7.jpg',
    alt: 'Intricate bridal mehndi design 7',
    placeholder: false
  },
  {
    url: '/images/mehndi/b8.jpg',
    alt: 'Intricate bridal mehndi design 8',
    placeholder: false
  },
  {
    url: '/images/mehndi/b9.jpg',
    alt: 'Intricate bridal mehndi design 9',
    placeholder: false
  },
  {
    url: '/images/mehndi/b10.jpg',
    alt: 'Intricate bridal mehndi design 10',
    placeholder: false
  },
  {
    url: '/images/mehndi/b11.jpg',
    alt: 'Intricate bridal mehndi design 11',
    placeholder: false
  },
  {
    url: '/images/mehndi/b12.jpg',
    alt: 'Intricate bridal mehndi design 12',
    placeholder: false
  },
  {
    url: '/images/mehndi/b13.jpg',
    alt: 'Intricate bridal mehndi design 13',
    placeholder: false
  },




];

const BridalMehndi = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="py-16 bg-gradient-to-br from-salon-50 to-lavender-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Bridal Mehndi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our collection of intricate bridal mehndi designs, crafted with love and precision.
          </p>
        </motion.div>

        {/* Main Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          <div className="p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">Our Bridal Mehndi Services</h2>
                <p className="text-gray-600 mt-2">
                  Experience the artistry of our skilled henna artists who specialize in creating stunning bridal designs.
                </p>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-gradient-to-br from-salon-50 to-lavender-50 p-4 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Traditional Designs</h3>
                    <p className="text-gray-600 text-sm">
                      Classic bridal patterns with rich cultural heritage.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-salon-50 to-lavender-50 p-4 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Modern Fusion</h3>
                    <p className="text-gray-600 text-sm">
                      Contemporary designs blending tradition with modern aesthetics.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-salon-50 to-lavender-50 p-4 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Premium Service</h3>
                    <p className="text-gray-600 text-sm">
                      Dedicated bridal sessions with personalized attention.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <motion.button
                  onClick={() => setIsBookingOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-salon-600 to-salon-500 text-white px-8 py-3 rounded-full font-medium hover:from-salon-500 hover:to-salon-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_0_15px_rgba(255,102,153,0.5)] transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Book Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bridalGallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer relative group rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white"
                  onClick={() => setSelectedImage(image)}
                >
                  {image.placeholder ? (
                    <div className="w-full aspect-square bg-gradient-to-br from-salon-100 to-lavender-100 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:from-salon-200 group-hover:to-lavender-200">
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
        service="Bridal Mehndi"
      />
    </div>
  );
};

export default BridalMehndi; 