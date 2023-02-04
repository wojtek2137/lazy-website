import React from 'react';
import { ContentWrapper, ExtraSmallHeader, Header, HeaderWrapper, Logo, MainContainer, SubHeader, VideoWrapper } from './MainView.style';
import dragonVideo2022 from 'src/assets/video/dragon2022.mp4';

export function MainView() {
    return (
        <>
            <MainContainer>
                <VideoWrapper src={dragonVideo2022} autoPlay loop muted playsInline></VideoWrapper>
                <ContentWrapper>
                    <Logo />
                    <HeaderWrapper>
                        <SubHeader>originated from Krakow Poland</SubHeader>

                        <Header>associated with swing dancing </Header>
                        <SubHeader>and not only</SubHeader>

                        <ExtraSmallHeader>
                            Our website is under reconstruction see you soon...
                        </ExtraSmallHeader>
                    </HeaderWrapper>

                </ContentWrapper>
            </MainContainer>
        </>
    );
};
