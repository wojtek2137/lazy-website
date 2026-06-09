import React from "react";
import { ResponsiveLazyImage } from "ui/components/ResponsiveLazyImage";
import {
  PosterWrapper,
  PosterContainer,
  SectionHeader,
  MainTitle,
  Subtitle,
  PosterFrame,
  CtaLink,
} from "./LatoZRadiem2026Section.style";

export function LatoZRadiem2026Section() {
  return (
    <PosterWrapper
      id="lato-z-radiem-2026"
      aria-labelledby="lato-z-radiem-2026-heading"
    >
      <PosterContainer>
        <SectionHeader>
          <MainTitle id="lato-z-radiem-2026-heading">
            Zapraszamy na Lato z Radiem 2026
          </MainTitle>
          <Subtitle>
            Z ogromną radością ogłaszamy, że Lazy Swing Band ponownie dołącza do
            trasy „Lata z Radiem i Telewizją Polską"! Przygotujcie się na
            niezapomniane, swingowe potańcówki w najpiękniejszych zakątkach
            Polski. Do zobaczenia na trasie!
          </Subtitle>
        </SectionHeader>

        <PosterFrame>
          <ResponsiveLazyImage
            src="/images/responsive/lato-z-radiem-2026-plakat.webp"
            alt="Plakat zapraszający na Lato z Radiem 2026 z Lazy Swing Band"
            loading="lazy"
            useResponsive={true}
          />
        </PosterFrame>

        <CtaLink
          href="https://www.latozradiem.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sprawdź trasę Lata z Radiem 2026
        </CtaLink>
      </PosterContainer>
    </PosterWrapper>
  );
}
