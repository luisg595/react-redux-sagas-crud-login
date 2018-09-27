import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthLogin from './containers/AuthLogin'
import Dashboard from './containers/Dashboard'
import UsersModule from './containers/UsersModule'
import Page404 from './containers/Page404'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={AuthLogin} />
            <Route exact path="/users" component={UsersModule} />
            <Route exact path="/" component={Dashboard} />
            <Route component={Page404} />
        </Switch>
    )
}

export default Routes