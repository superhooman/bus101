import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: vars.radius.full,
    backgroundColor: vars.color.neutral300,
});

export const size = {
    small: style({
        width: unit(8),
        height: unit(8),
    }),
    medium: style({
        width: unit(9),
        height: unit(9),
    }),
    large: style({
        width: unit(16),
        height: unit(16),
    }),
};

export const image = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const initials = style({
    display: 'flex',
    width: '100%',
    height: '100%',
    color: vars.color.white,
    backgroundColor: vars.color.neutral500,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    userSelect: 'none',
    fontWeight: vars.fontWeight.bold,
    cursor: 'default',

    selectors: {
        [`${size.small} &`]: {
            fontSize: vars.fontSize.small,
        },
        [`${size.medium} &`]: {
            fontSize: vars.fontSize.base,
        },
        [`${size.large} &`]: {
            fontSize: vars.fontSize.xLarge,
        },
    }
});
