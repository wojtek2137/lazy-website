import styled from '@emotion/styled';
import { colors, fonts } from 'config/theme';
import LogoImage from 'assets/images/logo-color.webp';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Logo = styled('div')`
    margin: 0;
    display: flex;
    min-width: 500px;
    min-height: 500px;
    background: url('${LogoImage}');
    background-repeat: no-repeat;
    background-size: cover;
    filter: drop-shadow(0 0 30px ${colors.primary.gold}40) drop-shadow(0 0 60px ${colors.primary.gold}20);
    transition: all 0.8s ease;
    position: relative;
    z-index: 3;
    
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: radial-gradient(circle, ${colors.primary.gold}20 0%, transparent 70%);
      border-radius: 50%;
      z-index: -1;
      opacity: 0.6;
    }
    
    &:hover {
      transform: scale(1.05) rotate(2deg);
      filter: drop-shadow(0 0 40px ${colors.primary.gold}60) drop-shadow(0 0 80px ${colors.primary.gold}30);
    }
    
    ${mq[0]} {
        min-width: 350px;
        min-height: 350px;
    }
  `;


export const MainContainer = styled('div')`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 30% 20%, ${colors.primary.gold}15 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, ${colors.primary.sandy}10 0%, transparent 40%),
        linear-gradient(45deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
      z-index: 1;
      pointer-events: none;
    }
`;

export const ContentWrapper = styled('div')`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.neutrals.N0};
    overflow: hidden;
    z-index: 2;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120%;
      height: 120%;
      background: radial-gradient(ellipse, rgba(0,0,0,0.1) 0%, transparent 70%);
      z-index: -1;
    }

    ${mq[0]} {
        font-size: 60px;
    }
`;
export const HeaderWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    z-index: 4;
    animation: fadeInUp 1.5s ease-out 0.5s both;
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
export const Header = styled('span')`
    /* font-size: 3em; */
    margin-top: 10px;
    text-transform: uppercase;
    font-family: ${fonts.outfit.SemiBold};
    letter-spacing: 3px;
    font-size: 2.8em;
    color: ${colors.primary.sandy};
    @media  (max-width: 420px){
        font-size: 30px;
    }
`;

export const MainTitle = styled('h1')`
    margin: 20px 0;
    text-transform: uppercase;
    font-family: ${fonts.outfit.SemiBold};
    letter-spacing: 4px;
    font-size: 3.2em;
    color: ${colors.primary.sandy};
    text-shadow: 
      0 0 20px ${colors.primary.gold}60,
      0 0 40px ${colors.primary.gold}40,
      0 4px 8px rgba(0,0,0,0.5);
    position: relative;
    /* Reduced animation frequency for performance */
    animation: titleGlow 6s ease-in-out infinite alternate;
    
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 2px;
      background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
      box-shadow: 0 0 20px ${colors.primary.gold}80;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 1px;
      background: linear-gradient(90deg, transparent, ${colors.primary.sandy}, transparent);
    }
    
    @keyframes titleGlow {
      0% { 
        text-shadow: 
          0 0 20px ${colors.primary.gold}60,
          0 0 40px ${colors.primary.gold}40,
          0 4px 8px rgba(0,0,0,0.5);
      }
      100% { 
        text-shadow: 
          0 0 30px ${colors.primary.gold}80,
          0 0 60px ${colors.primary.gold}60,
          0 4px 8px rgba(0,0,0,0.5);
      }
    }
    
    ${mq[0]} {
        font-size: 32px;
        letter-spacing: 2px;
    }
`;
export const SubHeader = styled('p')`
    letter-spacing: 6px;
    font-size: 26px;
    font-family: ${fonts.outfit.Medium};
    color: ${colors.primary.white};
    margin: 15px 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.8);
    opacity: 0.95;
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 1;
      color: ${colors.neutrals.N10};
      text-shadow: 0 0 15px ${colors.primary.white}30;
    }
    
    &:first-of-type {
      animation: fadeIn 1.2s ease-out 0.8s both;
    }
    
    &:last-of-type {
      animation: fadeIn 1.2s ease-out 1.5s both;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 0.95; }
    }
    
    ${mq[0]} {
        font-size: 20px;
        letter-spacing: 3px;
    }
`;

