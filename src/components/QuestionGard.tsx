import React, {FC} from 'react';
import {Props} from 'redux/types';

const QuestionGard: FC<Props> = ( {question, answers, callback, userAnswer, questionNr, totalQuestions} ) => {
    return (
        <div>
            <p className={"number"}>
                Question: {questionNr} / {totalQuestions}
            </p>
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