import { motion } from 'motion/react';
import Text from '@/components/atoms/text';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

export default function GameLayout({ children, className }: Props) {
  return (
    <div className="w-full mt-[10vh] mb-10">
      <div className="flex justify-center">
        <Text
          variant="h1"
          className="text-5xl/12 font-bold text-orange-500 uppercase mb-12"
        >
          Social
          <br />
          Jungle
        </Text>
      </div>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
