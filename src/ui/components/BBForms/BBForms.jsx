import LoginForm from './LoginForm/LoginForm'
import SignupForm from './SignupForm/SignupForms'

const BBForm = ({ formType = 'login', onSubmit, onAlternateLinkClick }) => {
  return (
    <>
      {formType === 'login' ? (
        <LoginForm
          onLogin={onSubmit}
          onAlternateLinkClick={onAlternateLinkClick}
        />
      ) : (
        <SignupForm
          onSignup={onAlternateLinkClick}
          onAlternateLinkClick={onAlternateLinkClick}
        />
      )}
    </>
  )
}

export default BBForm
