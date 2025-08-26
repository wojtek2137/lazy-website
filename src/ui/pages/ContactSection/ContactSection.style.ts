import styled from "@emotion/styled";
import { colors, fonts } from "config/theme";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const ContactHeader = styled('h2')`
  font-family: ${fonts.outfit.Medium};
  font-size: 36px;
  font-weight: 700;
  color: ${colors.primary.gold};
  margin: 0 0 40px 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  display: inline-block;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
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
    width: 120px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
  }
  
  ${mq[2]} {
    font-size: 28px;
    letter-spacing: 2px;
  }
  
  ${mq[1]} {
    font-size: 24px;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }
`;

export const ContactHeaderCenter = styled(ContactHeader)`
  color: ${colors.primary.white};
  margin-bottom: 50px;
  
  &::before {
    width: 100px;
  }
  
  &::after {
    width: 150px;
  }
`;