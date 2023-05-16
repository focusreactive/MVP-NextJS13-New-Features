import Doc from './doc.mdx';

export const metadata = {
  title: 'Layout page',
};

const Page = () => {
  return (
    <div>
      <main className="blog">
        <Doc />
      </main>
    </div>
  );
};

export default Page;
