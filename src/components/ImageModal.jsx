import { AnimatePresence, motion } from 'framer-motion';

const ImageModal = ({ isOpen, onClose, imageUrl, altText }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-80 z-[60] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <div className="bg-white rounded-lg overflow-hidden w-full h-full flex items-center justify-center">
            <img
              src={imageUrl}
              alt={altText}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal; 