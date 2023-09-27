'use client';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const MovingLine = () => {
  const dashesVariants = {
    initial: { backgroundPositionX: '0%' },
    end: { backgroundPositionX: '100%' },
  };

  const transition = {
    duration: 100,
    repeat: Infinity,
  };

  return (
    <MotionBox
      width="100%"
      height="4px"
      background="repeating-linear-gradient(90deg, #10DD99, #10DD99 5px, transparent 5px, transparent 20px)"
      initial="initial"
      animate="end"
      variants={dashesVariants}
      transition={transition}
    />
  );
};

export default MovingLine;
