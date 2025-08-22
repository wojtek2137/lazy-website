
import React, { useState } from "react";
import styled from "@emotion/styled";
import { ContactHeader, ContactHeaderCenter } from "ui/pages/ContactSection/ContactSection.style";
import { colors, fonts } from "config/theme";
import TagFacebookIcon from "assets/images/facebook-icon.png";
import TagInstagramIcon from "assets/images/instagram-icon.png";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const ContactSectionWrapper = styled("section")`
  background: linear-gradient(135deg, ${colors.primary.black} 0%, #1a1a1a 50%, ${colors.primary.black} 100%);
  min-height: 100vh;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, ${colors.primary.gold}12 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, ${colors.primary.gold}08 0%, transparent 40%);
    pointer-events: none;
    z-index: 1;
  }
  
  ${mq[1]} {
    padding: 60px 15px;
  }
`;

export const ContentContainer = styled("div")`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const MainTitle = styled("h1")`
  font-family: ${fonts.mulish.Bold};
  font-size: 48px;
  font-weight: 700;
  color: ${colors.primary.gold};
  margin: 0 0 80px 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  display: inline-block;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
    box-shadow: 0 0 20px ${colors.primary.gold}60;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${colors.primary.gold}, transparent);
  }
  
  ${mq[2]} {
    font-size: 36px;
    letter-spacing: 2px;
    margin-bottom: 60px;
  }
  
  ${mq[1]} {
    font-size: 28px;
    letter-spacing: 1px;
    margin-bottom: 50px;
  }
`;

export const ContactGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 40px;
  align-items: start;
  
  ${mq[2]} {
    gap: 30px;
  }
  
  ${mq[1]} {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const ContactCard = styled("div")`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(245, 203, 92, 0.2);
  border-radius: 24px;
  padding: 50px 30px;
  text-align: center;
  position: relative;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(245, 203, 92, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(145deg, rgba(245, 203, 92, 0.05) 0%, transparent 100%);
    border-radius: 24px;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(245, 203, 92, 0.3);
    border-color: rgba(245, 203, 92, 0.4);
    
    &::before {
      background: linear-gradient(145deg, rgba(245, 203, 92, 0.1) 0%, transparent 100%);
    }
  }
  
  ${mq[1]} {
    padding: 40px 25px;
  }
`;

export const CenterCard = styled(ContactCard)`
  background: rgba(245, 203, 92, 0.08);
  border-color: rgba(245, 203, 92, 0.3);
  
  &:hover {
    background: rgba(245, 203, 92, 0.12);
    border-color: rgba(245, 203, 92, 0.5);
  }
`;

export const ContactInfo = styled("div")`
  margin-top: 30px;
`;

export const InfoItem = styled("div")`
  margin-bottom: 35px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLabel = styled("div")`
  font-family: ${fonts.mulish.Bold};
  font-size: 16px;
  color: ${colors.primary.gold};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const InfoValue = styled("div")`
  font-family: ${fonts.mulish.Medium};
  font-size: 18px;
  color: ${colors.primary.white};
  line-height: 1.6;
`;

export const ContactLink = styled("a")`
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${colors.primary.gold}, ${colors.primary.yellow});
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${colors.primary.gold};
    
    &::after {
      width: 100%;
    }
  }
  
  &:focus {
    outline: 2px solid ${colors.primary.gold};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const SocialIcon = styled("div")`
  margin-top: 20px;
  position: relative;
  display: inline-block;
`;

interface SocialMediaPropsType {
  isHover: boolean;
}

export const SocialMediaImg = styled("img")<SocialMediaPropsType>`
  width: 120px;
  height: 120px;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: ${(props) => props.isHover ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)'};
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    filter: brightness(1.2) saturate(1.3) drop-shadow(0 0 20px ${colors.primary.gold}40);
  }
  
  ${mq[1]} {
    width: 100px;
    height: 100px;
  }
`;
export function ContactSection() {
  const facebookHref = "https://www.facebook.com/lazyswingersband";
  const instagramHref = "https://www.instagram.com/lazyswingband/";
  const [isFbHover, setIsFbHover] = useState<boolean>(false);
  const [isIgHover, setIsIgHover] = useState<boolean>(false);

  return (
    <ContactSectionWrapper id="kontakt" aria-labelledby="contact-main-heading">
      <ContentContainer>
        <MainTitle id="contact-main-heading">
          Kontakt
        </MainTitle>
        
        <ContactGrid>
          {/* Facebook Card */}
          <ContactCard>
            <ContactHeader id="facebook-heading">
              Facebook
            </ContactHeader>
            <SocialIcon>
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
            </SocialIcon>
            <InfoValue style={{ marginTop: '20px', fontSize: '16px' }}>
              Napisz do nas wiadomość
            </InfoValue>
          </ContactCard>
          
          {/* Contact Data Card - Center */}
          <CenterCard>
            <ContactHeaderCenter id="contact-data-heading">
              Dane Kontaktowe
            </ContactHeaderCenter>
            <ContactInfo>
              <InfoItem>
                <InfoLabel>Manager</InfoLabel>
                <InfoValue>Sylwia Buchalska-Augustyn</InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel>Telefon</InfoLabel>
                <InfoValue>
                  <ContactLink href="tel:+48794210665" aria-label="Zadzwoń do managera">
                    +48 794 210 665
                  </ContactLink>
                  <br />
                  <ContactLink href="tel:+48732661109" aria-label="Zadzwoń do zespołu">
                    +48 732 661 109
                  </ContactLink>
                </InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>
                  <ContactLink href="mailto:lazyswingband@gmail.com" aria-label="Wyślij email do zespołu">
                    lazyswingband@gmail.com
                  </ContactLink>
                </InfoValue>
              </InfoItem>
            </ContactInfo>
          </CenterCard>
          
          {/* Instagram Card */}
          <ContactCard>
            <ContactHeader id="instagram-heading">
              Instagram
            </ContactHeader>
            <SocialIcon>
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
            </SocialIcon>
            <InfoValue style={{ marginTop: '20px', fontSize: '16px' }}>
              Obserwuj nasze występy
            </InfoValue>
          </ContactCard>
        </ContactGrid>
      </ContentContainer>
    </ContactSectionWrapper>
  );
}
