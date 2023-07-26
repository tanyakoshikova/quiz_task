import {QuizState} from "redux/reducersTypes";
import {QuizAction} from "redux/reducersTypes";

export const RESULT_SHOW = 'RESULT_SHOW'

export const initialState: QuizState = {
    currentQuestion: 0,
    answers: [],
    score: 0,
    isFinished: true,
};
export const finish = () => ({type: typeof finish})

const quizReducer = (state = initialState, action: QuizAction): QuizState => {
    switch (action.type) {
    case RESULT_SHOW:
        return {
            ...state,
            isFinished: true,
        };
    default:
        return {...state, answers: new Array(state.answers.length)};
    }
};


export default quizReducer;

