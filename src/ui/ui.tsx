import styled from "@emotion/styled";
import React from "react";
import { MainView } from "./pages/MainView/MainView";
import About from "src/assets/images/about.jpg";
import About2 from "src/assets/images/about2.jpg";
import About3 from "src/assets/images/about3.jpg";
import Wojtek from "src/assets/images/wojtek.jpg";
import Michal from "src/assets/images/michal.jpg";
import Lukasz from "src/assets/images/lukasz.jpg";
import Sylwia from "src/assets/images/sylwia.jpg";
import Dominik from "src/assets/images/dominik.jpg";
import Milosz from "src/assets/images/milosz.jpg";
import { ListenUsView } from "src/ui/pages/ListenUsView/ListenUsView";
import { colors, fonts } from "src/config/theme";
import { YouTubeView } from "src/ui/pages/YouTubeView/YouTubeView";
import {
  ContactSection,
  SpanStyle,
} from "src/ui/pages/ContactSection/ContactSection";
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
  /* overflow: scroll; */
`;

export const TextWrapper = styled("div")`
  display: flex;
  align-items: center;
  background-color: #0000009e;
  border-radius: 1.5em;
  width: 100%;
  max-height: 100vh;
  /* overflow: scroll; */
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
export const SquadSection = styled("section")`
  display: flex;
  flex-wrap: wrap;
  /* max-height: 100vh; */
  /* padding: 10px; */
`;
export const ImageBox = styled("div")`
  flex: 1 1 calc(33.333%);
  margin: 0;
  padding: 0;
  align-items: start;
  /* position: relative;
  box-sizing: border-box; */
  ${mq[1]} {
    flex: 1 1 100%;
  }
`;
export const SquadImg = styled("img")`
  width: 100%;
  height: 100%;
  /* display: block; */
`;
export const SquadHeader = styled("h3")`
  font-family: ${fonts.mulish.Bold};
  color: ${colors.primary.white};
  width: 100%;
  text-align: center;
  position: relative;
  bottom: 100px;
  margin: 0;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;
export const SquadHeaderMain = styled("h2")`
  font-family: ${fonts.mulish.Bold};
  color: #ccb379;
  width: 100%;
  text-align: center;
  margin: 0;
  background: ${colors.primary.black};
  border-radius: 5px;
  border: 1px solid #ccb379;
  padding: 13px 0;
`;
const squadData = [
  {
    person: "Wojciech Rejdych",
    imageSrc: Wojtek,
    description: "Saksofon",
  },
  {
    person: "Sylwia Buchalska",
    imageSrc: Sylwia,
    description: "Wokal",
  },
  {
    person: "Dominik Borek",
    imageSrc: Dominik,
    description: "Trąbka",
  },
  {
    person: "Michał Biel",
    imageSrc: Michal,
    description: "Kontrabas",
  },
  {
    person: "Łukasz Giergiel",
    imageSrc: Lukasz,
    description: "Perkusja",
  },
  {
    person: "Miłosz Bazarnik",
    imageSrc: Milosz,
    description: "Fortepian",
  },
];
export function Ui() {
  return (
    <>
      <MainView />
      <SectionWrapper imageUrl={About}>
        <TextWrapper>
          <TextMedium>
            Jesteśmy młodą i dynamiczną grupą, która kocha muzykę i kulturę
            swingową. Nasz zespół powstał w Krakowie, gdzie w 2016 roku
            zaczęliśmy naszą przygodę od małych swingowych potańcówek w{" "}
            <SpanStyle> Piwnicy pod Baranami.</SpanStyle>
          </TextMedium>
        </TextWrapper>
      </SectionWrapper>
      <ListenUsView />
      <SectionWrapper imageUrl={About2}>
        <TextWrapper>
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
      <YouTubeView />
      <SectionWrapper imageUrl={About3}>
        <TextWrapper>
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
      <ChristmasSection>
        <TextWrapper>
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
      <SquadSection>
        <SquadHeaderMain>Skład zespołu</SquadHeaderMain>
        {squadData.map((squad) => (
          <ImageBox>
            <SquadImg src={squad.imageSrc} />
            <SquadHeader>
              {`${squad.person} `} <br />
              <SpanStyle>{`${squad.description}`}</SpanStyle>
            </SquadHeader>
          </ImageBox>
        ))}
      </SquadSection>
      <ContactSection />
    </>
  );
}
