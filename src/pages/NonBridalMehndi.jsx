import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from '../components/BookingModal';
import ImageModal from '../components/ImageModal';

const nonBridalStyles = [
  {
    title: 'Floral',
    description: 'Elegant floral patterns inspired by nature. Perfect for those who love delicate and graceful designs.',
    images: [
      {
        url: '/images/mehndi/f6.jpg',
        alt: 'Floral Mehndi Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/f7.jpg',
        alt: 'Floral Pattern Detail',
        placeholder: false
      }
    ],
    fullGallery: [
      {
        url: '/images/mehndi/f1.jpg',
        alt: 'Delicate Floral Pattern',
        placeholder: false,
        description: 'Intricate floral design with delicate petals and leaves'
      },
      {
        url: '/images/mehndi/f2.jpg',
        alt: 'Rose Pattern Mehndi',
        placeholder: false,
        description: 'Beautiful rose pattern with flowing vines'
      },
      {
        url: '/images/mehndi/f3.jpg',
        alt: 'Lotus Design',
        placeholder: false,
        description: 'Elegant lotus flower design with detailed work'
      },
      {
        url: '/images/mehndi/f4.jpg',
        alt: 'Garden Theme',
        placeholder: false,
        description: 'Full garden theme with multiple flower types'
      },
      {
        url: '/images/mehndi/f5.jpg',
        alt: 'Floral Bracelet',
        placeholder: false,
        description: 'Wrist design with interconnected flowers'
      }
    ]
  },
  {
    title: 'Modern',
    description: 'Contemporary designs with a fresh twist on traditional patterns. Ideal for those seeking something unique.',
    images: [
      {
        url: '/images/mehndi/m1.jpg',
        alt: 'Modern Mehndi Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/m2.jpg',
        alt: 'Contemporary Pattern',
        placeholder: false
      }
    ],
    fullGallery: [
      {
        url: '/images/mehndi/m3.jpg',
        alt: 'Geometric Modern Design',
        placeholder: false,
        description: 'Contemporary geometric patterns with clean lines'
      },
      {
        url: '/images/mehndi/m4.jpg',
        alt: 'Abstract Modern Pattern',
        placeholder: false,
        description: 'Abstract design with unique elements'
      },
      {
        url: '/images/mehndi/m5.jpg',
        alt: 'Minimalist Modern',
        placeholder: false,
        description: 'Simple yet striking modern interpretation'
      },
      {
        url: '/images/mehndi/m6.jpg',
        alt: 'Contemporary Fusion',
        placeholder: false,
        description: 'Modern take on traditional elements'
      },{
        url: '/images/mehndi/m7.jpg',
        alt: 'Contemporary Fusion',
        placeholder: false,
        description: 'Modern take on traditional elements'
      }
    ]
  },
  {
    title: 'Minimal',
    description: 'Simple yet striking designs that make a statement. Perfect for those who prefer understated elegance.',
    images: [
      {
        url: '/images/mehndi/mi1.jpg',
        alt: 'Minimal Mehndi Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/mi2.jpg',
        alt: 'Simple Pattern',
        placeholder: false
      }
    ],
    fullGallery: [
      {
        url: '/images/mehndi/mi3.jpg',
        alt: 'Simple Dots Pattern',
        placeholder: false,
        description: 'Elegant dot work with minimal lines'
      },
      {
        url: '/images/mehndi/mi4.jpg',
        alt: 'Single Line Design',
        placeholder: false,
        description: 'Beautiful single-line minimal pattern'
      },
      {
        url: '/images/mehndi/mi5.jpg',
        alt: 'Spaced Pattern',
        placeholder: false,
        description: 'Airy and light minimal design'
      },
      {
        url: '/images/mehndi/mi6.jpg',
        alt: 'Minimal Bracelet',
        placeholder: false,
        description: 'Simple wrist design with minimal elements'
      }, 
      {
        url: '/images/mehndi/mi7.jpg',
        alt: 'Minimal Bracelet',
        placeholder: false,
        description: 'Simple wrist design with minimal elements'
      }
    ]
  },
  {
    title: 'Traditional Bharwa',
    description: 'Dense, intricate traditional patterns filled with detailed work. A classic choice for traditional occasions.',
    images: [
      {
        url: '/images/mehndi/t1.jpg',
        alt: 'Traditional Bharwa Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/t2.jpg',
        alt: 'Detailed Bharwa Pattern',
        placeholder: false
      }
    ],
    fullGallery: [
      {
        url: '/images/mehndi/t3.jpg',
        alt: 'Full Hand Bharwa',
        placeholder: false,
        description: 'Dense traditional pattern covering full hand'
      },
      {
        url: '/images/mehndi/t4.jpg',
        alt: 'Intricate Fill Work',
        placeholder: false,
        description: 'Detailed fill work with traditional motifs'
      },
      {
        url: '/images/mehndi/t5.jpg',
        alt: 'Classic Bharwa',
        placeholder: false,
        description: 'Classic bharwa style with rich details'
      },
      {
        url: '/images/mehndi/t6.jpg',
        alt: 'Traditional Motifs',
        placeholder: false,
        description: 'Traditional motifs with bharwa technique'
      },
      {
        url: '/images/mehndi/t7.jpg',
        alt: 'Traditional Motifs',
        placeholder: false,
        description: 'Traditional motifs with bharwa technique'
      }
    ]
  },
  {
    title: 'Traditional + Modern',
    description: 'A perfect fusion of traditional and contemporary designs. Best of both worlds for the modern traditionalist.',
    images: [
      {
        url: '/images/mehndi/tm7.jpg',
        alt: 'Fusion Mehndi Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/tm6.jpg',
        alt: 'Modern Traditional Pattern',
        placeholder: false
      }
    ],
    fullGallery: [
      {
        url: '/images/mehndi/tm1.jpg',
        alt: 'Modern Mandala',
        placeholder: false,
        description: 'Contemporary take on traditional mandala'
      },
      {
        url: '/images/mehndi/tm2.jpg',
        alt: 'Fusion Pattern',
        placeholder: false,
        description: 'Blend of modern and traditional elements'
      },
      {
        url: '/images/mehndi/tm3.jpg',
        alt: 'Contemporary Traditional',
        placeholder: false,
        description: 'Traditional patterns with modern spacing'
      },
      {
        url: '/images/mehndi/tm4.jpg',
        alt: 'Mixed Style',
        placeholder: false,
        description: 'Creative mix of both styles'
      },
      {
        url: '/images/mehndi/tm5.jpg',
        alt: 'Mixed Style',
        placeholder: false,
        description: 'Creative mix of both styles'
      }
    ]
  },
  {
    title: 'Arabic/Afghani',
    description: 'Bold, spacious patterns inspired by Middle Eastern designs. Known for their elegant simplicity and flow.',
    images: [
      {
        url: '/images/mehndi/a1.jpg',
        alt: 'Arabic Style Design',
        placeholder: false
      },
      {
        url: '/images/mehndi/a2.jpg',
        alt: 'Afghani Pattern',
        placeholder: false
      }
    ],
    fullGallery: [
      {
        url: '/images/mehndi/a3.jpg',
        alt: 'Gulf Style',
        placeholder: false,
        description: 'Classic Gulf-inspired Arabic design'
      },
      {
        url: '/images/mehndi/a4.jpg',
        alt: 'Afghani Pattern',
        placeholder: false,
        description: 'Traditional Afghani style pattern'
      },
      {
        url: '/images/mehndi/a5.jpg',
        alt: 'Arabic Flowers',
        placeholder: false,
        description: 'Floral design in Arabic style'
      },
      {
        url: '/images/mehndi/a6.jpg',
        alt: 'Middle Eastern',
        placeholder: false,
        description: 'Elegant Middle Eastern pattern'
      }
    ]
  }
];

