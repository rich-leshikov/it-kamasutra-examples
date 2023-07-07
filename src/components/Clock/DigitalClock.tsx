import React from 'react'


type DigitalClockPropsType = {
  date: Date
}


export const DigitalClock = React.memo(({date}: DigitalClockPropsType) => {
  const digitalClockStyle = {fontSize: '64px', color: '#646464', fontFamily: 'impact'}

  const stringTime = new Intl.DateTimeFormat('ru', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(date)

  return <div style={digitalClockStyle}>{stringTime}</div>
})