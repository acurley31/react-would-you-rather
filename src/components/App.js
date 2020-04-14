import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import { handleGetInitialData } from '../actions/shared';
import Login from './Login';
import Error from './Error';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import QuestionForm from './QuestionForm';
import QuestionDetail from './QuestionDetail';


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetInitialData())
    }

    render() {
        const { authedUser } = this.props
        if (!authedUser) {
            return <Login />
        }
        
        return (
            <Router>
                <Nav />
                <LoadingBar />
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/add' component={QuestionForm} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/questions/:id' component={QuestionDetail} />
                    <Route component={Error} />
                </Switch>
            </Router>
        )
    }
}

const mapPropsToState = ({ authedUser }) => ({
    authedUser,
})

export default connect(mapPropsToState)(App);

