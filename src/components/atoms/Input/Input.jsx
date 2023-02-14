import React from 'react'
import './Input.css'

const Input = (props) => {
  const { variant = 'text', placeholder, onChange, ...rest } = props
  return (
    <input
      onChange={onChange}
      type={variant}
      placeholder={placeholder}
      className='input'
      {...rest}
    />
  )
}

export default Input
