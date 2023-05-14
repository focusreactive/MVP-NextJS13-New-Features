import Doc from './doc.mdx';

export const metadata = {
  title: 'Static page',
};

const Page = () => {
  return (
    <div className="blog">
      <Doc />
    </div>
  );
};

export default Page;
