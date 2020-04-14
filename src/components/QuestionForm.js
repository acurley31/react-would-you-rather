import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';


class QuestionForm extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    addQuestion = (e) => {
        e.preventDefault()
        const { authedUser, dispatch } = this.props
        const { optionOneText, optionTwoText } = this.state
        const question = {
            author: authedUser,
            optionOneText,
            optionTwoText
        }
        dispatch(handleAddQuestion(question))
        this.props.history.push('/')
    }

    render() {
        const { optionOneText, optionTwoText } = this.state
        const isDisabled = (optionOneText === '') || (optionTwoText === '')

        return (
            <div className='question-form-container'>
                <h2>New Question</h2>
                <form className='question-form' onSubmit={this.addQuestion}>
                    <input 
                        className='question-form-input'
                        type='text' 
                        value={optionOneText} 
                        placeholder='Option 1' 
                        onChange={(e) => this.setState({ optionOneText: e.target.value })}
                        required 
                    />
                    
                    <input 
                        className='question-form-input'
                        type='text' 
                        value={optionTwoText} 
                        placeholder='Option 2' 
                        onChange={(e) => this.setState({ optionTwoText: e.target.value })}
                        required 
                    />

                    <button type='submit' className='question-form-button' disabled={isDisabled}>
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser,
})

export default withRouter(connect(mapStateToProps)(QuestionForm))

