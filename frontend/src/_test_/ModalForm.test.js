import {expect, test} from '@jest/globals';

test('resolves to quiz', () => {
    return expect(Promise.resolve('quiz')).resolves.toBe('quiz');
});