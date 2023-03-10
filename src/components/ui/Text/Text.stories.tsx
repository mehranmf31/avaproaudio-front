import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from '.';

export default {
  title: 'ui/Text',
  component: Text,
  decorators: [
    (Story) => (
      <div className="bg-gray-500 p-8 flex justify-center rounded w-full mx-auto my-10">
        <div>
          This is Text component:&nbsp;
          <Story />
          &nbsp;enjoy using it!
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
};

export const RenderHTML = Template.bind({});
RenderHTML.args = {
  html: 'Hello <strong>World!!!</strong>',
};
