import Link from 'next/link';

import Doc from './doc.mdx';

import type { Metadata } from 'next';

const Page = () => {
  return (
    <div>
      <Doc />
    </div>
  );
};

export default Page;
