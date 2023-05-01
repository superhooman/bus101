import React from "react";
import { cn } from "@src/utils/cn";

import * as cls from './Select.css';
import { Loader } from "../Loader";
import { CaretSortIcon } from "@radix-ui/react-icons";

interface Option {
    value: string;
    label: string;
}

interface SelectProps extends Omit<React.ComponentProps<'select'>, 'size'> {
    icon?: React.ReactNode;
    label?: React.ReactNode;
    isLoading?: boolean;
    size?: keyof typeof cls.size;
    fullWidth?: boolean;
    error?: boolean | string;
    options?: Option[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({
        icon: propsIcon,
        label,
        size = 'medium',
        isLoading = false,
        className,
        id: propsId,
        fullWidth = false,
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
                    <select
                        ref={ref}
                        className={cn(cls.select, icon && cls.withIcon)}
                        id={id}
                        required={required}
                        {...props}
                    >
                        {props.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className={cls.chevron}>
                        <CaretSortIcon className={cls.icon} />
                    </div>
                </div>
                {error && <div className={cls.error}>{error}</div>}
            </div>
        )
    }
);

Select.displayName = 'Select';
