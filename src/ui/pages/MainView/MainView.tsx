import React, { useEffect, useState } from "react";
import {
  ContentWrapper,
  HeaderWrapper,
  Logo,
  MainContainer,
  MainTitle,
  SubHeader,
  HeroImageWrapper,
} from "./MainView.style";
import { ResponsiveLazyImage } from "ui/components/ResponsiveLazyImage";

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
    // Cycle through different main titles - reduced frequency for performance
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % alternativeTexts.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [alternativeTexts.length]);

  return (
    <section id="glowna" aria-labelledby="main-title">
      <MainContainer>
        <HeroImageWrapper>
          <ResponsiveLazyImage
            src="/images/responsive/homepage-hero.webp"
            alt="Zespół Lazy Swing Band podczas występu - zdjęcie główne strony"
            loading="eager"
            useResponsive={true}
          />
        </HeroImageWrapper>
        <ContentWrapper>
          <Logo role="img" aria-label="Logo zespołu Lazy Swing Band" />
          <HeaderWrapper>
            <SubHeader>Profesjonalny zespół Jazzowy rodowodem z Krakowa</SubHeader>

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
