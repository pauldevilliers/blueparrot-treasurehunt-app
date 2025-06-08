import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Button from '@/components/atoms/button';

type AlertProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
};

export default function Alert({ isOpen, onClose, message }: AlertProps) {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-80 rounded-lg p-6 text-center shadow-lg"
          >
            <p className="text-gray-800 text-base mb-4">{message}</p>
            <Button onClick={onClose}>OK</Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
