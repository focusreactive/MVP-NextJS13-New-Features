import Doc from './doc.mdx';

export const metadata = {
  title: 'Page metadata',
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
