import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '.';

test('render button content', () => {
  render(<Button>test</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toContainHTML('test');
});

test('render button with padding', () => {
  render(<Button>test</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement.className).toMatch(/p-/i);
});

test('render button without padding', () => {
  render(<Button hasPadding={false}>test</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement.className).not.toMatch(/p-/i);
});

test('render disabled button', () => {
  render(<Button disabled>test</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeDisabled();
});
