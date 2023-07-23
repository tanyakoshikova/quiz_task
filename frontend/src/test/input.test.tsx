// import Login from "components/Authorization/Login";
// import { beforeEach, describe, expect, test, vi} from "vitest";
// import {render, screen} from '@testing-library/react';
// import userEvent from "@testing-library/user-event";
//
// describe('Тестирование Input', () => {
//     describe('Тестирование базовых свойств', () => {
//         const inputTestId = 'hello';
//         const inputValue = 42;
//         const onChangeInput = vi.fn();
//         let input
//         beforeEach(() => {
//             render(<Login data-testid={inputTestId} value={inputValue} onChange={onChangeInput} /> )
//             input = screen.getByTestId(inputTestId)
//         })
//         test('', () => {
//             expect(input.valueAsNumber).toBe(inputValue);
//         })
//         test('user change data - called onChange callback', async () => {
//             await userEvent.type(input, '35')
//             expect((onChangeInput).toBeCalledWidth(423),
//                 expect(onChangeInput).toBeCalledWidth(424),
//         })
//
//         test('Input use html tag input', () => {
//             expect(input.tagName).toBe('INPUT')
//         })
//         })
//     })
// })
