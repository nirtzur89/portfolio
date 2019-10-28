import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { height } from 'window-size';

const Projects = () => (
  <div className='base-component'>
    <div className='container-fluid dash'>
      <h2 className='caption'>My Projects:</h2>
      <div className='column project-col'>
        <div className='item item-text col-sm'>
          <h1>project 1</h1>
        </div>
        <div className='item item-text col-sm'>
          <h1>project 2</h1>
        </div>
        <div className='item item-text col-sm'>
          <h1>project 3</h1>
        </div>
      </div>
      <div
        id='carouselExampleCaptions'
        className='carousel slide carodisplay'
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
            <a href='https://clubq.herokuapp.com/'>
              <div className='carousel-caption d-none d-md-block car-div'>
                <h1>Club Q</h1>
                <h3>
                  A React App for updating and reciving live updates on queues
                  in Berlin's clubs.
                </h3>
              </div>
            </a>
          </div>

          <div className='carousel-item'>
            <img
              src={require('../images/204u.png')}
              className='d-block w-100'
              alt='blabla'
            />
            <a href='https://twenty4you.herokuapp.com/'>
              <div className='carousel-caption d-none d-md-block car-div'>
                <h1>20 4 U</h1>
                <h3>
                  An App using the Spotify API, for music lovers who like to
                  explore new sounds.
                </h3>
              </div>
            </a>
          </div>

          <div className='carousel-item'>
            <img
              src={require('../images/more.jpg')}
              className='d-block w-100'
              alt='blabla'
            />
            <div className='carousel-caption d-none d-md-block car-div'>
              <h1>Explore more of my projects</h1>
              <h3>From along the Bootcamp and every day since...</h3>
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
