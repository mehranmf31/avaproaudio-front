import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'common/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div className="px-0 mx-0">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  navLinks: [
    { name: 'Products', url: '/' },
    { name: 'Projects', url: '/' },
    { name: 'Blog', url: '/' },
    { name: 'Contact', url: '/' },
  ],
  locales: [
    { language: 'en', label: 'en', isActive: true },
    { language: 'fa', label: 'فا', isActive: false },
  ],
  locale: 'en',
};
