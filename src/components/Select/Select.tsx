import React from 'react';
import {ItemType} from '../../App';
import {Button} from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export type SelectPropsType = {
  /**
   * Item value from conveyed array
   */
  title: string
  /**
   * Mode of Select component (collapsed or not)
   */
  collapse: boolean
  /**
   * Array of items (id, title)
   */
  items: ItemType[]
  /**
   * Function to control Select mode
   */
  onClick: () => void
  /**
   * Function to select main title from conveyed array
   * @param itemId Id of title
   * @param items Conveyed array
   */
  onChange: (itemId: string, items: ItemType[]) => void
}

export const Select = React.memo((props: SelectPropsType) => {
  return (
    <div>
      <Button
        color={'success'}
        variant="contained"
        style={{margin: '2px', width: '150px'}}
        endIcon={<AutorenewIcon/>}
        onClick={props.onClick}
      >{props.title}</Button>
      {!props.collapse && props.items.map(i =>
        <div key={i.id}>
          <Button
            color={'success'}
            variant="outlined"
            style={{margin: '2px', width: '150px'}}
            onClick={() => props.onChange(i.id, props.items)}
          >{i.title}</Button>
        </div>)}
    </div>
  )
})