import React from 'react';
import { cn, type ClassValue } from '@src/utils/cn';

export const withClassName = <T extends { className?: string }>(Component: React.ComponentType<T>, classNames: ClassValue) => {
  const ComponentWithClassName = (props: T) => (
    <Component {...props} className={cn(props.className, classNames)} />
  );

  return ComponentWithClassName;
};
