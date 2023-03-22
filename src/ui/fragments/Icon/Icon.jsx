const sizeMap = {
  xs: 30,
  sm: 50,
  md: 70,
  lg: 90,
  xl: 110,
}

const Icon = ({ type = 'email', size = 'md', ...rest }) => {
  return (
    <>
      {type === 'email' && (
        <img
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/filled-message.png`}
        />
      )}
      {type === 'bell' && (
        <img
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/appointment-reminders.png`}
        />
      )}
      {type === 'cart' && (
        <img
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/shopping-cart.png`}
        />
      )}
      {type === 'search' && (
        <img
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/search--v1.png`}
        />
      )}
      {type === 'heart' && (
        <img
          src={`https://img.icons8.com/ultraviolet/${sizeMap[size]}/null/hearts.png`}
        />
      )}
      {type === 'heart-filled' && (
        <img
          src={`https://img.icons8.com/offices/${sizeMap[size]}/null/hearts.png`}
        />
      )}
      {type === 'star' && (
        <img
          src={`https://img.icons8.com/color/${sizeMap[size]}/null/star--v1.png`}
        />
      )}
      {type === 'star-filled' && (
        <img
          src={`https://img.icons8.com/fluency/${sizeMap[size]}/null/star.png`}
        />
      )}
      {type === 'star-half' && (
        <img
          src={`https://img.icons8.com/color/${sizeMap[size]}/null/star-half-empty.png`}
        />
      )}
    </>
  )
}

export default Icon
