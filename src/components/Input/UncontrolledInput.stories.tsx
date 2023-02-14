import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from '@storybook/react';
import {UncontrolledInput} from './UncontrolledInput';

export default {
  title: 'UncontrolledInput',
  component: UncontrolledInput,
}

const Template: Story<any> = (args) => <UncontrolledInput {...args}/>

export const UncontrolledInputMode = Template.bind({})
UncontrolledInputMode.args = {}

export const TrackValueOfUncontrolledInput: Story<any> = (args) => {
  const [value, setValue] = useState<string>('')

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return (
    <>
      <input onChange={changeInput}/> - {value}
    </>
  )
}

export const GetValueOfUncontrolledInputByButtonPress: Story<any> = (args) => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const saveValue = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return (
    <>
      <input id={'inputId'} ref={inputRef}/>
      <button onClick={saveValue}>Save</button>
      <div>
        Actual value: {value}
      </div>
    </>
  )
}


