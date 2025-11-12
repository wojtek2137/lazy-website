import styled from "@emotion/styled";
import { colors, fonts, spacing, typography, shadows } from "config/theme";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const ContactHeader = styled('h2')`
  font-family: ${fonts.outfit.SemiBold};
  font-size: ${typography.h3.size};
  font-weight: ${typography.h3.weight};
  line-height: ${typography.h3.lineHeight};
  color: ${colors.primary.gold};
  margin: 0 0 ${spacing.xxl} 0;
  letter-spacing: ${typography.h3.letterSpacing};
  text-transform: uppercase;
  text-align: center;
  position: relative;
  display: inline-block;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
    box-shadow: ${shadows.glow};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
  }
  
  ${mq[2]} {
    font-size: ${typography.h4.size};
  }
  
  ${mq[1]} {
    font-size: ${typography.h5.size};
    margin-bottom: ${spacing.xl};
  }
`;

export const ContactHeaderCenter = styled(ContactHeader)`
  color: ${colors.primary.white};
  margin-bottom: ${spacing.xxl};
  
  &::before {
    width: 100px;
  }
  
  &::after {
    width: 150px;
  }
`;