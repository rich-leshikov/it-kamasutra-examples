import React from "react";

export type AccordionBodyPropsType = {
  items?: Array<string>
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items && props.items.map(i => <li>{i}</li>)}
    </ul>
  )
}

export default AccordionBody