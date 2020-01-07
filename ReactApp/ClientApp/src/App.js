import React from 'react';
import { Route } from 'react-router';

import { Redirect } from "react-router-dom";
import Layout from './components/Layout';
import LogIn from './components/Login';
import PSIAuthentication from './components/PSIAuthentication';
export default () => (
    <Layout>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path='/login' component={LogIn} />
            <Route path='/psi' component={PSIAuthentication} />
          
  </Layout>
);
