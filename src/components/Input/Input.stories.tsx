import React, {ChangeEvent, useRef, useState} from 'react';
import {Story} from '@storybook/react';
import {Input} from './Input';

export default {
  title: 'Input',
  component: Input,
}

const Template: Story<any> = (args) => <Input {...args}/>

export const UncontrolledInputMode = Template.bind({})
UncontrolledInputMode.args = {}

export const TrackValueOfUncontrolledInput: Story<any> = (args) => {
  const [value, setValue] = useState<string>('')

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return (
    <><input onChange={changeInput}/> - {value}</>
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

export const ControlledInput: Story<any> = (args) => {
  const [parentValue, setParentValue] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return (
    <><input value={parentValue} onChange={onChange}/> - {parentValue}</>
  )
}

export const ControlledCheckbox: Story<any> = (args) => {
  const [parentValue, setParentValue] = useState<boolean>(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }

  return (
    <><input type={'checkbox'} checked={parentValue} onChange={onChange}/></>
  )
}

export const ControlledSelect: Story<any> = (args) => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return (
    <><select value={parentValue} onChange={onChange}>
      <option>none</option>
      <option value={'1'}>Minsk</option>
      <option value={'2'}>Moscow</option>
      <option value={'3'}>Kiev</option>
      <option value={'4'}>Belgrade</option>
    </select></>
  )
}
