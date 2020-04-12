import {
    RECEIVE_QUESTIONS,
    ADD_QUESTION,
    ADD_QUESTION_ANSWER,
} from '../actions/questions';


// Questions reducer
const questions = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            const { questions } = action
            return {
                ...state,
                questions,
            }

        case ADD_QUESTION:
            // TODO: implement add question
            return state

        case ADD_QUESTION_ANSWER:
            // TODO: implement add question answer
            return state

        default:
            return state
    }
}

export default questions;
