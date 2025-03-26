'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollAnimatedSection = ({ 
  children, 
  className = '' 
}: ScrollAnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  return (
    <motion.section
      ref={sectionRef}
      className={className}
      style={{ opacity, y }}
    >
      {children}
    </motion.section>
  );
};