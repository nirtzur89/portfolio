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
            <div className='row space'>
              <a
                className='cancela'
                href='https://www.linkedin.com/in/nirtzur89/'
              >
                <i className='fab fa-linkedin fa-3x'></i>
              </a>
              <a className='cancela' href='https://github.com/nirtzur89'>
                <i className='fab fa-github fa-3x'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
