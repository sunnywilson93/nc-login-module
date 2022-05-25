import React from 'react';

import Header from '../../organisms/Header';
import { Navback } from '../../assets/navigation';
import MobileVerfiication from '../../pages/MobileVerification';

export default {
  title: 'Pages/MobileVerification',
  component: Header,
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    },
    actions: {
      control: {
        type: 'object',
        action: 'clicked'
      }
    }
  },
  onBack: {
    action: 'back clicked'
  }
};

const Template = (args) => <MobileVerfiication />;

export const Default = Template.bind({});

Default.args = {
  title: 'Ninja Cart',
  actions: [
    { element: <Navback />, key: 'back', onClick: console.log },
    { element: <Navback />, key: 'notifications', onClick: console.log }
  ]
};
