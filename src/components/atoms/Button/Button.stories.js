import Button from './Button'
import { action, actions } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Button',
    onClick: action('click handler'),
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
}
