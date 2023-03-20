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
          src={`https://img.icons8.com/material-outlined/${sizeMap[size]}/null/mail.png`}
          alt='email notification'
        />
      )}
      {type === 'bell' && (
        <img
          src={`https://img.icons8.com/sf-regular/${sizeMap[size]}/null/appointment-reminders.png`}
        />
      )}
      {type === 'cart' && (
        <img
          src={`https://img.icons8.com/material-outlined/${sizeMap[size]}/null/shopping-cart--v1.png`}
        />
      )}
      {type === 'search' && (
        <img
          src={`https://img.icons8.com/material-sharp/${sizeMap[size]}/null/search-more.png`}
        />
      )}
    </>
  )
}

export default Icon
