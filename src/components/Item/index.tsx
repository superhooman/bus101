import { cn } from '@src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { Stack } from '../Stack';
import { Text } from '../Typography';
import * as cls from './Item.css';

interface ItemProps {
    image: string;
    name: string;
    href?: string;

    extra?: React.ReactNode;
    className?: string;
}

export const Item: React.FC<ItemProps> = ({
    image,
    name,
    extra,
    className,
}) => {
    // const destination = href ?? '#';
    // const isExternal = href?.startsWith('http');
    // const target = isExternal ? '_blank' : undefined;

    return (
        <div className={cn(cls.base, className)}>
            <div className={cls.imgWrapper}>
                <div className={cls.imgSpacer}>
                    <Image src={image} className={cls.img} fill alt={name} />
                </div>
            </div>
            <Stack
                direction="column"
                gap={1}
                className={cls.info}
                align="start"
            >
                {/* <Text color="secondary" size="small">{brand}</Text> */}
                <Stack fullWidth align="start" justify="between" gap={4}>
                    <Text truncate className={cls.link}>{name}</Text>
                </Stack>
            </Stack>
            {extra && <div className={cls.extra}>{extra}</div>}
        </div>
    )
};
