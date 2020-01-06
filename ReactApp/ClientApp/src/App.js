import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import LogIn from './components/Login';
export default () => (
  <Layout>        
        <Route path='/' component={LogIn} />
  </Layout>
);
