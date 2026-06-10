import styled from "styled-components";
import { colors, fonts, spacing, typography, shadows } from "config/theme";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const MelchioryWrapper = styled("section")`
  background: linear-gradient(
    135deg,
    #0a0a0a 0%,
    #111111 30%,
    #1a1a0a 60%,
    #0a0a0a 100%
  );
  min-height: 100vh;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 15% 20%,
        ${colors.primary.gold}12 0%,
        transparent 45%
      ),
      radial-gradient(
        circle at 85% 80%,
        ${colors.primary.gold}0a 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 50% 50%,
        ${colors.primary.gold}06 0%,
        transparent 60%
      );
    pointer-events: none;
    z-index: 1;
  }

  /* Subtle film-grain overlay texture */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
      circle at 25% 25%,
      rgba(255, 255, 255, 0.005) 0%,
      transparent 50%
    );
    pointer-events: none;
    z-index: 1;
    opacity: 0.8;
  }

  ${mq[1]} {
    padding: 60px 15px;
  }

  ${mq[0]} {
    padding: 40px 12px;
  }
`;

export const ContentContainer = styled("div")`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const SectionHeader = styled("div")`
  text-align: center;
  margin-bottom: 60px;
  position: relative;

  ${mq[1]} {
    margin-bottom: 40px;
  }

  ${mq[0]} {
    margin-bottom: 30px;
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
    content: "";
    position: absolute;
    top: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
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
    width: 120px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.gold},
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
  margin: ${spacing.xl} 0 ${spacing.md} 0;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;

  ${mq[1]} {
    font-size: 16px;
    margin-top: ${spacing.lg};
  }
`;

export const DescriptionText = styled("p")`
  font-family: ${fonts.outfit.ExtraLight};
  font-size: 16px;
  line-height: 1.8;
  color: ${colors.neutrals.N20};
  max-width: 800px;
  margin: 0 auto ${spacing.lg} auto;
  text-align: center;

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
      content: "";
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

    &:focus-visible {
      outline: 2px solid ${colors.primary.gold};
      outline-offset: 2px;
      border-radius: 2px;
    }
  }

  ${mq[1]} {
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: ${spacing.md};
  }
`;

export const ExternalLink = styled("a")`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  color: ${colors.primary.gold};
  font-family: ${fonts.outfit.Medium};
  font-size: 15px;
  text-decoration: none;
  padding: ${spacing.sm} ${spacing.lg};
  border: 1px solid ${colors.primary.gold}40;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${colors.primary.gold}08;
  backdrop-filter: blur(10px);
  margin: 0 auto ${spacing.xxl} auto;

  &:hover {
    background: ${colors.primary.gold}15;
    border-color: ${colors.primary.gold};
    transform: translateY(-2px);
    box-shadow:
      0 8px 25px ${colors.primary.gold}20,
      0 0 15px ${colors.primary.gold}10;
  }

  &::after {
    content: "↗";
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translate(2px, -2px);
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary.gold};
    outline-offset: 3px;
  }

  ${mq[0]} {
    font-size: 14px;
    padding: ${spacing.sm} ${spacing.md};
    margin-bottom: ${spacing.xl};
  }
`;

export const LinkWrapper = styled("div")`
  text-align: center;
`;

// Asymmetric Masonry Gallery
export const GalleryGrid = styled("div")`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${spacing.md};
  width: 100%;
  min-height: 600px;

  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    min-height: auto;
  }

  ${mq[1]} {
    grid-template-columns: 1fr;
    gap: ${spacing.sm};
  }
`;

export const GalleryItem = styled("div")<{
  $row?: string;
  $col?: string;
}>`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${colors.primary.gold}10;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  ${({ $row }) => $row && `grid-row: ${$row};`}
  ${({ $col }) => $col && `grid-column: ${$col};`}

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.primary.gold}30;
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.5),
      0 0 20px ${colors.primary.gold}15,
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.03);
  }

  /* Gradient overlay at bottom for text readability */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0.9;
  }

  ${mq[2]} {
    border-radius: 12px;

    img {
      aspect-ratio: 4/3;
    }
  }

  ${mq[1]} {
    border-radius: 10px;

    img {
      aspect-ratio: 16/9;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

// Featured (hero) image - spans 2 rows
export const FeaturedImage = styled(GalleryItem)`
  grid-row: 1 / 3;

  ${mq[2]} {
    grid-row: auto;
    grid-column: 1 / 3;

    img {
      aspect-ratio: 21/9;
    }
  }

  ${mq[1]} {
    grid-column: auto;
    img {
      aspect-ratio: 4/3;
    }
  }
`;

export const ImageCaption = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacing.lg};
  z-index: 2;
  color: ${colors.neutrals.N10};

  h4 {
    font-family: ${fonts.outfit.Medium};
    font-size: 14px;
    color: ${colors.primary.gold};
    margin: 0 0 4px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  p {
    font-family: ${fonts.outfit.ExtraLight};
    font-size: 12px;
    margin: 0;
    opacity: 0.8;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  }

  ${mq[0]} {
    padding: ${spacing.md};

    h4 {
      font-size: 13px;
    }

    p {
      font-size: 11px;
    }
  }
`;

// Lightbox for full-screen image view
export const LightboxOverlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 20000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const LightboxImage = styled("img")`
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px ${colors.primary.gold}10;
  border: 1px solid ${colors.primary.gold}15;
  animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const LightboxClose = styled("button")`
  position: absolute;
  top: ${spacing.lg};
  right: ${spacing.lg};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid ${colors.primary.gold}20;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.neutrals.N10};
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20001;

  &:hover {
    background: ${colors.primary.gold}20;
    border-color: ${colors.primary.gold};
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary.gold};
    outline-offset: 2px;
  }

  ${mq[0]} {
    top: ${spacing.md};
    right: ${spacing.md};
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

export const LightboxCounter = styled("div")`
  position: absolute;
  bottom: ${spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.neutrals.N40};
  font-family: ${fonts.outfit.Medium};
  font-size: 14px;
  padding: ${spacing.sm} ${spacing.lg};
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid ${colors.primary.gold}15;

  ${mq[0]} {
    bottom: ${spacing.md};
    font-size: 12px;
    padding: ${spacing.xs} ${spacing.md};
  }
`;

export const LightboxNav = styled("button")<{ $direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  ${({ $direction }) =>
    $direction === "prev" ? "left: 24px;" : "right: 24px;"}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid ${colors.primary.gold}15;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.neutrals.N10};
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20001;

  &:hover {
    background: ${colors.primary.gold}15;
    border-color: ${colors.primary.gold}40;
    color: ${colors.primary.gold};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary.gold};
    outline-offset: 2px;
  }

  ${mq[0]} {
    width: 40px;
    height: 40px;
    font-size: 18px;
    ${({ $direction }) =>
      $direction === "prev" ? "left: 12px;" : "right: 12px;"}
  }
`;
