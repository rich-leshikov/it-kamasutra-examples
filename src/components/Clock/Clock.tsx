import React, {useEffect, useRef, useState} from 'react'
import styles from './AnalogClock.module.css'


export const Clock = React.memo(() => {
  const [mode, setMode] = useState<'digital' | 'analog'>('digital')
  const [time, setTime] = useState<string>('00:00:00')
  const [isTicking, setTicking] = useState<boolean>(false)
  const [date, setDate] = useState<Date>(new Date())

  const digitalClockStyle = {fontSize: '64px', color: '#646464', fontFamily: 'impact'}

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

  const onChangeMode = () => mode === 'digital' ? setMode('analog') : setMode('digital')
  const onClickCondition = () => !isTicking ? setTicking(true) : setTicking(false)

  return (
    <>
      <button onClick={onChangeMode}>Change mode</button>
      <div onClick={onClickCondition}>
        {
          mode === 'digital'
            ? <div style={digitalClockStyle}>{time}</div>
            : <div className={styles.clock}>
              <div
                className={styles.hourHand}
                style={{
                  transform: `rotateZ(${date.getHours() * 30}deg)`
                }}
              />
              <div
                className={styles.minHand}
                style={{
                  transform: `rotateZ(${date.getMinutes() * 6}deg)`
                }}
              />
              <div
                className={styles.secHand}
                style={{
                  transform: `rotateZ(${date.getSeconds() * 6}deg)`
                }}
              />
              <span className={styles.twelve}>12</span>
              <span className={styles.one}>1</span>
              <span className={styles.two}>2</span>
              <span className={styles.three}>3</span>
              <span className={styles.four}>4</span>
              <span className={styles.five}>5</span>
              <span className={styles.six}>6</span>
              <span className={styles.seven}>7</span>
              <span className={styles.eight}>8</span>
              <span className={styles.nine}>9</span>
              <span className={styles.ten}>10</span>
              <span className={styles.eleven}>11</span>
            </div>
        }
      </div>
    </>
  )
})