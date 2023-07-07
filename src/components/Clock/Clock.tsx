import React, {useEffect, useState} from 'react'
import {AnalogClock} from './AnalogClock'
import {DigitalClock} from './DigitalClock'


type ClockPropsType = {
  mode: 'digital' | 'analog'
}


export const Clock = React.memo(({mode}: ClockPropsType) => {
  const [isTicking, setTicking] = useState<boolean>(true)
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    if (isTicking) {
      const interval = setInterval(() => {
        setDate(new Date())
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [isTicking, date])

  const onClickCondition = () => !isTicking ? setTicking(true) : setTicking(false)

  return (
    <div onClick={onClickCondition}>
      {
        mode === 'digital'
          ? <DigitalClock date={date}/>
          : <AnalogClock date={date}/>
      }
    </div>
  )
})