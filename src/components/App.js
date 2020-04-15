import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Home from './Home';


class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                    <PrivateRoute path='/' component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default App;
