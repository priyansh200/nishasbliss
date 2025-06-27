import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import ImageModal from '../components/ImageModal';

// Gallery categories array
const bridesmaidCategories = [
  {
    title: 'Haldi Ceremony',
    description: 'Soft, subtle, and radiant – this glowy base look paired with shimmer-kissed eyes and peachy lips was all about keeping it fresh and flawless. Hair: Twisted braid for a festive and traditional touch.',
    features: [
      'Natural-looking foundation',
      'Soft eye makeup',
      'Long-lasting products',
      'Photography-friendly'
    ],
    image: {
      url: '/images/makeUp/1.jpg',
      alt: 'Classic Bridesmaid Makeup',
      placeholder: false
    }
  },
  {
    title: 'Mehendi Ceremony',
    description: 'A colorful twist! Matte day base with soft finish, paired with bright colored eyes – vibrant and fun. Hair: Mirrored and colored braid, adding a playful pop.',
    features: [
      'Dewy finish',
      'Subtle contouring',
      'Colourful eyes',
      'Rosy cheeks'
    ],
    image: {
      url: '/images/makeUp/2.jpg',
      alt: 'Natural Bridesmaid Makeup',
      placeholder: false
    }
  },
  {
    title: 'Gori Pujan ',
    description: 'Soft pink glam for a divine day function. A natural, fresh skin look with pink hues on the cheeks and eyes.Hair: Bubble ponytail for an elegant modern finish.',
    features: [
      'Enhanced eye makeup',
      'Defined contouring',
      'Subtle shimmer',
      'Professional finish'
    ],
    image: {
      url: '/images/makeUp/3.jpg',
      alt: 'Glamorous Bridesmaid Makeup',
      placeholder: false
    }
  },
  {
    title: 'Sangeet Ceremony',
    description: 'Full-glam night makeup with shimmering eyes and a bold, confident finish.Hair: Trendy braid bringing a bold and festive statement.',
    features: [
      'Shimmering eyes',
      'Bold and confident finish',
      'Trendy braid',
      'Festive statement'
    ],
    image: {
      url: '/images/makeUp/4.jpg',
      alt: 'Glamorous Bridesmaid Makeup',
      placeholder: false
    }
  },
  {
    title: 'Wedding night Glam',
    description: 'Nude matte base with sharp kajal-eyeliner combo – intense and graceful.Outfit: Black saree added elegance and drama.Hair: Sleek bun for a chic and timeless vibe.',
    features: [
      'Intense and graceful',
      'Black saree added elegance and drama',
      'Sleek bun for a chic and timeless vibe',
      'Nude matte base with sharp kajal-eyeliner combo'
    ],
    image: {
      url: '/images/makeUp/5.jpg',
      alt: 'Glamorous Bridesmaid Makeup',
      placeholder: false
    }
  },
  {
    title: 'Reception Radiance',
    description: 'Soft glam base with fresh blue-pink eyes to match a stunning sky-blue saree.Hair: Chic bun wrapped with gajra – the final royal touch.',
    features: [
      'Soft glam base',
      'Fresh blue-pink eyes',
      'Stunning sky-blue saree',
      'Chic bun wrapped with gajra'
    ],
    image: {
      url: '/images/makeUp/6.jpg',
      alt: 'Glamorous Bridesmaid Makeup',
      placeholder: false
    }
  },
  {
    title: 'Sangeet Glam',
    description: 'Soft glam, subtle shine ✨Nude pink lips, gentle eyes, and a clean base – the perfect bridesmaid glow for a musical night full of love and laughter.Hair: Messy bun with braided front for that playful royal charm 💕',
    features: [
      'Soft glam, subtle shine',
      'Nude pink lips',
      'Gentle eyes',
      'Clean base'
    ],
    image: {
      url: '/images/makeUp/7.jpg',
      alt: 'Glamorous Bridesmaid Makeup',
      placeholder: false
    }
  },  {
    title: 'Cocktail Party',
    description: 'Bold. Glowy. Glamorous. 💫A dewy full-night glam look with sultry smokey eyes, nude lips, and a radiant base — paired with a voluminous half-up wavy hairstyle.She owned the cocktail night like a showstopper! 🥂',
    features: [
      'Bold, glowy, glamorous',
      'Sultry smokey eyes',
      'Nude lips',
      'Radiant base',
      'Voluminous half-up wavy hairstyle'
    ],
    image: {
      url: '/images/makeUp/8.jpg',
      alt: 'Glamorous Bridesmaid Makeup',
      placeholder: false
    }
  },  {
    title: 'Wedding Day Glam',
    description: 'Daytime grace meets modern glam 🌸Soft glowing base with nude lips and subtle eyes — beautifully paired with a trendy messy braid.The perfect minimal glam for a bridesmaid by day, ready to steal hearts ',
    features: [
      'Daytime grace meets modern glam',
      'Soft glowing base',
      'Nude lips',
      'Subtle eyes',
      'Trendy messy braid'
    ],
    image: {
      url: '/images/makeUp/9.jpg',
      alt: 'Glamorous Bridesmaid Makeup',
      placeholder: false
    }
  }

];

const BridesmaidMakeupGallery = () => {
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
          <h1 className="section-title">Bridesmaid Makeup Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our stunning bridesmaid makeup looks, designed to complement the bride while ensuring each bridesmaid shines.
          </p>
        </motion.div>

        <div className="space-y-16">
          {bridesmaidCategories.map((category, index) => (
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
                      <div className="w-full h-full aspect-[4/3] overflow-hidden bg-gray-50">
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Be Part of the Big Day?</h2>
          <p className="text-gray-600 mb-6">
            Book your bridesmaid makeup appointment and let us create a perfect look that complements the bride and the wedding theme.
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
        service="Bridesmaid Makeup"
      />
    </div>
  );
};

export default BridesmaidMakeupGallery; 