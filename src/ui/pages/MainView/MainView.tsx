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
    "Świąteczny Jazz na Żywo 🎄",
    "Kolędy Swingowe 2025 🎅", 
    "Zespół na Wigilie Firmowe",
    "Muzyka z Duszą na Święta",
    "Sinatra & Bublé Style 🎵",
    "Swing który Porusza Serca ❄️"
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
            <SubHeader>🎄 Polski zespół jazzowy na sezon świąteczny 2025 🎷</SubHeader>

            <MainTitle id="main-title" key={textIndex}>
              {alternativeTexts[textIndex]}
            </MainTitle>
            <SubHeader>🎅 Wigilie firmowe • Sinatra & Bublé • Kraków • Małopolska • Cała Polska ❄️</SubHeader>
          </HeaderWrapper>
        </ContentWrapper>
      </MainContainer>
    </section>
  );
}
