import {Difficulty} from "redux/types";
import {Question} from "redux/types";

export const fetchQuizQuestions = async ( amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await  fetch(endpoint)).json();
    return data.results.map( (question: Question) => (
        {
            ...question,
            answers: [
                ...question.incorrect_answers,
                question.correct_answer]
        }
    ))
}
