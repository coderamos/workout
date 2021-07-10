import { Map as MapIcon } from '@styled-icons/feather';

import LinkWrapper from 'components/LinkWrapper';
import { Container } from 'components/Container';

import WorkoutLogoText from 'assets/icons/WorkoutLogoText';

import * as s from './styles';

export type AboutTemplateProps = {
  heading: string;
  slug: string;
  companyAvatar?: string;
  companyName: string;
  companyDescription: string;
  developerAvatar?: string;
  developerName: string;
  developerDescription: string;
};

const AboutTemplate = () => (
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
          <s.ProfileCardWrapper>
            <s.PictureWrapper src="https://avatars.githubusercontent.com/u/38539443?v=4" />
            <s.ProfileName>workout</s.ProfileName>
            <s.ProfileDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              dolorum?
            </s.ProfileDescription>
          </s.ProfileCardWrapper>
          <s.ProfileCardWrapper>
            <s.PictureWrapper src="https://avatars.githubusercontent.com/u/38539443?v=4" />
            <s.ProfileName>diego silva</s.ProfileName>
            <s.ProfileDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              architecto odit dignissimos corrupti, consequuntur ut nemo nostrum
              dicta accusamus est.
            </s.ProfileDescription>
          </s.ProfileCardWrapper>
        </s.BodyWrapper>
      </s.Content>
    </Container>
  </s.Wrapper>
);

export default AboutTemplate;
