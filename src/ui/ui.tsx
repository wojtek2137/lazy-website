import styled from "@emotion/styled";
import React, { useState } from "react";
import { MainView } from "./pages/MainView/MainView";
import About from "assets/images/about.webp";
import About2 from "assets/images/about_2.webp";
import About3 from "assets/images/about_3.webp";
import { ListenUsView } from "ui/pages/ListenUsView/ListenUsView";
import { colors, fonts } from "config/theme";
import { YouTubeView } from "ui/pages/YouTubeView/YouTubeView";
import { SquadSection } from "ui/pages/SquadSection/SquadSection";
import { LatoZRadiemSection } from "ui/pages/LatoZRadiemSection/LatoZRadiemSection";

import { ModernNavigation2024 } from "ui/components/ModernNavigation2024";
import { QuickActions2024 } from "ui/components/QuickActions2024";

import { ContactSection } from "ui/pages/ContactSection/ContactSection";
import {
  ModernSectionWrapper,
  ModernContentContainer,
  ModernTextWrapper,
  ModernHeading,
  ModernText,
  ModernSpan,
  ModernList,
} from "ui/components/SharedStyles";
import { SectionTransition } from "ui/components/ScrollTransitions";
interface SectionWrapperPropsType {
  imageUrl: string;
}
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

// Highlighted text component for emphasis
export const SpanStyle = styled("span")`
  font-family: ${fonts.outfit.Medium};
  font-size: 20px;
  color: ${colors.primary.gold};
  font-weight: 700;
  text-shadow: 0 0 10px ${colors.primary.gold}30;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.primary.gold},
      transparent
    );
    opacity: 0.6;
  }
`;
export const SectionWrapper = styled("section")<SectionWrapperPropsType>`
  display: flex;
  align-items: end;
  justify-content: end;
  height: 100vh;
  width: 100%;
  background: ${({ imageUrl }): string => `url('${imageUrl}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  ${mq[1]} {
    background-attachment: scroll;
    background-position: center;
  }
`;

export const TextWrapper = styled("div")`
  display: flex;
  align-items: center;
  background-color: #0000009e;
  border-radius: 1.5em;
  width: 100%;
  max-height: 100vh;
  margin: 5% 15% 10%;
  padding: 10px;
  ${mq[1]} {
    margin: 0px 15px 60px;
  }
`;

export const TextMedium = styled("p")`
  color: ${colors.neutrals.N10};
  font-family: ${fonts.outfit.Light};
  font-size: 1.2em;
  line-height: 2em;
  width: 100%;
  letter-spacing: 1.5px;
  text-align: center;
  ${mq[1]} {
    text-align: initial;
    padding: 10px;
    font-size: 1em;
  }
`;
export const ListWrapper = styled("ul")`
  text-align: initial;
`;
export const ChristmasSection = styled("section")`
  background-color: ${colors.primary.black};
  height: 50vh;
  margin: auto;
  display: flex;
  align-items: center;
  ${mq[1]} {
    height: 80vh;
  }
`;

// Responsive YouTube video wrapper
export const ResponsiveVideoWrapper = styled("div")`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 40px auto 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 16px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px ${colors.primary.gold}20;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.5),
      0 0 0 2px ${colors.primary.gold}40,
      0 0 30px ${colors.primary.gold}30;
  }

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      ${colors.primary.gold}40,
      transparent,
      ${colors.primary.sandy}30,
      transparent,
      ${colors.primary.gold}40
    );
    border-radius: 18px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 32px auto 0;
    border-radius: 12px;

    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }

  @media (max-width: 480px) {
    margin: 24px auto 0;
    border-radius: 8px;
  }
`;

export const ResponsiveIframe = styled("iframe")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: inherit;
`;

// Enhanced Christmas content layout
export const ChristmasContentGrid = styled("div")`
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr;
  align-items: start;
  width: 100%;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
`;

export const ChristmasTextSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 992px) {
    gap: 32px;
  }
`;

export const ChristmasVideoSection = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 992px) {
    order: -1; /* Video first on desktop */
  }
`;

export const VideoLabel = styled("div")`
  color: ${colors.primary.gold};
  font-family: ${fonts.outfit.Medium};
  font-size: 16px;
  text-align: center;
  opacity: 0.9;
  letter-spacing: 0.5px;

  &::before,
  &::after {
    content: "♪";
    margin: 0 8px;
    animation: musicPulse 3s ease-in-out infinite;
  }

  &::after {
    animation-delay: 1.5s;
  }

  @keyframes musicPulse {
    0%,
    100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;

    &::before,
    &::after {
      margin: 0 4px;
    }
  }
`;

// Footer Components
export const Footer = styled("footer")`
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-top: 1px solid ${colors.primary.gold}08;
  padding: 20px 0;
  margin-top: 60px;
  position: relative;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${colors.primary.gold}20 50%,
      transparent 100%
    );
  }
`;

export const FooterContent = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

