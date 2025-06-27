import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-600 text-center py-4"
        >
          Thank you for your message! We'll contact you on WhatsApp soon.
        </motion.div>
      ) : (
        <form action="https://formsubmit.co/08a75866c50fdc29ff0a08dba64879b2" method="POST" className="space-y-6">
         
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-gray-700 mb-2">
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-500"
              placeholder="Your WhatsApp Number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-500 resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-salon-600 to-salon-500 text-white py-3 rounded-lg hover:from-salon-500 hover:to-salon-400 transition-colors duration-300"
          >
            Send Message
          </motion.button>

          <p className="text-sm text-gray-600 text-center mt-4">
            We'll respond to your message on WhatsApp within 24 hours.
          </p>
        </form>
      )}
    </div>
  )
}

export default ContactForm 