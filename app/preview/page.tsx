import Link from 'next/link';
import { draftMode } from 'next/headers';

import Doc from './doc.mdx';

const Page = () => {
  const { isEnabled } = draftMode();

  return (
    <div className={'content-container'}>
      <h1>Preview URL aka Draft Mode</h1>

      <p>
        <Link
          href={
            'https://nextjs.org/docs/app/building-your-application/configuring/draft-mode'
          }
        >
          Docs
        </Link>
      </p>

      <p>
        This page is <u>{isEnabled ? 'dynamic' : 'static'}</u>{' '}
        {new Date().toLocaleTimeString()}
      </p>

      <div>
        <Link href={'/api/enable-draft'}>Enable</Link> |{' '}
        <Link href={'/api/disable-draft'}>Disable</Link>
      </div>

      <br />

      <Doc />
    </div>
  );
};

export default Page;
