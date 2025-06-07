import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-4 h-4 bg-orange-500 rounded-full mx-1"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className="w-4 h-4 bg-orange-500 rounded-full mx-1"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.2,
        }}
      />
      <motion.div
        className="w-4 h-4 bg-orange-500 rounded-full mx-1"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.4,
        }}
      />
    </div>
  );
}
