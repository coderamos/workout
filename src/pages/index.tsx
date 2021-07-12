import { GetStaticProps } from 'next';

import client from 'graphql/client';
import { GET_PLACES } from 'graphql/queries';
import { GetPlacesQuery } from 'graphql/generated/graphql';

import HomeTemplate, { HomeTemplateProps } from 'templates/Home';

export default function Home({ places }: HomeTemplateProps) {
  return <HomeTemplate places={places} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    revalidate: 5,
    props: {
      places
    }
  };
};
