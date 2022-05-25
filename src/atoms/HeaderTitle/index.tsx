import * as React from 'react';
import { NCText } from 'nc-components-ui';

interface PropTypes {
  title?: string;
  alignment?: string;
}

const HeaderTitle = (props: PropTypes) => {
  const alignment = props.alignment ? props.alignment : 'justify-center';
  return (
    <div className={`flex w-full ${alignment}`}>
      <NCText
        tailwindClasses='text-ellipsis overflow-hidden whitespace-nowrap'
        color='#ffffff'
        wieght='400'
        variant='title'
      >
        {props.title}
      </NCText>
    </div>
  );
};

export default HeaderTitle;
