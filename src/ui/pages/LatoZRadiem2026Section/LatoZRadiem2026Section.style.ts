import styled from "styled-components";
import { colors, fonts, spacing, typography, shadows } from "config/theme";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const PosterWrapper = styled("section")`
  background: linear-gradient(
    135deg,
    #0a0a0a 0%,
    #0d0d0d 30%,
    #141414 50%,
    #0d0d0d 70%,
    #0a0a0a 100%
  );
  min-height: 100vh;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        ellipse at 50% 0%,
        ${colors.primary.gold}08 0%,
        transparent 60%
      ),
      radial-gradient(
        ellipse at 50% 100%,
        ${colors.primary.gold}05 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: 1;
  }

  ${mq[1]} {
    padding: 40px 15px;
    min-height: auto;
  }

  ${mq[0]} {
    padding: 30px 10px;
  }
`;

export const PosterContainer = styled("div")`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.xl};
`;

export const SectionHeader = styled("div")`
  text-align: center;
  position: relative;
`;

export const MainTitle = styled("h2")`
  font-family: ${fonts.outfit.SemiBold};
  font-size: ${typography.h1.size};
  font-weight: ${typography.h1.weight};
  line-height: ${typography.h1.lineHeight};
  color: ${colors.primary.gold};
  margin: 0 0 ${spacing.md} 0;
  letter-spacing: ${typography.h1.letterSpacing};
  text-transform: uppercase;
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    top: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
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
    bottom: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.gold}60,
      transparent
    );
  }

  ${mq[2]} {
    font-size: ${typography.h2.size};
  }

  ${mq[1]} {
    font-size: ${typography.h3.size};
  }

  ${mq[0]} {
    font-size: 28px;
  }
`;

export const Subtitle = styled("p")`
  font-family: ${fonts.outfit.Medium};
  font-size: 18px;
  color: ${colors.neutrals.N10};
  margin: ${spacing.xl} 0 0 0;
  opacity: 0.85;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  ${mq[1]} {
    font-size: 16px;
    margin-top: ${spacing.lg};
  }
`;

export const PosterFrame = styled("div")`
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${colors.primary.gold}15;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.5),
    0 0 40px ${colors.primary.gold}08,
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  /* ResponsiveLazyImage uses height:100% internally — override for content images */
  & > div {
    height: auto;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Glow border effect */
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      135deg,
      ${colors.primary.gold}20,
      transparent 40%,
      transparent 60%,
      ${colors.primary.gold}15
    );
    border-radius: 21px;
    z-index: -1;
    opacity: 0.6;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.primary.gold}25;
    box-shadow:
      0 30px 70px rgba(0, 0, 0, 0.6),
      0 0 50px ${colors.primary.gold}12;
  }

  ${mq[1]} {
    border-radius: 14px;

    &::before {
      border-radius: 15px;
    }
  }

  ${mq[0]} {
    border-radius: 10px;

    &::before {
      border-radius: 11px;
    }
  }
`;

export const CtaLink = styled("a")`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  color: ${colors.primary.black};
  background: linear-gradient(
    135deg,
    ${colors.primary.gold},
    ${colors.primary.yellow}
  );
  font-family: ${fonts.outfit.SemiBold};
  font-size: 16px;
  text-decoration: none;
  padding: ${spacing.md} ${spacing.xxl};
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 8px 25px ${colors.primary.gold}30,
    0 0 15px ${colors.primary.gold}15;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 12px 35px ${colors.primary.gold}40,
      0 0 25px ${colors.primary.gold}25;
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: "→";
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }

  &:focus-visible {
    outline: 3px solid ${colors.primary.gold};
    outline-offset: 3px;
  }

  ${mq[0]} {
    font-size: 14px;
    padding: ${spacing.sm} ${spacing.xl};
  }
`;
