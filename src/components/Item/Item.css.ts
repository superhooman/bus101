import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({
    borderRadius: vars.radius.lg,
    backgroundColor: vars.color.white,
    width: '100%',
    position: 'relative',
    ':hover': {
        backgroundColor: vars.color.neutral50,
    }
});

export const imgWrapper = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '0.88',
});

export const imgSpacer = style({
    width: '62%',
    aspectRatio: '1 / 1',
    position: 'absolute',
    zIndex: 1,
    transition: 'transform 0.2s ease-in-out',

    selectors: {
        [`${base}:hover &`]: {
            transform: 'translateY(-8px)',
        }
    }
});

export const img = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: vars.radius.lg,
});

export const info = style({
    position: 'absolute',
    left: unit(4),
    right: unit(4),
    bottom: unit(4),
    zIndex: 2,
});

export const link = style({
});

export const extra = style({
    position: 'absolute',
    top: unit(4),
    right: unit(4),
    zIndex: 2,
});
