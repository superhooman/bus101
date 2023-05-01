import { cn } from "@src/utils/cn";
import React from "react";
import { Loader } from "../Loader";

import * as cls from "./Button.css";

interface ButtonProps extends React.ComponentProps<'button'> {
    icon?: React.ReactNode;
    iconRight?: React.ReactNode;
    variant?: keyof typeof cls.variant;
    size?: keyof typeof cls.size;
    fullWidth?: boolean;
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        size = 'medium',
        variant = 'default',
        fullWidth = false,
        isLoading = false,
        icon: propsIcon,
        iconRight: propsIconRight,
        children,
        className,
        disabled,
        ...props
    }, ref) => {
        const icon = React.useMemo(() => {
            if (isLoading) {
                return <Loader size={size} />;
            }
            if (propsIcon) {
                return React.cloneElement(
                    propsIcon as React.ReactElement,
                    {
                        className: cls.icon,
                    }
                );
            }
            return null;
        }, [propsIcon, isLoading, size]);

        const iconRight = React.useMemo(() => {
            if (propsIconRight) {
                return React.cloneElement(
                    propsIconRight as React.ReactElement,
                    {
                        className: cls.icon,
                    }
                );
            }
            return null;
        }, [propsIconRight]);

        return (
            <button
                ref={ref}
                className={cn(
                    className,
                    cls.base,
                    cls.variant[variant],
                    cls.size[size],
                    fullWidth && cls.fullWidth,
                    isLoading && cls.isLoading,
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {icon}
                {children && <span>{children}</span>}
                {iconRight}
            </button>
        )
    }
);

Button.displayName = 'Button';
