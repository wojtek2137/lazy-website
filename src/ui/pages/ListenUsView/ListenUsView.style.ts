import styled from '@emotion/styled';
import { colors, fonts } from 'config/theme';

export const ListenUsSection = styled('section')`
    background-color: ${colors.primary.gold};
    background-image: linear-gradient(0deg, ${colors.primary.black} 0%, ${colors.primary.gold} 94%);
    background-attachment: fixed;
    padding: 30px;
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
  gap: 30px;
  flex-wrap: wrap;
  
  ${mq[2]} {
    gap: 20px;
  }
  
  ${mq[1]} {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

// export const ListenAlbumsWrapper = styled('div')`
//     display:flex;
//     justify-content: center;
//     align-items: flex-end;
//     width: 100%;
// `;

export const ListenUsHeader = styled('div')`
    font-family: ${fonts.outfit.Light};
    text-align:center;
    font-size: 2em;
    letter-spacing: 3px;
    color: ${colors.primary.darkGrey};
    margin: 0 auto 30px;
`;
