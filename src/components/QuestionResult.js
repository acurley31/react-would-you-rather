import React, { Component } from 'react';
import ProgressBar from './ProgressBar';


class QuestionResult extends Component {
    
    render() {
        
        // Calculate all fields
        const { question, userAnswer } = this.props
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes
        
        return (
            <div className='question-result-container'>
                <h2 className='question-result-title'>Results:</h2>
                <QuestionResultItem 
                    text={question.optionOne.text}
                    votes={optionOneVotes}
                    totalVotes={totalVotes}
                    isUserVote={userAnswer === 'optionOne'}
                />
                <QuestionResultItem 
                    text={question.optionTwo.text}
                    votes={optionTwoVotes}
                    totalVotes={totalVotes}
                    isUserVote={userAnswer === 'optionTwo'}
                />
            </div>
        )
    }
}


const QuestionResultItem = (props) => {
    const { text, votes, totalVotes, isUserVote } = props
    const percentage = Math.round(100.0*votes/totalVotes, 1)

    return (
        <div className='question-result-item' data-active={isUserVote}>
            { isUserVote && 
                <div className='question-result-badge'>
                    Your vote
                </div>
            }
            <h3 className='question-result-text'>{ text }</h3>
            <ProgressBar value={percentage}/>
            <div className='question-result-count'>
                { votes } of { totalVotes } votes
            </div>
        </div>
    )
}

export default QuestionResult;
