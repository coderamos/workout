import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import client from 'graphql/client';
import { GET_CREATORS } from 'graphql/queries';

import AboutTemplate, { AboutTemplateProps } from 'templates/About';

export default function AboutPage({
  heading,
  slug,
  companyName,
  companyDescription,
  developerName,
  developerDescription
}: AboutTemplateProps) {
  const router = useRouter();
  if (router.isFallback) return null;

  return (
    <AboutTemplate
      heading={heading}
      slug={slug}
      companyName={companyName}
      companyDescription={companyDescription}
      developerName={developerName}
      developerDescription={developerDescription}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { creators } = await client.request(GET_CREATORS);
  console.log(creators);
  if (!creators) return { notFound: true };

  return {
    props: {
      // heading: creators.heading
      // slug: creators.slug,
      // companyName: creators.companyName
      // companyDescription: creators.companyDescription,
      // developerName: creators.developerName,
      // developerDescription: creators.developerDescription
    }
  };
};
