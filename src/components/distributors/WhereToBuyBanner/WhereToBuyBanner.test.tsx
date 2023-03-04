import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WhereToBuyBanner } from '.';

test('render WhereToBuyBanner', () => {
  render(
    <WhereToBuyBanner
      title={'title'}
      description={'description'}
      distributors={[{ label: 'label 1', link: '/link1' }]}
    />,
  );

  const DistributorsBannerTitle = screen.getByRole('heading');
  const DistributorsBannerDescription = screen.getByText('description');
  const DistributorLink = screen.getByRole('link');
  const DistributorLinkButton = screen.getByRole('button');

  expect(DistributorsBannerTitle).toContainHTML('title');
  expect(DistributorsBannerDescription).toContainHTML('description');
  expect(DistributorLinkButton).toContainHTML('label 1');
  expect(DistributorLink).toHaveAttribute('href', '/link1');
});
