import { FontTypes } from './fontTypes';
import { ColorPaletteTypes } from './colorPaletteTypes';

export const colors: ColorPaletteTypes = {
    primary: {
        white: '#FFFFFF',
        black: '#000000',
        darkGrey: '#242424',
        gold: '#f5cb5c',
        yellow: '#daa61d',
        sandy: '#e7d197',
        P75: '#C8A0FF',
        P100: '#B178FF',
        P200: '#8F3EFF',
        P300: '#7817FF',
        P400: '#5410B3',
        P500: '#490E9C'
    },
    secondary: {
        S300: '#01F1E3',
        S400: '#01A99F',
        S500: '#01938A',
        DP100: '#0D0D21',
        DP200: '#151524',
        DP300: '#1B1B2E',
        DP400: '#1D1F40',
        DP500: '#151632'

    },
    neutrals: {
        N0: '#FFFFFF',
        N10: '#FAFAFA',
        N20: '#F5F5F5',
        N30: '#EBEBEC',
        N40: '#DFDFE0',
        N50: '#C2C2C3',
        N60: '#B3B3B4',
        N70: '#A7A7A8',
        N80: '#999999',
        N90: '#8A8A8B',
        N100: '#7B7B7C',
        N200: '#6D6D6E',
        N300: '#5E5E5F',
        N400: '#525253',
        N500: '#434345',
        N600: '#373739',
        N700: '#262628',
        N800: '#171719',
        N900: '#0B0B0D'
    },
    opacity: {
        Light8: '#FFFFFF1f',
        Light12: '#FFFFFF1f',
        Light24: '#FFFFFF3d',
        Light40: '#FFFFFF66',
        Light56: '#FFFFFF8f',
        Light72: '#FFFFFFb8',
        Dark8: '#0B0B0D14',
        Dark12: '#0B0B0D1f',
        Dark24: '#0B0B0D3d',
        Dark40: '#0B0B0D66',
        Dark56: '#0B0B0D8f',
        Dark72: '#0B0B0Db8'
    },
    feedback: {
        Success: '#00C853',
        SuccessLight: '#00C8533d',
        Attention: '#FF9100',
        AttentionLight: '#FF91003d',
        Error: '#FF1744',
        ErrorLight: '#FF174452',
        Link: '#6200EA'
    },
    gradients: {
        Purple: '159.13deg, #9D3FE7 -24.13%, #602093 132.21%',
        DarkUltramarine: '159.13deg, #9D3FE7 -24.13%, #602093 132.21%',
        LightBruise: '159.13deg, #9D3FE7 -24.13%, #602093 132.21%',
        SoftPuple: '159.13deg, #9D3FE7 -24.13%, #602093 132.21% '
    }

};

export const fonts: FontTypes = {
    outfit: {
        ExtraLight: 'Outfit',
        Light: 'Outfit',
        Medium: 'Outfit',
        SemiBold: 'Outfit',
    }
};

// Optimized font stack with proper fallbacks - Outfit 2024
export const fontStacks = {
    primary: `'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif`,
    fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif`
};

// Font mixins with proper weights and fallbacks - Only used weights
export const fontMixins = {
    extraLight: `
        font-family: ${fontStacks.primary};
        font-weight: 200;
        font-optical-sizing: auto;
        line-height: 1.7;
        letter-spacing: 0.01em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    `,
    light: `
        font-family: ${fontStacks.primary};
        font-weight: 300;
        font-optical-sizing: auto;
        line-height: 1.6;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    `,
    medium: `
        font-family: ${fontStacks.primary};
        font-weight: 500;
        font-optical-sizing: auto;
        line-height: 1.5;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    `,
    semiBold: `
        font-family: ${fontStacks.primary};
        font-weight: 600;
        font-optical-sizing: auto;
        line-height: 1.4;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    `
};
