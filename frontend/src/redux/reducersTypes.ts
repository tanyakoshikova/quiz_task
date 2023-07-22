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
    FINISH_QUIZ = "FINISH_QUIZ",
    RESULT_SHOW = "RESULT_SHOW"
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
type showResultAction = {
    type: ActionConstType.RESULT_SHOW;
};

export type QuizAction =
    | NextQuestionAction
    | SelectAnswerAction
    | CalculateScoreAction
    | FinishQuizAction
    | showResultAction;