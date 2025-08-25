import styled from "@emotion/styled";
import { colors, fonts } from "config/theme";


const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

// Modern section wrapper with gradient backgrounds and subtle effects
export const ModernSectionWrapper = styled("section")<{ 
  backgroundImage?: string;
  gradientOverlay?: boolean;
  darkTheme?: boolean;
  parallaxEffect?: boolean;
}>`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  ${({ backgroundImage, parallaxEffect }) => backgroundImage ? `
    background: url('${backgroundImage}');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: ${parallaxEffect ? 'fixed' : 'scroll'};
    background-position: center;
    
    /* Enhanced image effects */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%),
        radial-gradient(circle at 30% 30%, ${colors.primary.gold}15 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, ${colors.primary.sandy}10 0%, transparent 40%);
      backdrop-filter: blur(1px);
      z-index: 1;
      pointer-events: none;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 50px,
          ${colors.primary.gold}02 50px,
          ${colors.primary.gold}02 52px
        );
      z-index: 1;
      pointer-events: none;
      opacity: 0.3;
      animation: shimmer 20s linear infinite;
    }
  ` : `
    background: linear-gradient(135deg, #0a0a0a 0%, ${colors.primary.black} 30%, #1a1a1a 70%, ${colors.primary.black} 100%);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 30%, ${colors.primary.gold}08 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, ${colors.primary.gold}05 0%, transparent 40%),
        radial-gradient(circle at 50% 50%, ${colors.primary.sandy}03 0%, transparent 60%);
      pointer-events: none;
      z-index: 1;
    }
  `}
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  ${mq[1]} {
    background-attachment: scroll;
    min-height: 80vh;
  }
`;

// Modern content container with glassmorphism effect
export const ModernContentContainer = styled("div")<{ 
  maxWidth?: string;
  glassmorphism?: boolean;
  enhanced?: boolean;
}>`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '1400px'};
  margin: 0 auto;
  padding: 60px 40px;
  
  ${({ glassmorphism, enhanced }) => glassmorphism && `
    background: ${enhanced ? 
      'rgba(255, 255, 255, 0.08)' : 
      'rgba(255, 255, 255, 0.05)'
    };
    backdrop-filter: blur(${enhanced ? '25px' : '20px'});
    border: 1px solid ${colors.primary.gold}${enhanced ? '30' : '20'};
    border-radius: ${enhanced ? '30px' : '25px'};
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, ${enhanced ? '0.6' : '0.4'}),
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      ${enhanced ? `0 0 40px ${colors.primary.gold}10,` : ''}
      ${enhanced ? `inset 0 0 60px ${colors.primary.gold}05` : ''};
    transition: all 0.3s ease;
    
    &:hover {
      background: ${enhanced ? 
        'rgba(255, 255, 255, 0.12)' : 
        'rgba(255, 255, 255, 0.08)'
      };
      border-color: ${colors.primary.gold}${enhanced ? '50' : '40'};
      transform: translateY(-5px);
      box-shadow: 
        0 35px 70px rgba(0, 0, 0, ${enhanced ? '0.8' : '0.6'}),
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 0 60px ${colors.primary.gold}20,
        inset 0 0 80px ${colors.primary.gold}08;
    }
  `}
  
  ${mq[1]} {
    padding: 40px 20px;
    margin: 0 15px;
  }
`;

// Enhanced text wrapper with modern styling
export const ModernTextWrapper = styled("div")<{ 
  centerAlign?: boolean;
  maxWidth?: string;
  enhanced?: boolean;
}>`
  ${({ centerAlign }) => centerAlign && `
    text-align: center;
  `}
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  margin: 0 auto;
  position: relative;
  z-index: 3;
  
  ${({ enhanced }) => enhanced && `
    /* Subtle background for better text readability */
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      background: radial-gradient(
        ellipse at center,
        rgba(0,0,0,0.4) 0%,
        transparent 70%
      );
      z-index: -1;
      border-radius: 20px;
    }
  `}
`;

// Styled heading with modern effects
export const ModernHeading = styled("h2")<{ 
  size?: 'small' | 'medium' | 'large';
  color?: 'gold' | 'white' | 'sandy';
  enhanced?: boolean;
}>`
  font-family: ${fonts.mulish.Bold};
  font-weight: 700;
  color: ${({ color }) => {
    switch (color) {
      case 'white': return colors.primary.white;
      case 'sandy': return colors.primary.sandy;
      default: return colors.primary.gold;
    }
  }};
  margin: 0 0 30px 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  text-shadow: ${({ enhanced }) => enhanced ? 
    '0 0 20px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8), 0 0 40px rgba(245, 203, 92, 0.3)' :
    'none'
  };
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `font-size: 28px; ${mq[1]} { font-size: 24px; }`;
      case 'large':
        return `font-size: 56px; ${mq[1]} { font-size: 36px; }`;
      default:
        return `font-size: 42px; ${mq[1]} { font-size: 32px; }`;
    }
  }}
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
    box-shadow: 0 0 15px ${colors.primary.gold}${({ enhanced }) => enhanced ? '80' : '50'};
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
    box-shadow: ${({ enhanced }) => enhanced ? `0 0 10px ${colors.primary.gold}60` : 'none'};
  }
`;

