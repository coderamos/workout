import { Story, Meta } from '@storybook/react/types-6-0';

import { Info } from '@styled-icons/feather';

import LinkWrapper, { LinkWrapperProps } from '.';

export default {
  title: 'Design System/LinkWrapper',
  component: LinkWrapper,
  parameters: {
    jest: ['LinkWrapper.test.tsx']
  }
} as Meta;

export const LinkWrapperExample: Story<LinkWrapperProps> = args => (
  <LinkWrapper {...args} href="/">
    <Info />
  </LinkWrapper>
);
