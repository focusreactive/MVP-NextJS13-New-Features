import Doc from './doc.mdx';

import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { title } = await parent;

  return {
    title: `${title?.absolute} - ${searchParams.id}`,
  };
}

const Page = () => {
  return (
    <div>
      <h2>Dynamic SSR (with segment)</h2>
      <p>{new Date().toLocaleTimeString()}</p>

      <Doc />
    </div>
  );
};

export default Page;
