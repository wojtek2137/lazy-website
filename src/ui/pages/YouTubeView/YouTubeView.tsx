import styled from '@emotion/styled';
import React from 'react';
import { colors, fonts } from 'config/theme';

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

// Modern responsive video grid
export const ModernVideoGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  ${mq[2]} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  ${mq[1]} {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 16px;
  }
  
  ${mq[0]} {
    padding: 0 12px;
    gap: 16px;
  }
`;

// Modern video card with enhanced styling
export const ModernVideoCard = styled('div')`
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 16px;
  border: 1px solid ${colors.primary.gold}30;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.5),
      0 0 0 2px ${colors.primary.gold}50,
      0 0 40px ${colors.primary.gold}20;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      ${colors.primary.gold}40,
      transparent,
      ${colors.primary.gold}20,
      transparent,
      ${colors.primary.gold}40
    );
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  ${mq[1]} {
    padding: 12px;
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }
  
  ${mq[0]} {
    padding: 10px;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-6px) scale(1.005);
    }
  }
`;

export const ModernVideoWrapper = styled('div')`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    inset 0 0 0 2px ${colors.primary.gold}20;
  
  ${mq[1]} {
    border-radius: 10px;
  }
  
  ${mq[0]} {
    border-radius: 8px;
  }
`;

export const ModernYouTubeIFrame = styled('iframe')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: inherit;
  background: ${colors.primary.black};
`;

export const VideoTitle = styled('h3')`
  color: ${colors.primary.gold};
  font-family: ${fonts.mulish.Medium};
  font-size: 16px;
  margin: 12px 0 0 0;
  text-align: center;
  letter-spacing: 0.5px;
  opacity: 0.9;
  transition: all 0.3s ease;
  
  ${mq[1]} {
    font-size: 15px;
    margin: 10px 0 0 0;
  }
  
  ${mq[0]} {
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;

// YouTube section with original background gradient
const ModernYouTubeSection = styled('section')`
  background-color: ${colors.primary.gold};
  background-image: linear-gradient(0deg, ${colors.primary.black} 0%, ${colors.primary.gold} 94%);
  background-attachment: fixed;
  padding: 30px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  ${mq[1]} {
    min-height: 40vh;
  }
  
  ${mq[0]} {
    min-height: 35vh;
  }
`;

// Original YouTube header styling
const YouTubeHeader = styled('h2')`
  font-family: ${fonts.mulish.Regular};
  text-align: center;
  font-size: 2em;
  letter-spacing: 3px;
  color: ${colors.primary.darkGrey};
  margin: 0 auto 30px;
`;

// Video data for easier management
const videoData = [
  {
    id: 'video-1',
    src: 'https://www.youtube.com/embed/wJKS6BWL01k?si=c5_sYoIVg8GTUSms',
    title: 'Live z koncertu Miłość w Rytmie Swingu w Mszanie Dolnej',
    description: 'Live z koncertu Miłość w Rytmie Swingu w Mszanie Dolnej'
  },
  {
    id: 'video-2', 
    src: 'https://www.youtube.com/embed/jKxhwW9bKdA?si=TZgY6PMbJnAJOFQY',
    title: 'Teledysk z albumu "Polish Swing For Lindy Hop"',
    description: 'Teledysk z albumu "Polish Swing For Lindy Hop"'
  },
  {
    id: 'video-3',
    src: 'https://www.youtube.com/embed/-zlh_nR1eAA?si=-qL_uc2s5_lmph5t', 
    title: 'Autorski utwór Crack The Beat z teledyskiem w krakowskiej scenerii',
    description: 'Autorski utwór Crack The Beat z teledyskiem w krakowskiej scenerii'
  }
];

export function YouTubeView() {
  return (
    <section id="wideo" aria-labelledby="video-heading">
      <ModernYouTubeSection>
        <header>
          <YouTubeHeader id="video-heading">
            YouTube
          </YouTubeHeader>
        </header>
        
        <ModernVideoGrid role="list" aria-label="Lista filmów zespołu na YouTube">
          {videoData.map((video) => (
            <ModernVideoCard key={video.id} role="listitem">
              <ModernVideoWrapper>
                <ModernYouTubeIFrame
                  src={video.src}
                  title={`Lazy Swing Band - ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  aria-describedby={`${video.id}-desc`}
                />
              </ModernVideoWrapper>
              <VideoTitle>{video.title}</VideoTitle>
              <p id={`${video.id}-desc`} className="sr-only">
                {video.description}
              </p>
            </ModernVideoCard>
          ))}
        </ModernVideoGrid>
      </ModernYouTubeSection>
    </section>
  );
}