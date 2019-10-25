import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact={true} />

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
