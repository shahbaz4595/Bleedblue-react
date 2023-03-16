import React from 'react'
import './Input.css'

const Input = ({
  variant = 'text',
  placeholder,
  className = '',
  onChange,
  ...rest
}) => {
  className = `input ${className}`.trim()
  return (
    <input
      onChange={onChange}
      type={variant}
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  )
}

export default Input
