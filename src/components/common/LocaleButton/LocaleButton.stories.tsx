import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LocaleButton } from '.';

export default {
  title: 'common/LocaleButton',
  component: LocaleButton,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="bg-gray-800 p-10 rounded-xl inline-flex mx-auto my-10">
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof LocaleButton>;

const Template: ComponentStory<typeof LocaleButton> = (args) => (
  <LocaleButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  language: 'en',
  label: 'en',
  isActive: false,
};
