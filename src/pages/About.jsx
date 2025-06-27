import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Artist Photo */}
      <section className="relative h-[500px] w-full">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/gandr-collage.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px) brightness(0.4)',
            transform: 'scale(1.02)', // Reduced scale to prevent background overflow
          }}
        ></div>

        {/* Artist Photo and Intro */}
        <div className="container mx-auto px-4 relative z-10 h-full max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-5xl font-bold text-white mb-4">About Nisha's Bliss</h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Welcome to Nisha's Bliss, your premier destination for beauty and artistic expression. 
                With over 5 years of experience in the beauty industry, we have established ourselves 
                as a trusted name in providing exceptional beauty services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full max-w-[400px] h-[450px] mx-auto">
                <img 
                  src="/images/ArtistPhoto.jpg"
                  alt="Nisha - Beauty Artist"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-salon-pink/10 to-salon-purple/10 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To enhance natural beauty and create stunning looks that make our clients feel 
                  confident and special for every occasion, while maintaining the highest standards 
                  of service and artistry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-salon-purple/10 to-salon-pink/10 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and sought-after beauty service provider, known for our 
                  creativity, attention to detail, and commitment to customer satisfaction.
                </p>
              </motion.div>
            </div>

            {/* Services Section */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Mehndi Art</h3>
                    <p className="text-gray-600">
                      From intricate bridal designs to modern party patterns, our mehndi services cater 
                      to all occasions. We specialize in traditional, Arabic, and contemporary styles.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Hairstyling</h3>
                    <p className="text-gray-600">
                      Our expert hairstyling services include elegant updos, glamorous waves, trendy braids, 
                      and sophisticated buns perfect for any event or celebration.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Makeup</h3>
                    <p className="text-gray-600">
                      Whether you're looking for a natural soft glam look, HD makeup for special occasions, 
                      or a stunning party look, our makeup artists will create the perfect look for you.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="h-10 w-10 rounded-full bg-salon-pink/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-salon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Experienced and skilled beauty professionals</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="h-10 w-10 rounded-full bg-salon-pink/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-salon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Personalized service tailored to your preferences</p>
                    </motion.div>
                  </div>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="h-10 w-10 rounded-full bg-salon-pink/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-salon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">High-quality products and hygienic practices</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="h-10 w-10 rounded-full bg-salon-pink/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-salon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Flexible scheduling to accommodate your needs</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 