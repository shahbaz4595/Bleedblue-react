import { Navbar } from '../../../ui/bleedBlueReact'
import { action } from '@storybook/addon-actions'

export default {
  title: 'components/Navbar',
}

const Template = (args) => <Navbar {...args} />

export const BBNavbar = Template.bind({})
BBNavbar.args = {
  brandTitle: 'BleedBlue React',
  onLoginClick: action('click handler'),
  onSignUpClick: action('click handler'),
}