// Enhanced text styling
export const ModernText = styled("p")<{ 
  size?: 'small' | 'medium' | 'large';
  emphasis?: boolean;
  enhanced?: boolean;
}>`
  font-family: ${fonts.mulish.Regular};
  color: ${({ enhanced }) => enhanced ? colors.neutrals.N0 : colors.neutrals.N10};
  line-height: 1.8;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-shadow: ${({ enhanced }) => enhanced ? '0 2px 4px rgba(0,0,0,0.8)' : 'none'};
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `font-size: 14px;`;
      case 'large':
        return `font-size: 20px; ${mq[1]} { font-size: 18px; }`;
      default:
        return `font-size: 16px; ${mq[1]} { font-size: 15px; }`;
    }
  }}
  
  ${({ emphasis, enhanced }) => emphasis && `
    font-family: ${fonts.mulish.Medium};
    color: ${enhanced ? colors.primary.sandy : colors.primary.sandy};
    text-shadow: 0 0 15px ${colors.primary.gold}40, ${enhanced ? '0 2px 4px rgba(0,0,0,0.8)' : 'none'};
  `}
`;

// Highlighted span for emphasis
export const ModernSpan = styled("span")<{ 
  variant?: 'highlight' | 'accent' | 'glow';
  enhanced?: boolean;
}>`
  font-family: ${fonts.mulish.Bold};
  font-weight: 700;
  position: relative;
  
  ${({ variant, enhanced }) => {
    const baseTextShadow = enhanced ? '0 2px 4px rgba(0,0,0,0.9), ' : '';
    
    switch (variant) {
      case 'accent':
        return `
          color: ${colors.primary.sandy};
          text-shadow: ${baseTextShadow}0 0 12px ${colors.primary.sandy}50;
        `;
      case 'glow':
        return `
          color: ${colors.primary.gold};
          text-shadow: 
            ${baseTextShadow}
            0 0 15px ${colors.primary.gold}70,
            0 0 25px ${colors.primary.gold}50,
            0 0 35px ${colors.primary.gold}30;
          animation: textGlow 3s ease-in-out infinite alternate;
        `;
      default:
        return `
          color: ${colors.primary.gold};
          text-shadow: ${baseTextShadow}0 0 15px ${colors.primary.gold}40;
          
          &::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
            opacity: 0.8;
            box-shadow: 0 0 8px ${colors.primary.gold}60;
          }
        `;
    }
  }}
  
  @keyframes textGlow {
    from { 
      text-shadow: 
        ${({ enhanced }) => enhanced ? '0 2px 4px rgba(0,0,0,0.9), ' : ''}
        0 0 15px ${colors.primary.gold}70, 
        0 0 25px ${colors.primary.gold}50; 
    }
    to { 
      text-shadow: 
        ${({ enhanced }) => enhanced ? '0 2px 4px rgba(0,0,0,0.9), ' : ''}
        0 0 25px ${colors.primary.gold}90, 
        0 0 35px ${colors.primary.gold}70; 
    }
  }
`;

// Modern list styling
export const ModernList = styled("ul")<{ 
  variant?: 'grid' | 'vertical' | 'inline';
  enhanced?: boolean;
}>` 
  list-style: none;
  padding: 0;
  margin: 20px 0;
  
  ${({ variant }) => {
    switch (variant) {
      case 'grid':
        return `
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        `;
      case 'inline':
        return `
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        `;
      default:
        return `
          display: flex;
          flex-direction: column;
          gap: 10px;
        `;
    }
  }}
  
  li {
    font-family: ${fonts.mulish.Medium};
    color: ${({ enhanced }) => enhanced ? colors.neutrals.N0 : colors.neutrals.N20};
    padding: ${({ enhanced }) => enhanced ? '14px 22px' : '12px 20px'};
    background: ${({ enhanced }) => enhanced ? 
      'rgba(255, 255, 255, 0.12)' : 
      'rgba(245, 203, 92, 0.08)'
    };
    border: 1px solid ${colors.primary.gold}${({ enhanced }) => enhanced ? '40' : '20'};
    border-radius: ${({ enhanced }) => enhanced ? '15px' : '12px'};
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    text-shadow: ${({ enhanced }) => enhanced ? '0 1px 3px rgba(0,0,0,0.8)' : 'none'};
    backdrop-filter: ${({ enhanced }) => enhanced ? 'blur(10px)' : 'none'};
    
    &:hover {
      background: ${({ enhanced }) => enhanced ? 
        'rgba(255, 255, 255, 0.18)' : 
        'rgba(245, 203, 92, 0.15)'
      };
      transform: translateY(-4px) scale(1.02);
      box-shadow: 
        0 12px 30px rgba(245, 203, 92, 0.3),
        ${({ enhanced }) => enhanced ? '0 0 20px rgba(255, 255, 255, 0.1),' : ''}
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      border-color: ${colors.primary.gold}60;
      color: ${({ enhanced }) => enhanced ? colors.primary.sandy : colors.neutrals.N10};
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, ${colors.primary.gold}, ${colors.primary.sandy});
      opacity: 0;
      transition: opacity 0.3s ease;
      box-shadow: 0 0 10px ${colors.primary.gold}60;
    }
    
    &:hover::before {
      opacity: 1;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 0%, ${colors.primary.gold}05 50%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover::after {
      opacity: 1;
    }
  }
`;

// Floating animation keyframes
export const floatingKeyframes = `
  @keyframes floating {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes floatingReverse {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(20px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;
