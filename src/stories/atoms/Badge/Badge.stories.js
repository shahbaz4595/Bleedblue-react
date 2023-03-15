import Badge from '../../../components/atoms/Badge/Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    type: {
      options: ['basic', 'avatar-badge', 'logo-badge'],
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
  },
}

const Template = (args) => <Badge {...args} />

export const Basic = Template.bind()
Basic.args = {
  type: 'basic',
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

export const LogoBadge = Template.bind()
LogoBadge.args = {
  type: 'logo-badge',
}
