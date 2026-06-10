import React, { useState, useEffect, useCallback } from "react";
import { ResponsiveLazyImage } from "ui/components/ResponsiveLazyImage";
import {
  LightboxOverlay,
  LightboxImage,
  LightboxClose,
} from "ui/pages/LatoZRadiemSection/LatoZRadiemSection.style";
import {
  PosterWrapper,
  PosterContainer,
  SectionHeader,
  MainTitle,
  Subtitle,
  PosterFrame,
  CtaLink,
} from "./LatoZRadiem2026Section.style";

const POSTER_SRC = "/images/responsive/lato-z-radiem-2026-plakat_desktop.webp";
const POSTER_ALT =
  "Plakat zapraszający na Lato z Radiem 2026 z Lazy Swing Band";

export function LatoZRadiem2026Section() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => {
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox]);

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

        <PosterFrame
          onClick={openLightbox}
          role="button"
          tabIndex={0}
          aria-label="Powiększ plakat Lato z Radiem 2026"
          style={{ cursor: "pointer" }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openLightbox();
            }
          }}
        >
          <ResponsiveLazyImage
            src="/images/responsive/lato-z-radiem-2026-plakat.webp"
            alt={POSTER_ALT}
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

      {lightboxOpen && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxClose
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Zamknij podgląd plakatu"
          >
            ✕
          </LightboxClose>

          <LightboxImage
            src={POSTER_SRC}
            alt={POSTER_ALT}
            onClick={(e) => e.stopPropagation()}
          />
        </LightboxOverlay>
      )}
    </PosterWrapper>
  );
}
