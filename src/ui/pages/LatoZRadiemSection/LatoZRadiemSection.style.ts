import styled from "@emotion/styled";
import { colors, fonts, spacing, typography, shadows } from "config/theme";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const LatoZRadiemWrapper = styled("section")`
  background: linear-gradient(135deg, ${colors.primary.black} 0%, #1a1a1a 50%, ${colors.primary.black} 100%);
  min-height: 100vh;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, ${colors.primary.gold}15 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, ${colors.primary.gold}10 0%, transparent 40%);
    pointer-events: none;
    z-index: 1;
  }
  
  ${mq[1]} {
    padding: 50px 15px;
    min-height: 100vh;
  }
  
  ${mq[0]} {
    padding: 40px 12px;
    min-height: 100vh;
  }
`;

export const ContentContainer = styled("div")`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
  
  ${mq[1]} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SectionHeader = styled("div")`
  text-align: center;
  margin-bottom: 60px;
  
  ${mq[1]} {
    margin-bottom: 30px;
    flex-shrink: 0; /* Prevent header from shrinking */
  }
  
  ${mq[0]} {
    margin-bottom: 20px;
  }
`;

export const MainTitle = styled("h2")`
  font-family: ${fonts.outfit.SemiBold};
  font-size: ${typography.h1.size};
  font-weight: ${typography.h1.weight};
  line-height: ${typography.h1.lineHeight};
  color: ${colors.primary.gold};
  margin: 0 0 ${spacing.lg} 0;
  letter-spacing: ${typography.h1.letterSpacing};
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    top: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
    box-shadow: ${shadows.glow};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
  }
  
  ${mq[2]} {
    font-size: ${typography.h2.size};
  }
  
  ${mq[1]} {
    font-size: ${typography.h3.size};
  }
