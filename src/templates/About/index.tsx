import { Map as MapIcon } from '@styled-icons/feather';

import LinkWrapper from 'components/LinkWrapper';
import { Container } from 'components/Container';

import WorkoutLogoText from 'assets/icons/WorkoutLogoText';

import * as s from './styles';

export type ImageProps = {
  url: string;
  width: number;
  height: number;
};

export type CreatorProps = {
  name: string;
  avatar: ImageProps;
  description: string;
};

export type AboutTemplateProps = {
  creators: CreatorProps[];
};

const AboutTemplate = ({ creators }: AboutTemplateProps) => {
  return (
    <s.Wrapper>
      <Container>
        <s.HeaderWrapper>
          <s.HeaderLogoWrapper>
            <WorkoutLogoText />
          </s.HeaderLogoWrapper>
          <s.HeaderText>about</s.HeaderText>
          <LinkWrapper href="/">
            <MapIcon size={32} aria-label="about" />
          </LinkWrapper>
        </s.HeaderWrapper>
      </Container>
      <Container>
        <s.Content>
          <s.BodyWrapper>
            {creators.length > 0 &&
              creators.map(creator => (
                <s.ProfileCardWrapper key={creator.name}>
                  {creator.avatar && (
                    <s.PictureWrapper src={creator.avatar.url} />
                  )}
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
