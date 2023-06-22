import { Field } from 'react-final-form';

import { TextArea } from 'components';

type Props = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  hideError?: boolean;
};

export const FormTextArea = ({
  name,
  label,
  defaultValue,
  className,
  placeholder,
  hideError = false,
}: Props): JSX.Element => {
  return (
    <Field
      name={name}
      render={({ input, meta }): JSX.Element => (
        <div>
          {label && <label>{label}</label>}
          <TextArea
            defaultValue={defaultValue}
            className={className}
            placeholder={placeholder}
            {...input}
          />
          {!hideError && meta.touched && meta.error && (
            <span>{meta.error}</span>
          )}
        </div>
      )}
    />
  );
};
