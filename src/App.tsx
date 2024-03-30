import React, { Fragment } from 'react';
import Sidenav from './components/Sidenav';
import { Outlet } from 'react-router-dom';
import Topnav from './components/common/Topnav';

function App() {
  return (
    <Fragment>
      <Topnav />
      <div className='app d-flex'>
        <Sidenav />
        <Outlet />
      </div>
    </Fragment>
  );
}

export default App;
