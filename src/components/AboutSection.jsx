import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-salon-50 to-lavender-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-salon-600 to-salon-500 p-1">
              <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">Artist Photo</span>
              </div>
            </div>
            {/* Floating decoration */}
            <motion.div
              animate={{ y: [-10, 10] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gold-200/20 rounded-full blur-xl"
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-salon-600">
              Meet Your Beauty Artist
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                With over 10 years of experience in the beauty industry, our expert artist
                has mastered the art of bringing out your natural beauty through makeup,
                hairstyling, and traditional mehndi designs.
              </p>
              <p className="text-lg text-gray-700">
                Specializing in bridal makeup and contemporary styles, we've helped
                thousands of clients look and feel their best on their special days.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-center"
              >
                <h3 className="text-3xl font-bold text-salon-500 mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-center"
              >
                <h3 className="text-3xl font-bold text-salon-500 mb-2">5000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-salon-600 to-salon-500 text-white rounded-full font-semibold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_0_15px_rgba(255,102,153,0.5)] transition-all duration-300"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 