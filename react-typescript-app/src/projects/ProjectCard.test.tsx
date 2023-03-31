import React from 'react';
import { render, screen } from '@testing-library/react';
import { formatDescription } from './ProjectCard';

test('short description should be ok', () => {
    const test = formatDescription("test");
    expect(test).toEqual(test);
});

test('more than 20 chars in description omitted', () => {
    const text = "test very long text more than 20 chars";
    const expectedText = ("test very long text more than 20 chars").substring(0, 20) + '...';
    const test = formatDescription(text);
    expect(test).toEqual(expectedText);
});