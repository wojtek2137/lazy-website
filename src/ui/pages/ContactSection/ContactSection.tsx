
import React, { useState } from "react";
import styled from "@emotion/styled";
import { ContactHeader } from "ui/pages/ContactSection/ContactSection.style";
import { colors, fonts } from "config/theme";
import TagFacebookIcon from "assets/images/facebook-icon.png";
import TagInstagramIcon from "assets/images/instagram-icon.png";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const ContactSectionWrapper = styled("section")`
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  ${mq[1]} {
    flex-direction: column;
  }
`;
export const BoxSide = styled("div")`
  width: 100%;
  text-align: center;
  background: #ded3ac;
`;
export const BoxMiddle = styled(BoxSide)`
  background: #e4dcbb;
`;
export const List = styled("div")`
  flex-flow: column;
  justify-content: center;
  flex-direction: column;
  font-family: ${fonts.mulish.Regular};
  font-size: 22px;
  padding: auto;
  list-style: none;
`;
export const SpanStyle = styled("span")`
  padding-top: 10%;
  font-family: ${fonts.mulish.Bold};
  font-size: 20px;
  color: #ccb379;
`;
export const TextParagraph = styled("p")`
  font-family: ${fonts.mulish.ExtraBold};
  font-size: 20px;
  color: ${colors.primary.white};
`;

export const ContactLink = styled("a")`
  color: inherit;
  text-decoration: none;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:focus {
    outline: 2px solid ${colors.primary.sandy};
    outline-offset: 2px;
  }
`;
interface SocialMediaPropsType {
  isHover: boolean;
}
export const SocialMediaImg = styled("img")<SocialMediaPropsType>`
  cursor: pointer;
  max-height: 190px;
  ${(props): string | null =>
    props.isHover === true ? `filter: grayscale(50%);` : null}
`;
export function ContactSection() {
  const facebookHref = "https://www.facebook.com/lazyswingersband";
  const instagramHref = "https://www.instagram.com/lazyswingband/";
  const [isFbHover, setIsFbHover] = useState<boolean>(false);
  const [isIgHover, setIsIgHover] = useState<boolean>(false);

  return (
    <section id="kontakt" aria-labelledby="contact-heading">
      <ContactSectionWrapper>
        <BoxSide>
          <ContactHeader id="facebook-heading">
            Napisz do nas <br />
            na <br />
            Facebooku
          </ContactHeader>
          <a 
            href={facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kontakt przez Facebook - Lazy Swing Band"
          >
            <SocialMediaImg
              onMouseEnter={() => setIsFbHover(true)}
              onMouseLeave={() => setIsFbHover(false)}
              src={TagFacebookIcon}
              isHover={isFbHover}
              alt="Logo Facebook - napisz wiadomość do zespołu"
            />
          </a>
        </BoxSide>
        
        <BoxMiddle>
          <ContactHeader id="contact-data-heading">Dane Kontaktowe</ContactHeader>
          <List>
            <SpanStyle>
              Manager:
              <TextParagraph>Sylwia Buchalska-Augustyn</TextParagraph>
            </SpanStyle>
            <SpanStyle>
              Telefon:
              <TextParagraph>
                <ContactLink href="tel:+48794210665" aria-label="Zadzwoń do managera">+48 794 210 665</ContactLink>, 
                <ContactLink href="tel:+48732661109" aria-label="Zadzwoń do zespołu">+48 732 661 109</ContactLink>
              </TextParagraph>
            </SpanStyle>
            <SpanStyle>
              Email: 
              <TextParagraph>
                <ContactLink href="mailto:lazyswingband@gmail.com" aria-label="Wyślij email do zespołu">
                  lazyswingband@gmail.com
                </ContactLink>
              </TextParagraph>
            </SpanStyle>
          </List>
        </BoxMiddle>
        
        <BoxSide>
          <ContactHeader id="instagram-heading">
            Obserwuj nas <br />
            na <br />
            Instagramie
          </ContactHeader>
          <a 
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Obserwuj Lazy Swing Band na Instagram"
          >
            <SocialMediaImg
              onMouseEnter={() => setIsIgHover(true)}
              onMouseLeave={() => setIsIgHover(false)}
              src={TagInstagramIcon}
              isHover={isIgHover}
              alt="Logo Instagram - obserwuj nasz profil"
            />
          </a>
        </BoxSide>
      </ContactSectionWrapper>
    </section>
  );
}
