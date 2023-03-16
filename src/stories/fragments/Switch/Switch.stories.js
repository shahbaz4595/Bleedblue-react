import React from 'react'
import Switch from '../../../ui/fragments/Switch/Switch'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Fragments/Switch',
  component: Switch,
  args: {
    onSwitch: action('click handler'),
  },
  argTypes: {
    type: {
      options: ['switch', 'theme'],
      control: { type: 'radio' },
      defaultValue: 'switch',
      description: 'Type of switch',
    },
    className: {
      control: 'text',
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
