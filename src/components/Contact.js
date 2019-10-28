import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { height } from 'window-size';

const Contact = () => (
  <div className='base-component'>
    <div className='container-fluid dash item-text'>
      <h1>Contact Me:</h1>
      <hr />
      <h4 className='spacing'>
        If you've made it all the way here,
        <br />
        I must have done something right (or terribly wrong).
        <br />
      </h4>
      <h4 className='spacing'>
        To let me know what it was, or even if you just need to talk about the
        weather, <br />
        find me on my E-mail: <u>Nirtzur89@gmail.com</u>
        <br />
        or on my phone: +49 (0) 173-634-9808
      </h4>
    </div>
  </div>
);

export default Contact;
