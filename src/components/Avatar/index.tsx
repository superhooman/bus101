import React from 'react';
import * as AvatarBase from '@radix-ui/react-avatar';
import { cn } from '@src/utils/cn';
import * as cls from './Avatar.css';

interface AvatarProps {
    img?: string | null;
    name?: string | null;
    size?: keyof typeof cls.size;
}

const getInitials = (name: string) => {
    const [firstName, lastName] = name.split(' ');
    return `${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`;
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(({ img, name, size = 'medium' }, ref) => {
    return (
        <AvatarBase.Root
            className={cn(
                cls.base,
                cls.size[size],
            )}
            ref={ref}
        >
            <AvatarBase.Image
                className={cls.image}
                src={img ?? ''}
                alt={name ?? 'Avatar'}
            />
            <AvatarBase.Fallback className={cls.initials} delayMs={600}>
                {getInitials(name ?? '')}
            </AvatarBase.Fallback>
        </AvatarBase.Root>
    )
});

Avatar.displayName = 'Avatar';
