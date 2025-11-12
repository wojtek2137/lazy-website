import React from "react";
import {
  ContentWrapper,
  HeaderWrapper,
  Logo,
  MainContainer,
  MainTitle,
  SubHeader,
  HeroImageWrapper,
  CTAButton,
} from "./MainView.style";
import { ResponsiveLazyImage } from "ui/components/ResponsiveLazyImage";

export function MainView() {
  // Removed rotating text animation for better UX - single, clear message is more effective
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
            <SubHeader>Polski zespół jazzowy na sezon świąteczny 2025</SubHeader>

            <MainTitle id="main-title">
              Świąteczny Jazz na Żywo
            </MainTitle>
            <SubHeader>Wigilie firmowe • Sinatra & Bublé • Kraków • Małopolska • Cała Polska</SubHeader>
            
            <CTAButton href="/wigilie-firmowe/" aria-label="Dowiedz się więcej o wigiliach firmowych">
              Sprawdź naszą ofertę świąteczną
            </CTAButton>
          </HeaderWrapper>
        </ContentWrapper>
      </MainContainer>
    </section>
  );
}
