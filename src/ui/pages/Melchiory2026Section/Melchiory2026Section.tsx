import React, { useState, useCallback, useEffect } from "react";
import { ResponsiveLazyImage } from "ui/components/ResponsiveLazyImage";
import {
  MelchioryWrapper,
  ContentContainer,
  SectionHeader,
  MainTitle,
  Subtitle,
  DescriptionText,
  ExternalLink,
  LinkWrapper,
  GalleryGrid,
  GalleryItem,
  FeaturedImage,
  ImageCaption,
  LightboxOverlay,
  LightboxImage,
  LightboxClose,
  LightboxCounter,
  LightboxNav,
} from "./Melchiory2026Section.style";

interface GalleryImage {
  src: string;
  srcFull: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/responsive/melchiory-2026-1.webp",
    srcFull: "/images/responsive/melchiory-2026-1_desktop.webp",
    alt: "Lazy Swing Band podczas gali Melchiory 2026 - zdjęcie główne",
    caption: "Lazy Swing Band na gali Melchiory 2026",
  },
  {
    src: "/images/responsive/melchiory-2026-2.webp",
    srcFull: "/images/responsive/melchiory-2026-2_desktop.webp",
    alt: "Zespół Lazy Swing Band na Melchiory 2026 - zdjęcie 2",
    caption: "Sylwia Buchalska-Augustyn - Wokal",
  },
  {
    src: "/images/responsive/melchiory-2026-3.webp",
    srcFull: "/images/responsive/melchiory-2026-3_desktop.webp",
    alt: "Koncert Lazy Swing Band podczas Melchiory 2026 - zdjęcie 3",
    caption: "Wieczór pełen jazzowych brzmień",
  },
  {
    src: "/images/responsive/melchiory-2026-4.webp",
    srcFull: "/images/responsive/melchiory-2026-4_desktop.webp",
    alt: "Lazy Swing Band na Melchiory 2026 - zdjęcie 4",
    caption: "Sekcja dęta: Wojciech Rejdych - Saksofon, Dominik Borek - Trąbka",
  },
  {
    src: "/images/responsive/melchiory-2026-5.webp",
    srcFull: "/images/responsive/melchiory-2026-5_desktop.webp",
    alt: "Występ Lazy Swing Bandu na Melchiory 2026 - zdjęcie 5",
    caption: "Jazzowy klimat na gali dziennikarskiej",
  },
];

export function Melchiory2026Section() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const navigateLightbox = useCallback((direction: "prev" | "next") => {
    setLightboxIndex((prev) => {
      if (direction === "prev") {
        return (prev - 1 + galleryImages.length) % galleryImages.length;
      }
      return (prev + 1) % galleryImages.length;
    });
  }, []);

  // Keyboard controls for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateLightbox("prev");
          break;
        case "ArrowRight":
          navigateLightbox("next");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, navigateLightbox]);

  return (
    <MelchioryWrapper id="melchiory-2026" aria-labelledby="melchiory-heading">
      <ContentContainer>
        <SectionHeader>
          <MainTitle id="melchiory-heading">Melchiory 2026</MainTitle>
          <Subtitle>
            Mieliśmy okazję uświetnić muzycznie galę Melchiory 2026 — Nagrody
            Dziennikarskie Polskiego Radia
          </Subtitle>
          <DescriptionText>
            <strong>Lazy Swing Band</strong> miał zaszczyt wystąpić podczas
            uroczystej gali{" "}
            <strong>
              <a
                href="https://polskieradio24.pl/artykul/3685499,melchiory-2026-znamy-nazwiska-wszystkich-zwyciezcow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Melchiory 2026
              </a>
            </strong>{" "}
            — prestiżowych nagród dziennikarskich przyznawanych przez Polskie
            Radio. Nasza muzyka wypełniła salę swingową energią, tworząc
            niezapomniany klimat tego wyjątkowego wieczoru. To było dla nas
            ogromne wyróżnienie móc towarzyszyć najwybitniejszym postaciom
            polskiego dziennikarstwa w tak ważnym dla branży momencie.
          </DescriptionText>
          <LinkWrapper>
            <ExternalLink
              href="https://melchiory.polskieradio.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odwiedź oficjalną stronę Melchiory 2026 - Nagrody Dziennikarskie Polskiego Radia"
            >
              melchiory.polskieradio.pl
            </ExternalLink>
          </LinkWrapper>
        </SectionHeader>

        <GalleryGrid>
          {/* Featured image - spans full height on desktop */}
          <FeaturedImage
            onClick={() => openLightbox(0)}
            role="button"
            tabIndex={0}
            aria-label="Powiększ zdjęcie główne z Melchiory 2026"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(0);
              }
            }}
          >
            <ResponsiveLazyImage
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              loading="lazy"
              useResponsive={true}
            />
            <ImageCaption>
              <h4>{galleryImages[0].caption}</h4>
              <p>Gala Melchiory 2026</p>
            </ImageCaption>
          </FeaturedImage>

          {/* Side grid items */}
          {galleryImages.slice(1).map((image, index) => {
            const actualIndex = index + 1;
            return (
              <GalleryItem
                key={actualIndex}
                onClick={() => openLightbox(actualIndex)}
                role="button"
                tabIndex={0}
                aria-label={`Powiększ zdjęcie ${actualIndex + 1} z Melchiory 2026`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(actualIndex);
                  }
                }}
              >
                <ResponsiveLazyImage
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  useResponsive={true}
                />
                <ImageCaption>
                  <h4>{image.caption}</h4>
                  <p>Gala Melchiory 2026</p>
                </ImageCaption>
              </GalleryItem>
            );
          })}
        </GalleryGrid>
      </ContentContainer>

      {/* Lightbox */}
      {lightboxOpen && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxClose
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Zamknij podgląd zdjęcia"
          >
            ✕
          </LightboxClose>

          <LightboxNav
            $direction="prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            aria-label="Poprzednie zdjęcie"
          >
            ‹
          </LightboxNav>

          <LightboxImage
            src={galleryImages[lightboxIndex].srcFull}
            alt={galleryImages[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <LightboxNav
            $direction="next"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            aria-label="Następne zdjęcie"
          >
            ›
          </LightboxNav>

          <LightboxCounter>
            {lightboxIndex + 1} / {galleryImages.length}
          </LightboxCounter>
        </LightboxOverlay>
      )}
    </MelchioryWrapper>
  );
}
