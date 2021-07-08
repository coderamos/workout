import LinkWrapper from 'components/LinkWrapper';

import { Map as MapIcon } from '@styled-icons/feather';

import * as s from './styles';

export type AboutTemplateProps = {
  children: React.ReactNode;
};

const AboutTemplate = ({ children }: AboutTemplateProps) => (
  <s.Wrapper>
    <LinkWrapper href="/">
      <MapIcon size={32} aria-label="about" />
    </LinkWrapper>
    <s.Content>{children}</s.Content>
  </s.Wrapper>
);

export default AboutTemplate;
