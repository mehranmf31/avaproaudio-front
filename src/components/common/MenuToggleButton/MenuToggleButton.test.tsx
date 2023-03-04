import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MenuToggleButton } from '.';

test('render open MenuToggleButton', () => {
  render(<MenuToggleButton isOpen={true} onClick={() => {}} />);

  const MenuToggleButtonElement = screen.getByRole('img');

  expect(MenuToggleButtonElement).toHaveAttribute('src', '/icons/close_white_24dp.svg');
});

test('render closed MenuToggleButton', () => {
  render(<MenuToggleButton isOpen={false} onClick={() => {}} />);

  const MenuToggleButtonElement = screen.getByRole('img');

  expect(MenuToggleButtonElement).toHaveAttribute('src', '/icons/menu_white_24dp.svg');
});
