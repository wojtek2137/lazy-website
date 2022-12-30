import React from 'react';
import { Global, css } from '@emotion/react';
import poppinsRegular from 'src/assets/fonts/poppins-regular-webfont.woff2';
import poppinsMedium from 'src/assets/fonts/poppins-medium-webfont.woff2';
import poppinsBold from 'src/assets/fonts/poppins-bold-webfont.woff2';
import poppinsExtraBold from 'src/assets/fonts/poppins-extrabold-webfont.woff2';
import ropaSans from 'src/assets/fonts/ropasans-regular-webfont.woff2';

const getFont = (font: string, src: string): string => {
    return `
        @font-face {
            font-family: '${font}';
            src: url(${src}) format('woff2');
            font-weight: normal;
            font-style: normal;
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

                ${getFont('poppins_regular', poppinsRegular)};
                ${getFont('poppins_medium', poppinsMedium)};
                ${getFont('poppins_bold', poppinsBold)};
                ${getFont('poppins_extrabold', poppinsExtraBold)};
                ${getFont('ropa_sans', ropaSans)};

                body {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
            `}
        />
    );
};
