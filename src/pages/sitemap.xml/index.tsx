import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

import client from 'graphql/client';
import { GetPlacesQuery } from 'graphql/generated/graphql';
import { GET_PLACES } from 'graphql/queries';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  const fields = places.map(({ slug }) => ({
    loc: `https://workout-tech.vercel.app/place/${slug}`,
    lastmod: new Date().toISOString()
  }));

  fields.push(
    {
      loc: `https://workout-tech.vercel.app/`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `https://workout-tech.vercel.app/about`,
      lastmod: new Date().toISOString()
    }
  );

  return getServerSideSitemap(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {};
