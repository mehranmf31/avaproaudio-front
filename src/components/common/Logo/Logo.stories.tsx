import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from '.';

export default {
  title: 'common/Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="bg-gray-800 p-10 rounded-xl inline-flex mx-auto my-10">
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  width: 48,
  height: 48,
};
