import React from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';
import {ItemType} from '../../App';

export type AccordionPropsType = {
  title: string
  collapsed: boolean
  /**
   * Elements, which show when accordion open
   */
  items: ItemType[]
  /**
   * Callback to invoke on accordion clicking
   */
  onClick: () => void
  /**
   * Callback to invoke on accordion item clicking
   * @param itemId id of accordion item
   */
  onClickItem: (itemId: string) => void
}

function AccordionMain(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title} onClick={props.onClick}/>
      {!props.collapsed && <AccordionBody items={props.items} onClickItem={props.onClickItem}/>}
    </div>
  )
}

export const Accordion = React.memo(AccordionMain)