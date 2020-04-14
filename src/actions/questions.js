import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {
    getQuestions,
    saveQuestion,
    saveQuestionAnswer,
} from '../utils/api';


// Action types
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';


// Synchronous action creators
export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
})

export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question,
})

export const addQuestionAnswer = (authedUser, qid, answer) => ({
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
})


// Asynchronous action creators
export const handleGetQuestions = () => {
    return (dispatch) => {
        return getQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)))
    }
}

export const handleAddQuestion = (question) => {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion(question)
            .then((data) => dispatch(addQuestion(data)))
            .then(() => dispatch(hideLoading()))
    }
}

export const handleAddQuestionAnswer = (authedUser, qid, answer) => {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(addQuestionAnswer(authedUser, qid, answer))
        return saveQuestionAnswer({ authedUser, qid, answer })
            .catch(() => console.log('error'))
            .then(() => dispatch(hideLoading()))
    }
}

