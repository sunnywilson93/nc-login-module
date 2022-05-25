import * as React from 'react';
import { NCText } from 'nc-components-ui';
import strings from '../../utils/constants/strings';

export interface NamedTextInputPropTypes {
  label: string;
  value: string;
  placeholder?: string;
  onChange: any;
  classes?: string;
  additionalProps?: any;
}
const NamedTextInput = (props: NamedTextInputPropTypes) => (
  <div className='flex w-full flex-col'>
    <NCText styles={{ fontSize: '9px' }} weight='300' variant='xSmall'>
      {props.label}
    </NCText>
    <input
      value={props.value}
      className={`border mt-4 rounded-lg h-[40px] hover:outline-none focus:outline-none px-4 ${props.classes}`}
      onChange={props.onChange}
      {...props.additionalProps}
    ></input>
  </div>
);

export default NamedTextInput;
