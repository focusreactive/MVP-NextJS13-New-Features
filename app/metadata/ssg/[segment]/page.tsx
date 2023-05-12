import Doc from './doc.mdx';

import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { segment: string };
};

export async function generateStaticParams() {
  return [{ segment: 'page-1' }, { segment: 'page-2' }, { segment: 'page-3' }];
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { title } = await parent;

  return {
    title: `${title?.absolute} - ${params.segment}`,
  };
}

const Page = () => {
  return (
    <div>
      <h2>Dynamic SSG (with segment)</h2>
      <p>{new Date().toLocaleTimeString()}</p>

      <Doc />
    </div>
  );
};

export default Page;
