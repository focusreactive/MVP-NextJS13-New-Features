import Parent from '../parent.mdx';
import Doc from './doc.mdx';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Children Title',
};

const Page = () => {
  return (
    <div>
      <h3>Template in metadata title</h3>

      <div>
        <p>
          <b>Key takeaways:</b>
        </p>

        <ul>
          <li>
            Applies only to children segments (layout -&gt; page on the same
            level won't work)
          </li>
          <li>Won't work if children segment doesn't have `title`</li>
        </ul>
      </div>

      <Parent />
      <br />
      <Doc />
    </div>
  );
};

export default Page;
