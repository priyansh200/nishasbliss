import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import ImageModal from '../components/ImageModal';

// Gallery images array
const braidsGallery = [
  {
    url: '/images/hairstyle/9.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
  {
    url: '/images/hairstyle/10.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
  {
    url: '/images/hairstyle/11.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
  {
    url: '/images/hairstyle/12.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
  {
    url: '/images/hairstyle/13.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
  {
    url: '/images/hairstyle/14.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
  {
    url: '/images/hairstyle/15.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
  {
    url: '/images/hairstyle/16.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
  {
    url: '/images/hairstyle/17.jpg',
    alt: ' Braid Style',
    placeholder: false
  },
];

const BraidsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="py-16 bg-gradient-to-br from-salon-50 to-lavender-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Braids Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning braid styles, from classic French braids to intricate fishtails.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {braidsGallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer relative group rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              onClick={() => setSelectedImage(image)}
            >
              {image.placeholder ? (
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-salon-100 to-lavender-100 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:from-salon-200 group-hover:to-lavender-200">
                  <svg className="w-16 h-16 text-salon-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-salon-600 font-medium text-lg">Image Coming Soon</span>
                </div>
              ) : (
                <>
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Booking Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Look?</h2>
          <p className="text-gray-600 mb-6">
            Book your braiding appointment today and experience our expert styling services.
          </p>
          <motion.button
            onClick={() => setIsBookingOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-salon-600 to-salon-500 text-white px-8 py-3 rounded-full font-medium hover:from-salon-500 hover:to-salon-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_0_15px_rgba(255,102,153,0.5)] transition-all duration-300"
          >
            Book Now
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
        service="Braiding"
      />
    </div>
  );
};

export default BraidsGallery; 