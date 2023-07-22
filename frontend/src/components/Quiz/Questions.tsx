import React, {MouseEvent, useState} from 'react';
import {Button} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import QuestionGard from 'components/Quiz/QuestionGard';
import {Difficulty, QuestionState} from "redux/types";
import {fetchQuizQuestions} from "redux/actionCreator";
import {AnswerObject} from 'redux/types';
import '../../App.scss';
import { Pagination } from 'antd';
import {Footer} from "antd/es/layout/layout";
import {TOTAL_QUESTIONS} from "components/Quiz/utils";


const Questions = () => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);


    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);
        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;
            if (correct) setScore(prev => prev + 1);
            const answerOdject = {
                question: questions[number].question,
                answer: answer,
                correct: correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers(prev => [...prev, answerOdject]);
        }
    };

    const nextQuestion = () => {
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };


    const handleChangePage = (page: number) => {
        setNumber(page);
    };


    return (
        <div>
            <div className="app">
                <h1 className="quiz">Quiz</h1>
                {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <Button onClick={startQuiz} block color='primary' size='large'>START</Button>
                ) : null}
                {loading &&
                    <p><LoadingOutlined rotate={180} size={32}/></p>}
                {!loading && !gameOver && (
                    <QuestionGard
                        questionNr={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                        callback={checkAnswer}
                    />
                )}
                <Pagination className="pagination"
                    total={TOTAL_QUESTIONS}
                    current={number}
                    onChange={handleChangePage}
                    pageSize={score}
                />
            </div>
            <Footer style={{textAlign: 'center'}}>
                <Button size='large'>Сorrect answers: {score} and incorrect answers: {TOTAL_QUESTIONS - score}</Button>
            </Footer>
        </div>
    );
};

export default Questions;