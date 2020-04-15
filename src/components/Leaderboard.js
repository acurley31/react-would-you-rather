import React, { Component } from 'react';
import { connect } from 'react-redux';


class Leaderboard extends Component {

    render() {
        const { userLeaderboard } = this.props
        
        return (
            <div className='container'>
                { userLeaderboard.map((user, index) => (
                    <div key={user.id} className='question-card'>
                        <div className='question-card-content'>
                            <div className='question-card-details'>
                                <img src={user.avatarURL}
                                    alt={user.name}
                                    className='question-card-avatar'
                                />  
                            </div>
                            <div className='question-card-body result-body'>
                                <h2>{ index+1 }. { user.name }</h2>
                                <div className='result-count result-count-answered'>
                                    <span>Answered Questions</span>
                                    <span>{ user.numAnswered }</span>
                                </div>
                                <div className='result-count'>
                                    <span>Asked Questions</span>
                                    <span>{ user.numAsked }</span>
                                </div>
                            </div>
                            <div className='result-score-container'>
                                <h4>Score</h4>
                                <div className='result-score'>
                                    { user.score }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    const userLeaderboard = Object.keys(users).map(id => {
        const user = users[id]
        const numAsked = user.questions.length
        const numAnswered = Object.keys(user.answers).length
        const score = numAsked + numAnswered
        return {
            ...user,
            numAsked,
            numAnswered,
            score,
        }
    }).sort((a, b) => b.score - a.score)

    return {
        userLeaderboard
    }
}

export default connect(mapStateToProps)(Leaderboard);
