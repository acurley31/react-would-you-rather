import React from 'react';
import { Link } from 'react-router-dom';


const QuestionPreview = (props) => (
    <div>
        <h2 className='question-preview-header'>
            Would you rather...
        </h2>

        <p className='question-preview-body'>
            { props.question?.optionOne.text } or ....
        </p>

        <Link to={`/questions/${props.question?.id}`}>
            <button className='outline-button question-preview-button'>
                View Poll
            </button>
        </Link>
    </div>
)

export default QuestionPreview;
