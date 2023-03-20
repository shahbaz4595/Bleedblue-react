import Image from '../../../ui/fragments/Image/Image'

export default {
  title: 'Fragments/Image',
  component: Image,
  argTypes: {
    type: {
      options: ['regular', 'round'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Image {...args} />

export const ResponsiveImage = Template.bind({})
ResponsiveImage.args = {
  imgSource:
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/india2011worldcup_1200x768.jpeg?VersionId=skGERio415tM6bCvAJsngoa7PKQOXQWr',
  imgCaption:
    'Indian players pose after winning the ICC cricket world cup 2011',
  type: 'regular',
}

export const RoundImage = Template.bind({})
RoundImage.args = {
  imgSource: 'https://bleedblue.netlify.app/components/images/trophy.jpg',
  imgCaption:
    'Indian players pose after winning the ICC cricket world cup 2011',
  type: 'round',
}
