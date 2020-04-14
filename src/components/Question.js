import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { handleAddQuestionAnswer } from '../actions/questions';


class Question extends Component {
    state = {
        selected: 'optionOne'
    }

    selectOption = (option) => {
        this.setState({ selected: option })
    }

    saveAnswer = (e) => {
        e.preventDefault()
        const { dispatch, authedUser, question } = this.props
        const { selected } = this.state
        
        dispatch(handleAddQuestionAnswer(authedUser, question.id, selected))
        this.props.history.push(`/questions/${question.id}`)
    }

    render() {
        const { question, answer } = this.props
        const { id, optionOne, optionTwo } = question
        const selected = answer || this.state.selected
        const isOptionOneAnswer = answer === 'optionOne' ? true : false
        const isOptionTwoAnswer = answer === 'optionTwo' ? true : false

        return (
                <div className='question-container'>
                    <div className='question-author-details'>
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
                    <form className='question-content' onSubmit={this.saveAnswer}>
                        <h2 className='question-title'>
                            Would your rather...
                        </h2>
                        
                        <div className='question-option' onClick={() => this.selectOption('optionOne')}>
                            <input 
                                className='question-option-radio'
                                id={`${id}-1`}
                                type='radio' 
                                checked={selected==='optionOne'} 
                                onChange={() => this.selectOption('OptionTwo')}
                                disabled={answer}
                            /> 
                            <label htmlFor={`${id}-1`} 
                                className='question-option-label'
                                data-isanswer={isOptionOneAnswer}>
                                { optionOne.text }
                            </label>
                        </div>

                        <div className='question-option'>
                            <input 
                                className='question-option-radio'
                                id={`${id}-2`}
                                type='radio' 
                                checked={selected==='optionTwo'} 
                                onChange={() => this.selectOption('optionTwo')}
                                disabled={answer}
                            />
                            <label htmlFor={`${id}-2`} 
                                className='question-option-label' 
                                data-isanswer={isOptionTwoAnswer}>
                                { optionTwo.text }
                            </label>
                        </div>

                        { !this.props.answer &&
                        <button type='submit' className='question-form-button'>
                            Submit
                        </button> }

                        { this.props.answer &&
                        <Link to={`/questions/${id}`}
                            className='question-form-button'>
                            View Results
                        </Link> }
                    </form>
                </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
    const user = users[authedUser]
    const question = { 
        ...questions[id], 
        author: questions[id] 
            ? users[questions[id].author]
            : null
    }

    const answer = user && user.answers[question.id] 
        ? user.answers[question.id] 
        : null

    return {
        authedUser,
        question,
        answer: answer,
    }
}

export default withRouter(connect(mapStateToProps)(Question));
