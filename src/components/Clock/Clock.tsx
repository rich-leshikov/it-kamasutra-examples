import React, {useEffect, useRef, useState} from 'react'

export type ClockPropsType = {
  /**
   * Default time value
   */
  time: string
}

export const Clock = React.memo((props: ClockPropsType) => {
  const [time, setTime] = useState<string>(props.time)
  const [isTicking, setTicking] = useState<boolean>(false)
  const [date, setDate] = useState<Date>(new Date())

  const timerRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    if (isTicking) {
       timerRef.current = setInterval(() => {
        setDate(new Date())
      }, 1000)

      const stringTime = new Intl.DateTimeFormat('ru', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format(date)

      setTime(stringTime)
      return () => {
        clearInterval(timerRef.current)
      }
    }

  }, [isTicking, date])

  const onStartTicking = () => {
    setTicking(true)
  }

  const onStopTicking = () => {
    setTicking(false)
  }

  return (
    <div
      style={{fontSize: '24px', color: '#646464', fontFamily: 'impact'}}
      onClick={!isTicking ? onStartTicking : onStopTicking}
    >{time}</div>
  )
})