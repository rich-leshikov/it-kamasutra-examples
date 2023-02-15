import React from "react";
import {ItemType} from '../../App';

export type AccordionBodyPropsType = {
  items: ItemType[]
  onClickItem: (itemId: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items && props.items.map(i => <li key={i.id} onClick={() => props.onClickItem(i.id)}>{i.title}</li>)}
    </ul>
  )
}

export default AccordionBody