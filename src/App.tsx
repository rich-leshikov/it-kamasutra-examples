import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import PageTitle from './components/PageTitle';

export function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [collapse, setCollapse] = useState<boolean>(true)
  let [on, onChange] = useState<boolean>(false)

  function changeColor(onOffValue: boolean) {
    onChange(onOffValue)
  }

  return (
    <div className="App">
      <PageTitle title={'App Title'}/>
      Article 1
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion title={'-- Menu --'} collapsed={collapse} onClick={() => setCollapse(!collapse)}/>
      <Accordion title={'-- Users --'} collapsed={collapse} onClick={() => setCollapse(!collapse)}/>
      Article 2
      <Rating value={5} onClick={setRatingValue}/>
      Article 3
      <Rating value={4} onClick={setRatingValue}/>
      <UncontrolledAccordion title={'-- Menu 2 --'} collapsed={false}/>
      <UncontrolledAccordion title={'-- Users 2 --'} collapsed={true}/>
      Article 4
      <UncontrolledRating/>
      Article 5
      <UncontrolledRating/>
      Article 6
      <UncontrolledRating/>
      <UncontrolledOnOff/>
      <OnOff on={on} changeColor={changeColor}/> {on.toString()}
    </div>
  )
}
