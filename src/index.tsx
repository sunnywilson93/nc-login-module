import * as React from 'react';
import { PiletApi } from 'my-app';
import { Link } from 'react-router-dom';
import MobileVerfiication from './pages/MobileVerification';

export function setup(app: PiletApi) {
  app.registerTile(
    'first tile',
    () => (
      <Link to='/login'>
        <div
          style={{
            height: '100%',
            backgroundColor: '#c1c1c1',
            width: '100%'
          }}
        >
          Hello to Piral!
        </div>
      </Link>
    ),
    {
      initialColumns: 2,
      initialRows: 2
    }
  );
 
  app.registerPage('/login', MobileVerfiication);
}
