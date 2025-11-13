import styled from "@emotion/styled";
import { colors, fonts, spacing, typography, shadows } from "config/theme";

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

  ${({ backgroundImage, parallaxEffect }) =>
    backgroundImage
      ? `
    background: url('${backgroundImage}');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: ${parallaxEffect ? "fixed" : "scroll"};
    background-position: center;
    
    /* Same blur effect as "o nas" section for consistency + image rotation */
    &[data-bg="about2"], &[data-bg="about3"] {
      &::before {
        background: 
          linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%),
          radial-gradient(circle at 30% 30%, ${colors.primary.gold}15 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, ${colors.primary.sandy}10 0%, transparent 40%);
        backdrop-filter: blur(1px);
        z-index: 1;
      }
    }
    
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
      /* Removed shimmer animation for performance */
    }
  `
      : `
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

  /* Removed shimmer keyframes for performance */
  
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
  max-width: ${({ maxWidth }) => maxWidth || "1400px"};
  margin: 0 auto;
  padding: ${spacing.xxxl} ${spacing.xxl};

  ${({ glassmorphism, enhanced }) =>
    glassmorphism &&
    `
    background: ${
      enhanced ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.05)"
    };
    backdrop-filter: blur(${enhanced ? "25px" : "20px"});
    border: 1px solid ${colors.primary.gold}${enhanced ? "30" : "20"};
    border-radius: ${enhanced ? "30px" : "24px"};
    box-shadow: 
      ${enhanced ? shadows.xl : shadows.lg},
      ${enhanced ? shadows.glow : ""},
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      background: ${
        enhanced ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.08)"
      };
      border-color: ${colors.primary.gold}${enhanced ? "50" : "40"};
      transform: translateY(-${spacing.sm});
      box-shadow: 
        ${shadows.xl},
        ${enhanced ? shadows.glowStrong : shadows.glow},
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
  `}

  ${mq[1]} {
    padding: ${spacing.xxl} ${spacing.lg};
    margin: 0 ${spacing.md};
  }
`;

// Enhanced text wrapper with modern styling
export const ModernTextWrapper = styled("div")<{
  centerAlign?: boolean;
  maxWidth?: string;
  enhanced?: boolean;
}>`
  ${({ centerAlign }) =>
    centerAlign &&
    `
    text-align: center;
  `}
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  margin: 0 auto;
  position: relative;
  z-index: 3;

  ${({ enhanced }) =>
    enhanced &&
    `
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
  size?: "small" | "medium" | "large";
  color?: "gold" | "white" | "sandy";
  enhanced?: boolean;
}>`
  font-family: ${fonts.outfit.SemiBold};
  color: ${({ color }) => {
    switch (color) {
      case "white":
        return colors.primary.white;
      case "sandy":
        return colors.primary.sandy;
      default:
        return colors.primary.gold;
    }
  }};
  margin: 0 0 ${spacing.xl} 0;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  text-shadow: ${({ enhanced }) =>
    enhanced
      ? `0 0 ${spacing.lg} rgba(0,0,0,0.9), 0 ${spacing.xs} ${spacing.sm} rgba(0,0,0,0.8), 0 0 ${spacing.xxl} ${colors.primary.gold}30`
      : "none"};

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          font-size: ${typography.h4.size}; 
          font-weight: ${typography.h4.weight}; 
          line-height: ${typography.h4.lineHeight}; 
          letter-spacing: ${typography.h4.letterSpacing};
          ${mq[1]} { font-size: ${typography.h5.size}; }
        `;
      case "large":
        return `
          font-size: ${typography.h1.size}; 
          font-weight: ${typography.h1.weight}; 
          line-height: ${typography.h1.lineHeight}; 
          letter-spacing: ${typography.h1.letterSpacing};
          ${mq[1]} { font-size: ${typography.h2.size}; }
        `;
      default:
        return `
          font-size: ${typography.h2.size}; 
          font-weight: ${typography.h2.weight}; 
          line-height: ${typography.h2.lineHeight}; 
          letter-spacing: ${typography.h2.letterSpacing};
          ${mq[1]} { font-size: ${typography.h3.size}; }
        `;
    }
  }}

  &::before {
    content: "";
    position: absolute;
    top: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.gold},
      transparent
    );
    box-shadow: ${({ enhanced }) => (enhanced ? shadows.glow : shadows.sm)};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.gold},
      transparent
    );
    box-shadow: ${({ enhanced }) => (enhanced ? shadows.md : "none")};
  }
