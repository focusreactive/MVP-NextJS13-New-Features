import Doc from './doc.mdx';

export const metadata = {
  title: 'Doubled page',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <Doc />
    </div>
  );
};

export default Page;
