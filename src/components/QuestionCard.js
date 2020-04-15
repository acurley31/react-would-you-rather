import React from 'react';


const QuestionCard = (props) => {
    const { question, component } = props
    return (
        <div className='question-card'>
            <div className='question-card-header'>
                <h3>{ question?.author.name } Asked:</h3>
            </div>
            <div className='question-card-content'>
                <div className='question-card-details'>
                    <img src={question?.author.avatarURL}
                        alt={question?.author.name}
                        className='question-card-avatar'
                    />  
                </div>
                <div className='question-card-body'>
                    { component }
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;
