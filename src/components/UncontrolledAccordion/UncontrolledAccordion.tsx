import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';

type AccordionPropsType = {
  title: string,
  collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
  let [collapse, turnCollapse] = useState(props.collapsed)

  return (
    <div>
      <AccordionTitle title={props.title} toggle={() => {
        turnCollapse(!collapse)
      }}/>
      {!collapse && <AccordionBody/>}
    </div>
  )


  // if (!props.collapsed) {
  //   return (
  //     <div>
  //       <AccordionTitle title={props.title}/>
  //       <AccordionBody/>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <AccordionTitle title={props.title}/>
  //     </div>
  //   )
  // }
}

export default UncontrolledAccordion