import { vars } from '@src/styles/main.css';
import { unit } from '@src/styles/unit';
import { style } from '@vanilla-extract/css';

export const base = style({
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: unit(1),
});

export const errored = style({});

export const fullWidth = style({
    width: '100%',
});

export const size = {
    small: style({}),
    medium: style({}),
    large: style({}),
};

export const iconWrapper = style({
    position: 'absolute',
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    selectors: {
        [`${size.small} &`]: {
            paddingLeft: unit(2),
        },
        [`${size.medium} &`]: {
            paddingLeft: unit(2.5),
        },
        [`${size.large} &`]: {
            paddingLeft: unit(3),
        },
    }
});

export const suffix = style({
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    color: vars.color.textSecondary,
    selectors: {
        [`${size.small} &`]: {
            paddingRight: unit(2),
            fontSize: vars.fontSize.small,
        },
        [`${size.medium} &`]: {
            paddingRight: unit(2.5),
            fontSize: vars.fontSize.base,
        },
        [`${size.large} &`]: {
            paddingRight: unit(3),
            fontSize: vars.fontSize.base,
        },
        [`${errored} &`]: {
            color: vars.color.danger500,
        }
    }
});

export const icon = style({
    display: 'block',
    color: vars.color.neutral500,
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
        [`${errored} &`]: {
            color: vars.color.danger500,
        }
    }
});

export const label = style({
    color: vars.color.neutral500,
    fontWeight: vars.fontWeight.bold,
    selectors: {
        [`${size.small} &`]: {
            fontSize: vars.fontSize.xSmall,
        },
        [`${size.medium} &`]: {
            fontSize: vars.fontSize.small,
        },
        [`${size.large} &`]: {
            fontSize: vars.fontSize.small,
        },
        [`${errored} &`]: {
            color: vars.color.danger500,
        }
    }
});

export const required = style({
    color: vars.color.danger500,
    marginLeft: unit(0.5),
});

export const input = style({
    width: '100%',
    fontSize: vars.fontSize.base,
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderColor: vars.color.neutral300,
    '::placeholder': {
        color: vars.color.neutral400,
    },
    ':focus': {
        boxShadow: `0 0 0 3px ${vars.color.neutral200}`,
    },
    selectors: {
        'textarea&': {
            resize: 'vertical',
        },
        [`${size.small} &`]: {
            fontSize: vars.fontSize.small,
            lineHeight: vars.lineHeight.small,
            padding: `${unit(1.5)} ${unit(2)}`,
            gap: unit(1),
            borderRadius: vars.radius.md,
            minHeight: unit(7),
        },
        [`${size.medium} &`]: {
            fontSize: vars.fontSize.base,
            lineHeight: vars.lineHeight.base,
            padding: `${unit(2)} ${unit(2.5)}`,
            gap: unit(1.5),
            borderRadius: vars.radius.lg,
            minHeight: unit(9),
        },
        [`${size.large} &`]: {
            fontSize: vars.fontSize.base,
            lineHeight: vars.lineHeight.base,
            padding: `${unit(2.5)} ${unit(3)}`,
            gap: unit(1.5),
            borderRadius: vars.radius.lg,
            minHeight: unit(10),
        },
        [`${errored} &`]: {
            borderColor: vars.color.danger500,
            color: vars.color.danger500,
        }
    }
});

export const error = style({
    color: vars.color.danger500,
    selectors: {
        [`${size.small} &`]: {
            fontSize: vars.fontSize.xSmall,
        },
        [`${size.medium} &`]: {
            fontSize: vars.fontSize.small,
        },
        [`${size.large} &`]: {
            fontSize: vars.fontSize.small,
        },
    }
});

export const withIcon = style({
    selectors: {
        [`${size.small} &`]: {
            paddingLeft: unit(6),
        },
        [`${size.medium} &`]: {
            paddingLeft: unit(8),
        },
        [`${size.large} &`]: {
            paddingLeft: unit(9),
        },
    }
});

export const withSuffix = style({
    selectors: {
        [`${size.small} &`]: {
            paddingRight: unit(6),
        },
        [`${size.medium} &`]: {
            paddingRight: unit(8),
        },
        [`${size.large} &`]: {
            paddingRight: unit(9),
        },
    }
});

export const content = style({
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
});
