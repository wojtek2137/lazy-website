import React from 'react';
import { Global, css } from '@emotion/react';
import outfitExtraLight from 'assets/fonts/Outfit-ExtraLight.woff2';
import outfitLight from 'assets/fonts/Outfit-Light.woff2';
import outfitMedium from 'assets/fonts/Outfit-Medium.woff2';
import outfitSemiBold from 'assets/fonts/Outfit-SemiBold.woff2';
type FontType = 'outfit_extralight' | 'outfit_light' | 'outfit_medium' | 'outfit_semibold';

const getFont = (font: FontType, src: string, weight: number): string => {
    return `
        @font-face {
            font-family: 'Outfit';
            src: url(${src}) format('woff2');
            font-weight: ${weight};
            font-style: normal;
            font-display: swap;
            unicode-range: U+0020-00FF, U+0100-017F, U+0180-024F, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
    `;
};

export const GlobalWrapper = (): JSX.Element => {
    return (
        <Global
            styles={css`
                /* Remove default focus for mouse users, keep for keyboard */
                *:focus {
                    outline: none;
                }
                
                /* WCAG 2.1 AAA compliant focus states for keyboard navigation */
                *:focus-visible {
                    outline: 3px solid #FFB800;
                    outline-offset: 3px;
                    border-radius: 4px;
                    transition: outline 0.2s ease;
                }
                * {
                    box-sizing: border-box;
                }

                ${getFont('outfit_extralight', outfitExtraLight, 200)};
                ${getFont('outfit_light', outfitLight, 300)};
                ${getFont('outfit_medium', outfitMedium, 500)};
                ${getFont('outfit_semibold', outfitSemiBold, 600)};
                
                html {
                    scroll-behavior: smooth;
                    scroll-padding-top: 80px;
                }
                
                body {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    background: #000000;
                    overflow-x: hidden;
                    /* Optymalizacje dla polskich znaków */
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                    font-feature-settings: "liga", "kern";
                    font-variant-ligatures: common-ligatures;
                }
                
                /* Enhanced scrollbar styling with new color system */
                ::-webkit-scrollbar {
                    width: 10px;
                }
                
                ::-webkit-scrollbar-track {
                    background: #000000;
                }
                
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #FFB800, #D4A017);
                    border-radius: 5px;
                    box-shadow: 0 0 12px rgba(255, 184, 0, 0.4);
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #D4A017, #FFB800);
                    box-shadow: 0 0 16px rgba(255, 184, 0, 0.6);
                }
                
                /* Screen reader only class */
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border: 0;
                }
                
                /* Image loading background - no more checkerboard */
                img {
                    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
                }
                
                /* Interactive elements minimum size - WCAG 2.1 AAA */
                button, a, input, select, textarea {
                    min-height: 44px;
                    min-width: 44px;
                    
                    @media (hover: hover) and (pointer: fine) {
                        /* Desktop - slightly smaller acceptable */
                        min-height: 40px;
                        min-width: 40px;
                    }
                }
                
                /* Reduced motion for accessibility */
                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                        scroll-behavior: auto !important;
                    }
                }
            `}
        />
    );
};
