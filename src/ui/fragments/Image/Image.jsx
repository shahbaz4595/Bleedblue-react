import style from './Image.module.css'

export default Image = ({
  type = 'regular',
  imgSource,
  imgCaption,
  className = '',
  ...rest
}) => {
  className = `${style.img} ${
    type === 'round' && style.round
  } ${className}`.trim()
  return (
    <img src={imgSource} alt={imgCaption} className={className} {...rest} />
  )
}
