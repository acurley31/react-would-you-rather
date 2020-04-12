import {
    getQuestions,
    saveQuestion,
    saveQuestionAnswer,
} from '../utils/api';


// Action types
const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
const SAVE_QUESTION = 'SAVE_QUESTION';
const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';


// Synchronous action creators
export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
})

export const saveQuestion = (question) => ({
    type: SAVE_QUESTION,
    question,
})

export const saveQuestionAnswer = () => ({
    // TODO: implement synchronous save question answer
})


// Asynchronous action creators
export const handleGetQuestions = () => {
    return (dispatch) => {
        return getQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)))
    }
}

export const handleSaveQuestion = (question) => {
    return (dispatch) => {
        return saveQuestion(question)
            .then((data) => dispatch(saveQuestion(data)))
    }
}

export const handleSaveQuestionAnswer = (uid, qid, answer) => {
    // TODO: implement asynchronous handle save question answer
}

