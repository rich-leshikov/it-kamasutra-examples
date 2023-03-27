import React, {useCallback, useEffect, useState} from 'react';
import {Story} from '@storybook/react';
import {v1} from 'uuid';
import {CitiesFilterType, CityType} from '../../App';
import {SelectWithUseEffect, SelectWithUseEffectPropsType} from './SelectWithUseEffect';
import {citiesState} from './citiesState';

export default {
  title: 'Select with useEffect',
  component: SelectWithUseEffect,
  argTypes: {
    filterItems: {
      table: {
        category: 'Events'
      }
    }
  }
}

const defaultState: CityType[] = citiesState

export const FilterByMCharMode: Story<SelectWithUseEffectPropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  useEffect(() => {
    alert(`Filtering by 'u' character`)
  }, [])

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.title.toLowerCase().indexOf('u') !== -1)
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

  return <SelectWithUseEffect {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByMCharMode.args = {
  filter: 'title'
}

export const FilterByStateMode: Story<SelectWithUseEffectPropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  useEffect(() => {
    alert(`Filtering by japanese cities`)
  }, [])

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.state === 'Japan')
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

  return <SelectWithUseEffect {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByStateMode.args = {
  filter: 'state'
}

export const FilterByPopulationCharMode: Story<SelectWithUseEffectPropsType> = (args) => {
  const getCities = useCallback((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  useEffect(() => {
    alert(`Filtering by population`)
  }, [])

  const filteredCities = useCallback(() => {
    return cities.filter(i => i.population <= 150000)
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

  return <SelectWithUseEffect {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByPopulationCharMode.args = {
  filter: 'population'
}
