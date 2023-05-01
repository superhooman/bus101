import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
    padding: `${unit(1)} ${unit(1.5)}`,
    boxShadow: `0 -1px 0 0 ${vars.color.neutral200}`,
    backgroundColor: vars.color.white,
    zIndex: 100,
});
