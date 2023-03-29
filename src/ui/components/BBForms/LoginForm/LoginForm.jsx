import style from './LoginForm.module.css'
import { Button, Input } from '../../../bleedBlueReact'
import { useState } from 'react'

const LoginForm = ({ onLogin, onAlternateLinkClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault()
    onLogin({ email: email, password: password })
  }

  const checkFormValidity = () => {
    if (email && email.includes('@') && password && password.length > 7) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }
  return (
    <form className={style['login-form']} onSubmit={handleLogin}>
      <h2 className={style['form-title']}>Log in</h2>
      <label>
        <p>Email</p>
        <Input
          onChange={(e) => {
            setEmail(e.target.value)
            checkFormValidity()
          }}
          placeholder='Enter Email'
          variant='email'
          value={email}
          className={style['form-field']}
        />
      </label>
      <label>
        <p>Password</p>
        <Input
          onChange={(e) => {
            setPassword(e.target.value)
            checkFormValidity()
          }}
          placeholder='Enter Password'
          variant='password'
          value={password}
          className={style['form-field']}
        />
      </label>
      <Button size='medium' variant='primary' disabled={!isFormValid}>
        Log in
      </Button>
      <p>
        Don't have an account ?
        {
          <span>
            <Button onClick={onAlternateLinkClick} size='medium' variant='link'>
              Sign up
            </Button>
          </span>
        }
      </p>
    </form>
  )
}

export default LoginForm
