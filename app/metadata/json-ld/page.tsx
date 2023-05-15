import Link from 'next/link';

import { api } from '@/utils/api';
import Doc from './doc.mdx';

type Props = {
  searchParams: { [key: string]: string | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const id = searchParams.id || '1';
  const [post] = await api.post(id);
  const [user] = await api.user(post.userId);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: `/api/user-image?id=${user.id}`,
    publisher: user.name,
    datePublished: new Date().toISOString(),
    articleBody: post.body,
    author: {
      '@type': 'Person',
      name: user.name,
    },
  };

  return (
    <div>
      <hr />

      <h2>JSON-LD</h2>

      <p>
        <Link
          target={'_blank'}
          href={
            'https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld'
          }
        >
          Docs
        </Link>

        <br />
        <br />

        <Link
          target={'_blank'}
          href={
            'https://search.google.com/test/rich-results/result?id=LwwUAn_7102goJI6rI30yg '
          }
        >
          This page in Google Reach Results
        </Link>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </article>

      <Doc />
    </div>
  );
};

export default Page;
