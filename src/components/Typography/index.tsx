import React from "react";
import { cn } from "@src/utils/cn";
import * as cls from "./Typography.css";

interface TitleProps extends React.ComponentProps<'h1'> {
    semanticLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: keyof typeof cls.size;
    color?: keyof typeof cls.color;
    align?: keyof typeof cls.align;
    truncate?: boolean;
}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
    ({ semanticLevel = 1, className, size = 'large', color = 'inherit', align, truncate = false, ...props }, ref) => {
        const Component = `h${semanticLevel}` as const;

        return (
            <Component
                ref={ref}
                className={
                    cn(
                        cls.base,
                        cls.title,
                        cls.size[size],
                        cls.color[color],
                        align && cls.align[align],
                        truncate && cls.truncate,
                        className,
                    )
                }
                {...props}
            />
        );
    }
);

Title.displayName = "Title";

type AllowedElements = 'span' | 'i' | 'em' | 'strong' | 'b' | 'small' | 'mark' | 'del' | 'ins' | 'sub' | 'sup' | 'a';

type TextProps<T extends AllowedElements = 'span'> = React.ComponentProps<T> & {
    size?: keyof typeof cls.size;
    color?: keyof typeof cls.color;
    align?: keyof typeof cls.align;
    truncate?: boolean;
    block?: boolean;
    as?: T;
}

const TextInner = <T extends AllowedElements = 'span'>(
    {
        className,
        size = 'medium',
        color = 'inherit',
        align,
        block,
        truncate = false,
        as = 'span' as T,
        ...props
    }: TextProps<T>,
    ref: React.ForwardedRef<React.ElementRef<T>>,
) => {
    const Component = as;

    return (
        <Component
            ref={ref}
            className={
                cn(
                    cls.base,
                    cls.text,
                    cls.color[color],
                    cls.size[size],
                    align && cls.align[align],
                    block && cls.block,
                    truncate && cls.truncate,
                    className,
                )
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...props as any}
        />
    )
}

export const Text = React.forwardRef(TextInner);

Text.displayName = "Text";
