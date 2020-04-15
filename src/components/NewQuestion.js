import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';


class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    isFormValid = () => (
        this.state.optionOneText !== '' && this.state.optionTwoText !== ''
    )

    updateOptionOneText = (e) => {
        this.setState({ optionOneText: e.target.value })
    }

    updateOptionTwoText = (e) => {
        this.setState({ optionTwoText: e.target.value })
    }

    addQuestion = (e) => {
        e.preventDefault()
        const { dispatch, authedUser } = this.props
        const { optionOneText, optionTwoText } = this.state
    
        const question = { author: authedUser, optionOneText, optionTwoText }
        dispatch(handleAddQuestion(question))
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='container'>
                <form className='question-form' onSubmit={this.addQuestion}>
                    <h1>Create New Question</h1>
                    <h3>Would you rather...</h3>
                    <input 
                        className='question-input'
                        type='text'
                        placeholder='Option 1'
                        value={this.state.optionOneText}
                        onChange={this.updateOptionOneText}
                    />
                    <h4 className='question-label'>OR</h4>
                    <input 
                        className='question-input'
                        type='text'
                        placeholder='Option 2'
                        value={this.state.optionTwoText}
                        onChange={this.updateOptionTwoText}
                    />
                    <button type='submit' className='outline-button' disabled={!this.isFormValid()}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser,
})

export default withRouter(connect(mapStateToProps)(NewQuestion));
