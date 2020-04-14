import React from 'react';


const ProgressBar = (props) => {
    const { value } = props;
    const valueStr = `${value}%`

    return (
        <div className='progress-bar'>
            { props.value === 0 ? '0%' : '' }
            <div className='progress-bar-fill' style={{ width: valueStr }} >
                { props.value === 0 ? '' : valueStr }
            </div>
        </div>
    )
}


export default ProgressBar;
