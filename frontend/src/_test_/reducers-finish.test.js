import quizReducer, {finish, initialState} from "../redux/reducers";
import {expect, test} from '@jest/globals';


test('is finished game', () => {
    const state = initialState;
    const newState = quizReducer(state, finish());
    expect(newState.isFinished).toBeTruthy();
})