import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface ResponsiveLazyImageProps {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  useResponsive?: boolean;
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img<{ $isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $isLoaded }) =>
    $isLoaded ? "translateY(0)" : "translateY(20px)"};
  filter: ${({ $isLoaded }) => ($isLoaded ? "blur(0)" : "blur(5px)")};
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 12px;
  animation: shimmer 2s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: loading-sweep 1.5s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes loading-sweep {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

export const ResponsiveLazyImage: React.FC<ResponsiveLazyImageProps> = ({
  src,
  alt,
  loading = "lazy",
  useResponsive = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle race condition: image may load before React hydrates and attaches onLoad
  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  const generateSrcSet = (originalSrc: string): string => {
    if (!useResponsive) return "";

    const filename = originalSrc.split("/").pop()?.split(".")[0];
    const extension = originalSrc.split(".").pop();

    if (!filename || !extension) return "";

    return [
      `/images/responsive/${filename}_mobile.${extension} 400w`,
      `/images/responsive/${filename}_tablet.${extension} 768w`,
      `/images/responsive/${filename}_desktop.${extension} 1200w`,
    ].join(", ");
  };

  const effectiveSrc = (): string => {
    if (!useResponsive) return src;
    const filename = src.split("/").pop()?.split(".")[0];
    const extension = src.split(".").pop();
    const dir = src.substring(0, src.lastIndexOf("/"));
    if (!filename || !extension) return src;
    return `${dir}/${filename}_desktop.${extension}`;
  };

  return (
    <ImageContainer>
      <Image
        ref={imgRef}
        src={effectiveSrc()}
        alt={alt}
        loading={loading}
        decoding="async"
        srcSet={useResponsive ? generateSrcSet(src) : undefined}
        sizes={
          useResponsive
            ? "(max-width: 400px) 100vw, (max-width: 768px) 50vw, 33vw"
            : undefined
        }
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
        $isLoaded={imageLoaded}
      />
      {!imageLoaded && !imageError && <Placeholder />}
    </ImageContainer>
  );
};
