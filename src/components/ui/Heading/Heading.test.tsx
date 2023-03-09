import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from '.';
import '@testing-library/jest-dom';

test('Heading component', () => {
  render(<Heading>Sub-heading</Heading>);
  const subHeading = screen.getByRole('heading');
  expect(subHeading).toBeInTheDocument();
  expect(subHeading.tagName).toBe('H3');
});

test('renders a page-heading when variant prop is set to "pageHeading"', () => {
  render(<Heading variant="pageHeading">Page heading</Heading>);
  const pageHeading = screen.getByRole('heading');
  expect(pageHeading).toBeInTheDocument();
  expect(pageHeading.tagName).toBe('H1');
});

test('renders a custom-sized heading when customSize prop is set', () => {
  render(<Heading customSize="5xl">Custom size</Heading>);
  const customSizeHeading = screen.getByRole('heading');
  expect(customSizeHeading).toBeInTheDocument();
  expect(customSizeHeading).toHaveClass('heading__5x');
});