`;

// Enhanced text styling
export const ModernText = styled("p")<{
  size?: "small" | "medium" | "large";
  emphasis?: boolean;
  enhanced?: boolean;
}>`
  font-family: ${fonts.outfit.Light};
  color: ${({ enhanced }) =>
    enhanced ? colors.neutrals.N0 : colors.neutrals.N10};
  margin-bottom: ${spacing.lg};
  text-shadow: ${({ enhanced }) =>
    enhanced ? `0 ${spacing.xs} ${spacing.sm} rgba(0,0,0,0.8)` : "none"};

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          font-size: ${typography.bodySmall.size};
          line-height: ${typography.bodySmall.lineHeight};
          letter-spacing: ${typography.bodySmall.letterSpacing};
        `;
      case "large":
        return `
          font-size: ${typography.bodyLarge.size}; 
          line-height: ${typography.bodyLarge.lineHeight};
          letter-spacing: ${typography.bodyLarge.letterSpacing};
          ${mq[1]} { font-size: ${typography.body.size}; }
        `;
      default:
        return `
          font-size: ${typography.body.size};
          line-height: ${typography.body.lineHeight};
          letter-spacing: ${typography.body.letterSpacing};
        `;
    }
  }}

  ${({ emphasis, enhanced }) =>
    emphasis &&
    `
    font-family: ${fonts.outfit.Medium};
    color: ${enhanced ? colors.primary.sandy : colors.primary.sandy};
    text-shadow: 0 0 ${spacing.md} ${colors.primary.gold}40, ${enhanced ? `0 ${spacing.xs} ${spacing.sm} rgba(0,0,0,0.8)` : "none"};
  `}
`;

// Highlighted span for emphasis
export const ModernSpan = styled("span")<{
  variant?: "highlight" | "accent" | "glow";
  enhanced?: boolean;
}>`
  font-family: ${fonts.outfit.Medium};
  font-weight: 700;
  position: relative;

  ${({ variant, enhanced }) => {
    const baseTextShadow = enhanced ? "0 2px 4px rgba(0,0,0,0.9), " : "";

    switch (variant) {
      case "accent":
        return `
          color: ${colors.primary.sandy};
          text-shadow: ${baseTextShadow}0 0 12px ${colors.primary.sandy}50;
        `;
      case "glow":
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
        ${({ enhanced }) => (enhanced ? "0 2px 4px rgba(0,0,0,0.9), " : "")} 0 0
          15px ${colors.primary.gold}70,
        0 0 25px ${colors.primary.gold}50;
    }
    to {
      text-shadow:
        ${({ enhanced }) => (enhanced ? "0 2px 4px rgba(0,0,0,0.9), " : "")} 0 0
          25px ${colors.primary.gold}90,
        0 0 35px ${colors.primary.gold}70;
    }
  }

  /* Style links inside ModernSpan */
  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    &:focus {
      outline: 2px solid ${colors.primary.gold}60;
      outline-offset: 2px;
      border-radius: 2px;
    }
  }
`;

// Modern list styling
export const ModernList = styled("ul")<{
  variant?: "grid" | "vertical" | "inline";
  enhanced?: boolean;
}>`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  ${({ variant }) => {
    switch (variant) {
      case "grid":
        return `
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        `;
      case "inline":
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
    font-family: ${fonts.outfit.Medium};
    color: ${({ enhanced }) =>
      enhanced ? colors.neutrals.N0 : colors.neutrals.N20};
    padding: ${({ enhanced }) => (enhanced ? "14px 22px" : "12px 20px")};
    background: ${({ enhanced }) =>
      enhanced ? "rgba(255, 255, 255, 0.12)" : "rgba(245, 203, 92, 0.08)"};
    border: 1px solid
      ${colors.primary.gold}${({ enhanced }) => (enhanced ? "40" : "20")};
    border-radius: ${({ enhanced }) => (enhanced ? "15px" : "12px")};
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    text-shadow: ${({ enhanced }) =>
      enhanced ? "0 1px 3px rgba(0,0,0,0.8)" : "none"};
    backdrop-filter: ${({ enhanced }) => (enhanced ? "blur(10px)" : "none")};

    &:hover {
      background: ${({ enhanced }) =>
        enhanced ? "rgba(255, 255, 255, 0.18)" : "rgba(245, 203, 92, 0.15)"};
      transform: translateY(-4px) scale(1.02);
      box-shadow:
        0 12px 30px rgba(245, 203, 92, 0.3),
        ${({ enhanced }) =>
            enhanced ? "0 0 20px rgba(255, 255, 255, 0.1)," : ""}
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
      border-color: ${colors.primary.gold}60;
      color: ${({ enhanced }) =>
        enhanced ? colors.primary.sandy : colors.neutrals.N10};
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(
        180deg,
        ${colors.primary.gold},
        ${colors.primary.sandy}
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      box-shadow: 0 0 10px ${colors.primary.gold}60;
      pointer-events: none;
    }

    &:hover::before {
      opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        transparent 0%,
        ${colors.primary.gold}05 50%,
        transparent 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    &:hover::after {
      opacity: 1;
    }

    /* Style links inside list items */
    a {
      color: inherit;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      cursor: pointer;
      z-index: 10;
      display: block;
      width: 100%;
      height: 100%;

      &:hover {
        opacity: 0.9;
      }

      &:focus {
        outline: 2px solid ${colors.primary.gold}60;
        outline-offset: 2px;
        border-radius: 2px;
      }

      &:active {
        transform: scale(0.98);
      }
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
