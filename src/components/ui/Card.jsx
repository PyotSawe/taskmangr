import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'medium',
  shadow = 'medium',
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700';
  
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
    none: ''
  };

  const shadowClasses = {
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    none: ''
  };

  const classes = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
