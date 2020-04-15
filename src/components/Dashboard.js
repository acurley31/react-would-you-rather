import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';
import QuestionPreview from './QuestionPreview';

class Dashboard extends Component {
    state = {
        selectedTab: 0,
    }

    render() {
        
        // If loading, render a blank component
        if (this.props.isLoading) {
            return <div></div>
        }

        // Select the appropriate questions based on the toggle
        const { answered, unanswered } = this.props
        const questions = this.state.selectedTab === 0
            ? unanswered
            : answered
        
        return (
            <div className='container'>
                <div className='dashboard-question-toggle'>
                    <button 
                        className='outline-button dashboard-question-toggle-button'
                        data-active={this.state.selectedTab === 0}
                        onClick={(e) => this.setState({ selectedTab: 0 })}>
                        Unanswered Questions
                    </button>
                    <button 
                        className='outline-button dashboard-question-toggle-button'
                        data-active={this.state.selectedTab === 1}
                        onClick={(e) => this.setState({ selectedTab: 1 })}>
                        Answered Questions
                    </button>
                </div>

                <ul className='question-list'>
                    { questions.map(question => (
                        <li key={question.id}>
                            <QuestionCard 
                                question={question}
                                component={<QuestionPreview question={question}/>}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser, loadingBar }) => {

    const isLoading = loadingBar.default === 1 ? true : false
    const user = users[authedUser];

    const answered = user 
        ? Object.keys(user.answers)
            .map(id => ({
                ...questions[id], 
                author: users[questions[id]?.author],
            }))
            .sort((a, b) => b.timestamp - a.timestamp)
        : []

    const unanswered = user 
        ? Object.keys(questions)
            .filter(id => !user.answers[id])
            .map(id => ({
                ...questions[id], 
                author: users[questions[id]?.author]
            }))
            .sort((a, b) => b.timestamp - a.timestamp)
        : []

    return {
        user,
        unanswered,
        answered,
        isLoading,
    }
}

export default connect(mapStateToProps)(Dashboard);
