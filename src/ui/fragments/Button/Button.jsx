import React from 'react'
import './Button.css'

const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  className = '',
  ...rest
}) => {
  className = `btn btn-${variant} btn-${size} btn-${
    disabled ? `disabled` : 'enabled'
  } className`.trim()
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={`${variant} button`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
