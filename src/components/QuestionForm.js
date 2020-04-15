import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions';


class QuestionForm extends Component {
    state = {
        selectedText: 'optionOne',
    }

    selectOption = (e) => {
        this.setState({ selectedText: e.target.value })
    }

    saveQuestionAnswer = (e) => {
        e.preventDefault()
        const { selectedText } = this.state
        const { dispatch, question, authedUser } = this.props
        dispatch(handleAddQuestionAnswer(authedUser, question.id, selectedText))
    }

    render() {
        const { question } = this.props;
        return (
            <form className='question-response-form' onSubmit={this.saveQuestionAnswer}>
                <h2 className='question-response-form-title'>Would you rather...</h2>
                <div className='question-option'>
                    <input
                        id='optionOne'
                        type='radio'
                        value='optionOne'
                        checked={this.state.selectedText === 'optionOne'}
                        onChange={this.selectOption}
                    />
                    <label htmlFor='optionOne'>{ question?.optionOne.text }</label>
                </div>
                <div className='question-option'>
                    <input
                        id='optionTwo'
                        type='radio'
                        value='optionTwo'
                        checked={this.state.selectedText === 'optionTwo'}
                        onChange={this.selectOption}
                    />
                    <label htmlFor='optionTwo'>{ question?.optionTwo.text }</label>
                </div>
                <button 
                    type='submit'
                    className='outline-button'>
                    Submit
                </button>
            </form>
        )
    }
}

const mapStateToProps = ({ authedUser }, { question }) => ({
    question,
    authedUser,
})

export default connect(mapStateToProps)(QuestionForm);
