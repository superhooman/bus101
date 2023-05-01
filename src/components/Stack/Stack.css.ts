import { style } from '@vanilla-extract/css';

export const base = style({
    display: 'flex',
});

export const direction = {
    row: style({
        flexDirection: 'row',
    }),
    column: style({
        flexDirection: 'column',
    }),
    rowReverse: style({
        flexDirection: 'row-reverse',
    }),
    columnReverse: style({
        flexDirection: 'column-reverse',
    }),
};

export const align = {
    start: style({
        alignItems: 'flex-start',
    }),
    end: style({
        alignItems: 'flex-end',
    }),
    center: style({
        alignItems: 'center',
    }),
    stretch: style({
        alignItems: 'stretch',
    }),
};

export const justify = {
    start: style({
        justifyContent: 'flex-start',
    }),
    end: style({
        justifyContent: 'flex-end',
    }),
    center: style({
        justifyContent: 'center',
    }),
    between: style({
        justifyContent: 'space-between',
    }),
    around: style({
        justifyContent: 'space-around',
    }),
};

export const wrap = style({
    flexWrap: 'wrap',
});

export const grow = style({
    flexGrow: 1,
});

export const fullWidth = style({
    width: '100%',
});

export const truncate = style({
    minWidth: 0,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});
