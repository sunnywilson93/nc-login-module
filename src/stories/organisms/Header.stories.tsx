import React from 'react';

import Header from '../../organisms/Header';
import { Navback } from '../../assets/navigation';

export default {
  title: 'Organisms/Header',
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

const Template = (args) => (
  <div className='h-screen w-full border'>
    <Header {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Ninja Cart',
  actions: [
    { element: <Navback />, key: 'back', onClick: console.log },
    { element: <Navback />, key: 'notifications', onClick: console.log }
  ]
};
