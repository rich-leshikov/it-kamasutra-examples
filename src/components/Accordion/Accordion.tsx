import React from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

export type AccordionPropsType = {
  title: string
  collapsed: boolean
  /**
   * Elements, which show when accordion open
   */
  items?: Array<string>
  /**
   * Callback to invoke on accordion clicking
   */
  onClick: () => void
}

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title} onClick={props.onClick}/>
      {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>
  )
}

export default Accordion