import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';


class Dashboard extends Component {
    tabs = ['Questions', 'Responses']; 
    
    state = {
        activeTabId: 0,
    }

    toggleQuestions = (id) => {
        this.setState({ activeTabId: id })
    }
    
    getQuestions = () => {
        const { answered, unanswered } = this.props
        return this.state.activeTabId === 0 ? unanswered : answered;
    }

    render() {
        const questions = this.getQuestions()

        return (
            <div className='dashboard-container'>
                <div className='dashboard-content'>
                    <div className='dashboard-question-list-header'>
                        { this.tabs.map( (tab, tabId) => (
                            <div key={tab} className='dashboard-toggle' 
                                data-active={this.state.activeTabId === tabId}
                                onClick={() => this.toggleQuestions(tabId)}>
                                { tab }
                            </div>
                        ))}
                    </div>
                    <ul className='dashboard-question-list'>
                    { questions.map(question => (
                        <li key={question.id}>
                            <Question id={question.id}/>
                        </li>
                    ))}
                    </ul>

                </div>
            
            </div>
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }) => {

    const user = users[authedUser];

    const answered = user 
        ? Object.keys(user.answers)
            .map(id => questions[id])
            .sort((a, b) => b.timestamp - a.timestamp)
        : []

    const unanswered = user 
        ? Object.keys(questions)
            .filter(id => !user.answers[id])
            .map(id => questions[id])
            .sort((a, b) => b.timestamp - a.timestamp)
        : []

    return {
        user,
        unanswered,
        answered,
    }
}

export default connect(mapStateToProps)(Dashboard);
