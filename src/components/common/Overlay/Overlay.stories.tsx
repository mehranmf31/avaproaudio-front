import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Overlay } from '.';

export default {
  title: 'common/Overlay',
  component: Overlay,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis doloribus
          eligendi deleniti veniam eveniet quibusdam, ex impedit numquam tenetur nam
          corporis incidunt id ab omnis suscipit atque beatae officiis excepturi.
        </p>
      </div>
    ),
  ],
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
