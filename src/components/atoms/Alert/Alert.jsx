import React from 'react'
import './Alert.css'

const Alert = ({
  variant = 'primary',
  size = 'medium',
  onClose,
  children,
  className = '',
  ...rest
}) => {
  className = `alert alert-${variant} alert-${size} ${className}`
  return (
    <div className={className} {...rest}>
      <div> {children}</div>
      <button
        className='close-alert'
        onClick={onClose}
        aria-label='close alert'
      >
        x
      </button>
    </div>
  )
}

export default Alert
