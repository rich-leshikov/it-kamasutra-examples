import React from 'react';
import AccordionBody from './AccordionBody';

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <div>
      <h3 onClick={() => props.onClick()}>{props.title}</h3>
    </div>
  )
}

export default AccordionTitle