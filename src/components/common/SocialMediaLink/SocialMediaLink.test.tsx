import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SocialMediaLink } from '.';

test('render SocialMediaLink', () => {
  render(<SocialMediaLink icon={'/icon'} name={'name'} link={'/link'} />);

  const SocialMediaLinkElement = screen.getByRole('link');
  const SocialMediaImageElement = screen.getByRole('img');

  expect(SocialMediaLinkElement).toHaveAttribute('href', '/link');
  expect(SocialMediaImageElement).toBeInTheDocument();
});
