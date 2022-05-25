import * as React from 'react';
import { NCText } from 'nc-components-ui';

import Header from '../../organisms/Header';
import strings from '../../utils/constants/strings';
import ConfirmButton from '../../atoms/ConfirmButton';
import { get, isEmpty } from 'lodash';
import PhoneNumberRequest from '../../templates/PhoneNumberRequest';
import ReferralCodeSignUp from '../../templates/ReferralCodeSignUp';
import '../../output.css';
const MobileVerfiication = (props) => {
  const [phoneNumber, setPhoneNumber]: [string, any] = React.useState();
  const [businessName, setBusinessName] = React.useState('');
  const [referralCode, setReferralCode] = React.useState('');
  const [isReferral, setIsReferral] = React.useState(false);

  let isSubmitDisabled =
    isEmpty(phoneNumber) || (phoneNumber && phoneNumber.length !== 10);

  if (isReferral) {
    isSubmitDisabled = isSubmitDisabled || isEmpty(businessName);
  }

  const handleRequestOtpClick = () => {};

  const handlePhoneNumberChange = (e: AnimationPlaybackEventInit) => {
    const value = get(e, 'target.value', null);
    if (!isNaN(value)) {
      setPhoneNumber(value);
    }
  };

  const handleReferralCodeClick = () => {
    if (!isSubmitDisabled) {
      setIsReferral(true);
    }
  };

  const handleBack = () => {
    if (isReferral) {
      setIsReferral(false);
      setBusinessName('');
      setReferralCode('');
    }
  };

  const handleBusinessNameChange = (e: any) => setBusinessName(e.target.value);
  const handleReferralCodeChange = (e: any) => setReferralCode(e.target.value);

  return (
    <div className='h-screen flex flex-col w-full overflow-hidden'>
      <Header title='Mobile Verification' onBack={handleBack} />
      <div className='flex h-full flex-col px-8'>
        {!isReferral ? (
          <PhoneNumberRequest
            handlePhoneNumberChange={handlePhoneNumberChange}
            handleReferralCodeClick={handleReferralCodeClick}
            phoneNumber={phoneNumber}
            isDisabled={isSubmitDisabled}
          />
        ) : (
          <ReferralCodeSignUp
            handleBusinessNameChange={handleBusinessNameChange}
            businessName={businessName}
            handleReferralCodeChange={handleReferralCodeChange}
            referralCode={referralCode}
          />
        )}

        <div className='mb-[82px]'>
          <NCText
            onClick={handleReferralCodeClick}
            weight='400'
            className='flex w-full justify-start pb-4'
            styles={{ fontSize: '12px' }}
          >
            {strings.formatString(
              strings.terms,
              <NCText
                onClick={handleReferralCodeClick}
                color='#2129ED'
                className='pb-4'
                weight='400'
                styles={{ fontSize: '12px' }}
              >
                &nbsp;{strings.t_n_c}&nbsp;
              </NCText>
            )}
          </NCText>
          <ConfirmButton
            label={strings.send_otp}
            onClick={handleRequestOtpClick}
            isDisabled={isSubmitDisabled}
          />
        </div>
      </div>
    </div>
  );
};
export default MobileVerfiication;
