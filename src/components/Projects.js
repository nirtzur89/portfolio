import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { height } from 'window-size';

const Projects = () => (
  <div className='base-component'>
    <div className='container-fluid dash'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleCaptions'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={require('../images/clubq.png')}
              className='d-block w-100'
              alt='blabla'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h2>Club Q</h2>
              <h4>
                A React App for updating and reciving live updates on queues in
                Berlin's clubs.
              </h4>
            </div>
          </div>

          <div className='carousel-item'>
            <img
              src={require('../images/me.jpg')}
              className='d-block w-100'
              alt='blabla'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>20 4 U</h5>
              <p>
                An App using the Spotify API, for music lovers who like to
                explore new sounds
              </p>
            </div>
          </div>

          <div className='carousel-item'>
            <img
              src={require('../images/me.jpg')}
              className='d-block w-100'
              alt='blabla'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Explore more of my projects</h5>
              <p>From along the Bootcamp and every day since...</p>
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleCaptions'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleCaptions'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
