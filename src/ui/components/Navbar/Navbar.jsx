import { useNavigate } from 'react-router-dom'
import { Button, Image } from '../../bleedBlueReact'
import style from './Navbar.module.css'

const Navbar = ({ brandLogoURL, brandTitle = 'Brand Name' }) => {
  const navigate = useNavigate()

  return (
    <nav className={style.navbar}>
      <div className={style.branding}>
        <div className={style.brandLogo}>
          <Image
            imgCaption={brandTitle}
            imgSource={brandLogoURL}
            type='regular'
          />
        </div>
        <div className={style.brandTitle}>{brandTitle}</div>
      </div>
      <ul className={style['navbar-menu']}>
        <li>
          <Button
            onClick={() => navigate('/login')}
            size='medium'
            variant='primary'
          >
            Log in
          </Button>
        </li>
        <li>
          <Button
            onClick={() => navigate('/signup')}
            size='medium'
            variant='inverse'
          >
            Sign up
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
