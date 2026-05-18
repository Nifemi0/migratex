'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  height?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ScrollReveal({ 
  children, 
  width = '100%', 
  height = 'fit-content',
  delay = 0, 
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0
    }
  };

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ position: 'relative', width, height, overflow: 'hidden' }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay }}
        style={{ width: '100%', height: height === '100%' ? '100%' : 'auto' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
