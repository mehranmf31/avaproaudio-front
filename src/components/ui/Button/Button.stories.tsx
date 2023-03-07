import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'common/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div className="bg-gray-500 p-8 flex justify-center rounded w-96 mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  children: 'Hello World',
  color: 'red',
};

export const LightRed = Template.bind({});
LightRed.args = {
  children: 'Hello World',
  color: 'light-red',
};

export const White = Template.bind({});
White.args = {
  children: 'Hello World',
  color: 'white',
};

export const OutlinedWhite = Template.bind({});
OutlinedWhite.args = {
  children: 'Hello World',
  color: 'outlined-white',
};
