import React, {useState} from 'react';
import Accordion, {AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {v1} from 'uuid';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    onClick: {
      table: {
        category: 'Events'
      }
    },
    onClickItem: {
      table: {
        category: 'Events'
      }
    }
  }
}

const callback = action('accordion mode change event fired')
const callbackItem = action(`You have clicked on item`)

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  title: 'Menu',
  collapsed: true,
  items: [],
  onClick: callback,
  onClickItem: callbackItem
}

export const MenuUncollapsedMode = Template.bind({})
MenuUncollapsedMode.args = {
  title: 'Users',
  collapsed: false,
  items: [
    {id: v1(), value: 'Dimych'},
    {id: v1(), value: 'Sergey'},
    {id: v1(), value: 'Ivan'},
    {id: v1(), value: 'Vadim'},
  ],
  onClick: callback,
  onClickItem: callbackItem
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true)

  return <Accordion {...args} collapsed={value} onClick={() => setValue(!value)} onClickItem={callbackItem}/>
}
ModeChanging.args = {
  title: 'Users',
  items: [
    {id: v1(), value: 'Dimych'},
    {id: v1(), value: 'Sergey'},
    {id: v1(), value: 'Ivan'},
    {id: v1(), value: 'Vadim'},
  ]
}
