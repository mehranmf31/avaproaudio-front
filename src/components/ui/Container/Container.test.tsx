import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Container } from '.';

test('render Container', () => {
  render(
    <Container>
      <h1>test</h1>
    </Container>,
  );

  const ContainerElement = screen.getByRole('heading');

  expect(ContainerElement).toBeInTheDocument();
});
