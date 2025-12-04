import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...rest
}) => {
  const variantClass = `btn-${variant}`;
  const widthClass = fullWidth ? 'btn-full-width' : '';
  const combinedClass = `btn ${variantClass} ${widthClass} ${className}`.trim();

  return (
    <button className={combinedClass} {...rest}>
      {children}
    </button>
  );
};

