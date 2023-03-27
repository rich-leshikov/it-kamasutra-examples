import React, {useCallback, useState} from 'react';
import {Story} from '@storybook/react';
import {v1} from 'uuid';
import {CitiesFilterType, CityType} from '../../App';
import {SelectWithCallback, SelectWithCallbackPropsType} from './SelectWithCallback';
import {SelectWithUseState, SelectWithUseStatePropsType} from './SelectWithUseState';
import {citiesState} from './citiesState';

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

const defaultState: CityType[] = citiesState

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
