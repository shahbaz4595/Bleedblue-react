import Image from '../../fragments/Image/Image'
import React from 'react'
import './Avatar.css'

const Avatar = ({
  size = 'md',
  imgSource,
  imgCaption,
  className = '',
  ...rest
}) => {
  className = `avatar avatar-${size} ${className}`.trim()
  return (
    <div class={className}>
      <Image
        imgSource={imgSource}
        imgCaption={imgCaption}
        size={size}
        className='img-round'
        {...rest}
      />
    </div>
  )
}

export default Avatar
