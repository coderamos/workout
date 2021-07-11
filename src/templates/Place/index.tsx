import { Map as MapIcon } from '@styled-icons/feather';

import LinkWrapper from 'components/LinkWrapper';
import { Container } from 'components/Container';

import WorkoutLogoText from 'assets/icons/WorkoutLogoText';

import { formatDate } from 'utils/date';

import * as s from './styles';

export type StackProps = {
  name: string;
  openPositions: string;
  annualAverageSalary: string;
};

export type ImageProps = {
  url: string;
  height: number;
  width: number;
  imageDescription: string;
};

export type PlaceTemplateProps = {
  date: string;
  name: string;
  description: string;
  population: string;
  averageSalary: string;
  stacks: StackProps[];
  gallery: ImageProps[];
};

const PlaceTemplate = ({
  date,
  name,
  description,
  population,
  averageSalary,
  stacks,
  gallery
}: PlaceTemplateProps) => {
  const formattedDate = formatDate(date, 'pt-BR');

  return (
    <s.Wrapper>
      <Container>
        <s.HeaderWrapper>
          <s.HeaderLogoWrapper>
            <WorkoutLogoText />
          </s.HeaderLogoWrapper>
          <s.HeaderText>{name.split(',')[0]}</s.HeaderText>
          <LinkWrapper href="/">
            <MapIcon size={32} aria-label="about" />
          </LinkWrapper>
        </s.HeaderWrapper>
      </Container>

      <s.Content>
        <s.BodyWrapper>
          <Container>
            <s.Date>{formattedDate}</s.Date>
            <s.PlaceName>{name}</s.PlaceName>
            <s.PlaceDescription>{description}</s.PlaceDescription>
            <s.SectionTitle>População</s.SectionTitle>
            <s.SectionContent>{population}</s.SectionContent>
            <s.SectionTitle>MÉDIA SALARIAL</s.SectionTitle>
            <s.SectionContent>{averageSalary}</s.SectionContent>
            <s.SectionTitle>OPORTUNIDADES</s.SectionTitle>
            {stacks.length > 0 &&
              stacks.map(stack => (
                <s.StackCardWrapper key={stack.name}>
                  <s.StackName>{stack.name}</s.StackName>
                  <s.OpenPositionsWrapper>
                    <s.OpenPositionsText>VAGAS ABERTAS</s.OpenPositionsText>
                    <s.OpenPositionsValue>
                      {stack.openPositions}
                    </s.OpenPositionsValue>
                  </s.OpenPositionsWrapper>
                  <s.AnnualAverageSallaryWrapper>
                    <s.AnnualAverageSallaryText>
                      SALÁRIO MÉDIO ANUAL
                    </s.AnnualAverageSallaryText>
                    <s.AnnualAverageSallaryValue>
                      {stack.annualAverageSalary}
                    </s.AnnualAverageSallaryValue>
                  </s.AnnualAverageSallaryWrapper>
                </s.StackCardWrapper>
              ))}
            <s.SectionTitle>GALERIA</s.SectionTitle>
            <s.GalleryWrapper>
              {gallery.length > 0 &&
                gallery.map(image => (
                  <s.ImageWrapper key={image.url}>
                    <s.Image src={image.url} alt={image.imageDescription} />
                    <s.ImageDescriptionWrapper>
                      <s.ImageDescription>
                        {image.imageDescription}
                      </s.ImageDescription>
                    </s.ImageDescriptionWrapper>
                  </s.ImageWrapper>
                ))}
            </s.GalleryWrapper>
          </Container>
        </s.BodyWrapper>
      </s.Content>
    </s.Wrapper>
  );
};

export default PlaceTemplate;
