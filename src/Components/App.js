import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainContainer from '../Pages/MainContainer'
import CategoriesContainer from '../Pages/CategoriesContainer'
import NotFound from '../Pages/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/inicio" component={MainContainer} />
            <Route exact path="/categorias" component={CategoriesContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;