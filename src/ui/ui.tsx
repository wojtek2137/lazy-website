import styled from "@emotion/styled";
import React from "react";
import { MainView } from "./pages/MainView/MainView";
import About from "assets/images/about.jpg";
import About2 from "assets/images/about2.jpg";
import About3 from "assets/images/about3.jpg";
import { ListenUsView } from "ui/pages/ListenUsView/ListenUsView";
import { colors, fonts } from "config/theme";
import { YouTubeView } from "ui/pages/YouTubeView/YouTubeView";
import { SquadSection } from "ui/pages/SquadSection/SquadSection";
import { Navigation } from "ui/components/Navigation";
import {
  ContactSection,
  SpanStyle,
} from "ui/pages/ContactSection/ContactSection";
interface SectionWrapperPropsType {
  imageUrl: string;
}
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
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
  return (
    <>
      <Navigation />
      <main id="main-content">
        <MainView />
        
        <section id="o-nas" aria-labelledby="about-heading">
          <SectionWrapper imageUrl={About}>
            <TextWrapper>
              <header>
                <h2 id="about-heading" className="sr-only">O zespole Lazy Swing Band</h2>
              </header>
              <TextMedium>
                Jesteśmy młodą i dynamiczną grupą, która kocha muzykę i kulturę
                swingową. Nasz zespół powstał w Krakowie, gdzie w 2016 roku
                zaczęliśmy naszą przygodę od małych swingowych potańcówek w{" "}
                <SpanStyle> Piwnicy pod Baranami.</SpanStyle>
              </TextMedium>
            </TextWrapper>
          </SectionWrapper>
        </section>
        <ListenUsView />
        
        <section id="festiwale" aria-labelledby="festivals-heading">
          <SectionWrapper imageUrl={About2}>
            <TextWrapper>
              <header>
                <h2 id="festivals-heading" className="sr-only">Nasze występy na festiwalach</h2>
              </header>
              <TextMedium>
                Nasza pasja do muzyki swingowej prowadzi nas nie tylko po całej
                Polsce, ale także poza jej granice. <br />
                <SpanStyle>
                  Zawitaliśmy między innymi na takie festiwale jak:
                </SpanStyle>
                <ListWrapper>
                  <li>Dragon Swing Festival,</li>
                  <li>Transvingvania Lindy Exchange,</li>
                  <li>Letni Festiwal Jazzowy w Krakowie,</li>
                  <li>Lindy Hop Non Stop,</li>
                  <li>Kraków Lindy Invasion</li>
                  <br />i wiele innych...
                </ListWrapper>
              </TextMedium>
            </TextWrapper>
          </SectionWrapper>
        </section>
        <YouTubeView />
        
        <section id="uslugi" aria-labelledby="services-heading">
          <SectionWrapper imageUrl={About3}>
            <TextWrapper>
              <header>
                <h2 id="services-heading" className="sr-only">Nasze usługi i oferta</h2>
              </header>
              <TextMedium>
                Jeśli organizujecie Państwo wszelakie wydarzenia kulturalne,
                <ListWrapper>
                  <li>
                    festiwale jazzowe, retro-festiwale, festiwale tańca swingowego
                  </li>
                  <li>targi,</li>
                  <li>pikniki,</li>
                  <li>bankiety,</li>
                  <li>imprezy dla zróżnicowanej publiczności,</li>
                </ListWrapper>
                a może poszukują klimatycznego zespołu, rodem z Ojca Chrzestnego, do
                swojego filmu...
                <SpanStyle> - JESTEŚMY IDEALNYM WYBOREM!</SpanStyle>
              </TextMedium>
            </TextWrapper>
          </SectionWrapper>
        </section>
        
        <section id="swieta" aria-labelledby="christmas-heading">
          <ChristmasSection>
            <TextWrapper>
              <header>
                <h2 id="christmas-heading" className="sr-only">Lazy Christmas - Oferta świąteczna</h2>
              </header>
              <TextMedium>
                W okresie około-świątecznym mamy także przygotowany repertuar
                x-masowy: <br />
                <SpanStyle> Lazy Christmas! </SpanStyle>
                ze standardami amerykańskich, swingowych przebojów <br /> <br />
                <SpanStyle>
                  - To doskonała oferta na wigilie firmowe i inne podobne
                  wydarzenia, w klimacie bożonarodzeniowym.
                </SpanStyle>
              </TextMedium>
            </TextWrapper>
          </ChristmasSection>
        </section>
        
        <SquadSection />
        <ContactSection />
      </main>
    </>
  );
}
