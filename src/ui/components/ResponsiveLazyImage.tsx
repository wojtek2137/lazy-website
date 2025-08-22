import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

interface ResponsiveLazyImageProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  useResponsive?: boolean;
  style?: React.CSSProperties;
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 12px;
`;

export const ResponsiveLazyImage: React.FC<ResponsiveLazyImageProps> = ({
  src,
  alt,
  loading = 'lazy',
  useResponsive = false,
  style,
}) => {
  const [inView, setInView] = useState(loading === 'eager');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === 'eager' || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading, inView]);

  const generateSrcSet = (originalSrc: string): string => {
    if (!useResponsive) return '';
    
    const filename = originalSrc.split('/').pop()?.split('.')[0];
    const extension = originalSrc.split('.').pop();
    
    if (!filename || !extension) return '';

    return [
      `/images/responsive/${filename}_mobile.${extension} 400w`,
      `/images/responsive/${filename}_tablet.${extension} 768w`,
      `/images/responsive/${filename}_desktop.${extension} 1200w`,
    ].join(', ');
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // Hide placeholder even on error
  };

  return (
    <ImageContainer ref={containerRef}>
      {inView && (
        <Image
          src={src}
          alt={alt}
          srcSet={useResponsive ? generateSrcSet(src) : undefined}
          sizes={useResponsive ? "(max-width: 400px) 100vw, (max-width: 768px) 50vw, 33vw" : undefined}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            opacity: imageLoaded ? 1 : 0,
            ...style,
          }}
        />
      )}
      {!imageLoaded && !imageError && (
        <Placeholder>
          {inView ? 'Loading...' : '📷'}
        </Placeholder>
      )}
    </ImageContainer>
  );
};
