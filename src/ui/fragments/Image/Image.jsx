import './Image.css'

export default Image = ({ imgSource, imgCaption, className = '', ...rest }) => {
  className = `img ${className}`.trim()
  return (
    <img src={imgSource} alt={imgCaption} className={className} {...rest} />
  )
}
