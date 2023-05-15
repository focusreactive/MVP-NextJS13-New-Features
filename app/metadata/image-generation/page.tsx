import Link from 'next/link';

import Doc from './doc.mdx';
import { api } from '@/utils/api';

import type { Metadata } from 'next';

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const id = searchParams?.id || '1';
  const [user] = await api.user(id);

  return {
    openGraph: {
      title: user.name,
      images: [`/api/user-image?id=${id}`],
    },
  };
}

const Page = ({ searchParams }: Props) => {
  const id = searchParams?.id || '1';

  return (
    <div>
      <hr />

      <h2>Dynamic Image Generation</h2>

      <p>
        <Link
          target={'_blank'}
          href={
            'https://nextjs.org/docs/app/api-reference/functions/image-response'
          }
        >
          Docs
        </Link>

        <br />
        <br />

        <Link
          target={'_blank'}
          href={
            'https://www.opengraph.xyz/url/https%3A%2F%2Fnextjs13-mvp.vercel.app%2Fmetadata%2Fimage-generation%3Fid%3D1 '
          }
        >
          Open Graph meta tags preview
        </Link>
      </p>

      <section>
        <Link href={`/api/user-image?id=${id}`} target={'_blank'}>
          <img
            src={`/api/user-image?id=${id}`}
            alt=""
            style={{ border: '1px solid black' }}
          />
        </Link>
      </section>

      <Doc />
    </div>
  );
};

export default Page;
