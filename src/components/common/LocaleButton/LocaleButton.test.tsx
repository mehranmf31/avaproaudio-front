import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LocaleButton } from '.';

test('render LocaleButton', () => {
  render(<LocaleButton language={'en'} label={'english'} />);

  const LocaleButtonElement = screen.getByRole('button');

  expect(LocaleButtonElement).toContainHTML('en');
});
