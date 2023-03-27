import React, {useCallback, useMemo, useState} from 'react';
import {Story} from '@storybook/react';
import {SelectWithMemo, SelectWithMemoPropsType} from './SelectWithMemo';
import {v1} from 'uuid';
import {CitiesFilterType, CityType} from '../../App';
import {citiesState} from './citiesState';

export default {
  title: 'Select with Memo',
  component: SelectWithMemo,
  argTypes: {
    filterItems: {
      table: {
        category: 'Events'
      }
    }
  }
}

const defaultState: CityType[] = citiesState

export const FilterByMCharMode: Story<SelectWithMemoPropsType> = (args) => {
  const getCities = useMemo((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useMemo(() => {
    return cities.filter(i => i.title.toLowerCase().indexOf('m') !== -1)
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

  return <SelectWithMemo {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByMCharMode.args = {
  filter: 'title'
}

export const FilterByStateMode: Story<SelectWithMemoPropsType> = (args) => {
  const getCities = useMemo((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useMemo(() => {
    return cities.filter(i => i.state === 'Belarus')
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

  return <SelectWithMemo {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByStateMode.args = {
  filter: 'state'
}

export const FilterByPopulationCharMode: Story<SelectWithMemoPropsType> = (args) => {
  const getCities = useMemo((): CityType[] => defaultState, [])
  const [cities, setCities] = useState<CityType[]>(getCities)

  const filteredCities = useMemo(() => {
    return cities.filter(i => i.population >= 10000000)
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

  return <SelectWithMemo {...args} items={cities} filterItems={onFilterCities}/>
}
FilterByPopulationCharMode.args = {
  filter: 'population'
}
