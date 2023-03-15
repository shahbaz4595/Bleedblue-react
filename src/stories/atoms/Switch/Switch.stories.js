import React from 'react'
import Switch from '../../../components/atoms/Switch/Switch'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    onSwitch: action('click handler'),
  },
  argTypes: {
    type: {
      options: ['switch', 'theme'],
      control: { type: 'select' },
      defaultValue: 'switch',
      description: 'Type of switch',
    },
  },
}

const Template = (args) => <Switch {...args} />

export const RegularSwitch = Template.bind()
RegularSwitch.args = {
  type: 'switch',
}

export const ThemeSwitch = Template.bind()
ThemeSwitch.args = {
  type: 'theme',
}