const NonBridalMehndi = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleBookNow = (style) => {
    setSelectedStyle(style);
    setIsBookingOpen(true);
  };

  const openGallery = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-salon-50 to-lavender-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Non-Bridal Mehndi Styles</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our diverse collection of mehndi styles for every occasion. From traditional to modern, find the perfect design that speaks to you.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {nonBridalStyles.map((style, index) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">{style.title}</h2>
                    <p className="text-gray-600 mt-2">{style.description}</p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <motion.button
                      onClick={() => openGallery(style)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }} 
                      className="px-6 py-2 rounded-full bg-white text-salon-600 border-2 border-salon-200 hover:border-salon-300 font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                    >
                      <span>View Gallery</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </motion.button>
                    <motion.button
                      onClick={() => handleBookNow(style)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-salon-600 to-salon-500 text-white px-6 py-2 rounded-full font-medium hover:from-salon-500 hover:to-salon-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_0_15px_rgba(255,102,153,0.5)] transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                    >
                      <span>Book Now</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {style.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
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
          ))}
        </div>
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
        service={`Non-Bridal Mehndi - ${selectedStyle?.title || ''}`}
      />

      {/* Full Gallery Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">{selectedCategory.title} Gallery</h3>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.fullGallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
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
        </div>
      )}
    </div>
  );
};

export default NonBridalMehndi; 