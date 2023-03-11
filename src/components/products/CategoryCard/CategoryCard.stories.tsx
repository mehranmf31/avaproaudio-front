import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CategoryCard } from '.';

export default {
  title: 'products/CategoryCard',
  component: CategoryCard,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="bg-gray-900 inline-flex mx-auto my-10 w-3/4 p-10">
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof CategoryCard>;

const Template: ComponentStory<typeof CategoryCard> = (args) => (
  <CategoryCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Category Title',
  description:
    'this is category card description. this is category card description. this is category card description',
  image: '/assets/passive-speakers.png',
  link: 'https://google.com',
};

export const ComingSoon = Template.bind({});

ComingSoon.args = {
  title: 'Category Title',
  description:
    'this is category card description. this is category card description. this is category card description',
  image: '/assets/passive-speakers.png',
  isActive: false,
};
