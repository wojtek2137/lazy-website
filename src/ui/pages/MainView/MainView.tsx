import React from 'react';
import { ContentWrapper, Header, HeaderWrapper, Logo, MainContainer, SubHeader, VideoWrapper } from './MainView.style';
import dragonVideo2022 from 'src/assets/video/dragon2022.mp4';

// export const MuteButton = styled('a')`
//    color: ${colors.primary.sandy};
//    cursor: pointer;
//    font-size: 20px;
//    margin: 20px;
//    text-align: center;
//    text-transform: uppercase;
//    &:hover{
//    color: ${colors.primary.white};

//    }
// `;

export function MainView() {
    // const [isMuted, setIsMuted] = useState<boolean>(true);

    return (
        <>
            <MainContainer>
                <VideoWrapper src={dragonVideo2022} autoPlay loop muted={true} playsInline></VideoWrapper>
                <ContentWrapper>
                    <Logo />
                    <HeaderWrapper>
                        <SubHeader>originated from Krakow Poland</SubHeader>

                        <Header>associated with swing dancing </Header>
                        <SubHeader>and not only</SubHeader>

                        {/* <ExtraSmallHeader>
                            Our website is under reconstruction see you soon...
                        </ExtraSmallHeader> */}

                    </HeaderWrapper>

                </ContentWrapper>
            </MainContainer>
        </>
    );
};
