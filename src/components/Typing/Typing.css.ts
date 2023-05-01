import { vars } from "@src/styles/main.css";
import { unit } from "@src/styles/unit";
import { keyframes, style } from "@vanilla-extract/css";

const animation = keyframes({
    '0%': {
        opacity: 0.4,
    },
    '50%': {
        opacity: 1,
    },
    '100%': {
        opacity: 0.4,
    },
});

export const item = style({
    height: unit(2),
    width: unit(2),
    borderRadius: '50%',
    backgroundColor: vars.color.neutral400,
    animationName: animation,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',

    selectors: {
        '&:nth-child(1)': {
            animationDelay: '0s',
        },
        '&:nth-child(2)': {
            animationDelay: '0.333s',
        },
        '&:nth-child(3)': {
            animationDelay: '0.666s',
        },
    }
});
