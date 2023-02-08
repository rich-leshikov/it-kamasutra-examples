import React from 'react';

type AccordionTitlePropsType = {
  title: string,
  toggle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={props.toggle}>{props.title}</h3>
  )
}

export default AccordionTitle