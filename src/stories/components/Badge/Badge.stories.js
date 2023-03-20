import Badge from '../../../ui/components/Badge/Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    className: '',
  },
  argTypes: {
    type: {
      options: ['basic-badge', 'avatar-badge', 'icon-badge'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'select' },
    },
    size: {
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
      control: { type: 'select' },
    },
    icon: {
      options: ['email', 'bell', 'cart'],
      control: { type: 'select' },
    },
    count: {
      control: { type: 'number', min: 0, max: 1000 },
    },
  },
}

const Template = (args) => <Badge {...args} />

export const BasicBadge = Template.bind()
BasicBadge.args = {
  type: 'basic-badge',
  children: 'Dummy Text',
  variant: 'primary',
}

export const AvatarBadge = Template.bind()
AvatarBadge.args = {
  type: 'avatar-badge',
  imgSource:
    'https://cdn.wisden.com/wp-content/uploads/2017/11/GettyImages-689405274-e1520010556769.jpg',
  imgCaption: 'Former Indian cricket captain - Mahendra Singh Dhoni',
  size: 'xl',
  variant: 'primary',
}

export const IconBadge = Template.bind()
IconBadge.args = {
  type: 'icon-badge',
}
