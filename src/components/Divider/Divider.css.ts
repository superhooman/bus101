import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    margin: `${unit(4)} 0`,

    selectors: {
        '&::before, &::after': {
            content: "",
            display: 'block',
            flexGrow: 1,
            height: 1,
            backgroundColor: vars.color.neutral200,
        },
    }
});

export const noMargin = style({
    margin: 0,
});

export const content = style({
    textAlign: 'center',
    fontSize: vars.fontSize.small,
    color: vars.color.textSecondary,
    margin: `0 ${unit(2)}`,
    flexShrink: 0,
});
