import React, {useEffect, useRef, useState} from 'react'


export const Clock = React.memo(() => {
  const [time, setTime] = useState<string>('00:00:00')
  const [isTicking, setTicking] = useState<boolean>(false)
  const [date, setDate] = useState<Date>(new Date())

  const digitalClockStyle = {fontSize: '24px', color: '#646464', fontFamily: 'impact'}

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

  const onClickCondition = () => !isTicking ? setTicking(true) : setTicking(false)

  return <div style={digitalClockStyle} onClick={onClickCondition}>{time}</div>
})