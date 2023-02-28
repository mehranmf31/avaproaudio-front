import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { WhereToBuyBanner } from '.';

export default {
  title: 'distributors/WhereToBuyBanner',
  component: WhereToBuyBanner,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="bg-gray-900 inline-flex mx-auto my-10">
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof WhereToBuyBanner>;

const Template: ComponentStory<typeof WhereToBuyBanner> = (args) => (
  <WhereToBuyBanner {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Where To Buy',
  description: 'You May Choose To Buy Or Rent By Following The Links',
  distributors: [
    { label: 'Distributors', link: '#' },
    { label: 'Online Shop', link: '#' },
  ],
};
