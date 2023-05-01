import clsx from 'clsx';

import * as cls from './Divider.css';

type Props = React.ComponentProps<'div'> & {
    noMargin?: boolean;
};

export const Divider: React.FC<Props> = ({ className, children, noMargin, ...props }) => (
    <div role="separator" className={clsx(cls.base, noMargin && cls.noMargin, className)} {...props}>
        {children ? <span className={cls.content}>{children}</span> : null}
    </div>
);