`;

export const Subtitle = styled("p")`
  font-family: ${fonts.outfit.Medium};
  font-size: 18px;
  color: ${colors.neutrals.N10};
  margin: 0 0 40px 0;
  opacity: 0.9;
  
  ${mq[1]} {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const ContentGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  
  ${mq[2]} {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  ${mq[1]} {
    flex: 1;
    gap: 30px;
    align-items: stretch;
  }
  
  ${mq[0]} {
    gap: 25px;
  }
`;

export const TextContent = styled("div")`
  padding: 20px;
  
  ${mq[2]} {
    order: 2;
  }
`;

export const ArticleText = styled("div")`
  font-family: ${fonts.outfit.ExtraLight};
  font-size: 16px;
  line-height: 1.8;
  color: ${colors.neutrals.N20};
  margin-bottom: 30px;
  
  p {
    margin-bottom: 20px;
  }
  
  strong {
    color: ${colors.primary.gold};
    font-family: ${fonts.outfit.Medium};
  }
  
  a {
    color: ${colors.primary.gold};
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${colors.primary.sandy};
      text-shadow: 0 0 8px ${colors.primary.gold}50;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, ${colors.primary.gold}, transparent);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
    
    &:focus {
      outline: 2px solid ${colors.primary.gold};
      outline-offset: 2px;
      border-radius: 2px;
    }
  }
  
  ${mq[1]} {
    font-size: 15px;
    line-height: 1.7;
  }
`;

// Interactive Poland Map with PNG background
export const PolandMap = styled("div")`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 25px;
  margin-top: 30px;
  
  h3 {
    font-family: ${fonts.outfit.Medium};
    color: ${colors.primary.gold};
    font-size: 18px;
    margin: 0 0 20px 0;
    text-align: center;
  }
  
  ${mq[1]} {
    padding: 20px;
    
    h3 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
  
  ${mq[0]} {
    padding: 20px;
    margin-top: 25px;
    
    h3 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
`;

export const MapContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 320px; 
  border-radius: 12px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2); 
  
  ${mq[1]} {
    height: 300px;
  }
  
  ${mq[0]} {
    height: 280px;
    border-radius: 8px;
  }
`;

export const PolandMapImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  filter: brightness(0.8) contrast(1.1) saturate(0.9);
  transition: all 0.3s ease;
`;

export const CityOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const CityMarker = styled("div")<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  pointer-events: all;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: ${colors.primary.gold};
    border: 2px solid rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    box-shadow: 
      0 0 0 4px rgba(245, 203, 92, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: cityPulse 3s ease-in-out infinite;
  }
  
  &:hover::before {
    width: 16px;
    height: 16px;
    box-shadow: 
      0 0 0 6px rgba(245, 203, 92, 0.4),
      0 6px 20px rgba(0, 0, 0, 0.5);
    animation-play-state: paused;
  }
  
  @keyframes cityPulse {
    0%, 100% {
      box-shadow: 
        0 0 0 4px rgba(245, 203, 92, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.4);
    }
    50% {
      box-shadow: 
        0 0 0 8px rgba(245, 203, 92, 0.2),
        0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }
  
  ${mq[1]} {
    &::before {
      width: 10px;
      height: 10px;
    }
    
    &:hover::before {
      width: 14px;
      height: 14px;
    }
  }
  
  ${mq[0]} {
    &::before {
      width: 10px;
      height: 10px;
    }
    
    &:hover::before {
      width: 14px;
      height: 14px;
    }
  }
`;

export const CityLabel = styled("div")<{ $x: number; $y: number }>`
  position: absolute;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y + 3}%;
  transform: translateX(-50%);
  color: ${colors.neutrals.N10};
  font-family: ${fonts.outfit.Medium};
  font-size: 11px;
  text-align: center;
  text-shadow: 
    0 0 4px rgba(0, 0, 0, 0.8),
    0 1px 2px rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid rgba(245, 203, 92, 0.3);
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
  transition: all 0.3s ease;
  opacity: 0.9;
  
  ${mq[1]} {
    font-size: 10px;
    padding: 2px 5px;
  }
  
  ${mq[0]} {
    font-size: 10px;
    padding: 2px 5px;
  }
`;



// Modern 2024 Mobile-First Card Carousel
export const ImageCarousel = styled("div")`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  
  ${mq[2]} {
    order: 1;
  }
`;

export const CarouselContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid ${colors.primary.gold}20;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px ${colors.primary.gold}10;
  
  ${mq[2]} {
    height: 420px;
  }
  
  ${mq[1]} {
    height: 360px;
  }
  
  ${mq[0]} {
    height: 300px;
  }
`;

export const CarouselTrack = styled("div")<{ $currentIndex: number }>`
  display: flex;
  width: 400%; /* 4 cards * 100% */
  height: 100%;
  transform: translateX(-${({ $currentIndex }) => $currentIndex * 25}%);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${mq[1]} {
    transition: transform 0.4s ease-out;
  }
`;

export const CarouselCard = styled("div")`
  flex: 0 0 25%; /* Each card takes 25% of track width */
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  
  ${mq[1]} {
    flex-direction: column;
  }
`;

export const CardImageWrapper = styled("div")`
  flex: 1;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(0.7);
    transition: transform 0.6s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    z-index: 1;
  }
`;

export const CardContent = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing.lg};
  z-index: 2;
  color: white;
  
  h3 {
    font-family: ${fonts.outfit.Medium};
    font-size: ${typography.h6.size};
    color: ${colors.primary.gold};
    margin: 0 0 ${spacing.sm} 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  }
  
  p {
    font-family: ${fonts.outfit.ExtraLight};
    font-size: ${typography.bodySmall.size};
    color: ${colors.neutrals.N10};
    line-height: 1.4;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
  }
  
  ${mq[1]} {
    padding: ${spacing.lg};
    
    h3 {
      font-size: ${typography.bodyLarge.size};
    }
    
    p {
      font-size: ${typography.caption.size};
    }
  }
  
  ${mq[0]} {
    padding: ${spacing.md};
    
    h3 {
      font-size: ${typography.body.size};
    }
    
    p {
      font-size: ${typography.caption.size};
    }
  }
`;

export const CarouselIndicators = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.md};
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid ${colors.primary.gold}20;
  width: fit-content;
  margin: 0 auto;
  
  ${mq[1]} {
    padding: ${spacing.sm} ${spacing.md};
  }
  
  ${mq[0]} {
    padding: ${spacing.sm} ${spacing.md};
  }
`;

export const IndicatorDot = styled("button")<{ $isActive: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${({ $isActive }) => 
    $isActive ? colors.primary.gold : 'rgba(255, 255, 255, 0.4)'};
  background: ${({ $isActive }) => 
    $isActive ? colors.primary.gold : 'transparent'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  min-height: 44px; /* WCAG touch target */
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: inherit;
    background: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::before {
    background: ${colors.primary.gold};
    border-color: ${colors.primary.gold};
    transform: scale(1.2);
    box-shadow: 0 0 16px ${colors.primary.gold}80;
  }
  
  &:focus-visible {
    outline: 2px solid ${colors.primary.gold};
    outline-offset: 4px;
  }
  
  ${mq[1]} {
    min-height: 40px;
    min-width: 40px;
    
    &::before {
      width: 12px;
      height: 12px;
    }
  }
  
  ${mq[0]} {
    min-height: 36px;
    min-width: 36px;
    
    &::before {
      width: 10px;
      height: 10px;
    }
  }
`;

export const SwipeHint = styled("div")`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 3;
  animation: fadeInOut 3s ease-in-out infinite;
  
  &::after {
    content: '👆';
    font-size: 16px;
  }
  
  @keyframes fadeInOut {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
  
  ${mq[2]} {
    display: none; /* Hide on larger screens */
  }
`;

// Radio Logo for carousel
export const CarouselRadioLogo = styled("div")`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 8px 12px;
  border-radius: 12px;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    0 0 10px ${colors.primary.gold}20;
  z-index: 4;
  width: 120px;
  height: auto;
  transition: all 0.3s ease;
  border: 1px solid ${colors.primary.gold}20;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.5),
      0 0 20px ${colors.primary.gold}40;
    background: rgba(255, 255, 255, 1);
  }
  
  a {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    
    &:focus {
      outline: 2px solid ${colors.primary.gold};
      outline-offset: 2px;
    }
  }
  
  img {
    width: 100%;
    height: auto;
    filter: brightness(1.1) contrast(1.1);
    transition: all 0.3s ease;
  }
  
  &:hover img {
    filter: brightness(1.2) contrast(1.2);
  }
  
  ${mq[1]} {
    width: 100px;
    padding: 6px 10px;
  }
  
  ${mq[0]} {
    width: 80px;
    padding: 5px 8px;
    top: 15px;
    right: 15px;
  }
`;
