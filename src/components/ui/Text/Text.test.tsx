import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '.';
import '@testing-library/jest-dom';

test('Text component', () => {
  render(<Text>Text</Text>);
  const TextElement = screen.getByText('Text');
  expect(TextElement).toBeInTheDocument();
  expect(TextElement.tagName).toBe('P');
});

test('renders a text when variant prop is set to "inlineText"', () => {
  render(<Text variant="inlineText">Text</Text>);
  const TextElement = screen.getByText('Text');
  expect(TextElement).toBeInTheDocument();
  expect(TextElement.tagName).toBe('SPAN');
});

test('renders a custom-sized heading when customSize prop is set', () => {
  render(<Text size="xl">Text</Text>);
  const TextElement = screen.getByText('Text');
  expect(TextElement).toBeInTheDocument();
  expect(TextElement).toHaveClass('text__xl');
});

test('renders HTML content when html prop is set', () => {
  render(<Text variant="div" html="<h1>Hello, world!</h1>" />);
  const TextElement = screen.getByText(/Hello, world!/);
  const HeadingElement = screen.getByRole('heading');
  expect(TextElement).toBeInTheDocument();
  expect(HeadingElement).toBeInTheDocument();
});
