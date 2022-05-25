import * as React from 'react';
import { NCButtonWithoutMUI } from 'nc-components-ui';

export interface ConfirmButtonProps {
  label: string;
  onClick: Function;
  isDisabled?: boolean;
}

const ConfirmButton = (props: ConfirmButtonProps) => (
  <NCButtonWithoutMUI
    customClasses={`w-full drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-sm !h-[40px] ${
      props.isDisabled && 'bg-gray-500'
    }`}
    variant='primary'
    label={props.label}
    onClick={props.onClick}
  />
);

export default ConfirmButton;
