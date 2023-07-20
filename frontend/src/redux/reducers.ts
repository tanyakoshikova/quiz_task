export interface QuizState {
    currentQuestion: number;
    answers: { questionIndex: number; answerIndex: number }[];
    score: number;
    isFinished: boolean;
}

enum ActionConstType {
    NEXT_QUESTION = "NEXT_QUESTION",
    SELECT_ANSWER = "SELECT_ANSWER",
    CALCULATE_SCORE = "CALCULATE_SCORE",
    FINISH_QUIZ = "FINISH_QUIZ"
}

type NextQuestionAction = {
    type: ActionConstType.NEXT_QUESTION;
};
type SelectAnswerAction  = {
    type: ActionConstType.SELECT_ANSWER;
    payload: number;
};
type  CalculateScoreAction = {
    type: ActionConstType.CALCULATE_SCORE;
    payload: number;
};
type FinishQuizAction = {
    type: ActionConstType.FINISH_QUIZ;
};

type QuizAction =
    | NextQuestionAction
    | SelectAnswerAction
    | CalculateScoreAction
    | FinishQuizAction;

const initialState: QuizState = {
    currentQuestion: 0,
    answers: [],
    score: 0,
    isFinished: false,
};

const quizReducer = (state = initialState, action: QuizAction): QuizState => {
    switch (action.type) {
    case 'NEXT_QUESTION':
        return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
        };
    case 'SELECT_ANSWER':
        return {
            ...state,
            answers: [
                ...state.answers,
                {
                    questionIndex: state.currentQuestion,
                    answerIndex: action.payload,
                },
            ],
        };
    case 'CALCULATE_SCORE':
        return {
            ...state,
            score: action.payload,
        };
    case 'FINISH_QUIZ':
        return {
            ...state,
            isFinished: true,
        };
    default:
        return state;
    }
};

export default quizReducer;