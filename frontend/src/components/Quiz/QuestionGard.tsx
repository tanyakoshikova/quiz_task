import React from 'react';
import {Props} from 'redux/types';
import {Timer} from "components/Timer/Timer";
import {useAppDispatch} from "userReducer";
import {showResultAC} from "redux/reducers";


const QuestionGard: React.FC<Props> = ( {question, answers, callback, userAnswer, questionNr, totalQuestions} ) => {


    const dispatch = useAppDispatch();
    const showResult = () => {
        dispatch(showResultAC());
    };

    return (
        <div>
            <p className={"number"}>
                Question: {questionNr} / {totalQuestions}
            </p>
            <Timer countMinutes={0.2} onFinish={showResult}/>
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