import React from 'react';

type OnOffPropsType = {
  on: boolean,
  changeColor: (onOffValue: boolean) => void
}

function OnOffMain(props: OnOffPropsType) {
  const onStyle = {
    width: '70px',
    height: '40px',
    display: 'inline-block',
    margin: '5px',
    verticalAlign: 'middle',
    border: '1px solid black',
    backgroundColor: props.on ? '#8fe18f' : '#eeebeb',
  }
  const offStyle = {
    width: '70px',
    height: '40px',
    display: 'inline-block',
    margin: '5px',
    verticalAlign: 'middle',
    border: '1px solid black',
    backgroundColor: props.on ? '#eeebeb' : '#e07b7b',
  }
  const indicatorStyle = {
    width: '30px',
    height: '30px',
    display: 'inline-block',
    margin: '5px',
    verticalAlign: 'middle',
    borderRadius: '15px',
    border: '1px solid black',
    backgroundColor: props.on ? '#8fe18f' : '#e07b7b',
  }

  const onOffClicked = (onOffValue: boolean) => {
    props.changeColor(onOffValue)
  }

  return (
    <div className={'onOffMain'}>
      <div className="title">Controlled OnOff</div>
      <div className="button" style={onStyle} onClick={() => onOffClicked(true)}>ON</div>
      <div className="button" style={offStyle} onClick={() => onOffClicked(false)}>OFF</div>
      <div className="indicator" style={indicatorStyle}/>
    </div>
  )
}

export const OnOff = React.memo(OnOffMain)