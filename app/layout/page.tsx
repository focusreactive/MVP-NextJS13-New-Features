import Doc from './doc.mdx';

export const metadata = {
  title: 'Layout page',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <main className="blog">
        <Doc />
      </main>
    </div>
  );
};

export default Page;
