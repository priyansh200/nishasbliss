import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const BookingModal = ({ isOpen, onClose, service }) => {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    date: '',
    time: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-md bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Book {service}
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center py-4"
              >
                Thank you for your booking request! We'll contact you on WhatsApp to confirm your appointment.
              </motion.div>
            ) : (
              <form action="https://formsubmit.co/08a75866c50fdc29ff0a08dba64879b2" method="POST" className="space-y-4">
                <input type="hidden" name="service" value={service} />
                
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
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-500"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-500"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-salon-500 resize-none"
                    placeholder="Any special requests or questions?"
                  ></textarea>
                </div>

                <div className="flex space-x-4 mt-6">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-salon-600 to-salon-500 text-white py-2 rounded-lg hover:from-salon-500 hover:to-salon-400 transition-colors duration-300"
                  >
                    Book Now
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                  >
                    Cancel
                  </motion.button>
                </div>

                <p className="text-sm text-gray-600 text-center mt-4">
                  We'll confirm your booking details via WhatsApp within 2 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal; 