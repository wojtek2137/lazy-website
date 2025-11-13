import styled from "@emotion/styled";
import { colors, fonts, spacing, typography, shadows } from "config/theme";
import LogoImage from "assets/images/logo-color.webp";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Logo = styled("div")`
  margin: 0;
  display: flex;
  min-width: 500px;
  min-height: 500px;
  background: url("${LogoImage}");
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(${shadows.glow});
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    top: -${spacing.md};
    left: -${spacing.md};
    right: -${spacing.md};
    bottom: -${spacing.md};
    background: radial-gradient(
      circle,
      ${colors.primary.gold}15 0%,
      transparent 70%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.03) rotate(1deg);
    filter: drop-shadow(${shadows.glowStrong});
  }

  ${mq[0]} {
    min-width: 350px;
    min-height: 350px;
  }
`;

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 30% 20%,
        ${colors.primary.gold}15 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 80%,
        ${colors.primary.sandy}10 0%,
        transparent 40%
      ),
      linear-gradient(45deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
    pointer-events: none;
  }
`;

export const ContentWrapper = styled("div")`
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
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(
      ellipse,
      rgba(0, 0, 0, 0.1) 0%,
      transparent 70%
    );
    z-index: -1;
  }

  ${mq[0]} {
    font-size: 60px;
  }
`;
export const HeaderWrapper = styled("div")`
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
export const Header = styled("span")`
  /* font-size: 3em; */
  margin-top: 10px;
  text-transform: uppercase;
  font-family: ${fonts.outfit.SemiBold};
  letter-spacing: 3px;
  font-size: 2.8em;
  color: ${colors.primary.sandy};
  @media (max-width: 420px) {
    font-size: 30px;
  }
`;

export const MainTitle = styled("h1")`
  margin: ${spacing.lg} 0;
  text-transform: uppercase;
  font-family: ${fonts.outfit.SemiBold};
  font-size: ${typography.h1.size};
  font-weight: ${typography.h1.weight};
  line-height: ${typography.h1.lineHeight};
  letter-spacing: ${typography.h1.letterSpacing};
  color: ${colors.primary.white};
  text-shadow:
    0 ${spacing.xs} ${spacing.md} rgba(0, 0, 0, 0.8),
    0 0 ${spacing.xl} ${colors.primary.gold}50;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -${spacing.lg};
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.gold},
      transparent
    );
    box-shadow: ${shadows.glow};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -${spacing.lg};
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.gold}80,
      transparent
    );
  }

  ${mq[0]} {
    font-size: ${typography.h3.size};
    letter-spacing: 0;
  }
`;
export const SubHeader = styled("p")`
  font-family: ${fonts.outfit.Light};
  font-size: ${typography.h5.size};
  font-weight: ${typography.h5.weight};
  line-height: ${typography.h5.lineHeight};
  letter-spacing: 0.05em;
  color: ${colors.neutrals.N20};
  margin: ${spacing.md} 0;
  text-shadow: 0 ${spacing.xs} ${spacing.sm} rgba(0, 0, 0, 0.8);
  opacity: 0.95;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${colors.primary.sandy};
  }

  &:first-of-type {
    animation: fadeIn 1.2s ease-out 0.8s both;
  }

  &:last-of-type {
    animation: fadeIn 1.2s ease-out 1.5s both;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.95;
    }
  }

  ${mq[0]} {
    font-size: ${typography.h6.size};
    letter-spacing: 0.03em;
  }
`;

export const CTAButton = styled("a")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${spacing.xxl};
  padding: ${spacing.md} ${spacing.xl};
  min-height: 56px; /* WCAG 2.1 AAA - touch target size */
  background: linear-gradient(
    135deg,
    ${colors.primary.gold} 0%,
    ${colors.primary.yellow} 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid ${colors.primary.gold};
  color: ${colors.primary.black};
  text-decoration: none;
  font-family: ${fonts.outfit.SemiBold};
  font-size: ${typography.h6.size};
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 50px;
  box-shadow:
    ${shadows.lg},
    ${shadows.glow},
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 5;
  overflow: hidden;
  animation: subtleFadeIn 1.8s ease-out 2.2s both;

  /* Subtle shimmer effect */
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 70%
    );
    transform: translateX(-100%);
    transition: transform 1s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    background: linear-gradient(
      135deg,
      ${colors.primary.yellow} 0%,
      ${colors.primary.gold} 100%
    );
    border-color: ${colors.primary.yellow};
    box-shadow:
      ${shadows.xl},
      ${shadows.glowStrong},
      inset 0 1px 0 rgba(255, 255, 255, 0.4);

    &::after {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-2px) scale(1);
    transition: transform 0.1s ease;
  }

  /* Sophisticated fade-in animation */
  @keyframes subtleFadeIn {
    0% {
      opacity: 0;
      transform: translateY(${spacing.md}) scale(0.95);
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

  /* WCAG 2.1 AAA focus state for accessibility */
  &:focus-visible {
    outline: 3px solid ${colors.primary.gold};
    outline-offset: 4px;
    box-shadow:
      ${shadows.xl},
      ${shadows.glowStrong},
      0 0 0 4px rgba(0, 0, 0, 0.8);
  }

  ${mq[0]} {
    font-size: ${typography.bodyLarge.size};
    padding: ${spacing.md} ${spacing.lg};
    letter-spacing: 0.03em;
    margin-top: ${spacing.xl};
    min-height: 48px;
  }
`;
export const ExtraSmallHeader = styled("span")`
  /* margin-top: 10px; */
  font-size: 16px;
  text-transform: none;
  font-family: ${fonts.outfit.Medium};
`;

export const HeroImageWrapper = styled("div")`
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
    filter: brightness(0.8) contrast(1.1) saturate(0.9);
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
      transform: scale(1.2) translate(-2%, -8%);
    }
    75% {
      transform: scale(1.3) translate(-10%, -5%);
    }
    100% {
      transform: scale(1.35) translate(-4%, -10%);
    }
  }

  /* Subtle overlay effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 30% 30%,
        ${colors.primary.gold}08 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 70%,
        ${colors.primary.sandy}05 0%,
        transparent 40%
      );
    z-index: 1;
    pointer-events: none;
  }
`;
