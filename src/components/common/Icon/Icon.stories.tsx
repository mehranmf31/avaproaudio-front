import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '.';

export default {
  title: 'common/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <body dir="rtl">
        <div className="flex justify-center items-center">
          <div className="bg-white p-10 rounded-xl inline-flex mx-auto my-10">
            <Story />
          </div>
        </div>
      </body>
    ),
  ],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'arrow',
  size: 'md',
  rtlRotation: true,
};
