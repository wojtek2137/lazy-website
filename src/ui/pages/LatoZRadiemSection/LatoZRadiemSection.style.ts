import styled from "@emotion/styled";
import { colors, fonts } from "config/theme";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const LatoZRadiemWrapper = styled("section")`
  background: linear-gradient(135deg, ${colors.primary.black} 0%, #1a1a1a 50%, ${colors.primary.black} 100%);
  min-height: 100vh;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  
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
  }
`;

export const ContentContainer = styled("div")`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const SectionHeader = styled("div")`
  text-align: center;
  margin-bottom: 60px;
  
  ${mq[1]} {
    margin-bottom: 40px;
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
    gap: 40px;
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

export const ImageCollage = styled("div")`
  position: relative;
  height: 850px;
  
  ${mq[2]} {
    order: 1;
    height: 650px;
  }
  
  ${mq[1]} {
    height: 480px;
  }
`;

export const CollageImage = styled("div")<{ $position: 'main' | 'top' | 'bottom' | 'side' }>`
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 20px ${colors.primary.gold}20;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &:hover {
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.8),
      0 0 40px ${colors.primary.gold}60,
      inset 0 0 20px ${colors.primary.gold}20;
    z-index: 10;
    border: 2px solid ${colors.primary.gold}80;
  }
  
  ${({ $position }) => {
    switch ($position) {
      case 'main':
        return `
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 480px;
          height: 360px;
          z-index: 5;
          animation: float 6s ease-in-out infinite;
          
          &:hover {
            transform: translate(-50%, -50%) scale(1.15) rotate(2deg);
          }
          
          @media (max-width: 768px) {
            width: 350px;
            height: 263px;
            top: 58%;
            
            &:hover {
              transform: translate(-50%, -50%) scale(1.12) rotate(2deg);
            }
          }
          
          @media (max-width: 576px) {
            width: 270px;
            height: 203px;
            top: 60%;
            
            &:hover {
              transform: translate(-50%, -50%) scale(1.08) rotate(1deg);
            }
          }
        `;
      case 'top':
        return `
          top: 18%;
          right: 15%;
          width: 240px;
          height: 320px;
          z-index: 3;
          animation: float 6s ease-in-out infinite 1s;
          
          &:hover {
            transform: scale(1.25) rotate(4deg);
          }
          
          @media (max-width: 768px) {
            width: 170px;
            height: 227px;
            top: 15%;
            right: 10%;
            
            &:hover {
              transform: scale(1.18) rotate(3deg);
            }
          }
          
          @media (max-width: 576px) {
            width: 120px;
            height: 160px;
            top: 12%;
            
            &:hover {
              transform: scale(1.12) rotate(2deg);
            }
          }
        `;
      case 'bottom':
        return `
          bottom: 15%;
          left: 12%;
          width: 220px;
          height: 293px;
          z-index: 3;
          animation: float 6s ease-in-out infinite 2s;
          
          &:hover {
            transform: scale(1.28) rotate(-3deg);
          }
          
          @media (max-width: 768px) {
            width: 150px;
            height: 200px;
            bottom: 12%;
            left: 8%;
            
            &:hover {
              transform: scale(1.22) rotate(-2deg);
            }
          }
          
          @media (max-width: 576px) {
            width: 110px;
            height: 147px;
            
            &:hover {
              transform: scale(1.15) rotate(-1deg);
            }
          }
        `;
      case 'side':
        return `
          top: 30%;
          left: 5%;
          width: 200px;
          height: 267px;
          z-index: 2;
          animation: float 6s ease-in-out infinite 3s;
          
          &:hover {
            transform: scale(1.25) rotate(5deg);
          }
          
          @media (max-width: 768px) {
            width: 130px;
            height: 173px;
            top: 28%;
            left: 3%;
            
            &:hover {
              transform: scale(1.18) rotate(4deg);
            }
          }
          
          @media (max-width: 576px) {
            width: 95px;
            height: 127px;
            top: 25%;
            
            &:hover {
              transform: scale(1.12) rotate(3deg);
            }
          }
        `;
      default:
        return '';
    }
  }}
  
  @keyframes float {
    0%, 100% {
      transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-20px) rotate(2deg);
    }
  }
`;

export const CollageImageWrapper = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, ${colors.primary.gold}10 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

export const RadioLogo = styled("div")`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 18px;
  border-radius: 18px;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.4),
    0 0 15px ${colors.primary.gold}30;
  z-index: 10;
  width: 180px;
  height: auto;
  transition: all 0.4s ease;
  border: 1px solid ${colors.primary.gold}20;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.08) rotate(1deg);
    box-shadow: 
      0 15px 40px rgba(0, 0, 0, 0.6),
      0 0 30px ${colors.primary.gold}60,
      inset 0 0 15px ${colors.primary.gold}10;
    background: rgba(255, 255, 255, 1);
    border: 2px solid ${colors.primary.gold}50;
  }
  
  &:active {
    transform: scale(1.05) rotate(0.5deg);
    transition: all 0.2s ease;
  }
  
  a {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    
    &:focus {
      outline: 3px solid ${colors.primary.gold};
      outline-offset: 3px;
      border-radius: 4px;
    }
    
    &:focus-visible {
      box-shadow: 0 0 0 3px ${colors.primary.gold}50;
    }
  }
  
  img {
    width: 100%;
    height: auto;
    filter: brightness(1.1) contrast(1.1);
    transition: all 0.3s ease;
  }
  
  &:hover img {
    filter: brightness(1.2) contrast(1.2) saturate(1.1);
  }
  
  /* Subtle pulsing effect to indicate clickability */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, ${colors.primary.gold}30, transparent, ${colors.primary.gold}30);
    border-radius: 17px;
    opacity: 0;
    animation: logoGlow 3s ease-in-out infinite;
    z-index: -1;
  }
  
  @keyframes logoGlow {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.3; }
  }
  
  ${mq[1]} {
    bottom: 20px;
    right: 20px;
    width: 150px;
    padding: 10px 14px;
  }
  
  ${mq[0]} {
    width: 120px;
    padding: 8px 12px;
    bottom: 15px;
    right: 15px;
  }
`;
