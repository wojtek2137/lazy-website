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
    animation: logoFloat 6s ease-in-out infinite;
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
      animation: logoGlow 4s ease-in-out infinite alternate;
    }
    
    &:hover {
      transform: scale(1.05) rotate(2deg);
      filter: drop-shadow(0 0 40px ${colors.primary.gold}60) drop-shadow(0 0 80px ${colors.primary.gold}30);
    }
    
    @keyframes logoFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(1deg); }
    }
    
    @keyframes logoGlow {
      0% { opacity: 0.6; }
      100% { opacity: 1; }
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
    font-family: ${fonts.mulish.ExtraBold};
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
    font-family: ${fonts.mulish.ExtraBold};
    letter-spacing: 4px;
    font-size: 3.2em;
    color: ${colors.primary.sandy};
    text-shadow: 
      0 0 20px ${colors.primary.gold}60,
      0 0 40px ${colors.primary.gold}40,
      0 4px 8px rgba(0,0,0,0.5);
    position: relative;
    animation: titleGlow 3s ease-in-out infinite alternate;
    
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
    font-family: ${fonts.mulish.Medium};
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
export const ExtraSmallHeader = styled('span')`
    /* margin-top: 10px; */
    font-size: 16px;
    text-transform: none;
    font-family: ${fonts.mulish.Medium};
`;

export const HeroImageWrapper = styled('div')`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    /* Ken Burns effect - subtle zoom and pan animation */
    img {
      width: 110%;
      height: 110%;
      object-fit: cover;
      transform: scale(1) translate(-2%, -2%);
      filter: 
        brightness(0.8) 
        contrast(1.1) 
        saturate(0.9);
      transition: filter 0.8s ease;
      animation: kenBurns 20s ease-in-out infinite alternate;
    }
    
    @keyframes kenBurns {
      0% {
        transform: scale(1) translate(-2%, -2%);
      }
      25% {
        transform: scale(1.08) translate(-3%, -1%);
      }
      50% {
        transform: scale(1.05) translate(-1%, -3%);
      }
      75% {
        transform: scale(1.07) translate(-4%, -2%);
      }
      100% {
        transform: scale(1.03) translate(-2%, -4%);
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


