import clsx from 'clsx';

type Props = {
  defaultValue?: string;
  placeholder?: string;
  className?: string;

  onChange?: (value: string) => void;
};

export const TextArea = ({
  defaultValue,
  placeholder,
  className,
  onChange: onChangeProp,
  ...props
}: Props): JSX.Element => {
  const onChange = (newValue: string): void => {
    onChangeProp?.(newValue);
  };

  return (
    <textarea
      {...props}
      className={clsx(
        'border-2 border-tertiary p-2 min-h-[100px] w-full',
        className,
      )}
      defaultValue={defaultValue}
      onChange={(event): void => onChange(event.target.value)}
      placeholder={placeholder}
    />
  );
};
