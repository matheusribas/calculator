import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Calculator from './pages/Calculator'
import History from './pages/History'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Calculator} />
                <Route path="/history" component={History} />
            </Switch>
        </BrowserRouter>
    );
}