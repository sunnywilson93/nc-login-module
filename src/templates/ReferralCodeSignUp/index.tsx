import * as React from 'react';
import strings from '../../utils/constants/strings';
import { EmojioneLightBulb } from '../../assets';
import { NCText } from 'nc-components-ui';
import NamedTextInput from '../../molecules/NamedTextInput';

export interface PhoneNumberRequestPropTypes {
  handleBusinessNameChange: any;
  handleReferralCodeChange: any;
  businessName: string;
  referralCode: string;
}
const ReferralCodeSignUp = (props: PhoneNumberRequestPropTypes) => (
  <div className='flex-1 pt-[30px]'>
    <div>
      <NCText weight='700'>{strings.almost_done}</NCText>
    </div>
    <div className='pt-[30px]'>
      <NamedTextInput
        label={strings.business_name}
        onChange={props.handleBusinessNameChange}
        value={props.businessName}
      />
    </div>
    <div className='pt-[30px]'>
      <NamedTextInput
        label={strings.referral_code}
        onChange={props.handleReferralCodeChange}
        value={props.referralCode}
      />
    </div>
  </div>
);

export default ReferralCodeSignUp;
