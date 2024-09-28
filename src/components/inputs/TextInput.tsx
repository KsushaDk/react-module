import React from 'react';
import classnames from 'classnames';

interface TextInputProps {
  className?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isRequired?: boolean;
  icon?: React.ReactElement;
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  error?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  className,
  name,
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  disabled = false,
  isRequired = false,
  icon: Icon,
  radius = 'sm',
  size = 'md',
  error = '',
}) => {
  return (
    <label className={classnames('text-input__wrapper', className)}>
      {label}
      {Icon && React.cloneElement(Icon, { className: 'text-input__icon' })}
      <input
        required={isRequired}
        disabled={disabled}
        name={name}
        className={classnames('text-input', {
          [`text-input--radius-${radius}`]: radius,
          [`text-input--size-${size}`]: size,
          [`text-input--with-icon`]: Icon,
        })}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </label>
  );
};
