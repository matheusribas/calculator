import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Calculator from './pages/Calculator'
import History from './pages/History'

export default function Routes () {
    return (
        <Switch>
            <Route path="/" exact component={Calculator} />
            <Route path="/history" component={History} />
        </Switch>
    );
}