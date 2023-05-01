import React from 'react';

import { unit } from '@src/styles/unit';
import { cn } from '@src/utils/cn';

import * as cls from './Stack.css';

type AllowedElements = 'div' | 'form' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'aside';

type StackProps<T extends AllowedElements = 'div'> = React.ComponentProps<T> & {
  direction?: keyof typeof cls.direction;
  align?: keyof typeof cls.align;
  justify?: keyof typeof cls.justify;
  wrap?: boolean;
  gap?: number;
  flexGrow?: boolean;
  fullWidth?: boolean;
  truncate?: boolean;
  as?: T;
}

const StackInner = <T extends AllowedElements = 'div'>(
  {
    direction = 'row',
    align = 'center',
    justify = 'center',
    wrap = false,
    gap = 0,
    flexGrow = false,
    fullWidth = false,
    className,
    truncate,
    as = 'div' as T,
    style,
    ...props
  }: StackProps<T>,
  ref: React.ForwardedRef<React.ElementRef<T>>,
): React.ReactElement => {
  const Component = as;
  return (
    <Component
      ref={ref}
      className={cn(
        cls.base,
        cls.direction[direction],
        cls.align[align],
        cls.justify[justify],
        flexGrow && cls.grow,
        wrap && cls.wrap,
        fullWidth && cls.fullWidth,
        truncate && cls.truncate,
        className,
      )}
      style={{
        gap: unit(gap),
        ...style,
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...props as any}
    />
  );
};

export const Stack = React.forwardRef(StackInner);

Stack.displayName = 'Stack';
