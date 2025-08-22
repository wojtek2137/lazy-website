import styled from "@emotion/styled";
import React, { useState } from "react";
import { MainView } from "./pages/MainView/MainView";
import About from "assets/images/about.jpg";
import About2 from "assets/images/about2.jpg";
import About3 from "assets/images/about3.jpg";
import { ListenUsView } from "ui/pages/ListenUsView/ListenUsView";
import { colors, fonts } from "config/theme";
import { YouTubeView } from "ui/pages/YouTubeView/YouTubeView";
import { SquadSection } from "ui/pages/SquadSection/SquadSection";
import { LatoZRadiemSection } from "ui/pages/LatoZRadiemSection/LatoZRadiemSection";
import { Navigation } from "ui/components/Navigation";
import { ModernNavigation2024 } from "ui/components/ModernNavigation2024";
import { QuickActions2024 } from "ui/components/QuickActions2024";
import { MicroInteractions2024 } from "ui/components/MicroInteractions2024";
import { ContactSection } from "ui/pages/ContactSection/ContactSection";
import { 
  ModernSectionWrapper, 
  ModernContentContainer, 
  ModernTextWrapper,
  ModernHeading,
  ModernText,
  ModernSpan,
  ModernList
} from "ui/components/SharedStyles";
import { 
  SectionTransition, 
  FloatingParticles,
  CSSParticleSystem 
} from "ui/components/ScrollTransitions";
interface SectionWrapperPropsType {
  imageUrl: string;
}
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

