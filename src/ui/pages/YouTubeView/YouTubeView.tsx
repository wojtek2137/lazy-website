import styled from '@emotion/styled';
import React from 'react';
import { ListenUsHeader, ListenUsSection } from 'ui/pages/ListenUsView/ListenUsView.style';
const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);
export const YouTubeIFramesWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 30px;
    padding: 10px 20px; /* Reduced padding to give more space to iframes */
    overflow: hidden; /* No scroll */
    
    ${mq[1]} {
      gap: 20px;
      padding: 5px 15px;
    }
    
    ${mq[0]} {
      gap: 15px;
      padding: 5px 10px;
    }
`;

export const YouTubeIFrame = styled('iframe')`
    border-radius: 40px;
    border: 20px solid rgba(255,255,255,0.1);
    flex: 1;
    min-width: 0;
    aspect-ratio: 16/9;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    
    /* Larger responsive sizing - bigger iframes */
    max-width: 700px;
    width: 100%;
    height: auto;
    
    @media (max-width: 1500px) {
      max-width: 600px;
      border-width: 15px;
    }
    
    ${mq[1]} {
      max-width: 500px;
      border-width: 10px;
      border-radius: 30px;
    }
    
    ${mq[0]} {
      max-width: 400px;
      border-width: 8px;
      border-radius: 20px;
    }
`;

// Custom section for YouTube with 50vh height
const YouTubeSection = styled(ListenUsSection)`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    /* Make header smaller to give more space to iframes */
    h2 {
      margin-bottom: 10px;
      font-size: 1.5em;
    }
`;

export function YouTubeView() {
    return (
        <section id="wideo" aria-labelledby="video-heading">
            <YouTubeSection>
                <header>
                    <h2 id="video-heading">
                        <ListenUsHeader>YouTube</ListenUsHeader>
                    </h2>
                </header>
                <YouTubeIFramesWrapper role="list" aria-label="Lista filmów zespołu na YouTube">
                    <div role="listitem">
                        <YouTubeIFrame 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/wJKS6BWL01k?si=c5_sYoIVg8GTUSms" 
                            title="Lazy Swing Band - Najnowszy występ" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            aria-describedby="video-desc-1">
                        </YouTubeIFrame>
                        <p id="video-desc-1" className="sr-only">Najnowszy występ zespołu Lazy Swing Band</p>
                    </div>
                    <div role="listitem">
                        <YouTubeIFrame 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/jKxhwW9bKdA?si=TZgY6PMbJnAJOFQY" 
                            title="Lazy Swing Band - Dragon Swing Festival 2022" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            aria-describedby="video-desc-2">
                        </YouTubeIFrame>
                        <p id="video-desc-2" className="sr-only">Występ zespołu Lazy Swing Band na Dragon Swing Festival 2022</p>
                    </div>
                    <div role="listitem">
                        <YouTubeIFrame 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/-zlh_nR1eAA?si=-qL_uc2s5_lmph5t" 
                            title="Lazy Swing Band - Koncert w Piwnicy pod Baranami" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            aria-describedby="video-desc-3">
                        </YouTubeIFrame>
                        <p id="video-desc-3" className="sr-only">Koncert zespołu Lazy Swing Band w krakowskiej Piwnicy pod Baranami</p>
                    </div>
                </YouTubeIFramesWrapper>
            </YouTubeSection>
        </section>
    );
};
