import * as React from 'react';
import strings from '../../utils/constants/strings';
import { EmojioneLightBulb } from '../../assets';
import { NCText } from 'nc-components-ui';

export interface PhoneNumberRequestPropTypes {
  handlePhoneNumberChange: any;
  handleReferralCodeClick: any;
  phoneNumber: string;
  isDisabled: boolean;
}
const PhoneNumberRequest = (props: PhoneNumberRequestPropTypes) => (
  <div className='flex-1 pt-[30px]'>
    <div>
      <NCText weight='700'>{strings.share_contact}</NCText>
    </div>
    <div className='pt-[30px]'>
      <div className='flex w-full '>
        <EmojioneLightBulb /> &nbsp;
        <NCText styles={{ fontSize: '9px' }} weight='300' variant='xSmall'>
          {strings.whats_experience_msg}
        </NCText>
      </div>
    </div>
    <div className='pt-4'>
      <div className='h-[40px] w-full border rounded-lg px-4 flex flex-row  items-center'>
        <div className='flex w-10'>
          <NCText weight='300' color='#666666'>
            +91 |
          </NCText>
        </div>
        <div>
          <input
            value={props.phoneNumber}
            onChange={props.handlePhoneNumberChange}
            className='font-light text-[#666666] w-full hover:outline-none outline-none'
          ></input>
        </div>
      </div>
    </div>
    <div className='pt-4'>
      <NCText
        onClick={props.handleReferralCodeClick}
        color={props.isDisabled ? '#c4c4c4' : '#2129ED'}
        weight='400'
        className='flex w-full justify-end'
        styles={{ fontSize: '10px' }}
      >
        {strings.referral_code}
      </NCText>
    </div>
  </div>
);

export default PhoneNumberRequest;
