import { EmailInput } from '../atoms/Input/Input.stories'
import { Primary } from '../atoms/Button/Button.stories'

export default {
  title: 'Molecule/Subscription',
}

export const PrimarySubsciption = () => {
  return (
    <>
      <EmailInput />
      <Primary />
    </>
  )
}
