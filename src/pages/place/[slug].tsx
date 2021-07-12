import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import client from 'graphql/client';
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries';

import PlaceTemplate, { PlaceTemplateProps } from 'templates/Place';
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql';

export default function Page({
  date,
  name,
  description,
  population,
  averageSalary,
  stacks,
  gallery
}: PlaceTemplateProps) {
  const router = useRouter();
  if (router.isFallback) return null;

  return (
    <PlaceTemplate
      date={date}
      name={name}
      description={description}
      population={population}
      averageSalary={averageSalary}
      stacks={stacks}
      gallery={gallery}
    />
  );
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  });

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  if (!place) return { notFound: true };

  return {
    revalidate: 5,
    props: {
      date: place.date,
      name: place.name,
      description: place.description,
      population: place.population,
      averageSalary: place.averageSalary,
      stacks: place.stacks,
      gallery: place.gallery
    }
  };
};
