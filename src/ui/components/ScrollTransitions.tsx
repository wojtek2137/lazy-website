import styled from "@emotion/styled";
import { colors } from "config/theme";

// Enhanced scroll transition between sections
export const SectionTransition = styled("div")`
  position: relative;
  height: 120px;
  background: 
    linear-gradient(
      180deg,
      transparent 0%,
      ${colors.primary.gold}03 20%,
      ${colors.primary.gold}08 50%,
      ${colors.primary.gold}03 80%,
      transparent 100%
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 100px,
      ${colors.primary.gold}02 100px,
      ${colors.primary.gold}02 102px
    );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.gold}40,
      ${colors.primary.gold}80,
      ${colors.primary.gold}40,
      transparent
    );
    box-shadow: 
      0 0 20px ${colors.primary.gold}60,
      0 0 40px ${colors.primary.gold}30;
    animation: lineGlow 4s ease-in-out infinite;
  }
  
  &::after {
    content: '♪ ♫ ♪';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${colors.primary.gold};
    font-size: 20px;
    letter-spacing: 8px;
    animation: musicNotes 6s ease-in-out infinite;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    padding: 12px 20px;
    border-radius: 25px;
    border: 1px solid ${colors.primary.gold}40;
    box-shadow: 
      0 0 20px ${colors.primary.gold}40,
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    z-index: 2;
  }
  
  @keyframes lineGlow {
    0%, 100% { 
      width: 300px;
      opacity: 0.6;
    }
    50% { 
      width: 400px;
      opacity: 1;
    }
  }
  
  @keyframes musicNotes {
    0%, 100% { 
      opacity: 0.7;
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
    }
    33% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1.05) rotate(1deg);
    }
    66% {
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(0.95) rotate(-1deg);
    }
  }
`;

// Floating particles for background effect
export const FloatingParticles = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: ${colors.primary.gold}40;
    border-radius: 50%;
    box-shadow: 
      0 0 10px ${colors.primary.gold}60,
      0 0 20px ${colors.primary.gold}40;
  }
  
  &::before {
    top: 20%;
    left: 10%;
    animation: floatParticle1 8s ease-in-out infinite;
  }
  
  &::after {
    top: 60%;
    right: 15%;
    animation: floatParticle2 10s ease-in-out infinite;
  }
  
  @keyframes floatParticle1 {
    0%, 100% { 
      transform: translateY(0px) translateX(0px);
      opacity: 0.3;
    }
    50% { 
      transform: translateY(-100px) translateX(50px);
      opacity: 0.8;
    }
  }
  
  @keyframes floatParticle2 {
    0%, 100% { 
      transform: translateY(0px) translateX(0px);
      opacity: 0.4;
    }
    50% { 
      transform: translateY(-80px) translateX(-30px);
      opacity: 0.9;
    }
  }
`;

// Scroll indicator
export const ScrollIndicator = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9999;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${colors.primary.gold},
      ${colors.primary.sandy}
    );
    transition: width 0.1s ease;
    box-shadow: 0 0 10px ${colors.primary.gold}60;
  }
`;

// Enhanced interactive hover effects for sections
export const InteractiveSection = styled("div")`
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    transform: translateY(-8px) scale(1.01);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, ${colors.primary.gold}08 0%, transparent 60%),
      radial-gradient(circle at 70% 70%, ${colors.primary.sandy}06 0%, transparent 50%),
      linear-gradient(
        135deg,
        ${colors.primary.gold}03 0%,
        transparent 40%,
        ${colors.primary.sandy}02 100%
      );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    border-radius: inherit;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  /* Subtle border effect on hover */
  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      45deg,
      ${colors.primary.gold}20,
      transparent,
      ${colors.primary.sandy}15,
      transparent,
      ${colors.primary.gold}20
    );
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
    pointer-events: none;
  }
  
  &:hover::after {
    opacity: 0.6;
  }
`;

// Advanced parallax background component
export const AdvancedParallaxBackground = styled("div")<{
  imageUrl: string;
  intensity?: number;
}>`
  position: absolute;
  top: -20%;
  left: -10%;
  width: 120%;
  height: 140%;
  background: url('${({ imageUrl }) => imageUrl}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -3;
  will-change: transform;
  
  /* Enhanced filter effects */
  filter: 
    brightness(0.7) 
    contrast(1.2) 
    saturate(0.9)
    blur(0.5px);
  
  /* Parallax effect - controlled by JavaScript for better performance */
  transform: translate3d(0, 0, 0) scale(1.1);
  transition: transform 0.1s ease-out;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
  }
`;

// CSS-only particle system
export const CSSParticleSystem = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
  
  /* Generate particles using pseudo-elements and box-shadow */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: ${colors.primary.gold};
    border-radius: 50%;
    box-shadow:
      /* First layer of particles */
      10vw 10vh 0 ${colors.primary.gold}60,
      20vw 30vh 0 ${colors.primary.sandy}40,
      40vw 50vh 0 ${colors.primary.gold}50,
      60vw 20vh 0 ${colors.primary.sandy}30,
      80vw 70vh 0 ${colors.primary.gold}40,
      90vw 40vh 0 ${colors.primary.sandy}60,
      
      /* Second layer */
      15vw 80vh 0 ${colors.primary.gold}30,
      35vw 60vh 0 ${colors.primary.sandy}50,
      55vw 90vh 0 ${colors.primary.gold}35,
      75vw 10vh 0 ${colors.primary.sandy}45,
      85vw 85vh 0 ${colors.primary.gold}55,
      25vw 25vh 0 ${colors.primary.sandy}35;
    
    animation: particleFloat 20s linear infinite;
  }
  
  &::after {
    animation-delay: -10s;
    animation-duration: 25s;
    width: 1px;
    height: 1px;
    box-shadow:
      /* Smaller particles for depth */
      5vw 15vh 0 ${colors.primary.gold}40,
      25vw 45vh 0 ${colors.primary.sandy}25,
      45vw 25vh 0 ${colors.primary.gold}35,
      65vw 65vh 0 ${colors.primary.sandy}40,
      85vw 35vh 0 ${colors.primary.gold}30,
      95vw 75vh 0 ${colors.primary.sandy}45;
  }
  
  @keyframes particleFloat {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-100vh) rotate(180deg);
      opacity: 0.4;
    }
    100% {
      transform: translateY(-200vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
