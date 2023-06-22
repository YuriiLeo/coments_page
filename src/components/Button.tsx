import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = ComponentPropsWithoutRef<'button'>;

export const Button = ({
  className,
  children,
  disabled,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <button
      {...restProps}
      disabled={disabled}
      className={clsx(
        'text-white px-4 py-2',
        disabled && 'pointer-events-none',
        disabled ? 'bg-gray-600' : 'bg-tertiary',
        className,
      )}
    >
      {children}
    </button>
  );
};
