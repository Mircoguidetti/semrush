import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'
import Backlinks from '../components/backlinks/Backlinks';
import OrganicKeywords from '../components/organic-keywords/OrganicKeywords';

const IndexRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/backlinks' component={Backlinks} />
            <Route path='/organic-keywords' component={OrganicKeywords} />
        </Switch>
    </BrowserRouter>
);

export default IndexRouter;