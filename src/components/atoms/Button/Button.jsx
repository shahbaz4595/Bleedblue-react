import React from 'react'
import './Button.css'

const Button = (props) => {
  const { variant = 'primary', children, onClick, ...rest } = props

  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  )
}

export default Button
