import React, { type HTMLAttributes, type ReactNode } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@src/utils/cn';

import { withClassName } from '../_hocs/withClassName';
import { Stack } from '../Stack';
import * as cls from './Menu.css';

export const withIcon = <T extends { children?: ReactNode }>(Component: React.ComponentType<T>) => {
  const ComponentWithClassName = (props: T & { icon: ReactNode }) => {
    const { icon, children } = props;
    const omittedProps = { ...props };

    delete omittedProps.icon;
    delete omittedProps.children;

    return (
      <Component {...omittedProps}>
        <Stack gap={2} align="center">
          <div className={cls.icon}>{icon}</div>
          <span>{children}</span>
        </Stack>
      </Component>
    );
  };

  return ComponentWithClassName;
};

export const MenuLabel = withClassName(DropdownMenu.Label, cls.label);
export const MenuItem = withClassName(DropdownMenu.Item, cls.item);
export const MenuRightSlot = withClassName((props: HTMLAttributes<HTMLDivElement>) => <div {...props} />, cls.rightSlot);

export const MenuItemWithIcon = withIcon(MenuItem);

export const MenuSeparator = withClassName(DropdownMenu.Separator, cls.separator);

export const MenuCheckboxItem: React.FC<DropdownMenu.DropdownMenuCheckboxItemProps> = ({ className, children, ...props }) => (
  <DropdownMenu.CheckboxItem
    className={cn(cls.item, className)}
    {...props}
  >
    <DropdownMenu.ItemIndicator className={cls.indicator}>
      <DotFilledIcon />
    </DropdownMenu.ItemIndicator>
    {children}
  </DropdownMenu.CheckboxItem>
);

export const MenuRadioGroup = DropdownMenu.RadioGroup;

export const MenuRadioItem: React.FC<DropdownMenu.DropdownMenuRadioItemProps> = ({ className, children, ...props }) => (
  <DropdownMenu.RadioItem
    className={cn(cls.item, className)}
    {...props}
  >
    <DropdownMenu.ItemIndicator className={cls.indicator}>
      <span>•</span>
    </DropdownMenu.ItemIndicator>
    {children}
  </DropdownMenu.RadioItem>
);

interface Props extends DropdownMenu.DropdownMenuProps {
  content: ReactNode;
  align?: 'start' | 'center' | 'end';
  alignOfset?: number
  sideOfset?: number;
}

const Menu: React.FC<Props> = ({
  content,
  children,
  align = 'end',
  alignOfset = 0,
  sideOfset = 8,
  open: propsOpen,
  onOpenChange: propsOnOpenChange,
  ...props
}) => {
  const [open, setOpen] = React.useState(propsOpen);

  const onOpenChange = React.useCallback((open: boolean) => {
    setOpen(open);
    propsOnOpenChange?.(open);
  }, [propsOnOpenChange]);

  React.useEffect(() => {
    setOpen(propsOpen);
  }, [propsOpen]);

  return (
    <DropdownMenu.Root
      open={open}
      onOpenChange={onOpenChange}
      {...props}
    >
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {open ? (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              sideOffset={sideOfset}
              alignOffset={alignOfset}
              align={align}
              asChild
              forceMount
            >
              <motion.div
                className={cls.base}
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { type: 'spring', duration: 0.5 },
                }}
                exit={{ scale: 0.2, opacity: 0, transition: { duration: 0.1 } }}
              >
                {content}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        ) : null}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
};

export default Menu;
