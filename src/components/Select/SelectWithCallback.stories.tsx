import React, {useCallback, useState} from 'react';
import {Story} from '@storybook/react';
import {v1} from 'uuid';
import {CitiesFilterType, CityType} from '../../App';
import {SelectWithCallback, SelectWithCallbackPropsType} from './SelectWithCallback';
import {citiesState} from './citiesState';

export default {
  title: 'Select with Callback',
  component: SelectWithCallback,
  argTypes: {
    filterItems: {
      table: {
        category: 'Events'
      }
    }
  }
}

const defaultState = citiesState

export const FilterByMCharMode: Story<SelectWithCallbackPropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.title.toLowerCase().indexOf('o') !== -1)
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

  return <SelectWithCallback {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByMCharMode.args = {
  filter: 'title'
}

export const FilterByStateMode: Story<SelectWithCallbackPropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.state === 'Russia')
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

  return <SelectWithCallback {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByStateMode.args = {
  filter: 'state'
}

export const FilterByPopulationCharMode: Story<SelectWithCallbackPropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.population <= 1000000)
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

  return <SelectWithCallback {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByPopulationCharMode.args = {
  filter: 'population'
}
