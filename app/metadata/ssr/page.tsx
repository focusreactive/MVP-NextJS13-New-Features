import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dynamic SSR',
};

const Page = () => {
  return (
    <div>
      <h2>Dynamic SSR</h2>
    </div>
  );
};

export default Page;
