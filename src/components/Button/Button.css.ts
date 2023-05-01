import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid transparent',
});

export const size = {
    small: style({
        fontSize: vars.fontSize.small,
        lineHeight: vars.lineHeight.small,
        height: unit(7),
        padding: `${unit(1.5)} ${unit(2)}`,
        gap: unit(1),
        borderRadius: vars.radius.md,
    }),
    medium: style({
        fontSize: vars.fontSize.base,
        lineHeight: vars.lineHeight.base,
        height: unit(9),
        padding: `${unit(2)} ${unit(2.5)}`,
        gap: unit(1.5),
        borderRadius: vars.radius.lg,
    }),
    large: style({
        fontSize: vars.fontSize.base,
        lineHeight: vars.lineHeight.base,
        height: unit(10),
        padding: `${unit(2.5)} ${unit(3)}`,
        gap: unit(1.5),
        borderRadius: vars.radius.lg,
    }),
};

export const variant = {
    default: style({
        backgroundColor: vars.color.white,
        color: vars.color.neutral800,
        borderColor: vars.color.neutral300,
        fontWeight: vars.fontWeight.bold,
        ':hover': {
            backgroundColor: vars.color.neutral100,
        },
        ':active': {
            backgroundColor: vars.color.neutral200,
        },
        ':focus': {
            boxShadow: `0 0 0 3px ${vars.color.neutral200}`,
        }
    }),
    primary: style({
        backgroundColor: vars.color.neutral800,
        color: vars.color.neutral100,
        fontWeight: vars.fontWeight.bold,
        ':hover': {
            backgroundColor: vars.color.neutral700,
        },
        ':active': {
            backgroundColor: vars.color.neutral600,
        },
        ':focus': {
            boxShadow: `0 0 0 3px ${vars.color.neutral200}`,
        }
    }),
}

export const icon = style({
    display: 'block',
    selectors: {
        [`${size.small} &`]: {
            width: unit(3),
            height: unit(3),
        },
        [`${size.medium} &`]: {
            width: unit(3.5),
            height: unit(3.5),
        },
        [`${size.large} &`]: {
            width: unit(4),
            height: unit(4),
        },
    }
});

export const fullWidth = style({
    display: 'flex',
    width: '100%',
});

export const isLoading = style({
    cursor: 'wait'
});
