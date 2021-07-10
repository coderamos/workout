import { Map as MapIcon } from '@styled-icons/feather';

import LinkWrapper from 'components/LinkWrapper';
import { Container } from 'components/Container';

import WorkoutLogoText from 'assets/icons/WorkoutLogoText';

import * as s from './styles';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <s.Wrapper>
    <LinkWrapper href="/">
      <MapIcon size={32} aria-label="about" />
    </LinkWrapper>
    <s.HeaderWrapper>
      <s.HeaderLogoWrapper>
        <WorkoutLogoText />
      </s.HeaderLogoWrapper>
      <s.HeaderText>{heading}</s.HeaderText>
    </s.HeaderWrapper>

    <Container>
      <s.Content>
        <s.BodyWrapper>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </s.BodyWrapper>
      </s.Content>
    </Container>
  </s.Wrapper>
);

export default PageTemplate;
