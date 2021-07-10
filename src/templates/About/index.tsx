import { Map as MapIcon } from '@styled-icons/feather';

import LinkWrapper from 'components/LinkWrapper';
import { Container } from 'components/Container';

import WorkoutLogoText from 'assets/icons/WorkoutLogoText';

import * as s from './styles';

export type CreatorProps = {
  name: string;
  avatar: string;
  description: string;
};

export type AboutTemplateProps = {
  creators: [
    {
      heading: string;
      slug: string;
      companyAvatar?: string;
      companyName: string;
      companyDescription: string;
      developerAvatar?: string;
      developerName: string;
      developerDescription: string;
    }
  ];
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
        <s.HeaderText>{creators[0].heading}</s.HeaderText>
      </s.HeaderWrapper>
      <Container>
        <s.Content>
          <s.BodyWrapper>
            <s.ProfileCardWrapper>
              <s.PictureWrapper src="https://avatars.githubusercontent.com/u/38539443?v=4" />
              <s.ProfileName>{creators[0].companyName}</s.ProfileName>
              <s.ProfileDescription>
                {creators[0].companyDescription}
              </s.ProfileDescription>
            </s.ProfileCardWrapper>
            <s.ProfileCardWrapper>
              <s.PictureWrapper src="https://avatars.githubusercontent.com/u/38539443?v=4" />
              <s.ProfileName>{creators[0].developerName}</s.ProfileName>
              <s.ProfileDescription>
                {creators[0].developerDescription}
              </s.ProfileDescription>
            </s.ProfileCardWrapper>
          </s.BodyWrapper>
        </s.Content>
      </Container>
    </s.Wrapper>
  );
};

export default AboutTemplate;
