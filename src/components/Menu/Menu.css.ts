import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({
    zIndex: 101,
    backgroundColor: vars.color.white,
    borderRadius: vars.radius.lg,
    padding: unit(1),
    border: `1px solid ${vars.color.neutral200}`,
    minWidth: unit(30),
    transformOrigin: 'top right',
});

export const icon = style({
    height: unit(4),
    width: unit(4),
});

export const item = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: unit(8),
    fontSize: vars.fontSize.base,
    borderRadius: vars.radius.md,
    cursor: 'default',
    padding: `0 ${unit(3)}`,

    selectors: {
        '&:focus, &:active': {
            backgroundColor: vars.color.neutral800,
            color: vars.color.white,
        },
    },
});

export const label = style({
    padding: `0 ${unit(3)}`,
    fontSize: vars.fontSize.small,
    lineHeight: vars.lineHeight.small,
});

export const rightSlot = style({
    marginLeft: 'auto',
    paddingLeft: unit(5),
    fontSize: vars.fontSize.small,
    lineHeight: 1,
    color: vars.color.textSecondary,

    selectors: {
        [`${item}:focus &, ${item}:active &`]: {
            color: vars.color.white,
        }
    }
});

export const indicator = style({
    position: 'absolute',
    left: 0,
    width: unit(6),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const separator = style({
    height: 1,
    backgroundColor: vars.color.neutral200,
    margin: unit(1),
});
