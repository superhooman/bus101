import { cn } from "@src/utils/cn";
import React from "react";
import * as cls from './Container.css';

interface ContainerProps extends React.ComponentProps<'div'> {
    size?: keyof typeof cls.size;
    withPadding?: boolean;
    withPaddingY?: boolean;
    flexGrow?: boolean;
    flex?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({
        className,
        size = 'large',
        withPadding = true,
        withPaddingY = false,
        flex = false,
        flexGrow = false,
        ...props
    }, ref) => (
        <div
            className={
                cn(
                    cls.base,
                    cls.size[size],
                    withPadding && cls.withPadding,
                    withPaddingY && cls.withPaddingY,
                    flexGrow && cls.grow,
                    flex && cls.flex,
                    className
                )
            }
            ref={ref}
            {...props}
        />
    )
);

Container.displayName = "Container";