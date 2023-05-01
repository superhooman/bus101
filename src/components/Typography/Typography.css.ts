import { vars } from '@src/styles/main.css';
import { style } from '@vanilla-extract/css';

export const base = style({
    fontFamily: 'inherit',
});

export const size = {
    small: style({}),
    medium: style({}),
    large: style({}),
};

export const align = {
    left: style({
        textAlign: 'left',
    }),
    center: style({
        textAlign: 'center',
    }),
    right: style({
        textAlign: 'right',
    }),
};

export const title = style({
    fontWeight: vars.fontWeight.extraBold,
    selectors: {
        [`${size.small}&`]: {
            fontSize: vars.fontSize.base,
        },
        [`${size.medium}&`]: {
            fontSize: vars.fontSize.large,
        },
        [`${size.large}&`]: {
            fontSize: vars.fontSize.xLarge,
        },
    },
});

export const text = style({
    selectors: {
        [`${size.small}&`]: {
            fontSize: vars.fontSize.small,
        },
        [`${size.medium}&`]: {
            fontSize: vars.fontSize.base,
        },
        [`${size.large}&`]: {
            fontSize: vars.fontSize.large,
        },
    },
});

export const color = {
    primary: style({
        color: vars.color.text,
    }),
    secondary: style({
        color: vars.color.textSecondary,
    }),
    inherit: style({
        color: 'inherit',
    }),
    error: style({
        color: vars.color.danger500,
    }),
};

export const block = style({
    display: 'block',
    width: '100%',
});

export const truncate = style({
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});
