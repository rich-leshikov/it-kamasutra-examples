import {Clock} from './Clock'
import {Story} from '@storybook/react'


export default {
  title: 'Clock',
  component: Clock,
}

const Template: Story = () => <Clock/>

export const DefaultMode = Template.bind({})