// Highlighted text component for emphasis
export const SpanStyle = styled("span")`
  font-family: ${fonts.mulish.Bold};
  font-size: 20px;
  color: ${colors.primary.gold};
  font-weight: 700;
  text-shadow: 0 0 10px ${colors.primary.gold}30;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
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
  font-family: ${fonts.mulish.Regular};
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



export function Ui() {
  const [quickActionsVisible, setQuickActionsVisible] = useState(false);

  return (
    <>
      <FloatingParticles />
      <MicroInteractions2024 />
      
      {/* Legacy Navigation - Hidden for now */}
      <div style={{ display: 'none' }}>
        <Navigation />
      </div>
      
      {/* Modern 2024 Navigation System */}
      <ModernNavigation2024 
        onQuickActionsToggle={setQuickActionsVisible}
      />
      <QuickActions2024 
        isVisible={quickActionsVisible} 
        onClose={() => setQuickActionsVisible(false)} 
      />
      
      <main id="main-content">
        <MainView />
        
        <SectionTransition />
        
        <section id="o-nas" aria-labelledby="about-heading">
          <ModernSectionWrapper backgroundImage={About} parallaxEffect>
            <CSSParticleSystem />
            <ModernContentContainer glassmorphism enhanced>
              <ModernTextWrapper centerAlign enhanced>
                <header>
                  <ModernHeading id="about-heading" size="medium" color="gold" enhanced>
                    O zespole Lazy Swing Band
                  </ModernHeading>
                </header>
                <ModernText size="large" emphasis enhanced>
                  Jesteśmy <ModernSpan variant="highlight" enhanced>młodą i dynamiczną grupą</ModernSpan>, która kocha muzykę i kulturę
                  swingową. Nasz zespół powstał w Krakowie, gdzie w 2016 roku
                  zaczęliśmy naszą przygodę od małych swingowych potańcówek w{" "}
                  <ModernSpan variant="glow" enhanced>Piwnicy pod Baranami.</ModernSpan>
                </ModernText>
                <ModernText size="medium" enhanced>
                  Od tamtej pory przeszliśmy długą drogę, stając się jednym z najbardziej 
                  rozpoznawalnych zespołów swingowych w Polsce. Nasza pasja do autentycznego 
                  brzmienia lat 20. i 30. XX wieku łączy się z nowoczesną energią sceny.
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
          <ModernSectionWrapper backgroundImage={About2} parallaxEffect>
            <CSSParticleSystem />
            <ModernContentContainer glassmorphism enhanced>
              <ModernTextWrapper centerAlign enhanced>
                <header>
                  <ModernHeading id="festivals-heading" size="medium" color="gold" enhanced>
                    Nasze występy na festiwalach
                  </ModernHeading>
                </header>
                <ModernText size="large" emphasis enhanced>
                  Nasza pasja do muzyki swingowej prowadzi nas nie tylko po całej
                  Polsce, ale także <ModernSpan variant="accent" enhanced>poza jej granice</ModernSpan>.
                </ModernText>
                <ModernText size="medium" enhanced>
                  <ModernSpan variant="highlight" enhanced>
                    Zawitaliśmy między innymi na takie festiwale jak:
                  </ModernSpan>
                </ModernText>
                <ModernList variant="grid" enhanced>
                  <li>Dragon Swing Festival</li>
                  <li>Transvingvania Lindy Exchange</li>
                  <li>Letni Festiwal Jazzowy w Krakowie</li>
                  <li>Lindy Hop Non Stop</li>
                  <li>Kraków Lindy Invasion</li>
                  <li>i wiele innych...</li>
                </ModernList>
              </ModernTextWrapper>
            </ModernContentContainer>
          </ModernSectionWrapper>
        </section>
        
        <SectionTransition />
        <YouTubeView />
        
        <SectionTransition />
        <section id="uslugi" aria-labelledby="services-heading">
          <ModernSectionWrapper backgroundImage={About3} parallaxEffect>
            <CSSParticleSystem />
            <ModernContentContainer glassmorphism enhanced>
              <ModernTextWrapper centerAlign enhanced>
                <header>
                  <ModernHeading id="services-heading" size="medium" color="gold" enhanced>
                    Nasze usługi i oferta
                  </ModernHeading>
                </header>
                <ModernText size="large" enhanced>
                  Jeśli organizujecie Państwo <ModernSpan variant="highlight" enhanced>wszelakie wydarzenia kulturalne</ModernSpan>,
                  a może poszukują <ModernSpan variant="accent" enhanced>klimatycznego zespołu</ModernSpan>, rodem z Ojca Chrzestnego...
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
                  <ModernSpan variant="glow" enhanced>- JESTEŚMY IDEALNYM WYBOREM!</ModernSpan>
                </ModernText>
              </ModernTextWrapper>
            </ModernContentContainer>
          </ModernSectionWrapper>
        </section>
        
        <section id="swieta" aria-labelledby="christmas-heading">
          <ModernSectionWrapper darkTheme>
            <ModernContentContainer glassmorphism maxWidth="1200px">
              <ModernTextWrapper centerAlign>
                <header>
                  <ModernHeading id="christmas-heading" size="medium" color="gold">
                    🎄 Lazy Christmas 🎄
                  </ModernHeading>
                </header>
                <ModernText size="large" emphasis>
                  W okresie około-świątecznym mamy także przygotowany 
                  <ModernSpan variant="glow"> repertuar x-masowy</ModernSpan>!
                </ModernText>
                <ModernText size="medium">
                  <ModernSpan variant="highlight">Lazy Christmas!</ModernSpan> - 
                  ze standardami amerykańskich, swingowych przebojów świątecznych
                  w niepowtarzalnym klimacie lat 20. i 30.
                </ModernText>
                <ModernText size="large">
                  <ModernSpan variant="accent">
                    🎅 To doskonała oferta na wigilie firmowe i inne podobne
                    wydarzenia, w magicznym klimacie bożonarodzeniowym. 🎁
                  </ModernSpan>
                </ModernText>
              </ModernTextWrapper>
            </ModernContentContainer>
          </ModernSectionWrapper>
        </section>
        
        <SectionTransition />
        <SquadSection />
        <SectionTransition />
        <ContactSection />
      </main>
    </>
  );
}
