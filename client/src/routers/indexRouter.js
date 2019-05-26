import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'

const IndexRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/create' component={HomePage} exact={true} /> 
        </Switch>
    </BrowserRouter>
);

export default IndexRouter;