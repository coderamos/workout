import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import client from 'graphql/client';
import { GET_CREATORS } from 'graphql/queries';

import AboutTemplate, { AboutTemplateProps } from 'templates/About';
import { GetCreatorsQuery } from 'graphql/generated/graphql';

export default function AboutPage({ creators }: AboutTemplateProps) {
  const router = useRouter();
  if (router.isFallback) return null;

  return <AboutTemplate creators={creators} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { creators } = await client.request<GetCreatorsQuery>(GET_CREATORS);
  if (!creators) return { notFound: true };

  return {
    props: {
      creators: creators
    }
  };
};
