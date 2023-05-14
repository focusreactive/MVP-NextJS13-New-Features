import Doc from './doc.mdx';

export const metadata = {
  title: 'No cache page',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <Doc />
    </div>
  );
};

export default Page;
