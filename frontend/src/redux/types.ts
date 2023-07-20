
export interface Props {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

export interface AnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

export interface QuizState {
    currentQuestion: number;
    answers: { questionIndex: number; answerIndex: number }[];
    score: number;
    isFinished: boolean;
}