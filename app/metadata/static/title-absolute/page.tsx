import Parent from '../parent.mdx';
import Doc from './doc.mdx';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Ignore template',
  },
};

const Page = () => {
  return (
    <div>
      <h3>Ignores parent template</h3>

      <Parent />
      <br />
      <Doc />
    </div>
  );
};

export default Page;
