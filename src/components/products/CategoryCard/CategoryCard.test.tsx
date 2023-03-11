import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CategoryCard } from '.';

const props = {
  title: 'Test Category',
  description: 'This is a test category',
  image: '/test-image-url.jpg',
  link: 'test-link-url',
  isActive: true,
  comingSoonLabel: 'Coming Soon!',
};

test('renders category card with correct title and description', () => {
  render(<CategoryCard {...props} />);
  expect(screen.getByText(props.title)).toBeInTheDocument();
  expect(screen.getByText(props.description)).toBeInTheDocument();
});

test('renders disabled button with correct label if isActive is false', () => {
  render(<CategoryCard {...props} isActive={false} />);
  expect(screen.getByText(props.comingSoonLabel)).toBeInTheDocument();
  expect(screen.getByText(props.comingSoonLabel).closest('button')).toBeDisabled();
});
