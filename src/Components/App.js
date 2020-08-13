import React from 'react';
import MainContainer from '../Pages/MainContainer';
import NFound from '../Pages/NFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/inicio" component={MainContainer} />
            <Route component={NFound} />
        </Switch>
    </BrowserRouter>
)

export default App;