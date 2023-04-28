// test function Hello to return expected element
import { getExclamationMarks, getQuestionMarks, Hello } from './Hello';
import { describe, expect, test } from '@jest/globals';

describe('getExclamationMarks', () => {
    // test when enthusiasmLevel is 0, throw error
    test('when enthusiasmLevel is 0, throw error', () => {
        const enthusiasmLevel = 0;
        expect(() => getExclamationMarks(enthusiasmLevel)).toThrow();
    });

    //test when the enthusiasmLevel is positive, return expected element
    test('when the enthusiasmLevel is positive, return expected element', () => {
        const enthusiasmLevel = 1;
        const test = getExclamationMarks(enthusiasmLevel);
        expect("!").toEqual(test);
    });

    //test when the enthusiasmLevel is 2, return expected element
    test('when the enthusiasmLevel is 2, return expected element', () => {
        const enthusiasmLevel = 2;
        const test = getExclamationMarks(enthusiasmLevel);
        expect("!!").toEqual(test);
    });
});

describe('getQuestionMarks', () => {
    // test when enthusiasmLevel is undefinded, throw error
    test('when enthusiasmLevel is undefinded, throw error', () => {
        const enthusiasmLevel = undefined;
        expect(() => getQuestionMarks(enthusiasmLevel)).toThrow();

    });
    // test when enthusiasmLevel is 0, throw error
    test('when enthusiasmLevel is 0, throw error', () => {
        const enthusiasmLevel = 0;
        expect(() => getQuestionMarks(enthusiasmLevel)).toThrow();
    });
    // test when the enthusiasmLevel is positive, return expected element
    test('when the enthusiasmLevel is positive, return expected element', () => {
        const enthusiasmLevel = 1;
        const test = getQuestionMarks(enthusiasmLevel);
        expect("?").toEqual(test);
    });
});

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
        expect(name + "!").toEqual(test);
    });

    // test enthousiasmLevel is undefined, throw error
    test('enthousiasmLevel is undefined, throw error', () => {
        const name = "test";
        expect(() => Hello({ name })).toThrow();
    });

    // test when enthusiasmLevel is 2, returns two exclamation marks
    test('when enthusiasmLevel is 2, returns two exclamation marks', () => {
        const name = "test";
        const enthusiasmLevel = 2;
        const test = Hello({ name, enthusiasmLevel });
        expect(name + "!!").toEqual(test);
    });
});