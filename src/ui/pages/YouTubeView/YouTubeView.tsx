import styled from '@emotion/styled';
import React from 'react';
import { ListenUsHeader, ListenUsSection } from 'ui/pages/ListenUsView/ListenUsView.style';
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);
export const YouTubeIFramesWrapper = styled('div')`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    ${mq[1]} {
    flex-direction: column;
  }
`;

export const YouTubeIFrame = styled('iframe')`
    border-radius: 40px;
    border: 20px solid rgba(255,255,255,0.1);
    margin-bottom: 30px;
    ${mq[1]} {
    width: 100%;
  }
;
`;
export function YouTubeView() {
    return (
        <section id="wideo" aria-labelledby="video-heading">
            <ListenUsSection>
                <header>
                    <h2 id="video-heading">
                        <ListenUsHeader>YouTube Music</ListenUsHeader>
                    </h2>
                </header>
                <YouTubeIFramesWrapper role="list" aria-label="Lista filmów zespołu na YouTube">
                    <div role="listitem">
                        <YouTubeIFrame 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/jKxhwW9bKdA?si=TZgY6PMbJnAJOFQY" 
                            title="Lazy Swing Band - Dragon Swing Festival 2022" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            aria-describedby="video-desc-1">
                        </YouTubeIFrame>
                        <p id="video-desc-1" className="sr-only">Występ zespołu Lazy Swing Band na Dragon Swing Festival 2022</p>
                    </div>
                    <div role="listitem">
                        <YouTubeIFrame 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/-zlh_nR1eAA?si=-qL_uc2s5_lmph5t" 
                            title="Lazy Swing Band - Koncert w Piwnicy pod Baranami" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            aria-describedby="video-desc-2">
                        </YouTubeIFrame>
                        <p id="video-desc-2" className="sr-only">Koncert zespołu Lazy Swing Band w krakowskiej Piwnicy pod Baranami</p>
                    </div>
                </YouTubeIFramesWrapper>
            </ListenUsSection>
        </section>
    );
};
