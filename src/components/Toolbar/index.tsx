import { cn } from "@src/utils/cn";
import * as cls from './Toolbar.css';

export const Toolbar: React.FC<React.ComponentProps<'div'>> = ({
    className,
    ...props
}) => (
    <div className={cn(className, cls.base)} {...props} />
);
