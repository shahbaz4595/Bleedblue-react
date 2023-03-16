import './Switch.css'

const Switch = ({ type = 'theme', onSwitch, className = '', ...rest }) => {
  className = `chk-toggle ${className}`.trim()
  return (
    <label className='toggle-switch'>
      <input
        type='checkbox'
        className={className}
        {...rest}
        onChange={onSwitch}
      />
      <div className={`slider-container ${type}`}>
        <span className='slider'></span>
      </div>
    </label>
  )
}

export default Switch
