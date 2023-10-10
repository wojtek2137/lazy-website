// import facebookicon from "./facebook-icon.png";
// import adressicon from "./adress-icon.png";
// import phoneicon from "./phone-icon.png";
// import emailicon from "./email-icon.png";
import { ContactForm } from "src/ui/pages/ContactSection/ContactForm";
import React from "react";
import styled from "@emotion/styled";
import { ContactHeader, ContactHeaderCenter } from "src/ui/pages/ContactSection/ContactSection.style";
import { colors, fonts } from "src/config/theme";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);

export const ContactSectionWrapper = styled('section')`
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    ${mq[1]}{
        flex-direction: column;
    }
`;
export const BoxSide = styled('div')`
    width: 100%;
    text-align: center;
    background: #ded3ac;

`;
export const BoxMiddle = styled(BoxSide)`
    background: #e4dcbb;
`;
export const List = styled('div')`
    flex-flow: column;
    justify-content: center;
    flex-direction: column;
    font-family: ${fonts.mulish.Regular};
    font-size: 22px;
    padding: auto;
    list-style: none;
`;
export const SpanStyle = styled('span')`
    padding-top: 10%;
    font-family: ${fonts.mulish.Bold};
    font-size: 20px;
    color: #ccb379;
`;
export const TextParagraph = styled('p')`
    font-family: ${fonts.mulish.ExtraBold};
    font-size: 20px;
    color: ${colors.primary.white};
`;

export function ContactSection() {
    return (
        <ContactSectionWrapper>
            <BoxSide>
                <ContactHeader>
                    Znajdź mnie <br /> na
                </ContactHeader>
            </BoxSide>
            <BoxMiddle>
                <ContactHeaderCenter>
                    Napisz <br /> do nas
                </ContactHeaderCenter>
                <ContactForm />
            </BoxMiddle>
            <BoxSide>
                <ContactHeader>
                    Dane Kontaktowe
                </ContactHeader>
                <List>
                    <SpanStyle>
                        Manager:
                        <TextParagraph>Karolina Macałka</TextParagraph>
                    </SpanStyle>
                    <SpanStyle>
                        Telefon:
                        <TextParagraph>+48 691 135 466</TextParagraph>
                    </SpanStyle>
                    <SpanStyle>
                        Email: <TextParagraph>lazyswing@gmail.com</TextParagraph>
                    </SpanStyle>
                </List>
            </BoxSide>
        </ContactSectionWrapper >
    );
};
