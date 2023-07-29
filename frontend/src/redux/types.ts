import {MouseEvent} from "react";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export type QuestionState = Question & {answers: string[] };

export enum Difficulty {
    EASY = "easy",
}

export interface Props {
    question: string;
    answers: string[];
    callback: (e:MouseEvent) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
    onFinish: () => void;
}

export interface AnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

