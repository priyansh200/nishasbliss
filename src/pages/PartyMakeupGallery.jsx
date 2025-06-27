import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import ImageModal from '../components/ImageModal';

// Gallery categories array
const partyMakeupCategories = [
  {
    title: 'Gracefull Glow',
    description: 'Soft glam look with a radiant base and subtle eyes, styled with a messy bun — perfect for a graceful day function. ✨🌼Made to enhance mature beauty with elegance and poise.',
    features: [
      'Dewy skin finish',
      'Soft eye makeup',
      'Natural-looking blush',
      'Glossy lips',
    ],
    image: {
      url: '/images/makeUp/10.jpg',
      alt: 'Glamorous Evening Makeup',
      placeholder: false
    }
  },
  {
    title: 'Nude belle',
    description: 'Fresh nude base with soft eyes and wavy open hair, giving this school girl the perfect farewell party vibe. 🌸💄Minimal yet magical, just right for teenage elegance.',
    features: [
      'Soft eyeshadow',
     'Metallic finishes',
     'Nude lip colors',
     'Wavy open hair'
     
    ],
    image: {
      url: '/images/makeUp/11.jpg',
      alt: 'Natural Party Makeup',
      placeholder: false
    }
  },
  {
    title: 'Starlit Shine',
    description: 'Bold yet balanced night wedding glam with dewy skin and flowing wavy locks. 🌙✨Perfect for that stunning evening entrance.',
    features: [
      'Dewy skin finish',
      'Soft eye makeup',
      'Natural-looking blush',
      'Glossy lips',
    ],
    image: {
      url: '/images/makeUp/12.jpg',
      alt: 'Glitter Party Makeup',
      placeholder: false
    }
  },
  {
    title: 'Nirtya Glam',
    description: 'Created a full glam look for a little Kathak dancer with bright features and a beautiful flower braid. 🌺💃Traditional charm paired with performance-ready perfection.',
    features: [
      'Bright features',
      'Flower braid',
      'Traditional charm',
      'Performance-ready perfection'
    ],
    image: {
      url: '/images/makeUp/13.jpg',
      alt: 'Stage Makeup',
      placeholder: false
    }
  },
  {
    title: 'Desi Radiance',
    description: 'Indian glam base with glowing skin and shimmery eyes for a soulful Kua Poojan look. 💫🌿Traditional rituals meet timeless beauty.',
    features: [
      'Glowing skin',
      'Shimmery eyes',
      'Traditional charm',
      'Performance-ready perfection'
    ],
    image: {
      url: '/images/makeUp/14.jpg',
      alt: 'Festival Makeup Look',
      placeholder: false
    }
  },
];

const PartyMakeupGallery = () => {
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
          <h1 className="section-title">Party Makeup Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our stunning party makeup looks, perfect for any special occasion or celebration.
          </p>
        </motion.div>

        <div className="space-y-16">
          {partyMakeupCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.title}</h2>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-salon-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer relative group h-full"
                  onClick={() => setSelectedImage(category.image)}
                >
                  {category.image.placeholder ? (
                    <div className="w-full h-full aspect-[4/3] bg-gradient-to-br from-salon-100 to-lavender-100 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:from-salon-200 group-hover:to-lavender-200">
                      <svg className="w-16 h-16 text-salon-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-salon-600 font-medium text-lg">Image Coming Soon</span>
                    </div>
                  ) : (
                    <>
                      <div className="w-full h-full aspect-[4/3] overflow-hidden">
                        <img
                          src={category.image.url}
                          alt={category.image.alt}
                          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {category.image.alt}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Shine?</h2>
          <p className="text-gray-600 mb-6">
            Book your party makeup appointment today and let us create your perfect glamorous look.
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
        service="Party Makeup"
      />
    </div>
  );
};

export default PartyMakeupGallery; 