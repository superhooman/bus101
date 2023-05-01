import { breakpoint } from '@src/styles/main.css';
import { style } from '@vanilla-extract/css';

export const base = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--columns-lg, var(--columns)), 1fr)',

    '@media': {
        [`screen and (max-width: ${breakpoint.md})`]: {
            gridTemplateColumns: 'repeat(var(--columns-md, var(--columns)), 1fr)',
        },
        [`screen and (max-width: ${breakpoint.sm})`]: {
            gridTemplateColumns: 'repeat(var(--columns-sm, var(--columns)), 1fr)',
        },
        [`screen and (max-width: ${breakpoint.xs})`]: {
            gridTemplateColumns: 'repeat(var(--columns-xs, var(--columns)), 1fr)',
        },
    }
});
