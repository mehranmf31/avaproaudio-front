import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { FooterDataRow } from '.';

test('render FooterDataRow with link', () => {
  render(<FooterDataRow title={'title'} text={'text'} link={'link'} />);

  const LinkElement = screen.getByRole('link');
  const TextElement = screen.getByText('text');
  const TitleElement = screen.getByRole('heading');
  expect(LinkElement).toHaveAttribute('href', 'link');
  expect(TextElement).toBeInTheDocument();
  expect(TitleElement).toBeInTheDocument();
});

test('render FooterDataRow without link', () => {
  render(<FooterDataRow title={'title'} text={'text'} />);

  const TextElement = screen.getByText('text');
  const TitleElement = screen.getByRole('heading');
  expect(TextElement).toBeInTheDocument();
  expect(TitleElement).toBeInTheDocument();
});

test('render FooterDataRow wit long text', () => {
  render(
    <FooterDataRow
      title={'title'}
      text={'text with more than 32 characters should be wrapped'}
    />,
  );

  const TextElement = screen.getByText(
    'text with more than 32 characters should be wrapped',
  );
  const TitleElement = screen.getByRole('heading');
  expect(TextElement).toBeInTheDocument();
  expect(TitleElement).toBeInTheDocument();
});
