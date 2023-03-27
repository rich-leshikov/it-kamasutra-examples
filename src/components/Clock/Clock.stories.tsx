import {Clock, ClockPropsType} from './Clock';
import {Story} from '@storybook/react';

export default {
  title: 'Clock',
  component: Clock,
}

const Template: Story<ClockPropsType> = (args) => <Clock {...args}/>

export const DefaultMode = Template.bind({})
DefaultMode.args = {
  time: '00:00:00'
}
