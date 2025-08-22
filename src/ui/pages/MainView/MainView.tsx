import React from "react";
import {
  ContentWrapper,
  HeaderWrapper,
  Logo,
  MainContainer,
  MainTitle,
  SubHeader,
  VideoWrapper,
} from "./MainView.style";
import dragonVideo2022 from "assets/video/dragon2022.mp4";

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
    <section id="glowna" aria-labelledby="main-title">
      <MainContainer>
        <VideoWrapper
          src={dragonVideo2022}
          autoPlay
          loop
          muted={true}
          playsInline
          aria-label="Wideo z występu zespołu Lazy Swing Band na Dragon Swing Festival 2022"
          poster="/logo-color.png"
        ></VideoWrapper>
        <ContentWrapper>
          <Logo role="img" aria-label="Logo zespołu Lazy Swing Band" />
          <HeaderWrapper>
            <SubHeader>zespół zawodowych muzyków jazzowych z Krakowa</SubHeader>

            <MainTitle id="main-title">
              Swingowa muzyka do tańca
            </MainTitle>
            <SubHeader>i nie tylko</SubHeader>
          </HeaderWrapper>
        </ContentWrapper>
      </MainContainer>
    </section>
  );
}
