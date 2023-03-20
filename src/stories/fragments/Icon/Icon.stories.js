import Icon from '../../../ui/fragments/Icon/Icon'

export default {
  title: 'Fragments/Icon',
  component: Icon,
  argTypes: {
    type: {
      options: ['email', 'bell', 'cart', 'search'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Icon {...args} />

export const Email = Template.bind({})
Email.args = {
  type: 'email',
}

export const Bell = Template.bind({})
Bell.args = {
  type: 'bell',
}

export const Cart = Template.bind({})
Cart.args = {
  type: 'cart',
}

export const Search = Template.bind({})
Search.args = {
  type: 'search',
}
