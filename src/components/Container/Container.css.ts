import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({
    margin: '0 auto',
    width: '100%',
});

export const withPadding = style({
    padding: `0 ${unit(4)}`,
});

export const withPaddingY = style({
    padding: `${unit(4)} 0`,
    selectors: {
        [`${withPadding}&`]: {
            padding: `${unit(4)}`,
        },
    }
});

export const size = {
    small: style({
        maxWidth: 320,
    }),
    medium: style({
        maxWidth: 640,
    }),
    large: style({
        maxWidth: 1024,
    }),
    noLimit: style({
        maxWidth: 'none',
    }),
};

export const flex = style({
    display: 'flex',
    flexDirection: 'column',
});

export const grow = style({
    flexGrow: 1,
});
