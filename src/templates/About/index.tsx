import { Map as MapIcon } from '@styled-icons/feather';

import LinkWrapper from 'components/LinkWrapper';
import { Container } from 'components/Container';

import WorkoutLogoText from 'assets/icons/WorkoutLogoText';

import * as s from './styles';

export type CreatorProps = {
  name: string;
  avatar?: string;
  description: string;
};

export type AboutTemplateProps = {
  creators: CreatorProps[];
};

const AboutTemplate = ({ creators }: AboutTemplateProps) => {
  return (
    <s.Wrapper>
      <LinkWrapper href="/">
        <MapIcon size={32} aria-label="about" />
      </LinkWrapper>
      <s.HeaderWrapper>
        <s.HeaderLogoWrapper>
          <WorkoutLogoText />
        </s.HeaderLogoWrapper>
        <s.HeaderText>about</s.HeaderText>
      </s.HeaderWrapper>
      <Container>
        <s.Content>
          <s.BodyWrapper>
            {creators.length > 0 &&
              creators.map(creator => (
                <s.ProfileCardWrapper key={creator.name}>
                  <s.PictureWrapper src="https://avatars.githubusercontent.com/u/38539443?v=4" />
                  <s.ProfileName>{creator.name}</s.ProfileName>
                  <s.ProfileDescription>
                    {creator.description}
                  </s.ProfileDescription>
                </s.ProfileCardWrapper>
              ))}
          </s.BodyWrapper>
        </s.Content>
      </Container>
    </s.Wrapper>
  );
};

export default AboutTemplate;
