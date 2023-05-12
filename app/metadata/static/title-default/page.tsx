import Parent from '../parent.mdx';
import Doc from './doc.mdx';

import type { Metadata } from 'next';

export const metadata: Metadata = {};

const Page = () => {
  return (
    <div>
      <h3>Without title</h3>

      <Parent />
      <br />
      <Doc />
    </div>
  );
};

export default Page;
