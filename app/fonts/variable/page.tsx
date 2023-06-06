import { Lobster } from 'next/font/google';

import Doc from './doc.mdx';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lobster',
});

const Page = () => {
  return (
    <div className={lobster.variable}>
      <div style={{ fontFamily: 'var(--font-lobster)' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar dui
        eget augue lacinia, sed feugiat lorem sodales.
      </div>

      <br />

      <Doc />
    </div>
  );
};

export default Page;
