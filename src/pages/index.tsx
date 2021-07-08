import dynamic from 'next/dynamic';

import { Info as InfoIcon } from '@styled-icons/feather';

import BaseTemplate from 'templates/Base';
import LinkWrapper from 'components/LinkWrapper';

const Map = dynamic(() => import('components/Map'), { ssr: false });

const Home = () => {
  const places = [
    {
      id: '1',
      name: 'Brisbane',
      slug: 'brisbane',
      location: {
        latitude: -27.470125,
        longitude: 153.021072
      }
    },
    {
      id: '2',
      name: 'Adelaide',
      slug: 'adelaide',
      location: {
        latitude: -34.92123,
        longitude: 138.599503
      }
    }
  ];
  return (
    <BaseTemplate>
      <LinkWrapper href="/about">
        <InfoIcon size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </BaseTemplate>
  );
};

export default Home;
