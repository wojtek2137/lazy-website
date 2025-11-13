import styled from "@emotion/styled";
import { colors, fonts } from "config/theme";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const SquadSection = styled("section")`
  display: flex;
  flex-wrap: wrap;
  background: ${colors.primary.black};
  min-height: 100vh;
  margin-top: 0;
  padding-top: 0;
`;

export const ImageBox = styled("div")`
  flex: 1 1 calc(33.333%);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;

  /* Tablet: 2 per row */
  ${mq[2]} {
    flex: 1 1 50%;
  }

  /* Mobile: 1 per row */
  ${mq[1]} {
    flex: 1 1 100%;
  }
`;

export const ImageWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;

  ${mq[2]} {
    height: 50vh;
  }

  ${mq[1]} {
    height: 40vh;
  }
`;

export const SquadHeader = styled("div")`
  background: ${colors.primary.black};
  padding: 20px 15px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SquadName = styled("h3")`
  font-size: 18px;
  font-family: ${fonts.outfit.Medium};
  color: ${colors.primary.white};
  margin: 0 0 5px 0;

  ${mq[1]} {
    font-size: 16px;
  }
`;

export const SquadInstrument = styled("p")`
  font-size: 14px;
  font-family: ${fonts.outfit.Medium};
  color: #ccb379;
  margin: 0;

  ${mq[1]} {
    font-size: 12px;
  }
`;

export const SquadHeaderMain = styled("h2")`
  font-family: ${fonts.outfit.Medium};
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ccb379;
  width: 100%;
  text-align: center;
  margin: 40px 0 0 0;
  padding: 25px 40px;
  position: relative;
  background-size:
    100% 1px,
    100% 100%;
  background-position:
    center top,
    center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ccb379, transparent);
    box-shadow: 0 0 10px #ccb379;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ccb379, transparent);
  }

  /* Art Deco geometric patterns */
  & > span::before,
  & > span::after {
    content: "◆";
    color: #ccb379;
    font-size: 16px;
    margin: 0 15px;
    opacity: 0.8;
    animation: artDecoGlow 4s ease-in-out infinite alternate;
  }

  @keyframes artDecoGlow {
    0% {
      opacity: 0.6;
      text-shadow: 0 0 5px #ccb379;
    }
    100% {
      opacity: 1;
      text-shadow:
        0 0 15px #ccb379,
        0 0 25px #ccb379;
    }
  }

  ${mq[2]} {
    font-size: 28px;
    letter-spacing: 2px;
    padding: 20px 30px;
    margin: 30px 0 0 0;
  }

  ${mq[1]} {
    font-size: 22px;
    letter-spacing: 1px;
    padding: 18px 20px;
    margin: 25px 0 0 0;

    & > span::before,
    & > span::after {
      margin: 0 8px;
      font-size: 14px;
    }
  }
`;

export const SquadResponsiveImage = styled("div")`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;
