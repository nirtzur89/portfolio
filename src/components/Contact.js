import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { height } from 'window-size';

const Contact = () => (
  <div className='base-component'>
    <div className='container-fluid dash'>
      =<h1>About Me:</h1>
      <hr />
      <h4>
        My name is Nir Tzur, I'm 30 years old. <br />
        In 2015 I've moved from Israel to work in Germany and ended up falling
        in love with Berlin. <br />
        After deciding I want to keep living here, I've began the journey of a
        career change.
      </h4>
      <h4>
        thats when I've decided to go back to my high-school hobby and joined a
        coding bootcamp <br />
        at Ironhack. <br /> Now, after succecfully completing the course and
        building some awesome apps,
        <br />
        I'm ready to start a new and exciting career as a developer.
      </h4>
    </div>
  </div>
);

export default Contact;
