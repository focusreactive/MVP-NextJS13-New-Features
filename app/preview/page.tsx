import NavLink from '@/components/NavLink/NavLink';
import { draftMode } from 'next/headers';

import Doc from './doc.mdx';

const Page = () => {
  const { isEnabled } = draftMode();

  return (
    <div className={'content-container'}>
      <h1>Preview URL aka Draft Mode</h1>

      <p>
        <NavLink
          href={
            'https://nextjs.org/docs/app/building-your-application/configuring/draft-mode'
          }
        >
          Docs
        </NavLink>
      </p>

      <p>
        This page is <u>{isEnabled ? 'dynamic' : 'static'}</u>{' '}
        {new Date().toLocaleTimeString()}
      </p>

      <div>
        <NavLink href={'/api/enable-draft'}>Enable</NavLink> |{' '}
        <NavLink href={'/api/disable-draft'}>Disable</NavLink>
      </div>

      <br />

      <Doc />
    </div>
  );
};

export default Page;
