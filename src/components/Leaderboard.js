import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardItem from './LeaderboardItem';


class Leaderboard extends Component {

    render() {
        const { leaderboard } = this.props

        return (
            <div className='leaderboard-container'>
                <ol className='leaderboard-list'>
                    { leaderboard.map((user, index) => (
                        <li key={user.id}>
                            <LeaderboardItem 
                                data={{...user, rank:index+1}}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    const leaderboard = Object.keys(users).map(id => {
        const user = users[id]
        const numAnswered = Object.keys(user.answers).length
        const numAsked = user.questions.length
        return {
            ...users[id],
            numAnswered,
            numAsked,
            score: numAnswered + numAsked,
        }
    }).sort((a, b) => b.score - a.score)

    return {
        leaderboard
    }
}

export default connect(mapStateToProps)(Leaderboard);
