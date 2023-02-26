import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from '.';

export default {
  title: 'common/Container',
  component: Container,
  decorators: [
    (Story) => (
      <div className="w-full bg-gray-900 rounded">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'This is the container component!',
  className: 'p-5 bg-white text-black',
};
