import Doc from './doc.mdx';

export const metadata = {
  title: 'Simple',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <Doc />
    </div>
  );
};

export default Page;
