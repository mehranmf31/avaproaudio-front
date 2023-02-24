import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FooterDataRow } from '.';

export default {
  title: 'common/FooterDataRow',
  component: FooterDataRow,
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center">
        <div className="bg-gray-800 p-10 rounded-xl inline-flex mx-auto my-10">
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof FooterDataRow>;

const Template: ComponentStory<typeof FooterDataRow> = (args) => (
  <FooterDataRow {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'Google',
  link: 'https://google.com',
};

export const withTitle = Template.bind({});

withTitle.args = {
  title: 'Phone',
  text: 'Call',
  link: 'tel:+982122336655',
};

export const withTitleAndLongText = Template.bind({});

withTitleAndLongText.args = {
  title: 'Address',
  text: 'Apt.17 Bldg 74, Dashtestane 6, Pasdaran St, Tehran, Iran',
};
