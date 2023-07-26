import React from 'react';
import {Props} from 'redux/types';
import {Timer} from "components/Timer/Timer";

const QuestionGard: React.FC<Props> = ( {question, answers, callback, userAnswer, questionNr, totalQuestions, onFinish} ) => {

    return (
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <Timer countMinutes={0.3} onFinish={onFinish} />
            <p dangerouslySetInnerHTML={{ __html: question }}/>
            <div>
                {answers.map((answer) => (
                    <div key={answer} className="answer">
                        <input type="checkbox" id="answer" onClick={callback} disabled={!!userAnswer} value={answer} className="checkbox" />
                        <span dangerouslySetInnerHTML={{ __html: answer }}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionGard;