import Doc from './doc.mdx';

export const metadata = {
  title: 'Parallel only page',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <Doc />
    </div>
  );
};

export default Page;
