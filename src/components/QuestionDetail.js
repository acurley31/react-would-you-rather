import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import QuestionOptionResult from './QuestionOptionResult';


class QuestionDetail extends Component {

    render() {
        const { question, authedUser, hasAnswered } = this.props

        // Redirect to the dashboard if the user has not answered
        if (!hasAnswered || !question) {
            return <Redirect exact to='/' />
        }

        // Otherwise, render the poll results
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes
        const isOptionOneSelected = authedUser.answers[question.id] === 'optionOne'
        const isOptionTwoSelected = authedUser.answers[question.id] === 'optionTwo'

        return (
            <div className='question-detail-container'>
                <div className='question-container'>
                    <div className='question-details-author'>
                        <img className='question-avatar'
                            src={question.author.avatarURL}
                            alt={question.author.name}
                        />  
                        <div className='question-author'>
                            Asked by: 
                        </div>
                        <div className='question-author'>
                            { question.author.name }
                        </div>
                    </div>                                                
                    <div className='question-content'>
                        <h2>Would you rather...?</h2>

                        <QuestionOptionResult
                            label={question.optionOne.text}
                            votes={optionOneVotes}
                            total={totalVotes}
                            selected={isOptionOneSelected}
                        />

                        <QuestionOptionResult
                            label={question.optionTwo.text}
                            votes={optionTwoVotes}
                            total={totalVotes}
                            selected={isOptionTwoSelected}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, questions }, { match }) => {
    const { id } = match.params
    const question = questions[id]
    const author = question ? users[question.author] : null
    const user = users[authedUser]
    const hasAnswered = user && user.answers[id] ? true : false

    return {
        question: {
            ...question,
            author,
        },
        authedUser: user,
        hasAnswered,
    }
}

export default connect(mapStateToProps)(QuestionDetail)
