import Link from 'next/link';

import Doc from './doc.mdx';

const Page = () => {
  return (
    <div>
      <hr />

      <h2>Sitemap</h2>

      <p>
        <Link
          target={'_blank'}
          href={
            'https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap'
          }
        >
          Docs
        </Link>

        <br />
        <br />

        <Link target={'_blank'} href={'/sitemap.xml'}>
          Generated
        </Link>
      </p>

      <Doc />
    </div>
  );
};

export default Page;
