import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Icon } from '.';

test('render Icon', () => {
  render(<Icon name={'arrow'} rtlRotation={false} />);

  const IconElement = screen.getByRole('img');
  expect(IconElement).toBeInTheDocument();
});

test('rotate Icon in rtl pages', () => {
  render(<Icon name={'arrow'} rtlRotation={true} />);

  const IconElement = screen.getByRole('img');
  expect(IconElement.className).toMatch(/rtl-rotate/);
});
