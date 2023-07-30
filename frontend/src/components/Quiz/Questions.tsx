import React, {MouseEvent, useState} from 'react';
import {Button, CountdownProps} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import QuestionGard from 'components/Quiz/QuestionGard';
import {Difficulty, QuestionState} from "redux/types";
import {fetchQuizQuestions} from "redux/actionCreator";
import {AnswerObject} from 'redux/types';
import '../../App.scss';
import {Pagination} from 'antd';
import {Footer} from "antd/es/layout/layout";
import {TOTAL_QUESTIONS} from "components/Quiz/utils";
import {useNavigate} from "react-router-dom";
import {Timer} from "components/Timer/Timer";

const Questions = () => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(1);
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

    const handleChangePage = (page: number) => {
        setNumber(page - 1);
    };

    const navigate = useNavigate();

    const onFinish: CountdownProps['onFinish'] = async () => {
        setGameOver(true);
        navigate('/result');
    };


    return (
        <div>
            <div className="app">
                {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <Button onClick={startQuiz} block color='primary' size='large' style={{marginTop: '70px'}}>START</Button>
                ) : null}
                {loading &&
                    <p><LoadingOutlined rotate={180} size={32}/></p>}
                {!loading && !gameOver && ( <Timer countMinutes={10} onFinish={onFinish} /> )}
                {questions.slice(number * 5, number * 5 + 5).map((questions, index) => (
                    <QuestionGard
                        questionNr={number * 5 + index + 1}
                        key={TOTAL_QUESTIONS}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions.question}
                        answers={questions.answers }
                        userAnswer={userAnswers ? userAnswers[number * 5 + index] : undefined}
                        callback={checkAnswer}
                        onFinish={onFinish}
                    />
                ))}
                <Pagination className="pagination"
                    total={questions.length / 5}
                    defaultCurrent={number}
                    onChange={handleChangePage}
                    pageSize={1}
                />
            </div>
            <Footer style={{textAlign: 'center'}} className="footer">
                <Button size='large' onClick={onFinish}>Сorrect answers: {score} and incorrect answers: {TOTAL_QUESTIONS - score}</Button>
            </Footer>
        </div>
    );
};

export default Questions;



