import React, { useCallback } from 'react';
import classnames from 'classnames';

interface RadioButtonTypes {
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
  checked: boolean;
  labelClassName?: string;
  label?: string;
  name?: string;
  value?: string;
  onChange: (e: React.ChangeEvent) => void;
}

export const RadioInput = ({
  className,
  label,
  disabled,
  checked,
  inputRef,
  labelClassName,
  onChange,
  name,
  value,
  ...otherProps
}: RadioButtonTypes): JSX.Element => {
  const handleChange = useCallback(onChange, [onChange]);

  return (
    <label tabIndex={0} className={classnames('radio__wrapper', className)} {...otherProps}>
      <input
        name={name}
        value={value}
        ref={inputRef}
        type="radio"
        checked={checked}
        disabled={disabled}
        className="radio__input"
        onChange={handleChange}
      />
      <div
        className={classnames('radio__control', {
          ['radio__control--checked']: checked,
        })}
      />
      {label && <span className={classnames('radio__label', labelClassName)}>{label}</span>}
    </label>
  );
};
