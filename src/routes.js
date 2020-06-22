import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Orcamento from '../src/pages/Orcamento';
import Success from '../src/pages/Success';

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/orcamento" component={Orcamento}/> 
                <Route path="/success" component={Success}/> 
            </Switch>
        </BrowserRouter>
    )
}