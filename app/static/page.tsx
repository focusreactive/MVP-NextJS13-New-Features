import Doc from './doc.mdx';

import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props) {
  console.log({ params, searchParams });

  return {
    title: searchParams.wow || 'string',
  };
}

const Page = () => {
  return <Doc />;
};

export default Page;
