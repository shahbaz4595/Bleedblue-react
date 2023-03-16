import Avatar from '../Avatar/Avatar'
import './Badge.css'

const Badge = ({
  type = 'basic',
  badgeText,
  imgSource,
  imgCaption,
  size,
  variant = 'danger',
  children = 'dummy text',
  count,
  className = '',
  ...props
}) => {
  className = `badge-container ${className}`
  return (
    <div className={className} {...props}>
      {type === 'basic' && (
        <span className={`${type}-badge ${variant}`}>{children}</span>
      )}

      {type === 'avatar-badge' && (
        <>
          <Avatar imgSource={imgSource} imgCaption={imgCaption} size={size} />
          <span className={`${type} badge-${variant}`}></span>
        </>
      )}

      {type === 'logo-badge' && (
        <>
          <div className='logo-for-badge'>{children}</div>
          <span className={`${type} badge-${variant}`}>{count}</span>
        </>
      )}
    </div>
  )
}

export default Badge
