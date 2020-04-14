import { RECEIVE_USERS } from '../actions/users';
import { ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions';

// Users reducer
const users = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_USERS:
            const { users } = action
            return {
                ...state,
                ...users,
            }

        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id]),
                },
            }

        case ADD_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    }
                }
            }

        default:
            return state
    }
}

export default users;
