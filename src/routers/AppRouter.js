import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact={true} />
        <Route path='/about' component={AboutMe} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;

// <Route path='/add' component={AddUpdate} />
// <Route path='/clubs' component={Clubs} exact={true} />
// <Route path='/clubs/:id' component={ClubPage} />
// <Route path='/info' component={Info} />
