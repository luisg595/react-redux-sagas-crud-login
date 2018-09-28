import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthLogin from './containers/AuthLogin'
import Dashboard from './containers/Dashboard'
import UsersList from './containers/UsersList'
import UserAdd from './containers/UserAdd'
import Page404 from './containers/Page404'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={AuthLogin} />
            <Route exact path="/users" component={UsersList} />
            <Route exact path="/users/create" component={UserAdd} />
            <Route exact path="/" component={Dashboard} />
            <Route component={Page404} />
        </Switch>
    )
}

export default Routes