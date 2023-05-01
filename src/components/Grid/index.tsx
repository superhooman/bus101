import React from "react";
import { cn } from "@src/utils/cn";

import * as cls from './Grid.css';
import { unit } from "@src/styles/unit";
import { breakpoint } from "@src/styles/main.css";

type Breakpoint = keyof typeof breakpoint;
type GridBreakpointColumns = Partial<Record<Breakpoint, number>>;

interface GridProps extends React.ComponentProps<'div'> {
    columns?: number | GridBreakpointColumns;
    gap?: number;
}

const fillValues = (columns: GridBreakpointColumns) => {
    const keys = Object.keys(breakpoint);
    const values = Object.values(columns);
    const lastValue = values[values.length - 1];

    return keys.reduce<GridBreakpointColumns>((acc, key) => {
        const breakpoint = key as Breakpoint;
        return {
            ...acc,
            [breakpoint]: columns[breakpoint] ?? lastValue,
        };
    }, {});
}

const getVariables = (columns: number | GridBreakpointColumns) => {
    if (typeof columns === 'number') {
        return {
            '--columns': columns,
        } as React.CSSProperties;
    }

    const filledColumns = fillValues(columns);

    return Object.entries(filledColumns).reduce((acc, [key, value]) => {
        return {
            ...acc,
            [`--columns-${key}`]: value,
        };
    }, {}) as React.CSSProperties;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    ({ columns = 1, gap = 0, className, style, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(className, cls.base)}
                style={{
                    ...style,
                    ...getVariables(columns),
                    gap: unit(gap),
                }}
                {...props}
            />
        )
    }
);

Grid.displayName = 'Grid';
