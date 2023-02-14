// .storybook/manager.js

import { addons } from '@storybook/addons'
import Theme from './Theme'
import favicon from '../public/favicon.ico'

addons.setConfig({
  theme: Theme,
})

const link = document.createElement('link')
link.setAttribute('rel', 'shortcut icon')
link.setAttribute('href', favicon)
document.head.appendChild(link)
