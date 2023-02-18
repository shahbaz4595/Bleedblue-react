import React from 'react'
import './Button.css'

const Button = (props) => {
  const {
    variant = 'primary',
    size = 'medium',
    disabled = false,
    children,
    onClick,
    ...rest
  } = props

  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} btn-${
        disabled ? `disabled` : 'enabled'
      }`}
      aria-label={`${variant} button`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
