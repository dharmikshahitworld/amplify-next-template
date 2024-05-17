import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string; // For link variant
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  disabled,
  href,
}) => {
  const baseClasses =
    'inline-flex items-center font-medium border rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-offset-0 justify-center';

  const variantClasses = {
    primary:
      'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary:
      'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
    outline:
      'text-indigo-700 bg-transparent border-indigo-700 hover:bg-indigo-50 focus:ring-indigo-500',
    link: 'text-indigo-600 hover:text-indigo-500 focus:outline-none',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const combinedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
    { 'opacity-50 cursor-not-allowed': disabled }
  );

  if (variant === 'link' && href) {
    return (
      <a
        href={href}
        className={clsx(combinedClasses, className, '')}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
