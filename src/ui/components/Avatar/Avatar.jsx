import Image from '../../fragments/Image/Image'
import React from 'react'
import style from './Avatar.module.css'

const Avatar = ({
  size = 'md',
  imgSource,
  imgCaption,
  className = '',
  ...rest
}) => {
  className = `${style.avatar} ${style[size]} ${className}`.trim()
  return (
    <div className={className}>
      <Image
        imgSource={imgSource}
        imgCaption={imgCaption}
        size={size}
        type='round'
        {...rest}
      />
    </div>
  )
}

export default Avatar
