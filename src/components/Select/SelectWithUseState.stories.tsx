import React, {useCallback, useState} from 'react';
import {Story} from '@storybook/react';
import {v1} from 'uuid';
import {CitiesFilterType, CityType} from '../../App';
import {SelectWithCallback, SelectWithCallbackPropsType} from './SelectWithCallback';
import {SelectWithUseState, SelectWithUseStatePropsType} from './SelectWithUseState';

export default {
  title: 'Select with useState',
  component: SelectWithUseState,
  argTypes: {
    filterItems: {
      table: {
        category: 'Events'
      }
    }
  }
}

const defaultState = [
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
]

export const FilterByMCharMode: Story<SelectWithUseStatePropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.title.toLowerCase().indexOf('i') !== -1)
  }, [cities])

  const onFilterCities = (arrayCities: CityType[], filterType: CitiesFilterType) => {
    switch (filterType) {
      case 'none':
        setCities(getCities)
        break
      case 'title':
        setCities(filteredCities)
        break
      default:
        break
    }
  }

  return <SelectWithUseState {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByMCharMode.args = {
  filter: 'title'
}

export const FilterByStateMode: Story<SelectWithUseStatePropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.state === 'Italy')
  }, [cities])

  const onFilterCities = (arrayCities: CityType[], filterType: CitiesFilterType) => {
    switch (filterType) {
      case 'none':
        setCities(getCities)
        break
      case 'state':
        setCities(filteredCities)
        break
      default:
        break
    }
  }

  return <SelectWithUseState {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByStateMode.args = {
  filter: 'state'
}

export const FilterByPopulationCharMode: Story<SelectWithUseStatePropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.population <= 500000 && i.population >= 10000)
  }, [cities])

  const onFilterCities = (arrayCities: CityType[], filterType: CitiesFilterType) => {
    switch (filterType) {
      case 'none':
        setCities(getCities)
        break
      case 'population':
        setCities(filteredCities)
        break
      default:
        break
    }
  }

  return <SelectWithUseState {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByPopulationCharMode.args = {
  filter: 'population'
}
