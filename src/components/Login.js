import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleGetUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {
    state = {
        id: '',
    }

    componentDidMount() {
        this.props.dispatch(handleGetUsers())
    }

    updateId = (e) => {
        e.preventDefault()
        this.setState({ id: e.target.value })
    }
    
    onLogin = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        const { id } = this.state
        if (id !== '') {
            dispatch(setAuthedUser(id))
        }
    }

    render() {
        const { users, isAuthenticated, location } = this.props
        const redirectLocation = location.state ? location.state.from.pathname : '/'
        const { id } = this.state
        const isDisabled = id && id !== '' ? false : true

        // Once the user has logged in, redirect to the referred location
        if (isAuthenticated) {
            return <Redirect to={redirectLocation} />
        }

        // Otherwise, render the login form
        return (
            <div className='container'>
                <div className='login-card'>
                    <h3 className='login-header'>Login</h3>

                    <form className='login-form' onSubmit={this.onLogin}>
                        <select
                            className='login-user-select'
                            value={this.state.id} 
                            onChange={this.updateId}>
                            
                            <option value=''>Select user</option>
                            { users.map(user => (
                                <option key={user.id} 
                                    value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>

                        <button
                            type='submit' 
                            className='outline-button'
                            disabled={isDisabled}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => ({
    isAuthenticated: authedUser ? true : false,
    users: Object.keys(users).map(id => users[id]),
})

export default connect(mapStateToProps)(Login);

