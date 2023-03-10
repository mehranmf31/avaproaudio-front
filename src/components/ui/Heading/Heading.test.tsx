import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from '.';
import '@testing-library/jest-dom';

test('Heading component', () => {
  render(<Heading>Sub-heading</Heading>);
  const subHeadingElement = screen.getByRole('heading');
  expect(subHeadingElement).toBeInTheDocument();
  expect(subHeadingElement.tagName).toBe('H3');
});

test('renders a page-heading when variant prop is set to "pageHeading"', () => {
  render(<Heading variant="pageHeading">Page heading</Heading>);
  const pageHeadingElement = screen.getByRole('heading');
  expect(pageHeadingElement).toBeInTheDocument();
  expect(pageHeadingElement.tagName).toBe('H1');
});

test('renders a custom-sized heading when size prop is set', () => {
  render(<Heading size="5xl">Custom size</Heading>);
  const sizeHeadingElement = screen.getByRole('heading');
  expect(sizeHeadingElement).toBeInTheDocument();
  expect(sizeHeadingElement).toHaveClass('heading__5x');
});
