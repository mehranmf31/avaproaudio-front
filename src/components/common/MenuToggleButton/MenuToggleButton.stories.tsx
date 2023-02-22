import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuToggleButton } from '.';

export default {
  title: 'common/MenuToggleButton',
  component: MenuToggleButton,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <div className="bg-gray-800 p-10 rounded-xl inline-flex mx-auto my-10">
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof MenuToggleButton>;

const Template: ComponentStory<typeof MenuToggleButton> = (args) => (
  <MenuToggleButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isOpen: false,
};
