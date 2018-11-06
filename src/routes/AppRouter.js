import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import ADDExpensePage from './../components/ADDExpensePage';
import EditEepansePage from './../components/EditEepansePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component ={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component ={ADDExpensePage} />
                <Route path="/edit/:id" component ={EditEepansePage} />
                <Route path="/help" component ={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div> 
        
    </BrowserRouter>
)
export default AppRouter;