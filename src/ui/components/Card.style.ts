import styled from "@emotion/styled";
import { colors, fonts, spacing, typography } from "config/theme";

export const CardContainer = styled("div")`
  display: flex;
  position: relative;
  width: auto;
  justify-content: center;
  align-items: center;
`;
export const CardWrapper = styled("div")`
  display: flex;
  position: relative;
  height: 250px;
  width: 275px;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  }
`;

interface PropsType {
  isHover: boolean;
}

export const ImgBox = styled("div")<PropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: ${(props): string =>
    props.isHover === true ? "calc(50% - 75px)" : "12px"};
  left: ${(props): string => (props.isHover === true ? "-75px" : "12px")};
  height: ${(props): string =>
    props.isHover === true ? "150px" : "calc(100% - 24px)"};
  width: ${(props): string =>
    props.isHover === true ? "150px" : "calc(100% - 24px)"};
  z-index: 1;
  background: ${(props): string =>
    props.isHover === true
      ? "rgba(255,255,255,0.08)"
      : `${colors.primary.gold}15`};
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Img = styled("img")<PropsType>`
  cursor: pointer;
  max-height: 190px;
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%) !important;
  border-radius: 12px;
  ${(props): string | null =>
    props.isHover === true ? "max-width: 75px;" : null}
`;
export const CardContentWrapper = styled("div")`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 100%;
  width: 100%;
`;

export const CardHeader = styled("div")`
  font-family: ${fonts.outfit.SemiBold};
  color: ${colors.primary.black};
  font-size: ${typography.h5.size};
  font-weight: ${typography.h5.weight};
  text-align: center;
  margin: 0;
`;
export const ListenSpan = styled("span")`
  display: block;
  font-family: ${fonts.outfit.Medium};
  color: ${colors.primary.black};
  font-size: ${typography.body.size};
  text-align: center;
  margin: 0;
  opacity: 0.8;
`;

export const StreamingList = styled("ul")`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: ${spacing.sm}; /* Mniejszy gap - 8px zamiast 16px */
`;

export const StreamingTagWrapper = styled("li")`
  list-style: none;
  margin: 0;
  padding: 0;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 6px; /* Znacznie mniejszy padding */
    border-radius: 8px;
    background: ${colors.primary.white};
    transition: all 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      background: ${colors.neutrals.N10};
    }
    
    &:focus-visible {
      outline: 2px solid ${colors.primary.gold};
      outline-offset: 2px;
    }
  }
`;

export const StreamingTag = styled("img")`
  width: 28px;  /* Stały rozmiar dla kontroli */
  height: 28px;
  object-fit: contain;
  opacity: 0.8;
  background: transparent !important; /* Override global img background for icons */
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
