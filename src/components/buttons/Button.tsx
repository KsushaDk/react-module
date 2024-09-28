import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};
