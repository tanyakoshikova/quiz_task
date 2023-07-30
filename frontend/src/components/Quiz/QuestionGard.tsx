import React from 'react';
import {Props} from 'redux/types';

const QuestionGard: React.FC<Props> = ( {question, answers, callback, userAnswer} ) => {

    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: question }}/>
            <div>
                {answers.map((answer: any) => (
                    <div key={answer} className="answer">
                        <input type="checkbox" id="key" onClick={callback} disabled={!!userAnswer} value={answer} className="checkbox" />
                        <span dangerouslySetInnerHTML={{ __html: answer }}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionGard;