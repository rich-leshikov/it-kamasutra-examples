import React, {useCallback, useEffect, useState} from 'react';
import {CitiesFilterType, CityType} from '../../App';
import {Button} from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export type SelectWithUseEffectPropsType = {
  /**
   * Array of items (id, title)
   */
  items: CityType[]
  /**
   * Filter condition value
   */
  filter: CitiesFilterType
  /**
   * Function to filter cities by condition
   * @param arrayCities array of cities
   * @param filterType value of filter condition
   */
  filterItems: (arrayCities: CityType[], filterType: CitiesFilterType) => void
}

export const SelectWithUseEffect = React.memo((props: SelectWithUseEffectPropsType) => {
  const [title, setTitle] = useState<string>(props.items[0].title)
  const [isCollapsed, setCollapse] = useState<boolean>(false)
  const [isFiltered, setFilter] = useState<boolean>(false)

  const onCollapseHandler = useCallback(() => setCollapse(!isCollapsed), [isCollapsed])

  useEffect(() => {
    alert(`rendering...`)
  })

  useEffect(() => {
    alert(`Selected city: ${title}`)
  }, [title])

  const changeSelectedItem = useCallback((itemId: string, items: CityType[]) => {
    let itemSelected = items.find(i => i.id === itemId)
    if (itemSelected) {
      setTitle(itemSelected.title)
      setCollapse(true)
    }
  }, [])

  const switchFiltration = () => {
    if (!isFiltered) {
      props.filterItems(props.items, props.filter)
      setFilter(true)
    } else {
      props.filterItems(props.items, 'none')
      setFilter(false)
    }
  }

  return (
    <div>
      <Button
        onClick={onCollapseHandler}
        variant="contained"
        color={'info'}
        style={{margin: '2px', width: '180px'}}
        endIcon={<AirplanemodeActiveIcon/>}
      >{title}</Button>
      <Button
        onClick={switchFiltration}
        variant="outlined"
        color={'warning'}
        style={{margin: '2px'}}
      ><FilterAltIcon/></Button>
      {!isCollapsed && props.items.map(i =>
        <div key={i.id}>
          <Button
            onClick={() => changeSelectedItem(i.id, props.items)}
            color={'info'}
            variant="outlined"
            style={{margin: '2px', width: '180px'}}
          >{i.title}</Button>
        </div>)}
    </div>
  )
})