export const CTAButton = styled('a')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    padding: 16px 32px;
    background: rgba(212, 175, 55, 0.12);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(212, 175, 55, 0.3);
    color: ${colors.primary.gold};
    text-decoration: none;
    font-family: ${fonts.outfit.Medium};
    font-size: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 60px;
    box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 4px 20px rgba(0, 0, 0, 0.15),
        0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    position: relative;
    z-index: 5;
    overflow: hidden;
    animation: subtleFadeIn 1.8s ease-out 2.2s both;
    
    /* Elegant inner glow effect */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
        transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
        transform: translate(-50%, -50%);
        z-index: -1;
        border-radius: 50%;
    }
    
    /* Subtle shimmer effect */
    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 70%
        );
        transform: translateX(-100%);
        transition: transform 1.2s ease;
    }
    
    &:hover {
        transform: translateY(-2px);
        background: rgba(212, 175, 55, 0.18);
        border-color: rgba(212, 175, 55, 0.5);
        box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 8px 32px rgba(0, 0, 0, 0.25),
            0 4px 16px rgba(212, 175, 55, 0.15);
        color: ${colors.primary.sandy};
        
        &::before {
            width: 200px;
            height: 200px;
        }
        
        &::after {
            transform: translateX(100%);
        }
    }
    
    &:active {
        transform: translateY(0px);
        transition: transform 0.1s ease;
    }
    
    /* Sophisticated fade-in animation */
    @keyframes subtleFadeIn {
        0% { 
            opacity: 0; 
            transform: translateY(15px) scale(0.95);
            filter: blur(1px);
        }
        50% {
            opacity: 0.7;
        }
        100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0px);
        }
    }
    
    /* Elegant focus state for accessibility */
    &:focus {
        outline: none;
        box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 8px 32px rgba(0, 0, 0, 0.25),
            0 0 0 3px rgba(212, 175, 55, 0.3);
    }
    
    ${mq[0]} {
        font-size: 14px;
        padding: 14px 28px;
        letter-spacing: 1px;
        margin-top: 30px;
    }
`;
export const ExtraSmallHeader = styled('span')`
    /* margin-top: 10px; */
    font-size: 16px;
    text-transform: none;
    font-family: ${fonts.outfit.Medium};
`;

export const HeroImageWrapper = styled('div')`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    /* Ken Burns effect - dramatic zoom and pan animation */
    img {
      width: 150%; /* Increased for more intense Ken Burns effect */
      height: 150%; /* Increased for more intense Ken Burns effect */
      object-fit: cover;
      transform: scale(1.1) translate(-10%, -10%); /* Larger initial offset */
      filter: 
        brightness(0.8) 
        contrast(1.1) 
        saturate(0.9);
      transition: filter 0.8s ease;
      /* Intense Ken Burns animation with dramatic movement */
      animation: kenBurnsOptimized 30s ease-in-out infinite alternate; /* Faster cycle */
      will-change: transform;
    }
    
    /* Enhanced Ken Burns keyframes - more intense movement and zoom */
    @keyframes kenBurnsOptimized {
      0% {
        transform: scale(1.1) translate(0%, 0%);
      }
      25% {
        transform: scale(1.25) translate(-6%, -3%);
      }
      50% {
        transform: scale(1.20) translate(-2%, -8%);
      }
      75% {
        transform: scale(1.30) translate(-10%, -5%);
      }
      100% {
        transform: scale(1.35) translate(-4%, -10%);
      }
    }
    
    /* Subtle overlay effect */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 30% 30%, ${colors.primary.gold}08 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, ${colors.primary.sandy}05 0%, transparent 40%);
      z-index: 1;
      pointer-events: none;
    }
`;


