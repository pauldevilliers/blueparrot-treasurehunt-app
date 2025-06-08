import { motion } from 'motion/react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

export default function FadeIn({ children, className }: Props) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className={classNames(className)}
    >
      {children}
    </motion.div>
  );
}
