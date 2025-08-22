import React from 'react';
import { Global, css } from '@emotion/react';
import mulishLight from 'assets/fonts/mulish-light.woff2';
import mulishRegular from 'assets/fonts/mulish-regular.woff2';
import mulishMedium from 'assets/fonts/mulish-medium.woff2';
import mulishBold from 'assets/fonts/mulish-bold.woff2';
import mulishExtraBold from 'assets/fonts/mulish-extra-bold.woff2';
type FontType = 'mulish_light' | 'mulish_regular' | 'mulish_medium' | 'mulish_bold' | 'mulish_extra_bold';

const getFont = (font: FontType, src: string): string => {
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

                ${getFont('mulish_light', mulishLight)};
                ${getFont('mulish_regular', mulishRegular)};
                ${getFont('mulish_medium', mulishMedium)};
                ${getFont('mulish_bold', mulishBold)};
                ${getFont('mulish_extra_bold', mulishExtraBold)};
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
