import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import PageTitle from './components/PageTitle';
import {v1} from 'uuid';

export type ItemType = {
  id: string
  value: string
}

export function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [collapse, setCollapse] = useState<boolean>(true)
  let [on, onChange] = useState<boolean>(false)

  const items: Array<ItemType> = [
    {id: v1(), value: 'Dimych'},
    {id: v1(), value: 'Sergey'},
    {id: v1(), value: 'Ivan'},
    {id: v1(), value: 'Vadim'},
  ]

  function onClickItem(itemId: string) {
    alert(`You have clicked on item with id ${itemId}`)
  }

  function changeColor(onOffValue: boolean) {
    onChange(onOffValue)
  }

  return (
    <div className="App">
      <PageTitle title={'App Title'}/>
      Article 1
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion title={'-- Menu --'} collapsed={collapse} onClick={() => setCollapse(!collapse)} items={items}
                 onClickItem={onClickItem}/>
      <Accordion title={'-- Users --'} collapsed={collapse} onClick={() => setCollapse(!collapse)} items={items}
                 onClickItem={onClickItem}/>
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
