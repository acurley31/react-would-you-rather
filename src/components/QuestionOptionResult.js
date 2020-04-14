import React from 'react';
import ProgressBar from './ProgressBar';


const QuestionOptionResult = (props) => {
    const { label, selected, votes, total } = props
    const percentage = Math.round(100.0*votes/total, 1)

    return (
        <div className='option-result-container' data-selected={selected}>
            { selected &&
            <span className='option-result-selected'>
                You selected:
            </span> }

            <h4 className='option-result-label'>
                { label }
            </h4>
            <ProgressBar value={ percentage }/>
            <div className='option-result-votes'>
                { votes } of { total } votes
            </div>
        </div>
    )
}

export default QuestionOptionResult;
