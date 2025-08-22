import React, { useEffect, useState } from "react";
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
  const [textIndex, setTextIndex] = useState(0);

  const alternativeTexts = [
    "Swingowa muzyka do tańca",
    "Prawdziwy jazz", 
    "Muzyka z duszą i pasją",
    "Swing który porusza"
  ];

  // Removed isLoaded state as it was unused

  useEffect(() => {
    // Cycle through different main titles
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % alternativeTexts.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [alternativeTexts.length]);

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

            <MainTitle id="main-title" key={textIndex}>
              {alternativeTexts[textIndex]}
            </MainTitle>
            <SubHeader>i nie tylko</SubHeader>
          </HeaderWrapper>
        </ContentWrapper>
      </MainContainer>
    </section>
  );
}
