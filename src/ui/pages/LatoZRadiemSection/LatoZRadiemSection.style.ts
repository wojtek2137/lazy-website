import styled from "@emotion/styled";
import { colors, fonts } from "config/theme";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const LatoZRadiemWrapper = styled("section")`
  background: linear-gradient(135deg, ${colors.primary.black} 0%, #1a1a1a 50%, ${colors.primary.black} 100%);
  height: 100vh;
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
    padding: 40px 15px;
    height: 100vh; /* Ensure 100vh on mobile too */
  }
  
  ${mq[0]} {
    padding: 30px 10px;
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
  font-family: ${fonts.mulish.Bold};
  font-size: 48px;
  font-weight: 700;
  color: ${colors.primary.gold};
  margin: 0 0 20px 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
    box-shadow: 0 0 15px ${colors.primary.gold}50;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
  }
  
  ${mq[2]} {
    font-size: 36px;
    letter-spacing: 2px;
  }
  
  ${mq[1]} {
    font-size: 28px;
    letter-spacing: 1px;
  }
`;

export const Subtitle = styled("p")`
  font-family: ${fonts.mulish.Medium};
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
  align-items: center;
  
  ${mq[2]} {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  
  ${mq[1]} {
    flex: 1;
    gap: 20px;
    align-items: stretch;
  }
`;

export const TextContent = styled("div")`
  padding: 20px;
  
  ${mq[2]} {
    order: 2;
  }
`;

export const ArticleText = styled("div")`
  font-family: ${fonts.mulish.Regular};
  font-size: 16px;
  line-height: 1.8;
  color: ${colors.neutrals.N20};
  margin-bottom: 30px;
  
  p {
    margin-bottom: 20px;
  }
  
  strong {
    color: ${colors.primary.gold};
    font-family: ${fonts.mulish.Bold};
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

export const CitiesList = styled("div")`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid ${colors.primary.gold}30;
  border-radius: 15px;
  padding: 25px;
  margin-top: 30px;
  
  h3 {
    font-family: ${fonts.mulish.Bold};
    color: ${colors.primary.gold};
    font-size: 18px;
    margin: 0 0 15px 0;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
  
  li {
    font-family: ${fonts.mulish.Medium};
    font-size: 14px;
    background: rgba(245, 203, 92, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
    overflow: hidden;
    
    &:hover {
      background: rgba(245, 203, 92, 0.25);
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 15px rgba(245, 203, 92, 0.3);
    }
    
    a {
      display: block;
      color: ${colors.neutrals.N10};
      text-decoration: none;
      padding: 8px 15px;
      text-align: center;
      position: relative;
      transition: all 0.3s ease;
      
      &:hover {
        color: ${colors.primary.gold};
        background: rgba(245, 203, 92, 0.1);
        text-shadow: 0 0 8px ${colors.primary.gold}50;
      }
      
      &:focus {
        outline: 2px solid ${colors.primary.gold};
        outline-offset: 2px;
        border-radius: 4px;
        background: rgba(245, 203, 92, 0.2);
      }
      
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
        transition: width 0.3s ease;
      }
      
      &:hover::before {
        width: 80%;
      }
      
      &:active {
        transform: scale(0.98);
      }
    }
  }
  
  ${mq[1]} {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

// Modern 2024 Mobile-First Card Carousel
export const ImageCarousel = styled("div")`
  position: relative;
  height: 650px;
  width: 100%;
  
  ${mq[2]} {
    order: 1;
    height: 500px;
  }
  
  ${mq[1]} {
    height: 400px;
    margin-bottom: 20px;
  }
  
  ${mq[0]} {
    height: 350px;
  }
`;

export const CarouselContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid ${colors.primary.gold}20;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px ${colors.primary.gold}10;
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
  padding: 25px;
  z-index: 2;
  color: white;
  
  h3 {
    font-family: ${fonts.mulish.Bold};
    font-size: 18px;
    color: ${colors.primary.gold};
    margin: 0 0 8px 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  }
  
  p {
    font-family: ${fonts.mulish.Regular};
    font-size: 14px;
    color: ${colors.neutrals.N10};
    line-height: 1.4;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
  }
  
  ${mq[1]} {
    padding: 20px;
    
    h3 {
      font-size: 16px;
    }
    
    p {
      font-size: 13px;
    }
  }
  
  ${mq[0]} {
    padding: 15px;
    
    h3 {
      font-size: 14px;
    }
    
    p {
      font-size: 12px;
    }
  }
`;

export const CarouselIndicators = styled("div")`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
`;

export const IndicatorDot = styled("button")<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ $isActive }) => 
    $isActive ? colors.primary.gold : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${colors.primary.gold}80;
    transform: scale(1.2);
  }
  
  ${mq[1]} {
    width: 12px;
    height: 12px;
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
