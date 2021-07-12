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
    <BaseTemplate>
      <LinkWrapper href="/about" isFloat>
        <InfoIcon size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </BaseTemplate>
  );
};

export default Home;
