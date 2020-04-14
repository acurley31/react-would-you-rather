import React from 'react';


const LeaderboardItem = (props) => {
    const { name, avatarURL, rank, numAnswered, numAsked, score } = props.data

    return (
        <div className='leaderboard-item'>
            <img className='leaderboard-item-avatar'
                src={avatarURL}
                alt={name}
            />
            <div className='leaderboard-item-content'>
                <h2 className='leaderboard-item-user'>{ rank }. { name }</h2>
                <div className='leaderboard-item-count leaderboard-item-count-answered'>
                    <div>Answered Questions</div>
                    <div>{ numAnswered }</div>
                </div>
                <div className='leaderboard-item-count'>
                    <div>Asked Questions</div>
                    <div>{ numAsked}</div>
                </div>
            </div>
            <div className='leaderboard-item-score'>
                <h4 className='leaderboard-item-score-label'>
                    Score
                </h4>
                <div className='leaderboard-item-score-badge'>
                    { score }
                </div>
            </div>
        </div>
    )
}

export default LeaderboardItem;
