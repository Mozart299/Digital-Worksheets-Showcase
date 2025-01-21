'use client';

import { motion } from 'framer-motion';

const TypingEffect = ({ text }: { text: string }) => {
  const letters = text.split('');

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 5 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: index * 0.1, duration: 0.05 },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypingEffect;