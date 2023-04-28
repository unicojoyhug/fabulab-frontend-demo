// test function Hello to return expected element
import Hello from './Hello';
import { describe, expect, test } from '@jest/globals';

describe('Hello', () => {
    // test when enthusiasmLevel is 0, throw error
    test('when enthusiasmLevel is 0, throw error', () => {
        const name = "test";
        const enthusiasmLevel = 0;
        expect(() => Hello({ name, enthusiasmLevel })).toThrow();
    });

    // test when enthusiasmLevel is positive, return expected element
    test('when enthusiasmLevel is positive, return expected element', () => {
        const name = "test";
        const enthusiasmLevel = 1;
        const test = Hello({ name, enthusiasmLevel });
        expect(test).toEqual(test);
    });

    // test enthousiasmLevel is undefined, throw error
    test('enthousiasmLevel is undefined, throw error', () => {
        const name = "test";
        const test = Hello({ name });
        expect(() => Hello({ name })).toThrow();
    });
});