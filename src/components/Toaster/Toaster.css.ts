import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({});

export const toast = style({
    color: vars.color.text,
    backgroundColor: vars.color.white,
    border: '1px solid',
    borderColor: vars.color.neutral200,
    borderRadius: vars.radius.lg,
    fontSize: vars.fontSize.base,

    selectors: {
        [`${base} &`]: {
            boxShadow: 'none',
            padding: `${unit(1.5)} ${unit(2.5)}`,
        }
    }
});
