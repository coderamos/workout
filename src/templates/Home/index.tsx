import dynamic from 'next/dynamic';

import BaseTemplate from 'templates/Base';

const Map = dynamic(() => import('components/Map'), { ssr: false });

const Home = () => (
  <BaseTemplate>
    <Map />
  </BaseTemplate>
);

export default Home;
