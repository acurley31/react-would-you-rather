import React, { Component } from 'react';
import { connect } from 'react-redux';
import Error from './Error';
import QuestionCard from './QuestionCard';
import QuestionForm from './QuestionForm';
import QuestionResult from './QuestionResult';


class Question extends Component {

    render() {
        
        // Deconstruct props and check for edge cases
        const { userAnswer, question, isLoading } = this.props
        if (isLoading) {
            return <div></div>
        
        } else if (!question) {
            return <Error />
        }
        
        // Select the body component to render
        const component = userAnswer
            ? <QuestionResult question={question} userAnswer={userAnswer}/>
            : <QuestionForm question={question}/>

        return (
            <div className='container'>
                <QuestionCard 
                    question={question} 
                    component={component}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, questions, loadingBar }, { match }) => {
    const { id } = match.params
    const question = questions[id]
    const author = question ? users[question.author] : null
    const userAnswer = users[authedUser]?.answers[id]
    const isLoading = loadingBar.default === 1 ? true : false

    return {
        userAnswer,
        question: question ? {...question, author} : null,
        isLoading,
    }
}

export default connect(mapStateToProps)(Question);
