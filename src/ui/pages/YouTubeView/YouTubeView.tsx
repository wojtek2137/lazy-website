import styled from '@emotion/styled';
import React from 'react';
import { ListenUsHeader, ListenUsSection } from 'src/ui/pages/ListenUsView/ListenUsView.style';
export const YouTubeIFramesWrapper = styled('div')`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;
export const YouTubeIFrame = styled('iframe')`
    border-radius: 40px;
    border: 20px solid rgba(255,255,255,0.1);
;
`;
export function YouTubeView() {
    return (
        <ListenUsSection id="albums">
            <ListenUsHeader>
                YouTube Music
            </ListenUsHeader>
            <YouTubeIFramesWrapper>
                <YouTubeIFrame width="560" height="315" src="https://www.youtube.com/embed/jKxhwW9bKdA?si=TZgY6PMbJnAJOFQY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></YouTubeIFrame>
                <YouTubeIFrame width="560" height="315" src="https://www.youtube.com/embed/-zlh_nR1eAA?si=-qL_uc2s5_lmph5t" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></YouTubeIFrame>
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jKxhwW9bKdA?si=TZgY6PMbJnAJOFQY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
            </YouTubeIFramesWrapper>
        </ListenUsSection>
    );
};
