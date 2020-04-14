import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/authedUser';


class Nav extends Component {

    logoutUser = (e) => {
        e.preventDefault()
        this.props.dispatch(logout())
    }

    render() {
        const { user } = this.props
        return (
            <nav className='nav-container'>
                <NavLink 
                    exact
                    to='/' 
                    className='nav-link' 
                    activeClassName='nav-link-active'>
                    Dashboard
                </NavLink>
                
                <NavLink 
                    exact
                    to='/leaderboard' 
                    className='nav-link' 
                    activeClassName='nav-link-active'>
                    Leaderboard
                </NavLink>

                <NavLink
                    exact
                    to='/add'
                    className='nav-link'
                    activeClassName='nav-link-active'>
                    New Question
                </NavLink>

                <div className='user-info'>
                    <img className='avatar'
                        src={user?.avatarURL}
                        alt={user?.id}
                    />
                    <div className='user-name-info'>
                        <div className='user-name'>{user?.name}</div>
                        <div className='logout-button' onClick={this.logoutUser}>
                            Logout
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({ users, authedUser }) => ({
    user: users[authedUser],
})

export default connect(mapStateToProps)(Nav)
