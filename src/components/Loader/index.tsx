import { cn } from "@src/utils/cn";
import React from "react";
import * as cls from "./Loader.css";

interface LoaderProps extends React.ComponentProps<'span'> {
    size?: keyof typeof cls.size;
}

export const Loader = React.forwardRef<HTMLSpanElement, LoaderProps>(({ size = 'medium', className, ...props }, ref) => (
    <span
        ref={ref}
        className={cn(
            className,
            cls.base,
            cls.size[size],
        )}
        {...props}
    >
        <svg className={cls.rotating} viewBox="0 0 16 16" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor">
                <path d="M8 0v4"/>
                <path d="m12 1.07-2 3.47" strokeOpacity=".95"/>
                <path d="m14.93 4-3.47 2" strokeOpacity=".9"/>
                <path d="M16 8h-4" strokeOpacity=".85"/>
                <path d="m14.93 12-3.47-2" strokeOpacity=".8"/>
                <path d="m12 14.93-2-3.47" strokeOpacity=".75"/>
                <path d="M8 16v-4" strokeOpacity=".7"/>
                <path d="m4 14.93 2-3.47" strokeOpacity=".65"/>
                <path d="m1.07 12 3.47-2" strokeOpacity=".6"/>
                <path d="M0 8h4" strokeOpacity=".55"/>
                <path d="m1.07 4 3.47 2" strokeOpacity=".5"/>
                <path d="m4 1.07 2 3.47" strokeOpacity=".45"/>
            </g>
        </svg>
    </span>
));

Loader.displayName = 'Loader';
