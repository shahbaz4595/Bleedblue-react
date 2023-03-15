import Input from '../../../components/atoms/Input/Input'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    onChange: action('change handler'),
  },
}

const Template = (args) => <Input {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
  variant: 'text',
  placeholder: 'Enter text',
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  variant: 'email',
  placeholder: 'Enter Email',
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  variant: 'password',
  placeholder: 'Enter Password',
}

export const TelephoneInput = Template.bind({})
TelephoneInput.args = {
  variant: 'tel',
  placeholder: 'Enter Telephone Number',
}

export const DateInput = Template.bind({})
DateInput.args = {
  variant: 'date',
  placeholder: 'Select Date',
}
