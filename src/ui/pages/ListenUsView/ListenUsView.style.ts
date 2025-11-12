import styled from '@emotion/styled';
import { colors, fonts, spacing, typography } from 'config/theme';

export const ListenUsSection = styled('section')`
    background-color: ${colors.primary.gold};
    background-image: linear-gradient(0deg, ${colors.primary.black} 0%, ${colors.primary.gold} 94%);
    background-attachment: fixed;
    padding: ${spacing.xxxl};
    
    @media (max-width: 768px) {
        padding: ${spacing.xxl} ${spacing.lg};
    }
`;

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);

export const ListenAlbumsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: ${spacing.xl};
  flex-wrap: wrap;
  
  ${mq[2]} {
    gap: ${spacing.lg};
  }
  
  ${mq[1]} {
    flex-direction: column;
    align-items: center;
    gap: ${spacing.xxl};
  }
`;

export const ListenUsHeader = styled('div')`
    font-family: ${fonts.outfit.SemiBold};
    font-size: ${typography.h2.size};
    font-weight: ${typography.h2.weight};
    line-height: ${typography.h2.lineHeight};
    letter-spacing: ${typography.h2.letterSpacing};
    text-align: center;
    color: ${colors.primary.black};
    margin: 0 auto ${spacing.xl};
    text-transform: uppercase;
    
    ${mq[1]} {
        font-size: ${typography.h3.size};
    }
`;
