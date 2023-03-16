import React from 'react'
import Alert from '../../../ui/components/Alert/Alert'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    size: 'medium',
    onClose: action('click handler'),
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'select' },
      description: 'Type of alert',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    children: {
      description: 'Text to be displayed inside the component',
    },
    className: {
      control: { type: 'text' },
    },
  },
}

const Template = (args) => <Alert {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Match on!',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Calling third umpire',
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  children: 'Not out',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: "Ooops! That's out",
}

export const Warning = Template.bind({})
Warning.args = {
  variant: 'warning',
  children: 'Warning! First bouncer',
}
