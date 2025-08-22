import styled from "@emotion/styled";
import { colors, fonts } from "config/theme";

export const ContactHeader = styled('h4')`
    font-family: ${fonts.mulish.ExtraBold};
    text-align: center;
    letter-spacing: 3px;
    font-size: 1.5em;
    color: ${colors.primary.white};
`;
export const ContactHeaderCenter = styled(ContactHeader)`
    color: #ccb379;;
`;