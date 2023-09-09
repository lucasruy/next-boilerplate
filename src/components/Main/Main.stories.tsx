import { Meta, StoryObj } from '@storybook/react'

import { Main } from './Main'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Basic: StoryObj = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}
