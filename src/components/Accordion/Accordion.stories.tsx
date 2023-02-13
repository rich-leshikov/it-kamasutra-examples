import React, {useState} from 'react';
import Accordion, {AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    onClick: {
      table: {
        category: 'Events'
      }
    }
  }
}

const callback = action('accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  title: 'Menu',
  collapsed: true,
  items: [],
  onClick: callback
}

export const MenuUncollapsedMode = Template.bind({})
MenuUncollapsedMode.args = {
  title: 'Users',
  collapsed: false,
  items: ['Dimych', 'Artem', 'Ivan', 'Sergey'],
  onClick: callback
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true)

  return <Accordion {...args} collapsed={value} onClick={() => setValue(!value)}/>
}
ModeChanging.args = {
  title: 'Users',
  items: ['Dimych', 'Artem', 'Ivan', 'Sergey']
}
