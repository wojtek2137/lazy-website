import styled from "@emotion/styled";
import React from "react";
import { MainView } from "./pages/MainView/MainView";
import About from "src/assets/images/about.jpg";
import About2 from "src/assets/images/about2.jpg";
import { ListenUsView } from "src/ui/pages/ListenUsView/ListenUsView";
import { colors, fonts } from "src/config/theme";
import { YouTubeView } from "src/ui/pages/YouTubeView/YouTubeView";
import { ContactSection } from "src/ui/pages/ContactSection/ContactSection";
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
  background-position: right;
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
  }
`;
export const ListWrapper = styled("ul")`
  text-align: initial;
`;

export function Ui() {
  return (
    <>
      <MainView />
      <SectionWrapper imageUrl={About}>
        <TextWrapper>
          <TextMedium>
            Jesteśmy młodą i dynamiczną grupą, która kocha muzykę i kulturę
            swingową. Nasz zespół powstał w Krakowie, gdzie w 2016 roku
            zaczęliśmy naszą przygodę od małych swingowych potańcówek w Piwnicy
            pod Baranami.
          </TextMedium>
        </TextWrapper>
      </SectionWrapper>
      <ListenUsView />
      <SectionWrapper imageUrl={About2}>
        <TextWrapper>
          <TextMedium>
            Nasza pasja do muzyki swingowej prowadzi nas nie tylko po całej
            Polsce, ale także poza jej granice. <br />
            Zawitaliśmy między innymi na takie festiwale jak:
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
      <ContactSection />
    </>
  );
}
