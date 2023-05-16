import Link from 'next/link';

import Doc from './doc.mdx';

const Page = () => {
  return (
    <div>
      <hr />

      <h2>Robots</h2>

      <p>
        <Link
          target={'_blank'}
          href={
            'https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots'
          }
        >
          Docs
        </Link>

        <br />
        <br />

        <Link target={'_blank'} href={'/robots.txt'}>
          Generated
        </Link>

        <br />
        <br />

        <Link
          target={'_blank'}
          href={
            'https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots'
          }
        >
          Can be defined in config based metadata
        </Link>
      </p>

      <Doc />
    </div>
  );
};

export default Page;
