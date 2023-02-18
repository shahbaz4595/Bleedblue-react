import React from 'react'
import './Alert.css'

const Alert = (props) => {
  const { variant = 'primary', size = 'medium', onClose, children } = props
  return (
    <div className={`alert alert-${variant} alert-${size}`}>
      <div> {children}</div>
      <button className='close-alert' onClick={onClose}>
        X
      </button>
    </div>
  )
}

export default Alert
