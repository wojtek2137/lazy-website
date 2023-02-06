import styled from '@emotion/styled';
import { colors, fonts } from 'src/config/theme';
import LogoImage from 'src/assets/images/logo-color.png';

export const Logo = styled('img')`
    margin: 0 auto 50px;
    display:flex;
    min-width: 500px;
    min-height: 500px;
    /* background: url('${LogoImage}');
    background-repeat: no-repeat;
    background-size: cover; */
    @media  (max-width: 420px){
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

    @media  (max-width: 420px){
        font-size: 60px;
    }
`;
export const HeaderWrapper = styled('div')`
    display:flex;
    flex-direction: column;
    text-align: center;
    /* margin-top: 5%; */
  `;
export const Header = styled('span')`
    /* font-size: 3em; */
    margin-top: 10px;
    text-transform: uppercase;
    font-family: ${fonts.poppins.ExtraBold};
    letter-spacing: 3px;
    font-size: 2.8em;
    color: ${colors.primary.sandy};
    @media  (max-width: 420px){
        font-size: 30px;
    }
`;
export const SubHeader = styled('span')`
    letter-spacing: 5px;
    font-size: 24px;
    font-family: ${fonts.ropaSans.Regular};
    color: ${colors.primary.white};
    @media  (max-width: 420px){
        font-size: 20px;
    }
`;
export const ExtraSmallHeader = styled('span')`
    /* margin-top: 10px; */
    font-size: 16px;
    text-transform: none;
    font-family: ${fonts.poppins.Medium};
`;

export const VideoWrapper = styled('video')`

    width: 100%;
    height: 100%;
    object-fit: cover;
`;
