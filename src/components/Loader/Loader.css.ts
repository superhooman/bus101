import { unit } from '@src/styles/unit';
import { style, keyframes } from '@vanilla-extract/css';

const rotate = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
});

export const base = style({
    display: 'inline-block',
});

export const rotating = style({
    display: 'block',
    animationName: rotate,
    animationDuration: '1.2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'steps(12)',
});

export const size = {
    small: style({
        width: unit(3),
        height: unit(3),
    }),
    medium: style({
        width: unit(3.5),
        height: unit(3.5),
    }),
    large: style({
        width: unit(4),
        height: unit(4),
    }),
};
