import { cn } from "@src/utils/cn";
import React from "react";
import type { ToasterProps } from "react-hot-toast";
import { Toaster as ToasterBase } from "react-hot-toast";

import * as cls from './Toaster.css';

export const Toaster: React.FC<ToasterProps> = ({ toastOptions, containerClassName, ...props }) => {
    return (
        <ToasterBase
            {...props}
            containerClassName={cn(containerClassName, cls.base)}
            toastOptions={{
                ...toastOptions,
                className: cn(toastOptions?.className, cls.toast)
            }}
        />
    );
};