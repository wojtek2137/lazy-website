import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from './config/theme';
import { GlobalWrapper } from './config/GlobalWrapper';
// import dragonVideo2019 from 'src/assets/video/dragon2019.mp4';
import dragonVideo2022 from 'src/assets/video/dragon2022.mp4';
export const MainContainer = styled('div')`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
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
    font-family: ${fonts.ropaSans};
    font-size: 130px;
    text-transform: uppercase;
`;
export const SubHeader = styled('span')`
    font-size: 50px;
    margin-top: 10px;
`;
export const SubSubHeader = styled('span')`
    margin-top: 20px;
    font-size: 35px;
    text-transform: capitalize;
    font-family: ${fonts.poppins.Medium};
`;
export const ExtraSmallHeader = styled('span')`
    margin-top: 20px;
    font-size: 15px;
    text-transform: none;
    font-family: ${fonts.poppins.Medium};
`;

export const VideoWrapper = styled('video')`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function App() {
    return (
        <>
            <GlobalWrapper />
            <MainContainer>

                {/* <VideoWrapper src={dragonVideo2019} autoPlay loop muted></VideoWrapper>
                <ContentWrapper>
                    dupa
                </ContentWrapper> */}
                <VideoWrapper src={dragonVideo2022} autoPlay loop muted ></VideoWrapper>
                <ContentWrapper>

                    Lazy Swing Band
                    <SubSubHeader>originated from Krakow Poland</SubSubHeader>

                    <SubHeader>associated with swing dancing</SubHeader>
                    <ExtraSmallHeader>
                        Our website is under reconstruction see you soon...
                    </ExtraSmallHeader>
                </ContentWrapper>

            </MainContainer>
        </>
    );
}

export default App;
