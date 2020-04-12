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

export const addQuestionAnswer = () => ({
    // TODO: implement synchronous save question answer
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
        return saveQuestion(question)
            .then((data) => dispatch(addQuestion(data)))
    }
}

export const handleAddQuestionAnswer = (uid, qid, answer) => {
    // TODO: implement asynchronous handle save question answer
}

