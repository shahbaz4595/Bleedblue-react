import React from 'react'
import Avatar from '../../../ui/components/Avatar/Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    className: '',
  },
  argTypes: {
    imgSource: {
      control: { type: 'text' },
      description: 'Porvide the image source path',
    },
    imgCaption: {
      control: { type: 'text' },
      description: 'Porvide the alternate text for accessibility',
    },
    size: {
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
      control: { type: 'select' },
      description: 'Porvide the alternate text for accessibility',
    },
    variant: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'select' },
    },
    className: {
      control: { type: 'text' },
    },
  },
}

const Template = (args) => <Avatar {...args} />

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  imgSource:
    'https://cdn.wisden.com/wp-content/uploads/2017/11/GettyImages-689405274-e1520010556769.jpg',
  imgCaption: 'Former Indian cricket captain - Mahendra Singh Dhoni',
  size: 'xl',
}

export const Large = Template.bind({})
Large.args = {
  imgSource: 'https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png',
  imgCaption: 'Best batsman in the world - Virat Kohli',
  size: 'lg',
}

export const Medium = Template.bind({})
Medium.args = {
  imgSource:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySu-cDpy7YRnWN8fp5n1m4xgHeCXWrAyT0A&usqp=CAU',
  imgCaption: 'Current Indian cricket captain - Rohit Sharma',
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  imgSource:
    'https://www.mykhel.com/thumb/247x100x233/cricket/players/0/7780.1666933992.jpg',
  imgCaption: 'Indian cricket allrounder - Hardik Pandya',
  size: 'sm',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  imgSource:
    'https://www.mykhel.com/thumb/247x100x233/cricket/players/9/5089.jpg',
  imgCaption: 'Mr 360 of Indian cricket - Surya Kumar Yadav',
  size: 'xs',
}
