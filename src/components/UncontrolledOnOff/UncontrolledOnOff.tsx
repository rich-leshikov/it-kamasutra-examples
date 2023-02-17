import React, {useState} from 'react';

type OnOffPropsType = {
  // on: boolean,
}

function UncontrolledOnOffMain(props: OnOffPropsType) {
  let [on, changeColor] = useState(false)

  const onStyle = {
    width: '70px',
    height: '40px',
    display: 'inline-block',
    margin: '5px',
    verticalAlign: 'middle',
    border: '1px solid black',
    backgroundColor: on ? '#8fe18f' : '#eeebeb',
  }
  const offStyle = {
    width: '70px',
    height: '40px',
    display: 'inline-block',
    margin: '5px',
    verticalAlign: 'middle',
    border: '1px solid black',
    backgroundColor: on ? '#eeebeb' : '#e07b7b',
  }
  const indicatorStyle = {
    width: '30px',
    height: '30px',
    display: 'inline-block',
    margin: '5px',
    verticalAlign: 'middle',
    borderRadius: '15px',
    border: '1px solid black',
    backgroundColor: on ? '#8fe18f' : '#e07b7b',
  }

  return (
    <div className={'onOffMain'}>
      <div className="title">Uncontrolled OnOff</div>
      <div className="button" style={onStyle} onClick={() => {
        changeColor(true)
      }}>ON
      </div>
      <div className="button" style={offStyle} onClick={() => {
        changeColor(false)
      }}>OFF
      </div>
      <div className="indicator" style={indicatorStyle}/>
    </div>
  )
}

export const UncontrolledOnOff = React.memo(UncontrolledOnOffMain)