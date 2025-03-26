'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedMetricCardProps {
  title: string;
  value: number | string;
  unit: string;
  trend: number;
  status: 'optimal' | 'warning' | 'critical';
  children?: React.ReactNode;
}

export const AnimatedMetricCard = ({ 
  title, 
  value, 
  unit, 
  trend, 
  status, 
  children 
}: AnimatedMetricCardProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="metric-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <div className="metric-header">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white font-montreal">{title}</h3>
          <div className={`status-${status}`}></div>
        </div>
        <div className={`trend-indicator ${trend > 0 ? 'text-status-optimal' : trend < 0 ? 'text-status-critical' : 'text-gray-400'}`}>
          {trend > 0 ? '↑' : trend < 0 ? '↓' : '→'} 
          {Math.abs(trend)}%
        </div>
      </div>
      <div className="metric-value text-4xl font-bold mt-4 text-bioiq-400">
        {value}
        <span className="metric-unit text-xl ml-1 text-bioiq-300">{unit}</span>
      </div>
      <div className="mt-4">
        {children}
      </div>
    </motion.div>
  );
};