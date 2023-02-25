import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from '.';

export default {
  title: 'common/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <div className="px-0 mx-0">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

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
