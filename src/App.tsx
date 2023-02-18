import React, {useState, useCallback, useMemo} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {PageTitle} from './components/PageTitle';
import {v1} from 'uuid';
import {Select} from './components/Select/Select';

export type ItemType = {
  id: string
  title: string
}

export function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [collapse, setCollapse] = useState<boolean>(true)
  const [on, onChange] = useState<boolean>(false)

  function onClickItem(itemId: string) {
    alert(`You have clicked on item with id ${itemId}`)
  }

  const changeColor = useCallback((onOffValue: boolean) => onChange(onOffValue), [])

  const getItems = useMemo((): ItemType[] => [
    {id: v1(), title: 'Dimych'},
    {id: v1(), title: 'Sergey'},
    {id: v1(), title: 'Ivan'},
    {id: v1(), title: 'Vadim'},
  ], [])

  const [title, setTitle] = useState<string>(getItems[0].title)
  const [selectCollapse, setSelectCollapse] = useState<boolean>(true)

  const changeSelectedItem = useCallback((itemId: string, items: ItemType[]) => {
    let itemSelected = items.find(i => i.id === itemId)
    if (itemSelected) {
      setTitle(itemSelected.title)
      setSelectCollapse(true)
    }
  }, [])

  const onSelectCollapseHandler = useCallback(() => setSelectCollapse(!selectCollapse), [selectCollapse])

  return (
    <div className="App">
      <PageTitle title={'App Title'}/>
      Article 1
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion
        title={'-- Menu --'}
        collapsed={collapse}
        onClick={() => setCollapse(!collapse)}
        items={getItems}
        onClickItem={onClickItem}
      />
      <Accordion
        title={'-- Users --'}
        collapsed={collapse}
        onClick={() => setCollapse(!collapse)}
        items={getItems}
        onClickItem={onClickItem}
      />
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

      <Select
        title={title}
        collapse={selectCollapse}
        items={getItems}
        onClick={onSelectCollapseHandler}
        onChange={changeSelectedItem}
      />
    </div>
  )
}