export const FooterText = styled("p")`
  color: ${colors.neutrals.N60};
  font-family: ${fonts.outfit.ExtraLight};
  font-size: 12px;
  margin: 0;
  opacity: 0.7;
  letter-spacing: 1px;
  text-transform: uppercase;

  &::before {
    content: "♪";
    margin-right: 6px;
    color: ${colors.primary.gold};
    opacity: 0.3;
    font-size: 10px;
  }

  &::after {
    content: "♪";
    margin-left: 6px;
    color: ${colors.primary.gold};
    opacity: 0.3;
    font-size: 10px;
  }
`;

export function Ui() {
  const [quickActionsVisible, setQuickActionsVisible] = useState(false);

  const toggleQuickActions = () => {
    setQuickActionsVisible((prev) => !prev);
  };

  return (
    <>
      {/* Modern 2024 Navigation System */}
      <ModernNavigation2024 onQuickActionsToggle={toggleQuickActions} />
      <QuickActions2024
        isVisible={quickActionsVisible}
        onClose={() => setQuickActionsVisible(false)}
      />

      <main id="main-content">
        <MainView />

        <SectionTransition />

        <section id="o-nas" aria-labelledby="about-heading">
          <ModernSectionWrapper backgroundImage={About} parallaxEffect>
            <ModernContentContainer glassmorphism enhanced>
              <ModernTextWrapper centerAlign enhanced>
                <header>
                  <ModernHeading
                    id="about-heading"
                    size="medium"
                    color="gold"
                    enhanced
                  >
                    O Zespole
                  </ModernHeading>
                </header>
                <ModernText size="large" emphasis enhanced>
                  Jesteśmy{" "}
                  <ModernSpan variant="highlight" enhanced>
                    młodą i dynamiczną grupą
                  </ModernSpan>
                  , która kocha muzykę i kulturę swingową. Nasz zespół powstał w
                  Krakowie, gdzie w 2016 roku zaczęliśmy naszą przygodę od
                  małych swingowych potańcówek w{" "}
                  <ModernSpan variant="glow" enhanced>
                    Piwnicy pod Baranami.
                  </ModernSpan>
                </ModernText>
                <ModernText size="medium" enhanced>
                  Od tamtej pory przeszliśmy długą drogę, stając się jednym z
                  najbardziej rozpoznawalnych zespołów swingowych w Polsce.
                  Wystąpiliśmy na{" "}
                  <ModernSpan variant="accent" enhanced>
                    <a
                      href="https://podcasty.polskieradio.pl/jedynka/audycje/lato-z-radiem-,166/odcinek/potancowka-lata-z-radiem-przy-dzwiekach-grupy-lazy-swing-band-maciej-walecki-sprawdza-jak-bawili-sie-uczestnicy-,54eb4a7e-6a45-4f5a-a3e1-540e3bc97f1b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dziewięciu przystankach trasy „Lato z Radiem i Telewizją
                      Polską"
                    </a>
                  </ModernSpan>
                  , a zespół został notowany w{" "}
                  <ModernSpan variant="highlight" enhanced>
                    <a
                      href="https://www.facebook.com/photo/?fbid=878329507633646&set=a.438180431648558"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      zestawieniu Jazz Forum w kategorii jazzu tradycyjnego
                    </a>
                  </ModernSpan>
                  . Nasza pasja do autentycznego brzmienia lat 20. i 30. XX
                  wieku harmonijnie łączy się z nowoczesną energią sceniczną.
                </ModernText>
              </ModernTextWrapper>
            </ModernContentContainer>
          </ModernSectionWrapper>
        </section>

        <SectionTransition />
        <LatoZRadiemSection />
        <SectionTransition />
        <ListenUsView />

        <SectionTransition />
        <section id="festiwale" aria-labelledby="festivals-heading">
          <ModernSectionWrapper
            backgroundImage={About3}
            parallaxEffect
            data-bg="about3"
          >
            <ModernContentContainer glassmorphism enhanced>
              <ModernTextWrapper centerAlign enhanced>
                <header>
                  <ModernHeading
                    id="festivals-heading"
                    size="medium"
                    color="gold"
                    enhanced
                  >
                    Występy na Festiwalach
                  </ModernHeading>
                </header>
                <ModernText size="large" emphasis enhanced>
                  Nasza pasja do muzyki swingowej prowadzi nas nie tylko po
                  całej Polsce, ale także{" "}
                  <ModernSpan variant="accent" enhanced>
                    poza jej granice
                  </ModernSpan>
                  .
                </ModernText>
                <ModernText size="medium" enhanced>
                  <ModernSpan variant="highlight" enhanced>
                    Zawitaliśmy między innymi na takie festiwale jak:
                  </ModernSpan>
                </ModernText>
                <ModernList variant="grid" enhanced>
                  <li>
                    <a
                      href="https://dragonswing.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dragon Swing Festival
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.transwingvania.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Transwingvania Lindy Exchange
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pl.wikipedia.org/wiki/Letni_Festiwal_Jazzowy_w_Piwnicy_pod_Baranami"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Letni Festiwal Jazzowy w Piwnicy pod Baranami
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://jazzforum.com.pl/main/news/xii-jazz-zdroj-festiwal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jazz Zdrój Festiwal
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://elegantspolek.cz/akce/retro-elegant-kravare/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Retro Elegant Kravaře
                    </a>
                  </li>
                </ModernList>
                <ModernText size="medium" enhanced>
                  i wiele innych...
                </ModernText>
              </ModernTextWrapper>
            </ModernContentContainer>
          </ModernSectionWrapper>
        </section>

        <SectionTransition />
        <YouTubeView />

        <SectionTransition />
        <section id="uslugi" aria-labelledby="services-heading">
          <ModernSectionWrapper
            backgroundImage={About2}
            parallaxEffect
            data-bg="about2"
          >
            <ModernContentContainer glassmorphism enhanced>
              <ModernTextWrapper centerAlign enhanced>
                <header>
                  <ModernHeading
                    id="services-heading"
                    size="medium"
                    color="gold"
                    enhanced
                  >
                    Nasza Oferta
                  </ModernHeading>
                </header>
                <ModernText size="large" enhanced>
                  Jeśli organizujecie Państwo{" "}
                  <ModernSpan variant="highlight" enhanced>
                    wszelakie wydarzenia kulturalne
                  </ModernSpan>
                  , a może poszukują{" "}
                  <ModernSpan variant="accent" enhanced>
                    klimatycznego zespołu
                  </ModernSpan>
                  , rodem z Ojca Chrzestnego...
                </ModernText>
                <ModernList variant="grid" enhanced>
                  <li>Festiwale jazzowe i retro-festiwale</li>
                  <li>Festiwale tańca swingowego</li>
                  <li>Targi i wydarzenia korporacyjne</li>
                  <li>Pikniki i wydarzenia plenerowe</li>
                  <li>Bankiety i uroczystości</li>
                  <li>Imprezy dla zróżnicowanej publiczności</li>
                  <li>Projekty filmowe i teatralne</li>
                </ModernList>
                <ModernText size="large" emphasis enhanced>
                  <ModernSpan variant="glow" enhanced>
                    - JESTEŚMY IDEALNYM WYBOREM!
                  </ModernSpan>
                </ModernText>
              </ModernTextWrapper>
            </ModernContentContainer>
          </ModernSectionWrapper>
        </section>

        <SectionTransition />

        <section id="swieta" aria-labelledby="christmas-heading">
          <ModernSectionWrapper darkTheme>
            <ModernContentContainer glassmorphism maxWidth="1200px">
              <ModernTextWrapper centerAlign>
                <header>
                  <ModernHeading
                    id="christmas-heading"
                    size="medium"
                    color="gold"
                  >
                    Lazy Christmas
                  </ModernHeading>
                </header>
                <ChristmasContentGrid>
                  <ChristmasTextSection>
                    <ModernText size="large" emphasis>
                      W okresie bożonarodzeniowym mamy także przygotowany
                      <ModernSpan variant="glow">
                        {" "}
                        wyjątkowy repertuar świąteczny
                      </ModernSpan>
                      !
                    </ModernText>
                    <ModernText size="medium">
                      <ModernSpan variant="highlight">
                        Lazy Christmas!
                      </ModernSpan>{" "}
                      - ze standardami amerykańskich, swingowych przebojów
                      bożonarodzeniowych w niepowtarzalnym klimacie lat 20. i
                      30., takich jak
                      <ModernSpan variant="glow">
                        {" "}
                        "Let It Snow!"
                      </ModernSpan>{" "}
                      czy inne klasyki{" "}
                      <ModernSpan variant="highlight">
                        Franka Sinatry
                      </ModernSpan>
                      .
                    </ModernText>
                    <ModernText size="large">
                      <ModernSpan variant="accent">
                        To doskonała oferta na wigilie firmowe i inne podobne
                        wydarzenia, w magicznym klimacie bożonarodzeniowym.
                      </ModernSpan>
                    </ModernText>
                  </ChristmasTextSection>

                  <ChristmasVideoSection>
                    <VideoLabel>
                      Posłuchaj naszych bożonarodzeniowych hitów
                    </VideoLabel>
                    <ResponsiveVideoWrapper>
                      <ResponsiveIframe
                        src="https://www.youtube.com/embed/CLA-kpH-3Cs?si=a3orL4ns7sib6R4W"
                        title="Lazy Swing Band - Christmas Songs"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                      />
                    </ResponsiveVideoWrapper>
                  </ChristmasVideoSection>
                </ChristmasContentGrid>
              </ModernTextWrapper>
            </ModernContentContainer>
          </ModernSectionWrapper>
        </section>

        <SectionTransition />
        <SquadSection />
        <SectionTransition />
        <ContactSection />

        {/* Footer */}
        <Footer>
          <FooterContent>
            <FooterText>
              © Copyright {new Date().getFullYear()} - Lazy Swing
            </FooterText>
          </FooterContent>
        </Footer>
      </main>
    </>
  );
}
