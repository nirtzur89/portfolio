import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { height } from 'window-size';

const Dashboard = () => (
  <div className='base-component'>
    <div className='container-fluid dash'>
      <div className='row'>
        <div className='item col-sm'>
          <img
            className='img'
            src={require('../images/me.jpg')}
            height='95%'
            width='85%'
          />
        </div>
        <div className='item item-text col-sm'>
          <h1>Hey, I'm Nir</h1>
          <hr />
          <h2> A Full-Stack Web-Developer</h2>
          <h4 className='ultra'>Berlin | Germany</h4>
          <div className='container-fluid social'>
            <div className='row'>
              <h5 className='col-sm'>Link</h5>
              <h5 className='col-sm'>git</h5>
              <h5 className='col-sm'>em</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
