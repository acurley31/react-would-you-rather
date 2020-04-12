import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA';


// Get Users
export const getUsers = () => {
    return _getUsers()
}

// Get Questions
export const getQuestions = () => {
    return _getQuestions()
}

// Save Question
export const saveQuestion = (question) => {
    return _saveQuestion(question)
}

// Save Question Answer
export const saveQuestionAnswer = (uid, qid, answer) => {
    return _saveQuestionAnswer(uid, qid, answer)
}


