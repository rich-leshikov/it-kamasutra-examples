import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

type AccordionPropsType = {
  title: string,
  collapsed?: boolean
}

function UncontrolledAccordionMemo(props: AccordionPropsType) {
  let [collapse, turnCollapse] = useState(props.collapsed)

  return (
    <div>
      <AccordionTitle title={props.title} toggle={() => {
        turnCollapse(!collapse)
      }}/>
      {!collapse && <AccordionBody/>}
    </div>
  )
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)