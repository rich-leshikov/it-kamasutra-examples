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
import {SelectWithMemo} from './components/Select/SelectWithMemo';

export type ItemType = {
  id: string
  title: string
}

export type CityType = {
  id: string
  title: string
  state: string
  population: number
}

export type CitiesFilterType = 'none' | 'title' | 'state' | 'population'

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

  const getCities = useMemo((): CityType[] => [
    {id: v1(), title: 'Grodno', state: 'Belarus', population: 357493},
    {id: v1(), title: 'Tokio', state: 'Japan', population: 38505000},
    {id: v1(), title: 'Magadan', state: 'Russia', population: 90757},
    {id: v1(), title: 'Solihorsk', state: 'Belarus', population: 101400},
    {id: v1(), title: 'Samara', state: 'Russia', population: 1164685},
    {id: v1(), title: 'Mexico City', state: 'Mexico', population: 9100000},
    {id: v1(), title: 'Seoul', state: 'South Korea', population: 9443722},
    {id: v1(), title: 'Ruzhany', state: 'Belarus', population: 2937},
    {id: v1(), title: 'Chicago', state: 'USA', population: 2746388},
    {id: v1(), title: 'Oslo', state: 'Norway', population: 702543},
    {id: v1(), title: 'Pinsk', state: 'Belarus', population: 125060},
    {id: v1(), title: 'Milan', state: 'Italy', population: 1371498},
    {id: v1(), title: 'Florence', state: 'Italy', population: 367150},
    {id: v1(), title: 'Smolensk', state: 'Russia', population: 326861},
    {id: v1(), title: 'Belgrade', state: 'Serbia', population: 1166763},
    {id: v1(), title: 'Mumbai', state: 'India', population: 12478447},
    {id: v1(), title: 'Moscow', state: 'Russia', population: 13010112},
  ], [])

  const [cities, setCities] = useState<CityType[]>([
    {id: v1(), title: 'Grodno', state: 'Belarus', population: 357493},
    {id: v1(), title: 'Tokio', state: 'Japan', population: 38505000},
    {id: v1(), title: 'Magadan', state: 'Russia', population: 90757},
    {id: v1(), title: 'Solihorsk', state: 'Belarus', population: 101400},
    {id: v1(), title: 'Samara', state: 'Russia', population: 1164685},
    {id: v1(), title: 'Mexico City', state: 'Mexico', population: 9100000},
    {id: v1(), title: 'Seoul', state: 'South Korea', population: 9443722},
    {id: v1(), title: 'Ruzhany', state: 'Belarus', population: 2937},
    {id: v1(), title: 'Chicago', state: 'USA', population: 2746388},
    {id: v1(), title: 'Oslo', state: 'Norway', population: 702543},
    {id: v1(), title: 'Pinsk', state: 'Belarus', population: 125060},
    {id: v1(), title: 'Milan', state: 'Italy', population: 1371498},
    {id: v1(), title: 'Florence', state: 'Italy', population: 367150},
    {id: v1(), title: 'Smolensk', state: 'Russia', population: 326861},
    {id: v1(), title: 'Belgrade', state: 'Serbia', population: 1166763},
    {id: v1(), title: 'Mumbai', state: 'India', population: 12478447},
    {id: v1(), title: 'Moscow', state: 'Russia', population: 13010112},
  ])

  const onFilterCities = (arrayCities: CityType[], filterType: CitiesFilterType) => {
    switch (filterType) {
      case 'none':
        setCities(getCities)
        break
      case 'title':
        setCities(arrayCities.filter(i => i.title.toLowerCase().indexOf('m') !== -1))
        break
      case 'state':
        setCities(arrayCities.filter(i => i.state === 'Belarus'))
        break
      case 'population':
        setCities(arrayCities.filter(i => i.population >= 10000000))
        break
      default:
        break
    }
  }

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

      <SelectWithMemo items={cities} filter={'title'} filterItems={onFilterCities}/>
    </div>
  )
}
