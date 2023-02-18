import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from './Select';
import {ItemType} from '../../App';
import {action} from '@storybook/addon-actions';
import {v1} from 'uuid';
import {Button} from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    onClick: {
      table: {
        category: 'Events'
      }
    },
    onChange: {
      table: {
        category: 'Events'
      }
    }
  }
}

const items: Array<ItemType> = [
  {id: v1(), title: 'Dimych'},
  {id: v1(), title: 'Sergey'},
  {id: v1(), title: 'Ivan'},
  {id: v1(), title: 'Vadim'},
]

const selectCollapse = action('Select mode changed')
const changeSelectedItem = action('Select title changed')

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
  title: items[0].title,
  collapse: true,
  items: [],
  onClick: selectCollapse,
  onChange: changeSelectedItem
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
  title: items[0].title,
  collapse: false,
  items: [
    {id: v1(), title: 'Dimych'},
    {id: v1(), title: 'Sergey'},
    {id: v1(), title: 'Ivan'},
    {id: v1(), title: 'Vadim'},
  ],
  onClick: selectCollapse,
  onChange: changeSelectedItem
}

export const ChangingMode: Story<SelectPropsType> = (args) => {
  const [title, setTitle] = useState<string>(args.items[0].title)
  const [selectCollapse, setSelectCollapse] = useState<boolean>(args.collapse)

  function changeSelectedItem(itemId: string, items: ItemType[]) {
    let itemSelected = items.find(i => i.id === itemId)
    if (itemSelected) {
      setTitle(itemSelected.title)
      setSelectCollapse(true)
    }
  }

  return (
    <div>
      <Button
        variant="contained"
        style={{margin: '2px', width: '150px'}}
        endIcon={<AutorenewIcon/>}
        onClick={() => setSelectCollapse(!selectCollapse)}
      >{title}</Button>
      {!selectCollapse && args.items.map(i =>
        <div>
          <Button
            variant="outlined"
            style={{margin: '2px', width: '150px'}}
            onClick={() => changeSelectedItem(i.id, args.items)}
          >{i.title}</Button>
        </div>)}
    </div>
  )
}
ChangingMode.args = {
  title: items[0].title, // I know that it is bad practice
  items: [
    {id: v1(), title: 'Dimych'},
    {id: v1(), title: 'Sergey'},
    {id: v1(), title: 'Ivan'},
    {id: v1(), title: 'Vadim'},
  ],
  collapse: false
}
