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
            <SubHeader>Polski zespół jazzowy rodowodem z Krakowa</SubHeader>

            <MainTitle id="main-title">Swingowa Muzyka na Żywo</MainTitle>
            <SubHeader>
              Koncerty • Festiwale • Potańcówki z Polskim Radiem • Imprezy
              firmowe • Bankiety • Eventy VIP • Kraków • Małopolska • Cała
              Polska
            </SubHeader>

            <CTAButton href="#kontakt" aria-label="Skontaktuj się z nami">
              Skontaktuj się z nami
            </CTAButton>
          </HeaderWrapper>
        </ContentWrapper>
      </MainContainer>
    </section>
  );
}
