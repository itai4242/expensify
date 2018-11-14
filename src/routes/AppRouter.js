import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import ADDExpensePage from './../components/ADDExpensePage';
import EditEepansePage from './../components/EditEepansePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';

import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivatRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component ={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component ={ADDExpensePage} />
                <PrivateRoute path="/edit/:id" component ={EditEepansePage} />
                <Route path="/help" component ={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div> 
        
    </Router>
)
export default AppRouter;