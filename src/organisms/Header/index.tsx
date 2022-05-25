import React from 'react';
import { PropTypes, navElement } from './types';
import HeaderTitle from '../../atoms/HeaderTitle/index';
import { Navback } from '../../assets/navigation';
import { isEmpty } from 'lodash';

const Header = (props: PropTypes) => {
  const headerBgColor = props.bgColor ? props.bgColor : 'bg-primary';
  return (
    <div className={`h-header w-full px-4 flex items-center ${headerBgColor}`}>
      <div className='w-4' onClick={props.onBack}>
        <Navback />
      </div>
      <HeaderTitle title={props.title} />
      <div className='min-w-fit flex'>
        {!isEmpty(props.actions) &&
          props.actions.map((action: navElement) => (
            <div key={action.key} onClick={action.onClick} className='pl-2'>
              {action.element}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
