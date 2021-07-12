import { NextSeo } from 'next-seo';

import dynamic from 'next/dynamic';

import { Info as InfoIcon } from '@styled-icons/feather';

import BaseTemplate from 'templates/Base';
import LinkWrapper from 'components/LinkWrapper';
import { PlaceProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export type HomeTemplateProps = {
  places: PlaceProps[];
};

const Home = ({ places }: HomeTemplateProps) => {
  return (
    <>
      <NextSeo
        title="Workout"
        description="The best places to work with technology"
        canonical="https://workout-tech.vercel.app/"
        openGraph={{
          url: 'https://workout-tech.vercel.app/',
          title: 'Workout',
          description: 'The best places to work with technology',
          images: [
            {
              url: 'https://workout-tech.vercel.app/img/cover.png',
              width: 3034,
              height: 1954,
              alt: 'Workout'
            }
          ]
        }}
      />
      <BaseTemplate>
        <LinkWrapper href="/about" isFloat>
          <InfoIcon size={32} aria-label="about" />
        </LinkWrapper>
        <Map places={places} />
      </BaseTemplate>
    </>
  );
};

export default Home;
