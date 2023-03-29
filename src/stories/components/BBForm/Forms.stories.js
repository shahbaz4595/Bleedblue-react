import BBForm from '../../../ui/components/BBForms/BBForms'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Form',
  component: BBForm,
  argTypes: {
    formType: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = (args) => <BBForm {...args} />

export const LoginForm = Template.bind({})
LoginForm.args = {
  formType: 'login',
  onSubmit: action('login Handler'),
  onAlternateLinkClick: action('Signup Click Handler'),
}

export const SignupForm = Template.bind({})
SignupForm.args = {
  formType: 'signup',
  onSubmit: action('login Handler'),
  onAlternateLinkClick: action('Signup Click Handler'),
}
