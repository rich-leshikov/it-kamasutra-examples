import React from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onClick: () => void
}

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title} onClick={props.onClick}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
}

export default Accordion