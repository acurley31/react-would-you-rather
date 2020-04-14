import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {
    state = {
        id: '',
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
        const users = this.props.users
            ? Object.keys(this.props.users).map(id => this.props.users[id])
            : []

        const { id } = this.state
        const isDisabled = id && id !== '' ? false : true

        return (
            <div className='login-container'>
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
                            className='login-button'
                            disabled={isDisabled}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({
    users,
})

export default connect(mapStateToProps)(Login);

