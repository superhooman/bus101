import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    color: {
        white: '#fff',
        black: '#000',

        neutral50: '#fafafa',
        neutral100: '#f5f5f5',
        neutral200: '#e5e5e5',
        neutral300: '#d4d4d4',
        neutral400: '#a3a3a3',
        neutral500: '#737373',
        neutral600: '#525252',
        neutral700: '#404040',
        neutral800: '#262626',
        neutral900: '#171717',

        danger50: '#fff0f0',
        danger100: '#ffdddd',
        danger200: '#ffc1c1',
        danger300: '#ff9696',
        danger400: '#ff5a5a',
        danger500: '#ff2727',
        danger600: '#fb0707',
        danger700: '#da0101',
        danger800: '#af0505',
        danger900: '#900c0c',

        text: '#171717',
        textSecondary: '#a3a3a3',
    },
    radius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '1rem',
        full: '9999px',
    },
    fontSize: {
        xSmall: '0.625rem',
        small: '0.75rem',
        base: '0.875rem',
        large: '1.125rem',
        xLarge: '1.5rem',
    },
    lineHeight: {
        small: '0.875rem',
        base: '1.125rem',
        large: '1.75rem',
    },
    fontWeight: {
        normal: '400',
        bold: '500',
        extraBold: '600',
    },
});

export const breakpoint = {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
};

globalStyle('body', {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    backgroundColor: vars.color.white,
    color: vars.color.text,
});

globalStyle('html, body', {
    height: '100%',
});

globalStyle('#__next', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
});
