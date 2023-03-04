import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Logo } from '.';

test('render Logo', () => {
  render(<Logo alt={'logo'} width={48} height={48} />);

  const LogoElement = screen.getByRole('img');

  expect(LogoElement).toHaveAttribute('alt', 'logo');
  expect(LogoElement).toHaveAttribute('width', '48');
  expect(LogoElement).toHaveAttribute('height', '48');
});
