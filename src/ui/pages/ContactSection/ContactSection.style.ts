import styled from "@emotion/styled";
import { colors, fonts } from "config/theme";

export const ContactHeader = styled('h3')`
    font-family: ${fonts.mulish.ExtraBold};
    text-align: center;
    letter-spacing: 3px;
    font-size: 1.5em;
    color: ${colors.primary.white};
    margin: 0 0 20px 0;
`;
export const ContactHeaderCenter = styled(ContactHeader)`
    color: #ccb379;;
`;