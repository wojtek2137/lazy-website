import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from 'config/theme';

// Cursor Trail Effect
const CursorTrail = styled.div<{ x: number; y: number; isVisible: boolean }>`
  position: fixed;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, ${colors.primary.gold}40 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10002;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  animation: cursorPulse 1s ease-out infinite;
  
  @keyframes cursorPulse {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1); }
  }
`;

// Haptic Feedback Ripple
const HapticRipple = styled.div<{ x: number; y: number; isActive: boolean }>`
  position: fixed;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  width: 100px;
  height: 100px;
  border: 2px solid ${colors.primary.gold}60;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10001;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  transform: translate(-50%, -50%) scale(${({ isActive }) => isActive ? 1.5 : 0.5});
  transition: all 0.6s ease-out;
`;

// Smart Hover Zones
const HoverZone = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: ${({ isHovered }) => isHovered ?
    `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${colors.primary.gold}08 0%, transparent 50%)` :
    'transparent'
  };
  transition: background 0.3s ease;
  z-index: 1;
`;

// Magnetic Button Effect
const MagneticButton = styled.button<{ magnetStrength: number }>`
  position: relative;
  padding: 12px 24px;
  background: linear-gradient(135deg, ${colors.primary.gold}, ${colors.primary.sandy});
  border: none;
  border-radius: 25px;
  color: ${colors.primary.black};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translate(
    ${({ magnetStrength }) => magnetStrength * 0.3}px,
    ${({ magnetStrength }) => magnetStrength * 0.2}px
  ) scale(${({ magnetStrength }) => 1 + magnetStrength * 0.05});
  
  &:hover {
    box-shadow: 0 15px 35px rgba(245, 203, 92, 0.4);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

// Parallax Mouse Follow
const ParallaxElement = styled.div<{ 
  x: number; 
  y: number; 
  depth: number;
  isVisible: boolean;
}>`
  position: fixed;
  width: 30px;
  height: 30px;
  background: ${colors.primary.gold}20;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  opacity: ${({ isVisible }) => isVisible ? 0.6 : 0};
  transform: translate(
    ${({ x, depth }) => x * depth}px,
    ${({ y, depth }) => y * depth}px
  );
  transition: opacity 0.5s ease, transform 0.1s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    background: ${colors.primary.sandy}10;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Smart Loading States
const LoadingState = styled.div<{ progress: number; variant: 'skeleton' | 'pulse' | 'shimmer' }>`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: ${colors.neutrals.N800};
  
  ${({ variant, progress }) => {
    switch (variant) {
      case 'skeleton':
        return `
          background: linear-gradient(
            90deg,
            ${colors.neutrals.N800} 0%,
            ${colors.neutrals.N700} 50%,
            ${colors.neutrals.N800} 100%
          );
          background-size: 200% 100%;
          animation: skeletonLoading 1.5s ease-in-out infinite;
        `;
      case 'pulse':
        return `
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        `;
      case 'shimmer':
        return `
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              ${colors.primary.gold}30,
              transparent
            );
            animation: shimmer 2s ease-in-out infinite;
          }
          
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: ${progress}%;
            height: 100%;
            background: linear-gradient(135deg, ${colors.primary.gold}, ${colors.primary.sandy});
            transition: width 0.3s ease;
          }
        `;
    }
  }}
  
  @keyframes skeletonLoading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

// Micro-Animation Components
const BounceElement = styled.div<{ trigger: boolean; delay: number }>`
  animation: ${({ trigger }) => trigger ? 'bounceIn' : 'none'} 0.6s ease-out ${({ delay }) => delay}ms both;
  
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3) translateY(50px);
    }
    50% {
      opacity: 1;
      transform: scale(1.05) translateY(-10px);
    }
    70% {
      transform: scale(0.9) translateY(0px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
  }
`;

const SlideInElement = styled.div<{ trigger: boolean; direction: 'left' | 'right' | 'up' | 'down'; delay: number }>`
  animation: ${({ trigger, direction }) => trigger ? `slideIn${direction.charAt(0).toUpperCase() + direction.slice(1)}` : 'none'} 
    0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${({ delay }) => delay}ms both;
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInDown {
    from { opacity: 0; transform: translateY(-50px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Stagger Animation Container
const StaggerContainer = styled.div<{ trigger: boolean }>`
  & > * {
    animation: ${({ trigger }) => trigger ? 'staggerIn' : 'none'} 0.6s ease-out both;
  }
  
  & > *:nth-of-type(1) { animation-delay: 100ms; }
  & > *:nth-of-type(2) { animation-delay: 200ms; }
  & > *:nth-of-type(3) { animation-delay: 300ms; }
  & > *:nth-of-type(4) { animation-delay: 400ms; }
  & > *:nth-of-type(5) { animation-delay: 500ms; }
  
  @keyframes staggerIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

// Smart Intersection Observer Hook
const useIntersectionObserver = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, threshold]);

  return [setElement, isVisible] as const;
};

// Main Micro-Interactions Component
export function MicroInteractions2024() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  
  // Mouse tracking
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMouseMoving(false), 100);
      
      // Update CSS custom properties for hover zones
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  // Click ripple effect
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      
      setRipples(prev => [...prev, ripple]);
      
      // Haptic feedback
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== ripple.id));
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);



  // Parallax elements data
  const parallaxElements = [
    { depth: 0.1, size: 20 },
    { depth: 0.2, size: 15 },
    { depth: 0.3, size: 25 },
    { depth: 0.15, size: 18 },
    { depth: 0.25, size: 22 }
  ];

  return (
    <>
      {/* Cursor Trail */}
      <CursorTrail 
        x={mousePosition.x} 
        y={mousePosition.y} 
        isVisible={isMouseMoving}
      />

      {/* Click Ripples */}
      {ripples.map(ripple => (
        <HapticRipple
          key={ripple.id}
          x={ripple.x}
          y={ripple.y}
          isActive={true}
        />
      ))}

      {/* Parallax Mouse Follow Elements */}
      {parallaxElements.map((element, index) => (
        <ParallaxElement
          key={index}
          x={mousePosition.x * 0.001}
          y={mousePosition.y * 0.001}
          depth={element.depth}
          isVisible={isMouseMoving}
        />
      ))}

      {/* Global Hover Zone */}
      <HoverZone isHovered={isMouseMoving} />
    </>
  );
}

// Export utility components
export {
  BounceElement,
  SlideInElement,
  StaggerContainer,
  LoadingState,
  MagneticButton,
  useIntersectionObserver
};
