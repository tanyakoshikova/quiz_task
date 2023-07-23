import {NEXT_QUESTION, RESULT_SHOW, FINISH_QUIZ, CALCULATE_SCORE, SELECT_ANSWER} from "redux/utils";

export interface QuizState {
    currentQuestion: number;
    answers: { questionIndex: number; answerIndex: number }[];
    score: number;
    isFinished: boolean;

}

type NextQuestionAction = {
    type: typeof NEXT_QUESTION;
};
type SelectAnswerAction  = {
    type: typeof SELECT_ANSWER;
    payload: number;
};
type  CalculateScoreAction = {
    type: typeof CALCULATE_SCORE;
    payload: number;
};
type FinishQuizAction = {
    type: typeof FINISH_QUIZ;
};
type showResultAction = {
    type: typeof RESULT_SHOW;
};

export type QuizAction =
    | NextQuestionAction
    | SelectAnswerAction
    | CalculateScoreAction
    | FinishQuizAction
    | showResultAction;