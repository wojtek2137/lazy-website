import React from 'react';
import { Global, css } from '@emotion/react';
import mulishLight from 'assets/fonts/mulish-light.woff2';
import mulishRegular from 'assets/fonts/mulish-regular.woff2';
import mulishMedium from 'assets/fonts/mulish-medium.woff2';
import mulishBold from 'assets/fonts/mulish-bold.woff2';
import mulishExtraBold from 'assets/fonts/mulish-extra-bold.woff2';
type FontType = 'mulish_light' | 'mulish_regular' | 'mulish_medium' | 'mulish_bold' | 'mulish_extra_bold';

const getFont = (font: FontType, src: string, weight: number): string => {
    return `
        @font-face {
            font-family: 'Mulish';
            src: url(${src}) format('woff2');
            font-weight: ${weight};
            font-style: normal;
            font-display: swap;
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
    `;
};

export const GlobalWrapper = (): JSX.Element => {
    return (
        <Global
            styles={css`
                *:focus {
                outline: none;
                }
                * {
                    box-sizing: border-box;
                }

                ${getFont('mulish_light', mulishLight, 300)};
                ${getFont('mulish_regular', mulishRegular, 400)};
                ${getFont('mulish_medium', mulishMedium, 500)};
                ${getFont('mulish_bold', mulishBold, 700)};
                ${getFont('mulish_extra_bold', mulishExtraBold, 800)};
                
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
                }
                
                /* Enhanced scrollbar styling */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                
                ::-webkit-scrollbar-track {
                    background: #000000;
                }
                
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #f5cb5c, #daa61d);
                    border-radius: 4px;
                    box-shadow: 0 0 10px rgba(245, 203, 92, 0.3);
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #daa61d, #f5cb5c);
                    box-shadow: 0 0 15px rgba(245, 203, 92, 0.5);
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
                
                /* Focus improvements */
                *:focus-visible {
                    outline: 2px solid #f5cb5c;
                    outline-offset: 2px;
                    border-radius: 4px;
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
