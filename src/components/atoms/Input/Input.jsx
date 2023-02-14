import React from 'react'

const Input = (props) => {
  const { variant = 'text', placeholder, ...rest } = props
  return <input type={variant} placeholder={placeholder} className={`input`} />
}

export default Input
