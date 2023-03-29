import { Button, BBImage } from '../../bleedBlueReact'
import style from './Navbar.module.css'

const Navbar = ({
  brandLogoURL,
  brandTitle = 'Brand Name',
  onLoginClick,
  onSignUpClick,
}) => {
  return (
    <nav className={style.navbar}>
      <div className={style.branding}>
        {brandLogoURL && (
          <div className={style.brandLogo}>
            <BBImage
              imgCaption={brandTitle}
              imgSource={brandLogoURL}
              type='regular'
            />
          </div>
        )}
        <div className={style.brandTitle}>{brandTitle}</div>
      </div>
      <ul className={style['navbar-menu']}>
        <li>
          <Button onClick={onLoginClick} size='medium' variant='primary'>
            Log in
          </Button>
        </li>
        <li>
          <Button onClick={onSignUpClick} size='medium' variant='inverse'>
            Sign up
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
