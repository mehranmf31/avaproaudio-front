import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'ui/Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <div className="bg-gray-500 p-8 flex justify-center rounded w-full mx-auto my-10">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
};
