import styled from '@emotion/styled';
import { colors, fonts } from 'src/config/theme';

export const CardContainer = styled('div')`
    display:flex;
    position: relative;
    width: 100%;
    justify-content: space-around;
    padding: 20px 0; 
`;
export const CardWrapper = styled('div')`
    display:flex;
    position: relative;
    height: 250px;
    width: 275px;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

interface PropsType {
    isHover: boolean;
}

export const ImgBox = styled('div') <PropsType>`
    display:flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    top: ${(props): string => props.isHover === true ? 'calc(50% - 75px)' : '10px'};
    left: ${(props): string => props.isHover === true ? '-75px' : '10px'};
    height: ${(props): string => props.isHover === true ? '150px' : 'calc(100% - 20px)'};
    width: ${(props): string => props.isHover === true ? '150px' : 'calc(100% - 20px)'};
    z-index:1;
    background: ${(props): string => props.isHover === true ? 'rgba(255,255,255,0.1)' : `${colors.primary.sandy}`};
    backdrop-filter: blur(20px);
    border-radius: 20px;
    box-shadow: 5px 5px 30px rgba(0,0,0,0.3);
    transition: 0.5s ease-in-out;
`;

export const Img = styled('img') <PropsType>`
    cursor: pointer;
    max-height: 190px;
    transition: 0.5s ease-in-out;
    ${(props): string | null => props.isHover === true ? 'max-width: 75px;' : null}
`;
export const CardContentWrapper = styled('div')`
    display:flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    padding: 15px;
`;

export const CardHeader = styled('h3')`
    font-family: ${fonts.mulish.Medium};
    color: ${colors.primary.sandy};
    font-size: 24px;
    text-align: center;
    margin: 0;
`;
export const ListenSpan = styled('span')`
    display: block;
    font-family: ${fonts.mulish.Medium};
    color: ${colors.primary.black};
    font-size: 18px;
    text-align: center;
    margin: 0;
`;


export const StreamingList = styled('ul')`
    display: flex;
    flex-wrap:nowrap;
    justify-content: center;
`;

export const StreamingTagWrapper = styled('li')`
    list-style:none;
    margin: 10px 10px 0 0;
    padding: 0;
`;

export const StreamingTag = styled('img')`
    transform: scale(1);
    opacity: 0.7;

    &:hover{
        transform: scale(1.23);
        opacity: 1;
    }

`;



