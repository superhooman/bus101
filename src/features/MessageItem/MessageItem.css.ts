import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const body = style({
    fontSize: vars.fontSize.base,
    backgroundColor: vars.color.neutral100,
    padding: `${unit(2)} ${unit(3)}`,
    borderRadius: vars.radius.lg,
});

export const user = style({
    maxWidth: unit(64),
});

export const bot = style({
    marginRight: unit(13),
    maxWidth: unit(96),
});

