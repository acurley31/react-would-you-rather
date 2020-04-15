import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleGetInitialData } from '../actions/shared';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import Question from './Question';
import Error from './Error';


class Home extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetInitialData())
    }

    render() {
        return (
            <Fragment>
                <Nav />
                <LoadingBar />
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/questions/:id' component={Question} />
                    <Route component={Error} />
                </Switch>
            </Fragment>
        )   
    }  
}

export default connect()(Home);
