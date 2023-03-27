import Icon from '../../../ui/fragments/Icon/Icon'

export default {
  title: 'Fragments/Icon',
  component: Icon,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
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

export const Heart = Template.bind({})
Heart.args = {
  type: 'heart',
}

export const HeartFilled = Template.bind({})
HeartFilled.args = {
  type: 'heart-filled',
}

export const Star = Template.bind({})
Star.args = {
  type: 'star',
}

export const StarFilled = Template.bind({})
StarFilled.args = {
  type: 'star-filled',
}

export const StarHalf = Template.bind({})
StarHalf.args = {
  type: 'star-half',
}
