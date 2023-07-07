import {Clock} from './Clock'


export default {
  title: 'Clock',
  component: Clock,
}


export const BaseAnalogExample = () => <Clock mode={'analog'}/>
export const BaseDigitalExample = () => <Clock mode={'digital'}/>

