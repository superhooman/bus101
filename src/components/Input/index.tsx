import React from "react";
import { cn } from "@src/utils/cn";

import * as cls from './Input.css';
import { Loader } from "../Loader";

interface BaseProps {
    label?: React.ReactNode;
    size?: keyof typeof cls.size;
    fullWidth?: boolean;
    error?: boolean | string;
}

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & BaseProps & {
    icon?: React.ReactNode;
    isLoading?: boolean;
    suffix?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({
        icon: propsIcon,
        label,
        size = 'medium',
        isLoading = false,
        className,
        id: propsId,
        fullWidth = false,
        suffix,
        error,
        required,
        ...props
    }, ref) => {
        const reactId = React.useId();
        const id = propsId || reactId;

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

        return (
            <div
                className={
                    cn(
                        className,
                        cls.base,
                        cls.size[size],
                        error ? cls.errored : null,
                        fullWidth && cls.fullWidth,
                    )}
            >
                {label && (
                    <label htmlFor={id} className={cls.label}>
                        {label}
                        {required && <span className={cls.required}>*</span>}
                    </label>
                )}
                <div className={cls.content}>
                    {icon && <div className={cls.iconWrapper}>{icon}</div>}
                    <input
                        ref={ref}
                        className={cn(cls.input, icon && cls.withIcon, suffix && cls.withSuffix)}
                        id={id}
                        required={required}
                        {...props}
                    />
                    {suffix && <div className={cls.suffix}>{suffix}</div>}
                </div>
                {error && <div className={cls.error}>{error}</div>}
            </div>
        )
    }
);

Input.displayName = 'Input';

type TextAreaProps = React.ComponentProps<'textarea'> & BaseProps;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({
        label,
        size = 'medium',
        className,
        id: propsId,
        fullWidth = false,
        error,
        required,
        ...props
    }, ref) => {
        const reactId = React.useId();
        const id = propsId || reactId;

        return (
            <div
                className={
                    cn(
                        className,
                        cls.base,
                        cls.size[size],
                        error ? cls.errored : null,
                        fullWidth && cls.fullWidth,
                    )}
            >
                {label && (
                    <label htmlFor={id} className={cls.label}>
                        {label}
                        {required && <span className={cls.required}>*</span>}
                    </label>
                )}
                <div className={cls.content}>
                    <textarea
                        ref={ref}
                        className={cn(cls.input)}
                        id={id}
                        required={required}
                        {...props}
                    />
                </div>
                {error && <div className={cls.error}>{error}</div>}
            </div>
        )
    }
);

TextArea.displayName = 'TextArea';
